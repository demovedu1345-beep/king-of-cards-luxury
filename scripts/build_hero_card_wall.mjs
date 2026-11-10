import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const cutoutsDir = path.join(root, 'dist', 'images', 'cards', 'cutouts');
const blueDrinkSrc = path.join(root, 'dist', 'images', 'blue-drink.webp');
const jsPath = path.join(root, 'dist', 'assets', 'angraity-experience.js');
const cssPath = path.join(root, 'dist', 'assets', 'angraity-experience.css');
const mainBundlePath = path.join(root, 'dist', 'assets', 'index-Bf_sU-QZ.js');

async function generateCutoutWebps() {
  const pngFiles = fs.readdirSync(cutoutsDir).filter(f => f.toLowerCase().endsWith('.png'));
  for (const file of pngFiles) {
    const src = path.join(cutoutsDir, file);
    const out = path.join(cutoutsDir, file.replace(/\.png$/i, '.webp'));
    if (!fs.existsSync(out)) {
      await sharp(src)
        .resize({ width: 640, height: 640, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 84, alphaQuality: 96 })
        .toFile(out);
      const stat = fs.statSync(out);
      console.log(`cutout webp: ${path.basename(out)} (${(stat.size / 1024).toFixed(1)} KB)`);
    }
  }

  const blueOut = path.join(cutoutsDir, 'KNLW-BLUE-PALACE.webp');
  if (fs.existsSync(blueDrinkSrc) && !fs.existsSync(blueOut)) {
    await sharp(blueDrinkSrc)
      .trim({ threshold: 4 })
      .resize({ width: 640, height: 640, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 84, alphaQuality: 96 })
      .toFile(blueOut);
    const stat = fs.statSync(blueOut);
    console.log(`cutout webp: ${path.basename(blueOut)} (${(stat.size / 1024).toFixed(1)} KB)`);
  }
}

function patchMainBundleHeroTiming() {
  let bundle = fs.readFileSync(mainBundlePath, 'utf8');
  if (bundle.includes('timeline({delay:1}).to(".hero-content"')) {
    bundle = bundle.replace('timeline({delay:1}).to(".hero-content"', 'timeline({delay:.12}).to(".hero-content"');
    fs.writeFileSync(mainBundlePath, bundle, 'utf8');
    console.log('Reduced hero entrance delay from 1.0s to 0.12s in index-Bf_sU-QZ.js');
  }
}

