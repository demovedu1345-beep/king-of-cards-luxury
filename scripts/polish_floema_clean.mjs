import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const root = process.cwd();

// 1. Copy favicon.ico to dist/ root so /favicon.ico never 404s
const floemaFav = path.join(root, 'dist', 'floema', 'favicon.ico');
const distFav = path.join(root, 'dist', 'favicon.ico');
if (fs.existsSync(floemaFav)) {
  fs.copyFileSync(floemaFav, distFav);
  console.log('✓ Copied dist/favicon.ico');
}

// 2. Fix /data/search/${e}.json path in dist/floema/_nuxt/BDbySAj2.js
{
  const p = path.join(root, 'dist', 'floema', '_nuxt', 'BDbySAj2.js');
  let s = fs.readFileSync(p, 'utf8');
  const findStr = 'vo=e=>`/data/search/${e}.json`';
  const replStr = 'vo=e=>`${location.pathname.includes(`/king-of-cards-luxury`)?`/king-of-cards-luxury/floema`:`/floema`}/data/search/${e}.json`';
  if (s.includes(findStr)) {
    s = s.replace(findStr, replStr);
    fs.writeFileSync(p, s);
    execSync(`node --check "${p}"`, { stdio: 'inherit' });
    console.log('✓ Fixed search index path in BDbySAj2.js');
  } else if (s.includes(replStr)) {
    console.log('• Search index path already fixed');
  }
}

// 3. Guard BqI1aal4.js builds/meta lookup + write valid local builds/meta JSON
{
  const metaDir = path.join(root, 'dist', 'floema', '_nuxt', 'builds', 'meta');
  fs.mkdirSync(metaDir, { recursive: true });
  let metaContent = JSON.stringify({ id: '18eb9f0b-efbe-47de-a446-75a2614853d1', timestamp: 1700000000000, prerendered: ['/'] });
  try {
    const r = await fetch('https://floema.com/_nuxt/builds/meta/18eb9f0b-efbe-47de-a446-75a2614853d1.json');
    if (r.ok) metaContent = await r.text();
  } catch {}
  fs.writeFileSync(path.join(metaDir, '18eb9f0b-efbe-47de-a446-75a2614853d1.json'), metaContent);
  console.log('✓ Created dist/floema/_nuxt/builds/meta/18eb9f0b-efbe-47de-a446-75a2614853d1.json');

  const p = path.join(root, 'dist', 'floema', '_nuxt', 'BqI1aal4.js');
  let s = fs.readFileSync(p, 'utf8');
  const findMeta = 'throw Za.NUXT_E5004();return e}),Vs=e,e.catch(t=>{Vs===e&&(Vs=void 0),Za.NUXT_E5002({cause:t})})';
  const replMeta = 'return{prerendered:[]};return e}),Vs=e,e.catch(()=>({prerendered:[]}))';
  if (s.includes(findMeta)) {
    s = s.replace(findMeta, replMeta);
    fs.writeFileSync(p, s);
    execSync(`node --check "${p}"`, { stdio: 'inherit' });
    console.log('✓ Hardened BqI1aal4.js builds/meta loader');
  } else if (s.includes(replMeta)) {
    console.log('• BqI1aal4.js meta loader already hardened');
  }
}

// 5. Fetch missing dynamic CSS + i18n JSON assets for /floema/
{
  const extraAssets = [
    ['https://floema.com/_nuxt/pages.Cmg0rFTt.css', path.join(root, 'dist', 'floema', '_nuxt', 'pages.Cmg0rFTt.css')],
    ['https://floema.com/_i18n/pt/messages.json', path.join(root, 'dist', 'floema', '_i18n', 'pt', 'messages.json')],
    ['https://floema.com/_i18n/en/messages.json', path.join(root, 'dist', 'floema', '_i18n', 'en', 'messages.json')],
    ['https://floema.com/_i18n/es/messages.json', path.join(root, 'dist', 'floema', '_i18n', 'es', 'messages.json')],
    ['https://floema.com/_i18n/fr/messages.json', path.join(root, 'dist', 'floema', '_i18n', 'fr', 'messages.json')]
  ];
  for (const [url, outPath] of extraAssets) {
    try {
      const r = await fetch(url);
      if (r.ok) {
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, Buffer.from(await r.arrayBuffer()));
        console.log('✓ Fetched extra asset:', path.basename(outPath));
      } else {
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, outPath.endsWith('.json') ? '{}' : '/* stub */');
        console.log('✓ Created safe stub for:', url, r.status);
      }
    } catch {}
  }
}

// 4. Prevent CORS-blocked cross-origin MP3 spam on third-party origins in DEqzV9VW.js
{
  const p = path.join(root, 'dist', 'floema', '_nuxt', 'DEqzV9VW.js');
  let s = fs.readFileSync(p, 'utf8');
  const findAudio = 'pl=[`about-foreground`,`kingfisher-assustou-se`,`olw-leaving`,`sustainability-bike`,`sustainability-foreground-0`,`sustainability-foreground-1`,`sustainability-foreground-synth`]';
  const replAudio = 'pl=(typeof location<`u`&&location.hostname.endsWith(`floema.com`))?[`about-foreground`,`kingfisher-assustou-se`,`olw-leaving`,`sustainability-bike`,`sustainability-foreground-0`,`sustainability-foreground-1`,`sustainability-foreground-synth`]:[]';
  if (s.includes(findAudio)) {
    s = s.replace(findAudio, replAudio);
    fs.writeFileSync(p, s);
    execSync(`node --check "${p}"`, { stdio: 'inherit' });
    console.log('✓ Guarded CORS-blocked audio preloads in DEqzV9VW.js');
  } else if (s.includes(replAudio)) {
    console.log('• DEqzV9VW.js audio preloads already guarded');
  }
}
