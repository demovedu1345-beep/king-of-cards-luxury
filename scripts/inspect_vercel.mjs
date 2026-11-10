import { spawn } from 'child_process';
import fs from 'fs';
import WebSocket from 'ws';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

const userDataDir = `C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\chrome_vercel_inspect`;
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9235',
  '--remote-allow-origins=*',
  `--user-data-dir=${userDataDir}`,
  '--window-size=1440,900',
  'about:blank'
], { stdio: 'ignore' });

await delay(2000);

const res = await fetch('http://127.0.0.1:9235/json');
const targets = await res.json();
const pageTarget = targets.find(t => t.type === 'page') || targets[0];
const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
await new Promise(r => ws.once('open', r));

let idCounter = 1;
const pending = new Map();
const logs = { netFailed: [], httpErr: [], consoleErr: [], exceptions: [], responses: 0 };
const reqUrls = new Map();

ws.on('message', raw => {
  const msg = JSON.parse(raw.toString());
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  } else if (msg.method === 'Network.requestWillBeSent') {
    reqUrls.set(msg.params.requestId, msg.params.request.url);
  } else if (msg.method === 'Network.loadingFailed') {
    logs.netFailed.push({ url: reqUrls.get(msg.params.requestId), err: msg.params.errorText, type: msg.params.type });
  } else if (msg.method === 'Network.responseReceived') {
    logs.responses++;
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

await delay(10000);

// Inspect after 10s
const stats = await send('Runtime.evaluate', {
  expression: `(() => {
    const imgs = [...document.querySelectorAll('img')];
    const broken = imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src'));
    const loaded = imgs.filter(i => i.complete && i.naturalWidth > 0).length;
    const sections = [...document.querySelectorAll('section, footer')].map((s, i) => ({
      i, tag: s.tagName, cls: s.className, top: Math.round(s.getBoundingClientRect().top + window.scrollY), h: Math.round(s.getBoundingClientRect().height)
    }));
    const fonts = [...document.fonts].map(f => f.family + ':' + f.status);
    return { href: location.href, scrollH: document.documentElement.scrollHeight, totalImgs: imgs.length, loaded, broken, sections, fonts };
  })()`,
  returnByValue: true
});

console.log('Stats after 10s:', JSON.stringify(stats.result?.result?.value, null, 2));
console.log('Logs:', JSON.stringify(logs, null, 2));

// Take screenshots at key scroll positions
const shotDir = 'C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\vercel_shots';
fs.mkdirSync(shotDir, { recursive: true });
const positions = [0, 1200, 2600, 4200, 6000, 10000, 14000, 18000];
for (const y of positions) {
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${y})` });
  await delay(1200);
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(`${shotDir}\\shot_${y}.png`, Buffer.from(shot.result.data, 'base64'));
}

ws.close();
chrome.kill();
