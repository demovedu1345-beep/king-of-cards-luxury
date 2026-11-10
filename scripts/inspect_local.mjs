import { spawn } from 'child_process';
import fs from 'fs';
import WebSocket from 'ws';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

const userDataDir = `C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\chrome_local_check`;
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9236',
  '--remote-allow-origins=*',
  `--user-data-dir=${userDataDir}`,
  '--window-size=1440,900',
  'about:blank'
], { stdio: 'ignore' });

await delay(2000);
const res = await fetch('http://127.0.0.1:9236/json');
const targets = await res.json();
const pageTarget = targets.find(t => t.type === 'page') || targets[0];
const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
await new Promise(r => ws.once('open', r));

let idCounter = 1;
const pending = new Map();
const logs = { netFailed: [], httpErr: [], consoleErr: [], exceptions: [] };
const reqUrls = new Map();

ws.on('message', raw => {
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
  } else if (msg.method === 'Runtime.consoleAPICalled' && (msg.params.type === 'error' || msg.params.type === 'warning')) {
    logs.consoleErr.push(msg.params.args.map(a => a.value || a.description).join(' '));
  } else if (msg.method === 'Runtime.exceptionThrown') {
    logs.exceptions.push(msg.params.exceptionDetails);
  }
});

function send(method, params = {}) {
  return new Promise(resolve => {
    const id = idCounter++;
    pending.set(id, resolve);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

await send('Network.enable');
await send('Runtime.enable');
await send('Page.enable');
await send('Page.navigate', { url: 'http://localhost:4173/' });

await delay(4000);

// Scroll incrementally to trigger ScrollSmoother + ScrollTrigger + lazy images
const metrics = await send('Runtime.evaluate', { expression: `document.documentElement.scrollHeight`, returnByValue: true });
const totalH = metrics.result?.result?.value || 20000;

const shotDir = 'C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\fixed_shots';
fs.mkdirSync(shotDir, { recursive: true });

// Capture top hero first
await delay(500);
fs.writeFileSync(`${shotDir}\\shot_hero.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));

// Scroll progressively through sections (so GSAP ScrollSmoother updates naturally via wheel/scroll)
for (let y = 1000; y <= totalH; y += 1200) {
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${y})` });
  await delay(600);
}
await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0)` });
await delay(1000);

// Capture key sections using smoothScroll / exact section tops
const info = await send('Runtime.evaluate', {
  expression: `(() => {
    const imgs = [...document.querySelectorAll('img')];
    const broken = imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src'));
    const loaded = imgs.filter(i => i.complete && i.naturalWidth > 0).length;
    const sections = [...document.querySelectorAll('section')].map((s, i) => ({
      i, id: s.id, cls: s.className,
      parentCls: s.parentElement?.className || s.parentElement?.id,
      top: Math.round(s.getBoundingClientRect().top + window.scrollY),
      h: Math.round(s.getBoundingClientRect().height)
    }));
    const fonts = [...document.fonts].map(f => f.family + ':' + f.status);
    const smootherOk = !!(window.__spyltSmootherInstance);
    return { scrollH: document.documentElement.scrollHeight, totalImgs: imgs.length, loaded, broken, sections, fonts, smootherOk };
  })()`,
  returnByValue: true
});

console.log('INFO:', JSON.stringify(info.result?.result?.value, null, 2));
console.log('LOGS:', JSON.stringify(logs, null, 2));

const secs = info.result?.result?.value?.sections || [];
for (const s of secs) {
  const targetY = Math.max(0, s.top);
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${targetY})` });
  await delay(900);
  const label = (s.id || s.cls.split(' ')[0]).replace(/[^a-zA-Z0-9_-]/g, '');
  fs.writeFileSync(`${shotDir}\\sec_${s.i}_${label}.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));
}

ws.close();
chrome.kill();
