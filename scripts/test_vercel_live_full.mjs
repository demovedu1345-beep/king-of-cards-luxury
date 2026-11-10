import { spawn } from 'child_process';
import fs from 'fs';
import WebSocket from 'ws';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const userDataDir = 'C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\chrome_live_full_test';
fs.mkdirSync(userDataDir, { recursive: true });
const shotDir = 'C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\vercel_final_shots';
fs.mkdirSync(shotDir, { recursive: true });

console.log('=== ENDPOINT CHECK ===');
for (const u of [
  'https://kingsofcards.vercel.app/',
  'https://kingsofcards.vercel.app/favicon.ico',
  'https://kingsofcards.vercel.app/floema/',
  'https://kingsofcards.vercel.app/assets/angraity-experience.css',
  'https://demovedu1345-beep.github.io/king-of-cards-luxury/',
  'http://localhost:4173/'
]) {
  const r = await fetch(u, { cache: 'no-store' });
  let extra = '';
  if (u.endsWith('angraity-experience.css')) {
    const txt = await r.text();
    extra = ' footer-royal-scroll-img=' + txt.includes('footer-royal-scroll-img');
  }
  console.log(u, '->', r.status + extra);
}

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9244',
  '--remote-allow-origins=*',
  `--user-data-dir=${userDataDir}`,
  '--window-size=1440,900',
  'about:blank'
], { stdio: 'ignore' });

await delay(2000);
const targets = await (await fetch('http://127.0.0.1:9244/json')).json();
const pageTarget = targets.find((t) => t.type === 'page') || targets[0];
const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
await new Promise((r) => ws.once('open', r));

let idCounter = 1;
const pending = new Map();
const logs = { netFailed: [], httpErr: [], consoleErr: [], exceptions: [] };
const reqUrls = new Map();

ws.on('message', (raw) => {
  const msg = JSON.parse(raw.toString());
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  } else if (msg.method === 'Network.requestWillBeSent') {
    reqUrls.set(msg.params.requestId, msg.params.request.url);
  } else if (msg.method === 'Network.loadingFailed') {
    if (msg.params.errorText !== 'net::ERR_ABORTED') {
      logs.netFailed.push({ url: reqUrls.get(msg.params.requestId), err: msg.params.errorText });
    }
  } else if (msg.method === 'Network.responseReceived') {
    if (msg.params.response.status >= 400) {
      logs.httpErr.push({ url: msg.params.response.url, status: msg.params.response.status });
    }
  } else if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
    logs.consoleErr.push(msg.params.args.map((a) => a.value || a.description).join(' '));
  } else if (msg.method === 'Runtime.exceptionThrown') {
    logs.exceptions.push(msg.params.exceptionDetails?.exception?.description || msg.params.exceptionDetails?.text);
  }
});

const send = (method, params = {}) =>
  new Promise((resolve) => {
    const id = idCounter++;
    pending.set(id, resolve);
    ws.send(JSON.stringify({ id, method, params }));
  });

await send('Network.enable');
await send('Runtime.enable');
await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: 'https://kingsofcards.vercel.app/' });
await delay(5000);

fs.writeFileSync(`${shotDir}\\live_hero_1440.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));

const desktopCheck = await send('Runtime.evaluate', {
  expression: `(() => {
    const imgs = [...document.querySelectorAll('img')];
    const broken = imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src'));
    const fTitle = document.querySelector('.footer-section h1')?.getBoundingClientRect().toJSON();
    const fDrink = document.querySelector('.footer-royal-scroll-img')?.getBoundingClientRect().toJSON();
    const panImg = document.querySelector('.ang-hero-panoramic-wrap img');
    if (panImg) panImg.click();
    const drawerOpen = document.getElementById('drawerBackdrop')?.classList.contains('active');
    const smootherPaused = window.__spyltSmootherInstance?.paused?.();
    if (window.closeDrawer) window.closeDrawer();
    const smootherResumed = !window.__spyltSmootherInstance?.paused?.();
    return {
      totalImgs: imgs.length,
      loadedImgs: imgs.length - broken.length,
      broken,
      htmlOv: getComputedStyle(document.documentElement).overflowX,
      bodyOv: getComputedStyle(document.body).overflowX,
      smootherOk: !!window.__spyltSmootherInstance,
      normalizeScrollOn: !!window.__spyltSmootherInstance?.normalizer,
      footerTitleVsDrink: { fTitle, fDrink },
      panClickDrawer: { drawerOpen, smootherPaused, smootherResumed },
      fonts: [...document.fonts].map(f => f.family + ':' + f.status)
    };
  })()`,
  returnByValue: true
});
console.log('=== LIVE VERCEL DESKTOP 1440 ===');
console.log(JSON.stringify(desktopCheck.result?.result?.value, null, 2));

await send('Runtime.evaluate', {
  expression: `(() => {
    window.__rafDeltas = [];
    let last = performance.now();
    window.__rafActive = true;
    function tick(now) {
      window.__rafDeltas.push(Math.round((now - last) * 10) / 10);
      last = now;
      if (window.__rafActive) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  })()`
});
for (let i = 0; i < 15; i++) {
  await send('Input.dispatchMouseEvent', { type: 'mouseWheel', x: 720, y: 450, deltaX: 0, deltaY: 220 });
  await delay(65);
}
await delay(1000);
const wheelStats = await send('Runtime.evaluate', {
  expression: `(() => {
    window.__rafActive = false;
    const d = (window.__rafDeltas || []).slice(2);
    const smoother = window.__spyltSmootherInstance;
    return {
      rafCount: d.length,
      avgMs: d.length ? Math.round((d.reduce((a,b)=>a+b,0)/d.length)*10)/10 : 0,
      maxMs: d.length ? Math.max(...d) : 0,
      over33: d.filter(x => x > 33).length,
      scrollTop: smoother ? Math.round(smoother.scrollTop()) : null
    };
  })()`,
  returnByValue: true
});
console.log('=== LIVE VERCEL WHEEL FPS ===', JSON.stringify(wheelStats.result?.result?.value));

await send('Runtime.evaluate', {
  expression: `(() => {
    const s = window.__spyltSmootherInstance;
    const f = document.querySelector('.footer-section');
    if (s && f) s.scrollTo(f, false, 'top top');
  })()`
});
await delay(800);
fs.writeFileSync(`${shotDir}\\live_footer_1440.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));

