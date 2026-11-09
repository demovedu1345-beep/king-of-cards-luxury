import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cardsDir = path.resolve(__dirname, '../dist/images/cards');
const outDir = path.resolve(__dirname, '../dist/images/cards/cutouts');
fs.mkdirSync(outDir, { recursive: true });

const selectedCards = [
  'KNLW202562.png', // Gold Door Style
  'KNAM4902.png',   // Pavilion Arch Jali
  'KNLW202566.png', // Crimson Velvet Temple Arch
  'KNLW202557.png', // Yellow/Pink Scalloped
  'KNLW202559.png', // Maroon Scroll
  'KNLW202573.png', // White Peacock
  'KNLW202574.png', // Cream Book Style
  'KNLW202568.png', // Emerald Floral
  'KNMO9319.png',   // Royal Crest
  'KNLW202575.png', // Pastel Garden
];

for (const cardFile of selectedCards) {
  const cardPath = path.join(cardsDir, cardFile);
  if (!fs.existsSync(cardPath)) continue;

  const { data, info } = await sharp(cardPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Detect corner background color
  const bgR = data[0], bgG = data[1], bgB = data[2];

  function colorDist(r, g, b) {
    const dr = r - bgR;
    const dg = g - bgG;
    const db = b - bgB;
    return Math.sqrt(dr * dr + dg * dg + db * db);
  }

  const visited = new Uint8Array(width * height);
  const queue = [];

  for (let x = 0; x < width; x++) {
    queue.push(x, 0);
    queue.push(x, height - 1);
    visited[x] = 1;
    visited[(height - 1) * width + x] = 1;
  }
  for (let y = 0; y < height; y++) {
    queue.push(0, y);
    queue.push(width - 1, y);
    visited[y * width] = 1;
    visited[y * width + width - 1] = 1;
  }

  let head = 0;
  while (head < queue.length) {
    const x = queue[head++];
    const y = queue[head++];
    const idx = (y * width + x) * channels;
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    const dist = colorDist(r, g, b);

    if (dist < 38) {
      data[idx + 3] = 0;
      const neighbors = [
        [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]
      ];
      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const npos = ny * width + nx;
          if (!visited[npos]) {
            visited[npos] = 1;
            queue.push(nx, ny);
          }
        }
      }
    } else if (dist < 60) {
      const alpha = Math.min(255, Math.max(0, Math.round(((dist - 38) / 22) * 255)));
      data[idx + 3] = alpha;
    }
  }

  // Trim transparent borders
  const trimmedBuffer = await sharp(data, { raw: { width, height, channels } })
    .png()
    .trim({ threshold: 10 })
    .toBuffer();

  const outFile = path.join(outDir, cardFile);
  fs.writeFileSync(outFile, trimmedBuffer);
  console.log('Processed cutout:', cardFile, 'saved to:', outFile);
}

// Also mirror to public/images/cards/cutouts
const publicOutDir = path.resolve(__dirname, '../public/images/cards/cutouts');
fs.mkdirSync(publicOutDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) {
  fs.copyFileSync(path.join(outDir, f), path.join(publicOutDir, f));
}
console.log('Mirrored to public/images/cards/cutouts');
