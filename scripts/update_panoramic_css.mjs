import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, '../dist/assets/angraity-experience.css');
let css = fs.readFileSync(filePath, 'utf8');

// Normalize line breaks for matching
const isCRLF = css.includes('\r\n');
const nl = isCRLF ? '\r\n' : '\n';

const oldBlock = [
  '.ang-hero-panoramic-wrap {',
  '  position: absolute;',
  '  bottom: 0.5rem;',
  '  left: 50%;',
  '  transform: translateX(-50%);',
  '  width: 100%;',
  '  max-width: 1080px;',
  '  display: flex;',
  '  justify-content: center;',
  '  align-items: flex-end;',
  '  z-index: 15;',
  '  pointer-events: auto;',
  '}',
  '',
  '.ang-hero-panoramic-wrap img {',
  '  width: 100%;',
  '  max-width: 980px;',
  '  height: auto;',
  '  object-fit: contain;',
  '  transition: transform 0.35s var(--default-spring), filter 0.3s ease;',
  '  filter: drop-shadow(0 20px 45px rgba(82, 49, 34, 0.35));',
  '}'
].join(nl);

const newBlock = [
  '.ang-hero-panoramic-wrap {',
  '  position: absolute;',
  '  bottom: 0;',
  '  left: 50%;',
  '  transform: translateX(-50%);',
  '  width: 96vw;',
  '  max-width: 1360px;',
  '  display: flex;',
  '  justify-content: center;',
  '  align-items: flex-end;',
  '  z-index: 15;',
  '  pointer-events: auto;',
  '}',
  '',
  '.ang-hero-panoramic-wrap img {',
  '  width: 100%;',
  '  max-width: 1320px;',
  '  height: auto;',
  '  object-fit: contain;',
  '  transition: transform 0.4s var(--default-spring), filter 0.4s ease;',
  '  filter: drop-shadow(0 25px 50px rgba(60, 30, 20, 0.38));',
  '  cursor: pointer;',
  '}'
].join(nl);

if (css.includes(oldBlock)) {
  css = css.replace(oldBlock, newBlock);
  fs.writeFileSync(filePath, css);
  console.log('Successfully updated angraity-experience.css in dist!');
} else {
  console.log('Block not found, doing regex replacement...');
  css = css.replace(/\.ang-hero-panoramic-wrap\s*\{[^}]+\}/, newBlock.split(nl + nl)[0]);
  fs.writeFileSync(filePath, css);
  console.log('Regex update complete!');
}
