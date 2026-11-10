import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cssPath = path.resolve(__dirname, '../dist/assets/angraity-experience.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Fix --font-paragraph quoting to match @font-face ProximaNova
css = css.replace('--font-paragraph: ProximaNova, sans-serif;', '--font-paragraph: "ProximaNova", sans-serif;');

// 2. Shift hero top banner cleanly right of the fixed nav-logo crest
css = css.replace(
`/* Top Royal Banner Ribbon */
.ang-hero-top-banner {
  position: absolute;
  top: 1.5rem;
  left: 2rem;`,
`/* Top Royal Banner Ribbon */
.ang-hero-top-banner {
  position: absolute;
  top: 1.5rem;
  left: 10.5rem;`
);

// Check both LF and CRLF for top banner
if (!css.includes('left: 10.5rem;')) {
  css = css.replace(/\.ang-hero-top-banner\s*\{[\s\S]*?left:\s*2rem;/, m => m.replace('left: 2rem;', 'left: 10.5rem;'));
}

// 3. Replace bottom panoramic rules + add clean hero text/card non-overlapping orchestration + video-info-badge + smooth scroll guard
const marker = '/* Panoramic Cards Showcase in Hero';
const markerIdx = css.indexOf(marker);
if (markerIdx !== -1) {
  css = css.substring(0, markerIdx);
}

css += `/* ==========================================================================
   6. HERO CUTOUT SHOWCASE ORCHESTRATION & SCROLLSMOOTHER REFINEMENTS
   ========================================================================== */

/* Prevent native smooth-scroll from fighting GSAP ScrollSmoother */
html, body {
  scroll-behavior: auto !important;
}

/* Balanced Hero Content Stack so Text, CTA & Cards Showcase Never Collide */
@media (min-width: 1025px) {
  .hero-container .hero-content {
    z-index: 22 !important;
    padding-top: 4.75rem !important;
    justify-content: flex-start !important;
  }
  .hero-container .hero-content .hero-title {
    font-size: clamp(3.4rem, 5.8vw, 6.8rem) !important;
    line-height: 0.92 !important;
    margin-bottom: 0.55rem !important;
  }
  .hero-container .hero-content .hero-text-scroll {
    margin-bottom: 0.85rem !important;
  }
  .hero-container .hero-content .hero-text-scroll h1 {
    font-size: clamp(2rem, 4vw, 4.4rem) !important;
    line-height: 0.98 !important;
    padding-block: 0.25rem !important;
    padding-bottom: 0.55rem !important;
  }
  .hero-container .hero-content h2 {
    margin-top: 0.25rem !important;
    font-size: clamp(0.95rem, 1.1vw, 1.125rem) !important;
  }
  .hero-container .hero-content .hero-button {
    margin-top: 1rem !important;
    padding: 0.75rem 2.4rem !important;
    cursor: pointer;
    position: relative;
    z-index: 26;
  }
}

/* Panoramic Transparent Cutout Cards Showcase in Hero */
.ang-hero-panoramic-wrap {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 94vw;
  max-width: 1260px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 12;
  pointer-events: auto;
}

.ang-hero-panoramic-wrap img {
  width: 100%;
  max-width: 1220px;
  max-height: 41vh;
  height: auto;
  object-fit: contain;
  object-position: bottom center;
  transition: transform 0.4s var(--default-spring), filter 0.4s ease;
  filter: drop-shadow(0 25px 50px rgba(60, 30, 20, 0.38));
  cursor: pointer;
}

.ang-hero-panoramic-wrap img:hover {
  transform: translateY(-8px) scale(1.02);
  filter: drop-shadow(0 35px 70px rgba(60, 30, 20, 0.52));
}

@media (max-width: 1024px) {
  .ang-hero-top-banner {
    display: none;
  }
  .ang-hero-panoramic-wrap {
    bottom: 0.5rem;
    max-width: 96vw;
  }
}

/* Video Tour Live Info Pill Badge */
.ang-video-info-badge {
  position: absolute;
  top: 2rem;
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
}

.ang-video-info-badge .pulse-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #a02128;
  flex-shrink: 0;
  box-shadow: 0 0 0 0 rgba(160, 33, 40, 0.7);
  animation: angPulseDot 1.8s infinite;
}

@keyframes angPulseDot {
  0% { box-shadow: 0 0 0 0 rgba(160, 33, 40, 0.65); }
  70% { box-shadow: 0 0 0 10px rgba(160, 33, 40, 0); }
  100% { box-shadow: 0 0 0 0 rgba(160, 33, 40, 0); }
}

/* Clean Section Flow Guard for Injected Sections */
#royal-horizontal-showcase,
#atelier-all-products,
#atelier-showrooms-section {
  position: relative;
  z-index: 30;
}
`;

fs.writeFileSync(cssPath, css);
console.log('Updated dist/assets/angraity-experience.css cleanly!');