function patchExperienceJs() {
  let js = fs.readFileSync(jsPath, 'utf8');

  const startMarker = '  // 3. Inject Hero Page Elements';
  const legacyMarker = '        // 3. Inject Hero Page Elements';
  const sIdx = js.indexOf(startMarker) >= 0 ? js.indexOf(startMarker) : js.indexOf(legacyMarker);
  const endMarker = '  // 3b. Inject Video Section Switcher & Factory Tour Controller';
  const eIdx = js.indexOf(endMarker);
  if (sIdx < 0 || eIdx < 0 || eIdx <= sIdx) {
    throw new Error(`Could not locate injectHeroElements markers in ${jsPath}`);
  }

  const newHeroBlock = `  // 3. Inject Hero Page Elements (24-Card Full Exhibition Wall, Ribbon & Category Bar)
  function injectHeroElements() {
    const hero = document.querySelector('.hero-container');
    if (!hero) {
      setTimeout(injectHeroElements, 250);
      return;
    }

    // Top Banner Ribbon (Matches Editorial Rotated Stamp)
    if (!document.getElementById('angHeroTopBanner')) {
      const topBanner = document.createElement('div');
      topBanner.id = 'angHeroTopBanner';
      topBanner.className = 'ang-hero-top-banner';
      topBanner.innerHTML = '<span>Est. 1995 • 50,000+ Royal Celebrations</span>';
      hero.appendChild(topBanner);
    }

    // Remove any legacy floating price/store cards if present
    hero.querySelectorAll('.ang-hero-floating-card').forEach(el => el.remove());

    // Build Dense Full-Hero 24-Cutout Exhibition Wall (Zero Price Tags)
    if (!document.getElementById('angHeroCutoutsWall')) {
      const wall = document.createElement('div');
      wall.id = 'angHeroCutoutsWall';
      wall.className = 'ang-hero-cutouts-wall';
      wall.setAttribute('aria-label', 'Bespoke Wedding Card Cutouts Collage');

      const cutoutWallSpecs = [
        // Row 1: Upper Corners, Outer Top Flanks & Behind Top Title Aura
        { slot: 'slot-lt-outer', src: './images/cards/cutouts/KNLW202568.webp', alt: 'Lotus Mandala Laser-Cut Wedding Card', pid: 'KNLW202568' },
        { slot: 'slot-lt-inner', src: './images/cards/cutouts/KNLW202557.webp', alt: 'Marigold Haldi Scallop Suite', pid: 'KNLW202557' },
        { slot: 'slot-top-mid-l', src: './images/cards/cutouts/KNLW202575.webp', alt: 'Botanical Gold Foil Invitation', pid: 'KNLW202575' },
        { slot: 'slot-top-center-l', src: './images/cards/cutouts/KNLW202574.webp', alt: 'Ivory Arch Hardbound Keepsake Book', pid: 'KNLW202574' },
        { slot: 'slot-top-center-c', src: './images/cards/cutouts/KNLW202568.webp', alt: 'Pink Lotus Gatefold Wedding Invitation', pid: 'KNLW202568' },
        { slot: 'slot-top-center-r', src: './images/cards/cutouts/KNLW202557.webp', alt: 'Saffron Haldi Ceremonial Suite', pid: 'KNLW202557' },
        { slot: 'slot-top-mid-r', src: './images/cards/cutouts/KNLW202574.webp', alt: 'Ivory Arch Hardbound Wedding Book', pid: 'KNLW202574' },
        { slot: 'slot-rt-inner', src: './images/cards/cutouts/KNLW-BLUE-PALACE.webp', alt: 'Sapphire Palace Elephants Wedding Suite', pid: 'KNLW202576' },
        { slot: 'slot-rt-outer', src: './images/cards/cutouts/KNLW202566.webp', alt: 'Ruby Tirupati Balaji Wedding Invitation', pid: 'KNLW202566' },

        // Row 2: Mid Left & Right Wings + Inner Framing Behind Typography & Pills
        { slot: 'slot-ml-outer', src: './images/cards/cutouts/KNLW202559.webp', alt: 'Maroon Velvet Royal Scroll Box', pid: 'KNLW202559' },
        { slot: 'slot-ml-inner', src: './images/cards/cutouts/KNAM4902.webp', alt: 'Emerald Mughal Arch Cutout Card', pid: 'KNAM4902' },
        { slot: 'slot-mid-halo-l', src: './images/cards/cutouts/KNLW-BLUE-PALACE.webp', alt: 'Royal Blue Palace Gatefold', pid: 'KNLW202576' },
        { slot: 'slot-center-back-l', src: './images/cards/cutouts/KNLW202573.webp', alt: 'Peacock Silver Filigree Gatefold', pid: 'KNLW202573' },
        { slot: 'slot-mid-core-c', src: './images/cards/cutouts/KNLW202568.webp', alt: 'Pink Lotus Mandala Wedding Gatefold', pid: 'KNLW202568' },
        { slot: 'slot-center-back-r', src: './images/cards/cutouts/KNLW202562.webp', alt: 'Gilded Lattice Door Wedding Box', pid: 'KNLW202562' },
        { slot: 'slot-mid-halo-r', src: './images/cards/cutouts/KNLW202566.webp', alt: 'Crimson Balaji Ceremonial Suite', pid: 'KNLW202566' },
        { slot: 'slot-mr-inner', src: './images/cards/cutouts/KNLW202568.webp', alt: 'Rose Lotus Gatefold Suite', pid: 'KNLW202568' },
        { slot: 'slot-mr-outer', src: './images/cards/cutouts/KNLW202573.webp', alt: 'White Peacock Monogram Door Card', pid: 'KNLW202573' },

        // Row 3: Lower Corners, Inner Mid-Bottom & Foreground Exhibition Spread
        { slot: 'slot-bl-outer', src: './images/cards/cutouts/KNLW202557.webp', alt: 'Saffron Haldi Ceremonial Suite', pid: 'KNLW202557' },
        { slot: 'slot-bl-inner', src: './images/cards/cutouts/KNAM4902.webp', alt: 'Royal Emerald Courtyard Wedding Suite', pid: 'KNAM4902' },
        { slot: 'slot-mid-core-l', src: './images/cards/cutouts/KNLW202559.webp', alt: 'Velvet Scroll Royal Invitation Box', pid: 'KNLW202559' },
        { slot: 'slot-mid-core-r', src: './images/cards/cutouts/KNLW202575.webp', alt: 'Botanical Gold Filigree Suite', pid: 'KNLW202575' },
        { slot: 'slot-br-inner', src: './images/cards/cutouts/KNLW202574.webp', alt: 'Cream Hardbound Keepsake Wedding Album', pid: 'KNLW202574' },
        { slot: 'slot-br-outer', src: './images/cards/cutouts/KNLW202562.webp', alt: 'Champagne Gold Monogram Box', pid: 'KNLW202562' }
      ];

      cutoutWallSpecs.forEach((spec, idx) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = \`ang-hero-cutout-item \${spec.slot}\`;
        item.style.setProperty('--deal-delay', \`\${Math.min(idx * 28, 420)}ms\`);
        item.setAttribute('aria-label', \`Preview \${spec.alt} in Atelier\`);
        item.innerHTML = \`<img src="\${spec.src}" alt="\${spec.alt}" fetchpriority="high" decoding="async">\`;
        item.addEventListener('click', () => {
          const matched = royalProducts.find(p => p.id === spec.pid) || royalProducts[idx % royalProducts.length];
          if (window.loadProductIntoCustomizer) {
            window.loadProductIntoCustomizer(matched);
          } else if (window.openDrawer) {
            window.openDrawer('customizer');
          }
        });
        wall.appendChild(item);
      });

      const heroContentEl = hero.querySelector('.hero-content');
      if (heroContentEl) {
        hero.insertBefore(wall, heroContentEl);
      } else {
        hero.appendChild(wall);
      }

      // Subtle desktop pointer parallax on cutout wall (GPU transform, reduced-motion safe)
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.innerWidth >= 1025) {
        let rafId = 0;
        let targetX = 0;
        let targetY = 0;
        hero.addEventListener('pointermove', (ev) => {
          if (ev.pointerType !== 'mouse') return;
          const rect = hero.getBoundingClientRect();
          targetX = ((ev.clientX - rect.left) / rect.width - 0.5) * 18;
          targetY = ((ev.clientY - rect.top) / rect.height - 0.5) * 12;
          if (!rafId) {
            rafId = requestAnimationFrame(() => {
              rafId = 0;
              wall.style.setProperty('--parallax-x', \`\${targetX.toFixed(2)}px\`);
              wall.style.setProperty('--parallax-y', \`\${targetY.toFixed(2)}px\`);
            });
          }
        }, { passive: true });
      }
    }

    // Ensure Panoramic Spread Cutout Anchor exists on BOTH Desktop and Mobile
    if (!hero.querySelector('.ang-hero-panoramic-wrap')) {
      const panWrap = document.createElement('div');
      panWrap.className = 'ang-hero-panoramic-wrap';
      panWrap.innerHTML = '<img src="./images/hero-cards-panoramic.webp" alt="King of Cards Luxury Wedding Cards Collection" fetchpriority="high" decoding="async">';
      const heroContentEl = hero.querySelector('.hero-content');
      if (heroContentEl) {
        hero.insertBefore(panWrap, heroContentEl);
      } else {
        hero.appendChild(panWrap);
      }
    }
    const panImg = hero.querySelector('.ang-hero-panoramic-wrap img');
    if (panImg && !panImg.dataset.wired) {
      panImg.dataset.wired = '1';
      panImg.style.cursor = 'pointer';
      panImg.title = 'Click to customize any card in our 3D Atelier';
      panImg.addEventListener('click', () => {
        if (window.openDrawer) window.openDrawer('customizer');
      });
    }

    // Category Filter Pills Bar (Inside Foreground Layer below Hero CTA)
    const heroContent = hero.querySelector('.hero-content');
    if (heroContent && !document.getElementById('angHeroCategories')) {
      const catBar = document.createElement('div');
      catBar.id = 'angHeroCategories';
      catBar.className = 'ang-hero-categories-bar';
      catBar.innerHTML = \`
        <a href="#all-suites" class="ang-hero-cat-pill" data-cat="wedding">💌 Wedding Cards</a>
        <a href="#all-suites" class="ang-hero-cat-pill" data-cat="boxed">🎁 Gifting & Boxes</a>
        <a href="#all-suites" class="ang-hero-cat-pill" data-cat="scrolls">📜 Royal Boxed Scrolls</a>
        <a href="#all-suites" class="ang-hero-cat-pill" data-cat="laser-cut">✂️ Laser-Cut Lace</a>
        <a href="#all-suites" class="ang-hero-cat-pill" data-cat="sacred">🕉️ Sacred Motifs</a>
        <a href="#all-suites" class="ang-hero-cat-pill" data-cat="books">💎 Hardbound Books</a>
      \`;
      heroContent.appendChild(catBar);

      const catMap = { wedding: 'all', boxed: 'boxed', scrolls: 'boxed', 'laser-cut': 'laser-cut', sacred: 'sacred', books: 'books' };
      catBar.querySelectorAll('.ang-hero-cat-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
          e.preventDefault();
          const rawCat = pill.getAttribute('data-cat');
          const targetFilter = catMap[rawCat] || 'all';
          const filterBtn = document.querySelector(\`.ang-filter-btn[data-filter="\${targetFilter}"]\`);
          if (filterBtn) filterBtn.click();
          const targetSec = document.getElementById('atelier-all-products');
          smoothScrollToEl(targetSec);
        });
      });
    }

    const heroExploreBtn = hero.querySelector('.hero-button');
    if (heroExploreBtn && !heroExploreBtn.dataset.wired) {
      heroExploreBtn.dataset.wired = '1';
      heroExploreBtn.style.cursor = 'pointer';
      heroExploreBtn.addEventListener('click', () => {
        const showcase = document.getElementById('royal-horizontal-showcase') || document.getElementById('atelier-all-products');
        smoothScrollToEl(showcase);
      });
    }
  }

`;

  js = js.slice(0, sIdx) + newHeroBlock + js.slice(eIdx);
  fs.writeFileSync(jsPath, js, 'utf8');
  console.log('Updated 24-card injectHeroElements in angraity-experience.js');
}

