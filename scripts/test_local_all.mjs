import { spawn } from 'child_process';
import fs from 'fs';
import WebSocket from 'ws';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const userDataDir = 'C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\chrome_local_full_test';
fs.mkdirSync(userDataDir, { recursive: true });
const shotDir = 'C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\local_audit_shots';
fs.mkdirSync(shotDir, { recursive: true });

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9243',
  '--remote-allow-origins=*',
  `--user-data-dir=${userDataDir}`,
  '--window-size=1440,900',
  'about:blank'
], { stdio: 'ignore' });

await delay(2000);
const targets = await (await fetch('http://127.0.0.1:9243/json')).json();
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
await send('Page.navigate', { url: 'http://localhost:4173/' });
await delay(4000);

fs.writeFileSync(`${shotDir}\\hero_1440.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));

const desktopCheck = await send('Runtime.evaluate', {
  expression: `(() => {
    const imgs = [...document.querySelectorAll('img')];
    const broken = imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src'));
    const fTitle = document.querySelector('.footer-section h1')?.getBoundingClientRect().toJSON();
    const fDrink = document.querySelector('.footer-royal-scroll-img')?.getBoundingClientRect().toJSON();
    const fSocial = document.querySelector('.footer-section .social-btn')?.getBoundingClientRect().toJSON();
    const vids = [...document.querySelectorAll('video')].map(v => ({ src: v.getAttribute('src'), preload: v.getAttribute('preload'), rs: v.readyState }));
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
      footerPos: { fTitle, fDrink, fSocial },
      panClickDrawer: { drawerOpen, smootherPaused, smootherResumed },
      vids
    };
  })()`,
  returnByValue: true
});
console.log('=== LOCAL DESKTOP 1440 ===');
console.log(JSON.stringify(desktopCheck.result?.result?.value, null, 2));

// Test real wheel scrolling + capture Footer
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
console.log('=== LOCAL WHEEL FPS ===', JSON.stringify(wheelStats.result?.result?.value));

// Smooth scroll to footer & runway & video sections
await send('Runtime.evaluate', {
  expression: `(() => {
    const s = window.__spyltSmootherInstance;
    const f = document.querySelector('.footer-section');
    if (s && f) s.scrollTo(f, false, 'top top');
  })()`
});
await delay(800);
fs.writeFileSync(`${shotDir}\\footer_1440.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));

// Test mobile 390x844
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
await send('Page.navigate', { url: 'http://localhost:4173/' });
await delay(4000);
fs.writeFileSync(`${shotDir}\\hero_390.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));
const mobStats = await send('Runtime.evaluate', {
  expression: `(() => {
    const nav = document.querySelector('nav img[alt="nav-logo"]')?.getBoundingClientRect().toJSON();
    const hdr = document.getElementById('angHeader')?.getBoundingClientRect().toJSON();
    const pan = document.querySelector('.ang-hero-panoramic-wrap');
    return {
      nav,
      hdr,
      logoHeaderOverlap: nav && hdr ? nav.right > hdr.left : false,
      duplicatePanOnMobile: !!pan,
      horizOverflow: document.documentElement.scrollWidth > window.innerWidth
    };
  })()`,
  returnByValue: true
});
console.log('=== LOCAL MOBILE 390 ===', JSON.stringify(mobStats.result?.result?.value, null, 2));

// Test /floema/ after compression
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: 'http://localhost:4173/floema/' });
await delay(3500);
fs.writeFileSync(`${shotDir}\\floema_1440.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));
const floemaRes = await send('Runtime.evaluate', {
  expression: `(() => {
    const imgs = [...document.querySelectorAll('img')];
    const broken = imgs.filter(i => !i.complete || i.naturalWidth === 0).length;
    const h1 = document.querySelector('h1');
    return {
      href: location.href,
      h1: h1?.innerText,
      totalImgs: imgs.length,
      loadedImgs: imgs.length - broken,
      firstImgW: document.querySelector('img')?.naturalWidth
    };
  })()`,
  returnByValue: true
});
console.log('=== LOCAL FLOEMA 1440 ===', JSON.stringify(floemaRes.result?.result?.value));
console.log('=== LOCAL ERRORS LOG ===', JSON.stringify(logs, null, 2));

ws.close();
chrome.kill();
