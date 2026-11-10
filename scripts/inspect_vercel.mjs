import { spawn } from 'child_process';
import fs from 'fs';
import WebSocket from 'ws';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

const userDataDir = `C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\chrome_vercel_verified`;
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9237',
  '--remote-allow-origins=*',
  `--user-data-dir=${userDataDir}`,
  '--window-size=1440,900',
  'about:blank'
], { stdio: 'ignore' });

await delay(2000);
const res = await fetch('http://127.0.0.1:9237/json');
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
await send('Page.navigate', { url: 'https://kingsofcards.vercel.app/' });

// Wait 5 seconds for fast WebP assets & fonts over HTTPS
await delay(5000);

const shotDir = 'C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\vercel_verified_shots';
fs.mkdirSync(shotDir, { recursive: true });

// Hero immediately at 5s
fs.writeFileSync(`${shotDir}\\shot_hero.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));

// Check DOM & images right after 5s!
const statsEarly = await send('Runtime.evaluate', {
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
    return { href: location.href, scrollH: document.documentElement.scrollHeight, totalImgs: imgs.length, loaded, broken, sections, fonts, smootherOk };
  })()`,
  returnByValue: true
});

console.log('VERCEL STATS:', JSON.stringify(statsEarly.result?.result?.value, null, 2));
console.log('VERCEL LOGS:', JSON.stringify(logs, null, 2));

// Capture key sections scrolling smoothly
const secs = statsEarly.result?.result?.value?.sections || [];
for (const idx of [1, 2, 3, 5, 6, 7, 8, 9, 10]) {
  const s = secs[idx];
  if (!s) continue;
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${Math.max(0, s.top)})` });
  await delay(1000);
  const label = (s.id || s.cls.split(' ')[0]).replace(/[^a-zA-Z0-9_-]/g, '');
  fs.writeFileSync(`${shotDir}\\sec_${s.i}_${label}.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).result.data, 'base64'));
}

ws.close();
chrome.kill();
