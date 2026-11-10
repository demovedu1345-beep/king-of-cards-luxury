import { spawn } from 'child_process';
import fs from 'fs';
import WebSocket from 'ws';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const userDataDir = 'C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\chrome_deep_probe';
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9239',
  '--remote-allow-origins=*',
  `--user-data-dir=${userDataDir}`,
  '--window-size=1440,900',
  'about:blank'
], { stdio: 'ignore' });

await delay(2000);
const targets = await (await fetch('http://127.0.0.1:9239/json')).json();
const pageTarget = targets.find((t) => t.type === 'page') || targets[0];
const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
await new Promise((r) => ws.once('open', r));

let idCounter = 1;
const pending = new Map();
const logs = { netFailed: [], httpErr: [], consoleErr: [], consoleWarn: [], exceptions: [] };
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
  } else if (msg.method === 'Runtime.consoleAPICalled') {
    const text = msg.params.args.map((a) => a.value || a.description).join(' ');
    if (msg.params.type === 'error') logs.consoleErr.push(text);
    if (msg.params.type === 'warning') logs.consoleWarn.push(text);
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

// 1. Inspect DOM, ScrollSmoother, ScrollTriggers, Fixed ancestors, Hero & Footer rects
const mainAudit = await send('Runtime.evaluate', {
  expression: `(() => {
    const smoother = window.__spyltSmootherInstance;
    const ST = window.__spyltST;
    const triggers = ST ? ST.getAll().map((t, i) => ({
      i,
      trigger: t.trigger ? (t.trigger.id || t.trigger.className) : null,
      start: Math.round(t.start),
      end: Math.round(t.end),
      pin: !!t.pin,
      scrub: t.vars?.scrub ?? false
    })) : [];

    // Check position:fixed elements inside transformed ancestors
    const fixedIssues = [];
    document.querySelectorAll('*').forEach(el => {
      const cs = getComputedStyle(el);
      if (cs.position === 'fixed') {
        let p = el.parentElement;
        while (p && p !== document.body) {
          const pcs = getComputedStyle(p);
          if (pcs.transform !== 'none' || pcs.filter !== 'none' || pcs.perspective !== 'none') {
            fixedIssues.push({ el: el.id || el.className || el.tagName, ancestor: p.id || p.className });
            break;
          }
          p = p.parentElement;
        }
      }
    });

    // Check overflow on html & body
    const htmlOv = { x: getComputedStyle(document.documentElement).overflowX, y: getComputedStyle(document.documentElement).overflowY };
    const bodyOv = { x: getComputedStyle(document.body).overflowX, y: getComputedStyle(document.body).overflowY };

    // Check hero floating cards & panoramic clickability & header overlap
    const headerRect = document.getElementById('angHeader')?.getBoundingClientRect();
    const bannerRect = document.getElementById('angHeroTopBanner')?.getBoundingClientRect();
    const logoRect = document.querySelector('nav img[alt="nav-logo"]')?.getBoundingClientRect();
    const heroBadges = [...document.querySelectorAll('.ang-hero-card-badge')].map(b => {
      const wrap = b.closest('.ang-hero-card-img-wrap')?.getBoundingClientRect();
      const br = b.getBoundingClientRect();
      return { text: b.textContent, clipped: wrap ? (br.right > wrap.right + 1 || br.width < b.scrollWidth - 1) : false, w: Math.round(br.width), scrollW: Math.round(b.scrollWidth) };
    });

    // Check footer heading & social overlap with footer-drink
    const fTitle = document.querySelector('.footer-section h1')?.getBoundingClientRect();
    const fDrink = document.querySelector('.footer-section img[src*="footer-drink"]')?.getBoundingClientRect();
    const fSocial = document.querySelector('.footer-section .social-btn')?.getBoundingClientRect();
    const fTitleZ = document.querySelector('.footer-section h1')?.parentElement ? getComputedStyle(document.querySelector('.footer-section h1').parentElement).zIndex : null;
    const fTitlePos = document.querySelector('.footer-section h1')?.parentElement ? getComputedStyle(document.querySelector('.footer-section h1').parentElement).position : null;

    // Check all videos
    const videos = [...document.querySelectorAll('video')].map(v => ({
      src: v.getAttribute('src'),
      readyState: v.readyState,
      networkState: v.networkState,
      error: v.error ? v.error.code : null,
      preload: v.getAttribute('preload')
    }));

    return {
      smootherActive: !!smoother,
      smoothVal: smoother ? smoother.smooth() : null,
      scrollH: document.documentElement.scrollHeight,
      bodyScrollH: document.body.scrollHeight,
      htmlOv,
      bodyOv,
      fixedIssues,
      triggers,
      headerRect,
      bannerRect,
      logoRect,
      heroBadges,
      footerOverlap: { fTitle, fDrink, fSocial, fTitleZ, fTitlePos },
      videos
    };
  })()`,
  returnByValue: true
});

console.log('=== MAIN AUDIT ===');
console.log(JSON.stringify(mainAudit.result?.result?.value, null, 2));

// 2. Test real mouse wheel scrolling + RAF frame timings
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
await delay(1200);

const wheelResult = await send('Runtime.evaluate', {
  expression: `(() => {
    window.__rafActive = false;
    const d = (window.__rafDeltas || []).slice(2);
    const maxD = d.length ? Math.max(...d) : 0;
    const over33 = d.filter(x => x > 33).length;
    const smoother = window.__spyltSmootherInstance;
    return {
      windowScrollY: Math.round(window.scrollY),
      smootherScrollTop: smoother ? Math.round(smoother.scrollTop()) : null,
      rafCount: d.length,
      maxFrameMs: maxD,
      jankFramesOver33ms: over33,
      smoothContentTransform: getComputedStyle(document.getElementById('smooth-content')).transform
    };
  })()`,
  returnByValue: true
});
console.log('=== WHEEL & SMOOTHER TEST ===');
console.log(JSON.stringify(wheelResult.result?.result?.value, null, 2));

// Scroll to end to verify all images load on full page scroll
await send('Runtime.evaluate', { expression: 'window.scrollTo(0, document.body.scrollHeight - 900);' });
await delay(2500);
const lateImgCheck = await send('Runtime.evaluate', {
  expression: `(() => {
    const imgs = [...document.querySelectorAll('img')];
    const broken = imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src'));
    return { totalImgs: imgs.length, broken };
  })()`,
  returnByValue: true
});
console.log('=== AFTER FULL SCROLL IMG CHECK ===');
console.log(JSON.stringify(lateImgCheck.result?.result?.value, null, 2));
console.log('=== MAIN LOGS ===');
console.log(JSON.stringify(logs, null, 2));

// 3. Audit /floema/ subroute
logs.netFailed = [];
logs.httpErr = [];
logs.consoleErr = [];
logs.consoleWarn = [];
logs.exceptions = [];
await send('Page.navigate', { url: 'https://kingsofcards.vercel.app/floema/' });
await delay(5000);

const floemaStats = await send('Runtime.evaluate', {
  expression: `(() => {
    const canvas = document.querySelector('canvas');
    const imgs = [...document.querySelectorAll('img')];
    const broken = imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src'));
    return {
      href: location.href,
      title: document.title,
      hasCanvas: !!canvas,
      canvasSize: canvas ? { w: canvas.width, h: canvas.height } : null,
      bodyLen: document.body.innerText.trim().length,
      totalImgs: imgs.length,
      brokenImgs: broken
    };
  })()`,
  returnByValue: true
});
const shotDir = 'C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\vercel_verified_shots';
fs.writeFileSync(`${shotDir}\\floema_live.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));
console.log('=== FLOEMA STATS ===');
console.log(JSON.stringify(floemaStats.result?.result?.value, null, 2));
console.log('=== FLOEMA LOGS ===');
console.log(JSON.stringify(logs, null, 2));

ws.close();
chrome.kill();
