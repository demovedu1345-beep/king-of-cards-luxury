import fs from 'fs';
import path from 'path';

const nuxtDir = 'dist/floema/_nuxt';
const existing = new Set(fs.readdirSync(nuxtDir));

async function downloadMissing() {
  let pass = 1;
  while (true) {
    const referenced = new Set();
    for (const file of fs.readdirSync(nuxtDir)) {
      if (!file.endsWith('.js') && !file.endsWith('.css')) continue;
      const txt = fs.readFileSync(path.join(nuxtDir, file), 'utf8');
      for (const m of txt.matchAll(/["'`]\.\/([A-Za-z0-9_-]{4,24}\.(?:js|css))["'`]/g)) {
        referenced.add(m[1]);
      }
      for (const m of txt.matchAll(/from\s*["'`]\.\/([A-Za-z0-9_-]{4,24}\.js)["'`]/g)) {
        referenced.add(m[1]);
      }
      for (const m of txt.matchAll(/import\(["'`]\.\/([A-Za-z0-9_-]{4,24}\.js)["'`]\)/g)) {
        referenced.add(m[1]);
      }
    }
    const missing = [...referenced].filter((f) => !existing.has(f));
    console.log(`Pass ${pass}: ${missing.length} missing chunks`);
    if (missing.length === 0) break;

    let fetchedCount = 0;
    await Promise.all(
      missing.map(async (f) => {
        const url = `https://floema.com/_nuxt/${f}`;
        try {
          const r = await fetch(url);
          if (!r.ok) {
            console.log(`  WARN HTTP ${r.status} for ${f}`);
            return;
          }
          const buf = Buffer.from(await r.arrayBuffer());
          fs.writeFileSync(path.join(nuxtDir, f), buf);
          existing.add(f);
          fetchedCount++;
        } catch (e) {
          console.log(`  ERR ${f}: ${e.message}`);
        }
      })
    );
    if (fetchedCount === 0) break;
    pass++;
  }
}

await downloadMissing();

// Check window.__NUXT__.config.app
const htmlPath = 'dist/floema/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');
const oldApp = 'app:{baseURL:"/",buildId:"18eb9f0b-efbe-47de-a446-75a2614853d1",buildAssetsDir:"/_nuxt/",cdnURL:""}';
const oldAppCheck = html.includes(oldApp);
console.log('Has exact oldApp string:', oldAppCheck);
if (oldAppCheck) {
  const newApp = 'app:{baseURL:(location.pathname.includes("/king-of-cards-luxury")?"/king-of-cards-luxury/floema/":"/floema/"),buildId:"18eb9f0b-efbe-47de-a446-75a2614853d1",buildAssetsDir:"_nuxt/",cdnURL:""}';
  html = html.replace(oldApp, newApp);
  fs.writeFileSync(htmlPath, html);
  console.log('Updated app.baseURL dynamically in dist/floema/index.html');
}
