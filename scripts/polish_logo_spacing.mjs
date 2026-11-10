import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const navLogoSvg = `<svg width="256" height="56" viewBox="0 0 256 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE082" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#996515" />
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="252" height="52" rx="26" fill="#FAEADE" stroke="#523122" stroke-width="2.5"/>
  <g transform="translate(8, 7)">
    <rect x="0" y="0" width="42" height="42" rx="21" fill="#1F1B19" stroke="url(#goldGrad)" stroke-width="1.8" />
    <path d="M11 27 L11 16 L16 21 L21 12 L26 21 L31 16 L31 27 Z" fill="url(#goldGrad)" />
    <circle cx="21" cy="10" r="1.7" fill="url(#goldGrad)" />
    <circle cx="11" cy="14" r="1.4" fill="url(#goldGrad)" />
    <circle cx="31" cy="14" r="1.4" fill="url(#goldGrad)" />
    <line x1="11" y1="30" x2="31" y2="30" stroke="url(#goldGrad)" stroke-width="2" stroke-linecap="round" />
  </g>
  <text x="58" y="27" font-family="Antonio, Georgia, sans-serif" font-size="18.5" font-weight="700" letter-spacing="1.4" fill="#523122">KING OF CARDS</text>
  <text x="59" y="40" font-family="ProximaNova, -apple-system, BlinkMacSystemFont, sans-serif" font-size="8" font-weight="700" letter-spacing="3" fill="#A26833">LUXURY ATELIER</text>
</svg>`;

fs.writeFileSync(path.join(distDir, 'images/nav-logo.svg'), navLogoSvg);
fs.writeFileSync(path.resolve(__dirname, '../public/images/nav-logo.svg'), navLogoSvg);

const cssPath = path.join(distDir, 'assets/angraity-experience.css');
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace('left: 15.25rem;', 'left: 16.5rem;');
css = css.replace('max-width: 225px !important;', 'max-width: 245px !important;');
fs.writeFileSync(cssPath, css);
console.log('Polished nav-logo.svg width and hero banner spacing!');
