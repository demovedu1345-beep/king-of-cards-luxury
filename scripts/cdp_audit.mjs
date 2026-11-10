import { spawn } from 'child_process';
import fs from 'fs';
import WebSocket from 'ws';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

async function auditUrl(targetUrl, outPrefix) {
  const userDataDir = `C:\\Users\\itzra\\.gemini\\antigravity\\brain\\690c8b1d-3c1d-4958-8418-e7ae7aace85d\\scratch\\chrome_profile_${outPrefix}`;
  fs.mkdirSync(userDataDir, { recursive: true });

  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9229',
    '--remote-allow-origins=*',
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,900',
    'about:blank'
  ], { stdio: 'ignore' });

  await delay(2000);

  let targets = [];
  for (let i = 0; i < 10; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9229/json');
      targets = await res.json();
      if (targets.length > 0) break;
    } catch {}
    await delay(500);
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  await new Promise(r => ws.once('open', r));

  let idCounter = 1;
  const pending = new Map();
  const events = { failedRequests: [], httpErrors: [], consoleErrors: [], exceptions: [] };
  const reqUrls = new Map();

  ws.on('message', raw => {
    const msg = JSON.parse(raw.toString());
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    } else if (msg.method === 'Network.requestWillBeSent') {
      reqUrls.set(msg.params.requestId, msg.params.request.url);
    } else if (msg.method === 'Network.loadingFailed') {
      events.failedRequests.push({
        url: reqUrls.get(msg.params.requestId),
        errorText: msg.params.errorText,
        type: msg.params.type
      });
    } else if (msg.method === 'Network.responseReceived') {
      if (msg.params.response.status >= 400) {
        events.httpErrors.push({
          url: msg.params.response.url,
          status: msg.params.response.status,
          mimeType: msg.params.response.mimeType
        });
      }
    } else if (msg.method === 'Runtime.consoleAPICalled') {
      if (msg.params.type === 'error' || msg.params.type === 'warning') {
        events.consoleErrors.push({
          type: msg.params.type,
          args: msg.params.args.map(a => a.value || a.description || JSON.stringify(a)).join(' ')
        });
      }
    } else if (msg.method === 'Runtime.exceptionThrown') {
      events.exceptions.push(JSON.stringify(msg.params.exceptionDetails));
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
  await send('Page.navigate', { url: targetUrl });

  await delay(6000);

  // Scroll through page in increments to trigger lazy loads & scroll triggers
  const metrics = await send('Runtime.evaluate', {
    expression: `document.documentElement.scrollHeight`,
    returnByValue: true
  });
  const totalH = metrics.result?.result?.value || 6000;

  for (let y = 0; y <= totalH; y += 900) {
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${y})` });
    await delay(400);
  }
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0)` });
  await delay(1000);

  const domReport = await send('Runtime.evaluate', {
    expression: `(() => {
      const imgs = [...document.querySelectorAll('img')];
      const brokenImgs = imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => ({ src: i.getAttribute('src'), currentSrc: i.currentSrc }));
      const vids = [...document.querySelectorAll('video')];
      const vidStates = vids.map(v => ({
        src: v.getAttribute('src') || v.querySelector('source')?.getAttribute('src'),
        currentSrc: v.currentSrc,
        readyState: v.readyState,
        networkState: v.networkState,
        error: v.error ? v.error.code + ':' + v.error.message : null
      }));
      const sections = [...document.querySelectorAll('section, footer')].map(s => ({
        tag: s.tagName,
        cls: s.className,
        h: Math.round(s.getBoundingClientRect().height)
      }));
      return {
        title: document.title,
        scrollHeight: document.documentElement.scrollHeight,
        totalImgs: imgs.length,
        brokenImgs,
        vidStates,
        hasLenis: typeof window.Lenis !== 'undefined' || !!document.documentElement.classList.contains('lenis'),
        hasGsap: typeof window.gsap !== 'undefined',
        hasScrollTrigger: typeof window.ScrollTrigger !== 'undefined',
        sectionsCount: sections.length,
        sections
      };
    })()`,
    returnByValue: true
  });

  ws.close();
  chrome.kill();
  await delay(500);

  return {
    url: targetUrl,
    events,
    dom: domReport.result?.result?.value
  };
}

const localRes = await auditUrl('http://localhost:4173/', 'local');
const vercelRes = await auditUrl('https://kingsofcards.vercel.app/', 'vercel');

console.log('=== LOCAL 4173 ===');
console.log(JSON.stringify(localRes, null, 2));
console.log('=== VERCEL ===');
console.log(JSON.stringify(vercelRes, null, 2));
