import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cardPath = path.resolve(__dirname, '../dist/images/cards/KNLW202562.png');
const outPath = path.resolve(__dirname, '../dist/images/cards/test_cutout_62.png');

const { data, info } = await sharp(cardPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

// Flood fill from all 4 boundaries
const visited = new Uint8Array(width * height);
const queue = [];

// Base background color
const bgR = 239, bgG = 229, bgB = 221;

function colorDist(r, g, b) {
  const dr = r - bgR;
  const dg = g - bgG;
  const db = b - bgB;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

// Add all border pixels
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

// Flood fill threshold: background is ~ [239, 229, 221]
// Shadow pixels are darker: dist from bg > 35
let head = 0;
while (head < queue.length) {
  const x = queue[head++];
  const y = queue[head++];
  const idx = (y * width + x) * channels;
  const r = data[idx], g = data[idx + 1], b = data[idx + 2];
  const dist = colorDist(r, g, b);

  // If close to bg color, make transparent and continue flood
  if (dist < 40) {
    data[idx + 3] = 0; // Transparent
    // Check 4 neighbors
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
  } else if (dist < 65) {
    // Soft feather transition
    const alpha = Math.min(255, Math.max(0, Math.round(((dist - 40) / 25) * 255)));
    data[idx + 3] = alpha;
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(outPath);

console.log('Saved test cutout to:', outPath);
