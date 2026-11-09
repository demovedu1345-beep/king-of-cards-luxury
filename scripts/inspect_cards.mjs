import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cardsDir = path.resolve(__dirname, '../dist/images/cards');
const files = fs.readdirSync(cardsDir).filter(f => f.endsWith('.png'));

for (const file of files) {
  const meta = await sharp(path.join(cardsDir, file)).metadata();
  console.log(file, 'width:', meta.width, 'height:', meta.height, 'channels:', meta.channels, 'hasAlpha:', meta.hasAlpha);
}
