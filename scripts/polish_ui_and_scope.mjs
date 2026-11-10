import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

// 1. Update nav-logo.svg with crisp cream & gold luxury crest plate (readable on both light & dark sections)
const navLogoSvg = `<svg width="240" height="56" viewBox="0 0 240 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE082" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#996515" />
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="236" height="52" rx="26" fill="#FAEADE" stroke="#523122" stroke-width="2.5"/>
  <g transform="translate(8, 7)">
    <rect x="0" y="0" width="42" height="42" rx="21" fill="#1F1B19" stroke="url(#goldGrad)" stroke-width="1.8" />
    <path d="M11 27 L11 16 L16 21 L21 12 L26 21 L31 16 L31 27 Z" fill="url(#goldGrad)" />
    <circle cx="21" cy="10" r="1.7" fill="url(#goldGrad)" />
    <circle cx="11" cy="14" r="1.4" fill="url(#goldGrad)" />
    <circle cx="31" cy="14" r="1.4" fill="url(#goldGrad)" />
    <line x1="11" y1="30" x2="31" y2="30" stroke="url(#goldGrad)" stroke-width="2" stroke-linecap="round" />
  </g>
  <text x="58" y="27" font-family="Antonio, Georgia, sans-serif" font-size="19" font-weight="700" letter-spacing="1.5" fill="#523122">KING OF CARDS</text>
  <text x="59" y="40" font-family="ProximaNova, -apple-system, BlinkMacSystemFont, sans-serif" font-size="8" font-weight="700" letter-spacing="3" fill="#A26833">LUXURY ATELIER</text>
</svg>`;
fs.writeFileSync(path.join(distDir, 'images/nav-logo.svg'), navLogoSvg);
fs.writeFileSync(path.resolve(__dirname, '../public/images/nav-logo.svg'), navLogoSvg);

// 2. Patch dist/assets/angraity-experience.js
const jsPath = path.join(distDir, 'assets/angraity-experience.js');
let js = fs.readFileSync(jsPath, 'utf8').replace(/\r\n/g, '\n');

// Remove scheduleScrollRefresh and smoothScrollToEl from inside init() and hoist above init()
const helperBlock = `    // 1. Native GSAP ScrollSmoother Bridge & ScrollTrigger Refresh Coordinator
    let refreshTimer = null;
    function scheduleScrollRefresh(delayMs = 200) {
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => {
        try {
          if (window.__spyltST) window.__spyltST.refresh(true);
        } catch (e) {}
      }, delayMs);
    }

    function smoothScrollToEl(el) {
      if (!el) return;
      try {
        const smoother = window.__spyltSmootherInstance || (window.__spyltSmoother && window.__spyltSmoother.get());
        if (smoother && typeof smoother.scrollTo === 'function') {
          smoother.scrollTo(el, true, 'top top');
          return;
        }
      } catch (e) {}
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    window.addEventListener('load', () => scheduleScrollRefresh(350));`;

if (js.includes(helperBlock)) {
  js = js.replace(helperBlock, '');
  js = js.replace('  function init() {', helperBlock.replace(/^    /gm, '  ') + '\n\n  function init() {');
}

// Remove loading="lazy" on cards so offscreen runway/drawer cards also load cleanly
js = js.replace(/ loading="lazy"/g, '');

// Shorten top hero banner text slightly so it sits harmoniously between logo & nav
js = js.replace(
  "<span>India's Premier Wedding & Gifting Cards Atelier • Est. 1995 • 50,000+ Celebrations</span>",
  "<span>Est. 1995 • 50,000+ Royal Celebrations</span>"
);

fs.writeFileSync(jsPath, js);

// 3. Patch dist/assets/angraity-experience.css
const cssPath = path.join(distDir, 'assets/angraity-experience.css');
let css = fs.readFileSync(cssPath, 'utf8').replace(/\r\n/g, '\n');

// Update top banner left offset + compact font size
css = css.replace(/\.ang-hero-top-banner\s*\{[\s\S]*?\}/, `.ang-hero-top-banner {
  position: absolute;
  top: 1.75rem;
  left: 15.25rem;
  z-index: 30;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.42rem 1.15rem;
  background-color: var(--color-red-brown);
  color: var(--color-milk);
  border: 3px solid var(--color-milk);
  border-radius: var(--radius-pill);
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  rotate: -1deg;
  box-shadow: 0 8px 25px rgba(127, 59, 45, 0.35);
  pointer-events: auto;
}`);

// Update video info badge position to bottom: 6.2rem (above video switcher) so it never touches the 4th title ribbon!
css = css.replace(/\.ang-video-info-badge\s*\{[\s\S]*?\}/, `.ang-video-info-badge {
  position: absolute;
  bottom: 6.2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 40;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.5rem 1.35rem;
  background-color: rgba(250, 234, 222, 0.94);
  color: var(--color-dark-brown);
  border: 2.5px solid var(--color-dark-brown);
  border-radius: var(--radius-pill);
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  max-width: 90vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`);

// Add crisp nav-logo sizing + panoramic height polish
css += `
/* Crisp Nav Crest Pill Sizing */
nav.fixed img[alt="nav-logo"] {
  width: auto !important;
  height: 50px !important;
  max-width: 225px !important;
  filter: drop-shadow(0 8px 20px rgba(82, 49, 34, 0.18));
}

@media (max-width: 1260px) {
  .ang-hero-top-banner {
    display: none;
  }
}

.ang-hero-panoramic-wrap img {
  max-height: 43vh;
}
`;

fs.writeFileSync(cssPath, css);
console.log('Applied final polish fixes!');
