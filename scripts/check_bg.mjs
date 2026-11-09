import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cardPath = path.resolve(__dirname, '../dist/images/cards/KNLW202562.png');

const { data, info } = await sharp(cardPath).raw().toBuffer({ resolveWithObject: true });

function getPixel(x, y) {
  const idx = (y * info.width + x) * info.channels;
  return [data[idx], data[idx + 1], data[idx + 2]];
}

console.log('(0,0):', getPixel(0, 0));
console.log('(100,100):', getPixel(100, 100));
console.log('(1079,0):', getPixel(1079, 0));
console.log('(0,1079):', getPixel(0, 1079));
console.log('(1079,1079):', getPixel(1079, 1079));