function patchExperienceCss() {
  let css = fs.readFileSync(cssPath, 'utf8');

  const markerStart = '\n/* === HERO PURE CARD CUTOUT WALL (PC + MOBILE) === */';
  const existingWallIdx = css.indexOf(markerStart);
  if (existingWallIdx >= 0) {
    css = css.slice(0, existingWallIdx);
  }

  const wallCss = `

/* === HERO PURE CARD CUTOUT WALL (PC + MOBILE) === */
.hero-container {
  background: radial-gradient(circle at 50% 42%, #fff6ec 0%, #faeade 52%, #efe0ce 100%) !important;
}

/* Hide React mobile single hero artwork so unified dense Cutout Wall + Panorama renders on all viewports */
.hero-container > img[src*="hero-img"],
.hero-container > img[src*="hero-bg"] {
  display: none !important;
}

.ang-hero-top-banner {
  left: 17.75rem;
}

.ang-hero-cutouts-wall {
  --parallax-x: 0px;
  --parallax-y: 0px;
  position: absolute;
  inset: 0;
  z-index: 8;
  pointer-events: auto;
  overflow: hidden;
  transform: translate3d(calc(var(--parallax-x) * 0.4), calc(var(--parallax-y) * 0.4), 0);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.ang-hero-cutout-item {
  position: absolute;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  pointer-events: auto;
  display: block;
  transform: translate3d(0, 0, 0) rotate(var(--r, 0deg)) scale(var(--s, 1));
  opacity: 0;
  animation: angCutoutDealIn 0.72s cubic-bezier(0.22, 1, 0.36, 1) var(--deal-delay, 0ms) forwards;
  transition: transform 0.42s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease;
  will-change: transform;
  outline: none;
}

.ang-hero-cutout-item img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
  filter: drop-shadow(0 12px 24px rgba(58, 30, 18, 0.24));
}

.ang-hero-cutout-item:hover {
  z-index: 25 !important;
  transform: translate3d(0, -10px, 0) rotate(calc(var(--r, 0deg) * 0.25)) scale(calc(var(--s, 1) * 1.09));
}

.ang-hero-cutout-item:active {
  transform: translate3d(0, -3px, 0) rotate(calc(var(--r, 0deg) * 0.25)) scale(calc(var(--s, 1) * 0.96));
}

@keyframes angCutoutDealIn {
  0% {
    opacity: 0;
    transform: translate3d(0, 22px, 0) rotate(calc(var(--r, 0deg) + 8deg)) scale(calc(var(--s, 1) * 0.86));
  }
  100% {
    opacity: var(--o, 1);
    transform: translate3d(0, 0, 0) rotate(var(--r, 0deg)) scale(var(--s, 1));
  }
}

/* Crisp Feathered Radial Cream Glow Behind Foreground Typography Layer */
.hero-container .hero-content {
  z-index: 28 !important;
  pointer-events: none !important;
}

.hero-container .hero-content::before {
  content: "";
  position: absolute;
  top: 2.5%;
  left: 50%;
  transform: translateX(-50%);
  width: min(780px, 88vw);
  height: 430px;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(
    ellipse 55% 50% at 50% 44%,
    rgba(250, 234, 222, 0.96) 0%,
    rgba(250, 234, 222, 0.88) 42%,
    rgba(250, 234, 222, 0.52) 66%,
    rgba(250, 234, 222, 0) 92%
  );
}

.hero-container .hero-content .hero-title {
  pointer-events: auto;
  text-shadow: 0 2px 22px rgba(250, 234, 222, 0.98), 0 0 8px rgba(250, 234, 222, 0.95);
}

.hero-container .hero-content .hero-text-scroll {
  pointer-events: auto;
  box-shadow: 0 12px 30px rgba(82, 49, 34, 0.24);
}

.hero-container .hero-content .hero-text-scroll h1 {
  letter-spacing: 0.015em !important;
}

.hero-container .hero-content h2 {
  pointer-events: auto;
  background: rgba(250, 234, 222, 0.88);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1.5px solid rgba(162, 104, 51, 0.22);
  border-radius: 1rem;
  padding: 0.58rem 1.2rem;
  box-shadow: 0 10px 26px rgba(82, 49, 34, 0.12);
}

.hero-container .hero-content .hero-button {
  box-shadow: 0 10px 26px rgba(82, 49, 34, 0.22);
}

.hero-container .hero-content .hero-button,
.hero-container .hero-content .ang-hero-categories-bar,
.hero-container .hero-content .ang-hero-cat-pill {
  pointer-events: auto !important;
}

.hero-container .hero-content .ang-hero-cat-pill {
  background-color: rgba(250, 234, 222, 0.95);
  box-shadow: 0 4px 14px rgba(82, 49, 34, 0.12);
}

/* Panoramic Base Spread Anchored Along Bottom Edge Above Deep Cutouts */
.ang-hero-panoramic-wrap {
  z-index: 16 !important;
  bottom: -0.35rem !important;
  width: min(1220px, 92vw) !important;
  max-width: 1220px !important;
}

.ang-hero-panoramic-wrap img {
  max-height: 40vh !important;
}

/* -------- DESKTOP & LARGE SCREEN FULL-HERO 24-CARD WALL (>= 1025px) -------- */
@media (min-width: 1025px) {
  .hero-container .hero-content {
    translate: none !important;
    transform: none !important;
    padding-top: 5.4rem !important;
    justify-content: flex-start !important;
  }

  /* Upper Edge + Behind-Headline Exhibition Layer */
  .slot-lt-outer    { left: -2.2%;  top: 7%;    width: clamp(185px, 15.5vw, 250px); --r: -12deg; --o: 1;    z-index: 13; }
  .slot-lt-inner    { left: 9.5%;   top: 3%;    width: clamp(170px, 14vw, 225px);   --r: 7deg;   --o: 1;    z-index: 11; }
  .slot-top-mid-l   { left: 21%;    top: -3%;   width: clamp(155px, 12.5vw, 200px); --r: -14deg; --o: 0.94; z-index: 10; }
  .slot-top-center-l{ left: 32.5%;  top: 1.5%;  width: clamp(145px, 11.5vw, 185px); --r: -9deg;  --o: 0.72; z-index: 6;  }
  .slot-top-center-c{ left: 44.5%;  top: -3%;   width: clamp(150px, 11.5vw, 185px); --r: 5deg;   --o: 0.68; z-index: 5;  }
  .slot-top-center-r{ right: 32.5%; top: 1.5%;  width: clamp(145px, 11.5vw, 185px); --r: 10deg;  --o: 0.72; z-index: 6;  }
  .slot-top-mid-r   { right: 21%;   top: -3%;   width: clamp(155px, 12.5vw, 200px); --r: 14deg;  --o: 0.94; z-index: 10; }
  .slot-rt-inner    { right: 9.5%;  top: 5%;    width: clamp(165px, 13.5vw, 215px); --r: -7deg;  --o: 1;    z-index: 11; }
  .slot-rt-outer    { right: -2%;   top: 8.5%;  width: clamp(185px, 15.5vw, 245px); --r: 12deg;  --o: 1;    z-index: 13; }

  /* Middle Lateral Wings + Behind Typography Oval + Core Carpet */
  .slot-ml-outer     { left: -2.5%;  top: 30%; width: clamp(210px, 17.5vw, 285px); --r: -8deg;  --o: 1;    z-index: 14; }
  .slot-ml-inner     { left: 10%;    top: 26%; width: clamp(180px, 14.5vw, 235px); --r: 6deg;   --o: 1;    z-index: 11; }
  .slot-mid-halo-l   { left: 21.5%;  top: 20%; width: clamp(160px, 13vw, 210px);   --r: -10deg; --o: 0.82; z-index: 8;  }
  .slot-center-back-l{ left: 31%;    top: 34%; width: clamp(175px, 14.5vw, 230px); --r: -7deg;  --o: 0.72; z-index: 9;  }
  .slot-mid-core-c   { left: 43%;    top: 35%; width: clamp(180px, 14.5vw, 235px); --r: 3deg;   --o: 0.76; z-index: 9;  }
  .slot-center-back-r{ right: 31%;   top: 34%; width: clamp(175px, 14.5vw, 230px); --r: 7deg;   --o: 0.72; z-index: 9;  }
  .slot-mid-halo-r   { right: 21.5%; top: 20%; width: clamp(160px, 13vw, 210px);   --r: 10deg;  --o: 0.82; z-index: 8;  }
  .slot-mr-inner     { right: 10%;   top: 26%; width: clamp(180px, 14.5vw, 235px); --r: -6deg;  --o: 1;    z-index: 11; }
  .slot-mr-outer     { right: -2.5%; top: 30%; width: clamp(205px, 17vw, 275px);   --r: 9deg;   --o: 1;    z-index: 14; }

  /* Lower Tier Flanking Panoramic Spread & Bridging Mid-Bottom Stage */
  .slot-bl-outer     { left: -2.5%;  bottom: -2%; width: clamp(220px, 18vw, 295px);   --r: 10deg;  --o: 1;    z-index: 18; }
  .slot-bl-inner     { left: 5%;     bottom: 18%; width: clamp(195px, 16vw, 255px);   --r: -7deg;  --o: 1;    z-index: 15; }
  .slot-mid-core-l   { left: 17.5%;  bottom: 24%; width: clamp(200px, 16.5vw, 265px); --r: -9deg;  --o: 0.96; z-index: 13; }
  .slot-mid-core-r   { right: 17.5%; bottom: 24%; width: clamp(200px, 16.5vw, 265px); --r: 9deg;   --o: 0.96; z-index: 13; }
  .slot-br-inner     { right: 5%;    bottom: 18%; width: clamp(195px, 16vw, 255px);   --r: 7deg;   --o: 1;    z-index: 15; }
  .slot-br-outer     { right: -2.5%; bottom: -2%; width: clamp(220px, 18vw, 295px);   --r: -10deg; --o: 1;    z-index: 18; }
}

/* -------- TABLET GEOMETRY (768px - 1024px) -------- */
@media (max-width: 1024px) and (min-width: 768px) {
  .hero-container .hero-content {
    padding-top: 5.5rem !important;
  }
  .ang-hero-panoramic-wrap {
    bottom: 0 !important;
    width: 106vw !important;
    max-width: none !important;
  }
  .ang-hero-panoramic-wrap img {
    max-height: 31dvh !important;
  }
  .slot-lt-outer    { left: -4%;  top: 7%;    width: 24vw; --r: -13deg; z-index: 12; }
  .slot-lt-inner    { left: 12%;  top: 4.5%;  width: 20vw; --r: 7deg;   z-index: 10; }
  .slot-top-mid-l   { left: 26%;  top: -2%;   width: 18vw; --r: -12deg; --o: 0.72; z-index: 8; }
  .slot-top-center-l{ left: 36%;  top: 8%;    width: 18vw; --r: -8deg;  --o: 0.45; z-index: 6; }
  .slot-top-center-c{ left: 43%;  top: -1%;   width: 17vw; --r: 4deg;   --o: 0.48; z-index: 5; }
  .slot-top-center-r{ right: 36%; top: 8%;    width: 18vw; --r: 8deg;   --o: 0.45; z-index: 6; }
  .slot-top-mid-r   { right: 26%; top: -2%;   width: 18vw; --r: 12deg;  --o: 0.72; z-index: 8; }
  .slot-rt-inner    { right: 11%; top: 5.5%;  width: 20vw; --r: -8deg;  z-index: 10; }
  .slot-rt-outer    { right: -4%; top: 8%;    width: 23vw; --r: 13deg;  z-index: 12; }

  .slot-ml-outer     { left: -5%;  top: 30%; width: 25vw; --r: -9deg;  z-index: 14; }
  .slot-ml-inner     { left: 9%;   top: 32%; width: 21vw; --r: 6deg;   --o: 0.8; z-index: 9; }
  .slot-mid-halo-l   { left: 22%;  top: 36%; width: 20vw; --r: -9deg;  --o: 0.68; z-index: 8; }
  .slot-center-back-l{ left: 30%;  top: 44%; width: 22vw; --r: -7deg;  --o: 0.85; z-index: 12; }
  .slot-mid-core-c   { left: 40%;  top: 48%; width: 22vw; --r: 2deg;   --o: 0.9;  z-index: 13; }
  .slot-center-back-r{ right: 30%; top: 44%; width: 22vw; --r: 7deg;   --o: 0.85; z-index: 12; }
  .slot-mid-halo-r   { right: 22%; top: 36%; width: 20vw; --r: 9deg;   --o: 0.68; z-index: 8; }
  .slot-mr-inner     { right: 9%;  top: 32%; width: 21vw; --r: -6deg;  --o: 0.8; z-index: 9; }
  .slot-mr-outer     { right: -5%; top: 30%; width: 24vw; --r: 9deg;   z-index: 14; }

  .slot-bl-outer     { left: -4%;  bottom: 2%;  width: 28vw; --r: 9deg;  z-index: 18; }
  .slot-bl-inner     { left: 15%;  bottom: 16%; width: 24vw; --r: -7deg; z-index: 14; }
  .slot-mid-core-l   { left: 28%;  bottom: 24%; width: 23vw; --r: -8deg; z-index: 11; }
  .slot-mid-core-r   { right: 28%; bottom: 24%; width: 23vw; --r: 8deg;  z-index: 11; }
  .slot-br-inner     { right: 15%; bottom: 16%; width: 24vw; --r: 7deg;  z-index: 14; }
  .slot-br-outer     { right: -4%; bottom: 2%;  width: 27vw; --r: -9deg; z-index: 18; }
}

/* -------- MOBILE PHONE FULL 24-CARD CARPET GEOMETRY (<= 767px) -------- */
@media (max-width: 767px) {
  .hero-container {
    min-height: 100dvh;
    height: 100dvh;
  }

  .hero-container .hero-content {
    z-index: 28 !important;
    padding-top: 4.6rem !important;
    padding-inline: 0.7rem !important;
    justify-content: flex-start !important;
    translate: none !important;
    transform: none !important;
  }

  .hero-container .hero-content::before {
    top: 3.1rem;
    width: 96vw;
    height: 315px;
    background: radial-gradient(
      ellipse 56% 52% at 50% 45%,
      rgba(250, 234, 222, 0.94) 0%,
      rgba(250, 234, 222, 0.80) 44%,
      rgba(250, 234, 222, 0.44) 68%,
      rgba(250, 234, 222, 0) 94%
    );
  }

  .hero-container .hero-content .hero-title {
    font-size: clamp(2.2rem, 9.4vw, 3.1rem) !important;
    line-height: 0.92 !important;
    margin-bottom: 0.35rem !important;
  }

  .hero-container .hero-content .hero-text-scroll {
    margin-bottom: 0.42rem !important;
    border-width: 2.5px !important;
  }

  .hero-container .hero-content .hero-text-scroll h1 {
    font-size: clamp(0.95rem, 4.1vw, 1.35rem) !important;
    line-height: 1.08 !important;
    letter-spacing: 0.02em !important;
    padding: 0.25rem 0.65rem !important;
  }

  .hero-container .hero-content h2 {
    margin-top: 0.22rem !important;
    font-size: 0.78rem !important;
    line-height: 1.28 !important;
    max-width: 90vw !important;
    padding: 0.38rem 0.7rem !important;
  }

  .hero-container .hero-content .hero-button {
    margin-top: 0.48rem !important;
    padding: 0.5rem 1.3rem !important;
    font-size: 0.84rem !important;
  }

  .ang-hero-categories-bar {
    margin-top: 0.42rem !important;
    gap: 0.26rem !important;
    max-width: 95vw !important;
  }

  .ang-hero-cat-pill {
    padding: 0.22rem 0.5rem !important;
    font-size: 0.66rem !important;
    border-width: 1.5px !important;
    background-color: rgba(250, 234, 222, 0.96) !important;
  }

  /* Panoramic Wedding Suites Anchor Along Bottom of Mobile Screen */
  .ang-hero-panoramic-wrap {
    bottom: -0.25rem !important;
    width: 130vw !important;
    max-width: none !important;
    z-index: 18 !important;
  }

  .ang-hero-panoramic-wrap img {
    max-height: 27dvh !important;
    width: 100% !important;
  }

  /* Full-Screen 24-Cutout Mobile Collage: Upper Behind-Header, Mid Perimeter & Dense Mid-to-Bottom Blanket */
  .slot-lt-outer     { left: -9%;  top: 5.5%;  width: 34vw; --r: -15deg; --o: 1;    z-index: 12; }
  .slot-lt-inner     { left: 15%;  top: 2.5%;  width: 29vw; --r: 7deg;   --o: 0.9;  z-index: 9;  }
  .slot-top-mid-l    { left: 26%;  top: 13%;   width: 30vw; --r: -10deg; --o: 0.62; z-index: 7;  }
  .slot-top-center-l { left: 12%;  top: 18%;   width: 31vw; --r: 5deg;   --o: 0.58; z-index: 6;  }
  .slot-top-center-c { left: 36%;  top: 4%;    width: 28vw; --r: 3deg;   --o: 0.64; z-index: 6;  }
  .slot-top-center-r { right: 12%; top: 18%;   width: 31vw; --r: -5deg;  --o: 0.58; z-index: 6;  }
  .slot-top-mid-r    { right: 26%; top: 13%;   width: 30vw; --r: 10deg;  --o: 0.62; z-index: 7;  }
  .slot-rt-inner     { right: 14%; top: 3%;    width: 29vw; --r: -8deg;  --o: 0.9;  z-index: 9;  }
  .slot-rt-outer     { right: -9%; top: 6%;    width: 33vw; --r: 14deg;  --o: 1;    z-index: 12; }

  /* Mid Band Filling Everything Around & Directly Under Category Pills (Zero Empty Gap!) */
  .slot-ml-outer     { left: -11%; top: 23%; width: 35vw; --r: -11deg; --o: 1;    z-index: 13; }
  .slot-ml-inner     { left: -4%;  top: 39%; width: 38vw; --r: 7deg;   --o: 1;    z-index: 12; }
  .slot-mid-halo-l   { left: 19%;  top: 36%; width: 35vw; --r: -9deg;  --o: 0.96; z-index: 12; }
  .slot-center-back-l{ left: 12%;  top: 43%; width: 37vw; --r: -7deg;  --o: 1;    z-index: 14; }
  .slot-mid-core-c   { left: 31%;  top: 39%; width: 38vw; --r: 3deg;   --o: 1;    z-index: 15; }
  .slot-center-back-r{ right: 12%; top: 43%; width: 37vw; --r: 7deg;   --o: 1;    z-index: 14; }
  .slot-mid-halo-r   { right: 19%; top: 36%; width: 35vw; --r: 9deg;   --o: 0.96; z-index: 12; }
  .slot-mr-inner     { right: -4%; top: 39%; width: 38vw; --r: -7deg;  --o: 1;    z-index: 12; }
  .slot-mr-outer     { right: -11%;top: 23%; width: 35vw; --r: 11deg;  --o: 1;    z-index: 13; }

  /* Lower Tier Anchoring Bottom Horizon */
  .slot-bl-outer     { left: -6%;  bottom: 4%;  width: 40vw; --r: 10deg;  --o: 1; z-index: 19; }
  .slot-bl-inner     { left: 8%;   bottom: 17%; width: 43vw; --r: -7deg;  --o: 1; z-index: 16; }
  .slot-mid-core-l   { left: -6%;  bottom: 30%; width: 41vw; --r: -11deg; --o: 1; z-index: 15; }
  .slot-mid-core-r   { right: -6%; bottom: 30%; width: 41vw; --r: 11deg;  --o: 1; z-index: 15; }
  .slot-br-inner     { right: 8%;  bottom: 17%; width: 42vw; --r: 7deg;   --o: 1; z-index: 16; }
  .slot-br-outer     { right: -6%; bottom: 4%;  width: 40vw; --r: -10deg; --o: 1; z-index: 19; }
}

@media (prefers-reduced-motion: reduce) {
  .ang-hero-cutout-item {
    animation: none !important;
    opacity: var(--o, 1) !important;
    transition: none !important;
  }
  .ang-hero-cutouts-wall {
    transform: none !important;
  }
}
`;

  css = css + wallCss;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Updated 24-card hero wall CSS in angraity-experience.css');
}

await generateCutoutWebps();
patchMainBundleHeroTiming();
patchExperienceJs();
patchExperienceCss();