// Live Mobile 390 with Touch Emulation (full smoother + horizontal scroll + all effects)
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
await send('Page.navigate', { url: 'https://kingsofcards.vercel.app/' });
await delay(4500);
fs.writeFileSync(`${shotDir}\\live_hero_390.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));
const mobStats = await send('Runtime.evaluate', {
  expression: `(() => {
    const nav = document.querySelector('nav img[alt="nav-logo"]')?.getBoundingClientRect().toJSON();
    const hdr = document.getElementById('angHeader')?.getBoundingClientRect().toJSON();
    const flavorsEl = document.querySelector('.flavors');
    const secTop = (sel) => {
      const el = document.querySelector(sel);
      return el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : null;
    };
    return {
      logoHeaderOverlap: nav && hdr ? nav.right > hdr.left : false,
      duplicatePanOnMobile: !!document.querySelector('.ang-hero-panoramic-wrap'),
      horizOverflow: document.documentElement.scrollWidth > window.innerWidth,
      smoothTouch: window.__spyltSmootherInstance?.vars?.smoothTouch,
      flavorsRowDir: flavorsEl ? getComputedStyle(flavorsEl).flexDirection : null,
      flavorsWidth: flavorsEl ? flavorsEl.scrollWidth : 0,
      pinsCount: window.__spyltST ? window.__spyltST.getAll().filter(t => !!t.pin).length : 0,
      flavorTop: secTop('.flavor-section'),
      videoTop: secTop('.vd-pin-section'),
      testiTop: secTop('.testimonials-section')
    };
  })()`,
  returnByValue: true
});
const mv = mobStats.result?.result?.value || {};
console.log('=== LIVE VERCEL MOBILE 390 ===', JSON.stringify(mv));

await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${(mv.flavorTop || 1688) + 850})` });
await delay(900);
const mobFlavorTransform = await send('Runtime.evaluate', {
  expression: `getComputedStyle(document.querySelector('.flavor-section > div')).transform`,
  returnByValue: true
});
fs.writeFileSync(`${shotDir}\\live_mob_mid_flavor.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));

await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${(mv.videoTop || 7282) + 450})` });
await delay(900);
const mobVideoClip = await send('Runtime.evaluate', {
  expression: `getComputedStyle(document.querySelector('.vd-pin-section .video-box')).clipPath`,
  returnByValue: true
});
fs.writeFileSync(`${shotDir}\\live_mob_mid_video.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));

await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${(mv.testiTop || 9102) + 750})` });
await delay(900);
fs.writeFileSync(`${shotDir}\\live_mob_mid_testimonials.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));

console.log('=== LIVE MOBILE PIN EFFECTS ===', JSON.stringify({
  flavorHorizontalTransform: mobFlavorTransform.result?.result?.value,
  videoCircleClipMidPin: mobVideoClip.result?.result?.value
}));
await send('Emulation.setTouchEmulationEnabled', { enabled: false });

// Live Floema
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: 'https://kingsofcards.vercel.app/floema/' });
await delay(4500);
fs.writeFileSync(`${shotDir}\\live_floema_1440.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));
const floemaRes = await send('Runtime.evaluate', {
  expression: `(() => {
    const imgs = [...document.querySelectorAll('img')];
    const broken = imgs.filter(i => !i.complete || i.naturalWidth === 0).length;
    return {
      href: location.href,
      h1: document.querySelector('h1')?.innerText,
      totalImgs: imgs.length,
      loadedImgs: imgs.length - broken,
      firstImgW: document.querySelector('img')?.naturalWidth
    };
  })()`,
  returnByValue: true
});
console.log('=== LIVE VERCEL FLOEMA 1440 ===', JSON.stringify(floemaRes.result?.result?.value));
console.log('=== LIVE VERCEL ERRORS LOG ===', JSON.stringify(logs, null, 2));

ws.close();
chrome.kill();
