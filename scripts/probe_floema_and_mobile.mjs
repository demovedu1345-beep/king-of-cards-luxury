import { spawn } from 'child_process';
import fs from 'fs';
import WebSocket from 'ws';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const userDataDir = 'C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\chrome_probe2';
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9241',
  '--remote-allow-origins=*',
  `--user-data-dir=${userDataDir}`,
  '--window-size=1440,900',
  'about:blank'
], { stdio: 'ignore' });

await delay(2000);
const targets = await (await fetch('http://127.0.0.1:9241/json')).json();
const pageTarget = targets.find((t) => t.type === 'page') || targets[0];
const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
await new Promise((r) => ws.once('open', r));

let idCounter = 1;
const pending = new Map();
ws.on('message', (raw) => {
  const msg = JSON.parse(raw.toString());
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
});

const send = (method, params = {}) =>
  new Promise((resolve) => {
    const id = idCounter++;
    pending.set(id, resolve);
    ws.send(JSON.stringify({ id, method, params }));
  });

await send('Page.enable');
await send('Runtime.enable');
await send('Page.navigate', { url: 'https://kingsofcards.vercel.app/floema/' });
await delay(4500);

const floemaDom = await send('Runtime.evaluate', {
  expression: `(() => {
    const nuxt = document.getElementById('__nuxt');
    const scroller = nuxt?.firstElementChild;
    const intro = document.querySelector('[data-component="intro"]');
    const h1 = document.querySelector('h1');
    const page = document.querySelector('[data-component="page"]');
    const img0 = document.querySelector('img');
    const bodyChildren = [...document.body.children].map(c => ({
      tag: c.tagName, id: c.id, cls: c.className,
      opacity: getComputedStyle(c).opacity,
      display: getComputedStyle(c).display,
      vis: getComputedStyle(c).visibility,
      bg: getComputedStyle(c).backgroundColor,
      z: getComputedStyle(c).zIndex,
      rect: c.getBoundingClientRect().toJSON()
    }));
    return {
      href: location.href,
      path: location.pathname,
      bodyCls: document.body.className,
      bodyBg: getComputedStyle(document.body).backgroundColor,
      h1Text: h1?.innerText,
      h1Rect: h1?.getBoundingClientRect().toJSON(),
      h1Color: h1 ? getComputedStyle(h1).color : null,
      h1Op: h1 ? getComputedStyle(h1).opacity : null,
      pageOp: page ? getComputedStyle(page).opacity : null,
      firstImg: img0 ? { src: img0.src, cur: img0.currentSrc, comp: img0.complete, nw: img0.naturalWidth, rect: img0.getBoundingClientRect().toJSON() } : null,
      scrollerVis: scroller ? getComputedStyle(scroller).visibility : null,
      scrollerOp: scroller ? getComputedStyle(scroller).opacity : null,
      introRect: intro?.getBoundingClientRect().toJSON(),
      introOp: intro ? getComputedStyle(intro).opacity : null,
      bodyChildren
    };
  })()`,
  returnByValue: true
});
console.log('FLOEMA DOM:', JSON.stringify(floemaDom.result?.result?.value, null, 2));

// Test 1280px & 390px main site layout
const shotDir = 'C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\vercel_verified_shots';
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
await send('Page.navigate', { url: 'https://kingsofcards.vercel.app/' });
await delay(4500);
fs.writeFileSync(`${shotDir}\\mobile_hero_390.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));
const mobStats = await send('Runtime.evaluate', {
  expression: `(() => {
    const h = document.getElementById('angHeader')?.getBoundingClientRect();
    const l = document.querySelector('nav img[alt="nav-logo"]')?.getBoundingClientRect();
    const imgs = [...document.querySelectorAll('img')];
    return {
      mobHeader: h,
      mobLogo: l,
      horizOverflow: document.documentElement.scrollWidth > window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth
    };
  })()`,
  returnByValue: true
});
console.log('MOBILE 390:', JSON.stringify(mobStats.result?.result?.value, null, 2));

ws.close();
chrome.kill();
