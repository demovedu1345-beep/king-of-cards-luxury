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
  if (!s.includes(findStr)) throw new Error('BDbySAj2 search pattern not found');
  s = s.replace(findStr, replStr);
  fs.writeFileSync(p, s);
  execSync(`node --check "${p}"`, { stdio: 'inherit' });
  console.log('✓ Fixed search index path in BDbySAj2.js');
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
  if (!s.includes(findMeta)) throw new Error('BqI1aal4 meta pattern not found');
  s = s.replace(findMeta, replMeta);
  fs.writeFileSync(p, s);
  execSync(`node --check "${p}"`, { stdio: 'inherit' });
  console.log('✓ Hardened BqI1aal4.js builds/meta loader');
}

// 4. Prevent CORS-blocked cross-origin MP3 spam on third-party origins in DEqzV9VW.js
{
  const p = path.join(root, 'dist', 'floema', '_nuxt', 'DEqzV9VW.js');
  let s = fs.readFileSync(p, 'utf8');
  const findAudio = 'pl=[`about-foreground`,`kingfisher-assustou-se`,`olw-leaving`,`sustainability-bike`,`sustainability-foreground-0`,`sustainability-foreground-1`,`sustainability-foreground-synth`]';
  const replAudio = 'pl=(typeof location<`u`&&location.hostname.endsWith(`floema.com`))?[`about-foreground`,`kingfisher-assustou-se`,`olw-leaving`,`sustainability-bike`,`sustainability-foreground-0`,`sustainability-foreground-1`,`sustainability-foreground-synth`]:[]';
  if (!s.includes(findAudio)) throw new Error('DEqzV9VW audio list pattern not found');
  s = s.replace(findAudio, replAudio);
  fs.writeFileSync(p, s);
  execSync(`node --check "${p}"`, { stdio: 'inherit' });
  console.log('✓ Guarded CORS-blocked audio preloads in DEqzV9VW.js');
}
