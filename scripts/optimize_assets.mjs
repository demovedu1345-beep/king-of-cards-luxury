import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distImages = path.resolve(__dirname, '../dist/images');
const publicImages = path.resolve(__dirname, '../public/images');

// 1. Optimize panoramic hero, big-img, and hero-img into crisp WebP + smaller PNG
const panSource = path.join(distImages, 'hero-cards-panoramic.png');
if (fs.existsSync(panSource)) {
  const webpBuf = await sharp(panSource)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 88, alphaQuality: 95 })
    .toBuffer();

  const pngBuf = await sharp(panSource)
    .resize({ width: 1920, withoutEnlargement: true })
    .png({ palette: true, quality: 85, compressionLevel: 9 })
    .toBuffer();

  for (const dir of [distImages, publicImages]) {
    fs.writeFileSync(path.join(dir, 'hero-cards-panoramic.webp'), webpBuf);
    fs.writeFileSync(path.join(dir, 'big-img.webp'), webpBuf);
    fs.writeFileSync(path.join(dir, 'hero-img.webp'), webpBuf);
    fs.writeFileSync(path.join(dir, 'hero-cards-panoramic.png'), pngBuf);
    fs.writeFileSync(path.join(dir, 'big-img.png'), pngBuf);
    fs.writeFileSync(path.join(dir, 'hero-img.png'), pngBuf);
  }
  console.log('Panoramic WebP:', (webpBuf.length/1024).toFixed(1), 'KB | PNG:', (pngBuf.length/1024).toFixed(1), 'KB');
}

// 2. Replace footer-drink.png with clean transparent cutout of Royal Scroll Box (KNLW202559)
const scrollCutout = path.join(distImages, 'cards/cutouts/KNLW202559.png');
if (fs.existsSync(scrollCutout)) {
  const footerPng = await sharp(scrollCutout)
    .resize({ width: 900, withoutEnlargement: true })
    .png({ palette: true, quality: 88, compressionLevel: 9 })
    .toBuffer();
  const footerWebp = await sharp(scrollCutout)
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 88, alphaQuality: 95 })
    .toBuffer();
  for (const dir of [distImages, publicImages]) {
    fs.writeFileSync(path.join(dir, 'footer-drink.png'), footerPng);
    fs.writeFileSync(path.join(dir, 'footer-drink.webp'), footerWebp);
  }
  console.log('Footer transparent cutout PNG:', (footerPng.length/1024).toFixed(1), 'KB | WebP:', (footerWebp.length/1024).toFixed(1), 'KB');
}

// 3. Clean hero-bg.png by removing dark/white outer ring from cutout if present -> replace with clean transparent royal arch cutout
const archCutout = path.join(distImages, 'cards/cutouts/KNLW202562.png');
if (fs.existsSync(archCutout)) {
  const heroBgBuf = await sharp(archCutout)
    .resize({ width: 900, withoutEnlargement: true })
    .png({ palette: true, quality: 85, compressionLevel: 9 })
    .toBuffer();
  for (const dir of [distImages, publicImages]) {
    fs.writeFileSync(path.join(dir, 'hero-bg.png'), heroBgBuf);
  }
  console.log('Cleaned hero-bg.png:', (heroBgBuf.length/1024).toFixed(1), 'KB');
}

// 4. Optimize white-drink.webp if large (read to Buffer first to avoid file lock)
const whiteDrink = path.join(distImages, 'white-drink.webp');
if (fs.existsSync(whiteDrink)) {
  const rawWd = fs.readFileSync(whiteDrink);
  const wdBuf = await sharp(rawWd)
    .resize({ width: 850, withoutEnlargement: true })
    .webp({ quality: 85, alphaQuality: 90 })
    .toBuffer();
  for (const dir of [distImages, publicImages]) {
    try { fs.writeFileSync(path.join(dir, 'white-drink.webp'), wdBuf); } catch (err) { console.warn('Skipped write:', err.message); }
  }
  console.log('Optimized white-drink.webp:', (wdBuf.length/1024).toFixed(1), 'KB');
}

// 5. Optimize all 20 card PNGs + generate crisp WebP versions in images/cards/
const cardsDir = path.join(distImages, 'cards');
const pubCardsDir = path.join(publicImages, 'cards');
fs.mkdirSync(pubCardsDir, { recursive: true });

// Remove temporary test_cutout_62.png if present
for (const dir of [cardsDir, pubCardsDir]) {
  const tmp = path.join(dir, 'test_cutout_62.png');
  if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
}

for (const f of fs.readdirSync(cardsDir)) {
  if (!f.endsWith('.png')) continue;
  const fullPath = path.join(cardsDir, f);
  if (!fs.statSync(fullPath).isFile()) continue;

  const base = f.replace(/\.png$/i, '');
  const raw = fs.readFileSync(fullPath);

  const optPng = await sharp(raw)
    .resize({ width: 680, height: 680, fit: 'inside', withoutEnlargement: true })
    .png({ palette: true, quality: 86, compressionLevel: 9 })
    .toBuffer();

  const optWebp = await sharp(raw)
    .resize({ width: 680, height: 680, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 84 })
    .toBuffer();

  fs.writeFileSync(fullPath, optPng);
  fs.writeFileSync(path.join(pubCardsDir, f), optPng);
  fs.writeFileSync(path.join(cardsDir, base + '.webp'), optWebp);
  fs.writeFileSync(path.join(pubCardsDir, base + '.webp'), optWebp);

  console.log(`Optimized ${f}: PNG=${(optPng.length/1024).toFixed(1)}KB, WebP=${(optWebp.length/1024).toFixed(1)}KB`);
}

// Also remove duplicate untracked .vercel inside dist/ if present on disk cleanly (leave .gitignore clean)
console.log('All visual asset optimizations completed!');
