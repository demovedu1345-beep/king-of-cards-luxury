import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cutoutsDir = path.resolve(__dirname, '../dist/images/cards/cutouts');

// Target canvas: 2500 x 980 with transparent background
const canvasWidth = 2500;
const canvasHeight = 980;

const cards = [
  // 1. Far Left: Emerald Floral Invitation
  { file: 'KNLW202568.png', width: 420, x: 50, y: 190, rotate: -15, z: 1 },
  // 2. Mid Left-Outer: Yellow/Pink Scalloped Card
  { file: 'KNLW202557.png', width: 470, x: 300, y: 130, rotate: -9, z: 2 },
  // 3. Mid Left: Royal Maroon Silk Farman Scroll
  { file: 'KNLW202559.png', width: 540, x: 590, y: 60, rotate: -3, z: 4 },
  // 4. Centerpiece: Gold Royal Gatefold Box with Medallion
  { file: 'KNLW202562.png', width: 560, x: 1010, y: 30, rotate: 0, z: 6 },
  // 5. Mid Right: Pavilion Arch Jali Wedding Card
  { file: 'KNAM4902.png', width: 530, x: 1410, y: 70, rotate: 3, z: 5 },
  // 6. Mid Right: Crimson Temple Arch
  { file: 'KNLW202566.png', width: 490, x: 1720, y: 120, rotate: 8, z: 3 },
  // 7. Far Right: White Peacock Laser Cut Card
  { file: 'KNLW202573.png', width: 460, x: 1980, y: 180, rotate: 14, z: 2 },
];

cards.sort((a, b) => a.z - b.z);

const compositeLayers = [];

for (const card of cards) {
  const filePath = path.join(cutoutsDir, card.file);
  if (!fs.existsSync(filePath)) continue;

  let img = sharp(filePath).resize({ width: card.width, withoutEnlargement: false });

  if (card.rotate !== 0) {
    img = img.rotate(card.rotate, { background: { r: 0, g: 0, b: 0, alpha: 0 } });
  }

  const buf = await img.png().toBuffer();

  // Create soft drop shadow
  const shadowBuf = await sharp(buf)
    .modulate({ brightness: 0 })
    .blur(16)
    .toColourspace('b-w')
    .ensureAlpha(0.32)
    .png()
    .toBuffer();

  compositeLayers.push({
    input: shadowBuf,
    left: Math.round(card.x + 10),
    top: Math.round(card.y + 24),
  });

  compositeLayers.push({
    input: buf,
    left: Math.round(card.x),
    top: Math.round(card.y),
  });
}

const finalImage = await sharp({
  create: {
    width: canvasWidth,
    height: canvasHeight,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  }
})
.composite(compositeLayers)
.png()
.toBuffer();

const out1 = path.resolve(__dirname, '../dist/images/hero-cards-panoramic.png');
const out2 = path.resolve(__dirname, '../dist/images/hero-img.png');
const out3 = path.resolve(__dirname, '../public/images/hero-cards-panoramic.png');
const out4 = path.resolve(__dirname, '../public/images/hero-img.png');

fs.writeFileSync(out1, finalImage);
fs.writeFileSync(out2, finalImage);
fs.writeFileSync(out3, finalImage);
fs.writeFileSync(out4, finalImage);

console.log('Successfully generated full card fan showcase with Royal Scroll at 2500x980!');
