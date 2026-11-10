import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { execSync } from 'child_process';

const root = process.cwd();

// =========================================================================
// 1. FIX CORE CSS: Prevent dual Chromium scroll container (overflow-x: clip)
// =========================================================================
{
  const cssPath = path.join(root, 'dist', 'assets', 'index-aLWHP3o0.css');
  let css = fs.readFileSync(cssPath, 'utf8');
  const target = 'overflow-x:hidden}body::-webkit-scrollbar';
  if (!css.includes(target)) {
    throw new Error('Could not find overflow-x:hidden in index-aLWHP3o0.css');
  }
  css = css.replace(
    target,
    'overflow-x:clip}html,body{overflow-x:clip}#smooth-wrapper{overflow:hidden}#smooth-content{will-change:transform}body::-webkit-scrollbar'
  );
  fs.writeFileSync(cssPath, css);
  console.log('[1/5] Fixed index-aLWHP3o0.css overflow-x:clip & #smooth-wrapper/#smooth-content');
}

// =========================================================================
// 2. FIX CORE JS BUNDLE: ScrollSmoother, Ticker, Video Preload, Lazy Imgs, Footer
// =========================================================================
{
  const jsPath = path.join(root, 'dist', 'assets', 'index-Bf_sU-QZ.js');
  let js = fs.readFileSync(jsPath, 'utf8');

  const replacements = [
    // Eager load big-img.webp so 84/84 images load upfront with zero lazy pop
    [
      'j.jsx("img",{src:"./images/big-img.webp",loading:"lazy",alt:"",className:"big-img"})',
      'j.jsx("img",{src:"./images/big-img.webp",loading:"eager",decoding:"async",alt:"",className:"big-img"})',
      'big-img eager'
    ],
    // Set preload="metadata" on all 7 testimonials videos so scroll doesn't stall decoding 7 unhovered streams
    [
      'j.jsx("video",{ref:c=>o.current[u]=c,src:a.src,playsInline:!0,muted:!0,loop:!0,className:"size-full object-cover"})',
      'j.jsx("video",{ref:c=>o.current[u]=c,src:a.src,preload:"metadata",playsInline:!0,muted:!0,loop:!0,className:"size-full object-cover"})',
      'testimonial videos preload=metadata'
    ],
    // Fix Footer #ROYALCELEBRATIONS stacking & position footer-drink cleanly behind/left of text
    [
      'j.jsx("div",{className:"overflow-hidden z-10",children:j.jsx("h1",{className:"general-title text-center text-milk py-5",children:"#ROYALCELEBRATIONS"})})',
      'j.jsx("div",{className:"overflow-hidden relative z-20",children:j.jsx("h1",{className:"general-title text-center text-milk py-5",children:"#ROYALCELEBRATIONS"})})',
      'footer heading relative z-20'
    ],
    [
      'j.jsx("img",{src:"./images/footer-drink.webp",loading:"lazy",className:"absolute top-0 object-contain drop-shadow-[0_25px_50px_rgba(180,154,104,0.4)]"})',
      'j.jsx("img",{src:"./images/footer-drink.webp",loading:"eager",decoding:"async",alt:"King of Cards Royal Boxed Scroll",className:"footer-royal-scroll-img"})',
      'footer-drink eager & non-overlapping class'
    ],
    [
      'j.jsxs("div",{className:"flex-center gap-5 relative z-10 md:mt-20 mt-5"',
      'j.jsxs("div",{className:"flex-center gap-5 relative z-20 md:mt-20 mt-5"',
      'footer social icons z-20'
    ],
    [
      'j.jsxs("div",{className:"mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium"',
      'j.jsxs("div",{className:"mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium relative z-20"',
      'footer links z-20'
    ],
    [
      'j.jsxs("div",{className:"copyright-box"',
      'j.jsxs("div",{className:"copyright-box relative z-20"',
      'footer copyright z-20'
    ],
    // Tune GSAP ScrollSmoother + ScrollTrigger + ticker for jitter-free 60-120fps scrolling
    [
      'Qe.registerPlugin(Kt,Ia);window.__spyltGSAP=Qe;window.__spyltST=Kt;window.__spyltSmoother=Ia;const ST=()=>(Zl(()=>{window.__spyltSmootherInstance=Ia.create({smooth:2,effects:!0,smoothTouch:.1})})',
      'Qe.registerPlugin(Kt,Ia);Qe.ticker.lagSmoothing(0);Kt.config({ignoreMobileResize:!0});window.__spyltGSAP=Qe;window.__spyltST=Kt;window.__spyltSmoother=Ia;const ST=()=>(Ae.useLayoutEffect(()=>{window.__spyltSmootherInstance=Ia.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1.4,effects:!0,smoothTouch:.15,normalizeScroll:{allowNestedScroll:!0,debounce:!0},ignoreMobileResize:!0});return()=>{try{window.__spyltSmootherInstance&&window.__spyltSmootherInstance.kill()}catch(e){}}},[])',
      'ScrollSmoother layoutEffect + normalizeScroll + lagSmoothing(0)'
    ]
  ];

  for (const [findStr, replStr, label] of replacements) {
    if (!js.includes(findStr)) {
      throw new Error(`Pattern not found in index-Bf_sU-QZ.js: ${label}`);
    }
    js = js.replace(findStr, replStr);
    console.log(`  ✓ ${label}`);
  }

  fs.writeFileSync(jsPath, js);
  execSync(`node --check "${jsPath}"`, { stdio: 'inherit' });
  console.log('[2/5] Patched and syntax-verified index-Bf_sU-QZ.js');
}

// =========================================================================
// 3. FIX EXPERIENCE JS: MutationObserver mount, Panoramic click, Drawer Smoother pause, Mobile dedupe
// =========================================================================
{
  const expJsPath = path.join(root, 'dist', 'assets', 'angraity-experience.js');
  let expJs = fs.readFileSync(expJsPath, 'utf8');

  // a) Fix smoothScrollToEl fallback (remove native smooth scroll conflict + refresh before jump)
  const oldScrollFn = `  function smoothScrollToEl(el) {
    if (!el) return;
    try {
      const smoother = window.__spyltSmootherInstance || (window.__spyltSmoother && window.__spyltSmoother.get());
      if (smoother && typeof smoother.scrollTo === 'function') {
        smoother.scrollTo(el, true, 'top top');
        return;
      }
    } catch (e) {}
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }`;
  const newScrollFn = `  function smoothScrollToEl(el) {
    if (!el) return;
    try {
      const smoother = window.__spyltSmootherInstance || (window.__spyltSmoother && window.__spyltSmoother.get());
      if (smoother && typeof smoother.scrollTo === 'function') {
        smoother.scrollTo(el, true, 'top top');
        return;
      }
    } catch (e) {}
    window.scrollTo(0, Math.max(0, el.getBoundingClientRect().top + window.scrollY));
  }`;
  if (!expJs.includes(oldScrollFn)) throw new Error('smoothScrollToEl pattern missing');
  expJs = expJs.replace(oldScrollFn, newScrollFn);

  // b) Fix injectHeroElements panoramic click + mobile duplicate avoidance
  const oldPanBlock = `    // Ensure hero panoramic cards wrap exists
    if (!hero.querySelector('.ang-hero-panoramic-wrap')) {
      const panWrap = document.createElement('div');
      panWrap.className = 'ang-hero-panoramic-wrap';
      panWrap.innerHTML = \`
        <img src="./images/hero-cards-panoramic.webp" alt="Kings of Cards Luxury Wedding Cards Collection" fetchpriority="high" decoding="sync" onclick="openDrawer('customizer')" title="Click to customize any card in our 3D Atelier">
      \`;
      hero.appendChild(panWrap);
    }`;
  const newPanBlock = `    // Ensure hero panoramic cards wrap exists (avoid stacking on top of mobile React artwork)
    const hasMobileHeroArt = !!hero.querySelector('img[src*="hero-img"]');
    if (!hasMobileHeroArt && !hero.querySelector('.ang-hero-panoramic-wrap')) {
      const panWrap = document.createElement('div');
      panWrap.className = 'ang-hero-panoramic-wrap';
      panWrap.innerHTML = \`
        <img src="./images/hero-cards-panoramic.webp" alt="Kings of Cards Luxury Wedding Cards Collection" fetchpriority="high" decoding="sync">
      \`;
      hero.appendChild(panWrap);
    }
    const panImg = hero.querySelector('.ang-hero-panoramic-wrap img');
    if (panImg && !panImg.dataset.wired) {
      panImg.dataset.wired = '1';
      panImg.style.cursor = 'pointer';
      panImg.title = 'Click to customize any card in our 3D Atelier';
      panImg.addEventListener('click', () => {
        if (window.openDrawer) window.openDrawer('customizer');
      });
    }`;
  if (!expJs.includes(oldPanBlock)) throw new Error('oldPanBlock pattern missing');
  expJs = expJs.replace(oldPanBlock, newPanBlock);

  // c) Pause ScrollSmoother cleanly while Drawer or Modal is open so background doesn't fight inner scroll
  const oldOpenClose = `    window.openDrawer = function (tab = 'customizer') {
      setTab(tab);
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    window.closeDrawer = function () {
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    };`;
  const newOpenClose = `    window.openDrawer = function (tab = 'customizer') {
      setTab(tab);
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      try { window.__spyltSmootherInstance && window.__spyltSmootherInstance.paused(true); } catch (e) {}
    };

    window.closeDrawer = function () {
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
      try { window.__spyltSmootherInstance && window.__spyltSmootherInstance.paused(false); } catch (e) {}
    };`;
  if (!expJs.includes(oldOpenClose)) throw new Error('oldOpenClose pattern missing');
  expJs = expJs.replace(oldOpenClose, newOpenClose);

  // d) Pause ScrollSmoother during Sample Proof Confirmation modal too
  expJs = expJs.replace(
    `      modalBackdrop.style.opacity = '1';\n      modalBackdrop.style.pointerEvents = 'auto';\n      document.body.style.overflow = 'hidden';`,
    `      modalBackdrop.style.opacity = '1';\n      modalBackdrop.style.pointerEvents = 'auto';\n      document.body.style.overflow = 'hidden';\n      try { window.__spyltSmootherInstance && window.__spyltSmootherInstance.paused(true); } catch (e) {}`
  );
  expJs = expJs.replace(
    `      modalBackdrop.style.opacity = '0';\n      modalBackdrop.style.pointerEvents = 'none';\n      document.body.style.overflow = '';`,
    `      modalBackdrop.style.opacity = '0';\n      modalBackdrop.style.pointerEvents = 'none';\n      document.body.style.overflow = '';\n      try { window.__spyltSmootherInstance && window.__spyltSmootherInstance.paused(false); } catch (e) {}`
  );

  // e) Add MutationObserver on #root so injected sections mount immediately upon React render + refresh ST once
  const oldWireCall = `    // Wire Hero Elements
    injectHeroElements();
    injectVideoSwitcher();

    // Wire In-Flow Sections
    injectRunwayGallery();
    injectAllProductsSection();
    injectShowroomsSection();`;
  const newWireCall = `    const wireAllSections = () => {
      injectHeroElements();
      injectVideoSwitcher();
      injectRunwayGallery();
      injectAllProductsSection();
      injectShowroomsSection();
    };
    wireAllSections();
    const reactRootEl = document.getElementById('root');
    if (reactRootEl && 'MutationObserver' in window) {
      const obs = new MutationObserver(() => {
        wireAllSections();
        if (
          document.getElementById('angHeroTopBanner') &&
          document.getElementById('angVideoSwitcher') &&
          document.getElementById('royal-horizontal-showcase') &&
          document.getElementById('atelier-all-products') &&
          document.getElementById('atelier-showrooms-section')
        ) {
          obs.disconnect();
          scheduleScrollRefresh(180);
        }
      });
      obs.observe(reactRootEl, { childList: true, subtree: true });
    }`;
  if (!expJs.includes(oldWireCall)) throw new Error('oldWireCall pattern missing');
  expJs = expJs.replace(oldWireCall, newWireCall);

  fs.writeFileSync(expJsPath, expJs);
  execSync(`node --check "${expJsPath}"`, { stdio: 'inherit' });
  console.log('[3/5] Patched and syntax-verified angraity-experience.js');
}

// =========================================================================
// 4. FIX EXPERIENCE CSS: Hero badges z-index, Footer Scroll, Smooth Compositor, Mobile 390-1024px
// =========================================================================
{
  const expCssPath = path.join(root, 'dist', 'assets', 'angraity-experience.css');
  let css = fs.readFileSync(expCssPath, 'utf8');

  // Fix .ang-hero-card-badge z-index so photo never clips over badge
  const badgeTarget = `.ang-hero-card-badge {
  position: absolute;
  top: 0.35rem;
  left: 0.35rem;
  background-color: var(--color-red-brown);`;
  const badgeRepl = `.ang-hero-card-badge {
  position: absolute;
  top: 0.35rem;
  left: 0.35rem;
  z-index: 5;
  background-color: var(--color-red-brown);`;
  if (!css.includes(badgeTarget)) throw new Error('badgeTarget pattern missing');
  css = css.replace(badgeTarget, badgeRepl);

  // Append clean footer + GPU compositor + mobile/tablet responsive fixes (removing any duplicate appended block if re-run)
  const marker = '/* === AUDIT REFINEMENTS: FOOTER, COMPOSITOR & RESPONSIVE === */';
  const idx = css.indexOf(marker);
  if (idx !== -1) css = css.slice(0, idx).trimEnd() + '\n';

  css += `\n\n${marker}
.footer-royal-scroll-img {
  position: absolute;
  bottom: 0;
  left: 2vw;
  max-height: 68vh;
  width: auto;
  max-width: 32vw;
  object-fit: contain;
  object-position: bottom left;
  pointer-events: none;
  z-index: 5;
  opacity: 0.92;
  filter: drop-shadow(0 18px 34px rgba(0, 0, 0, 0.45));
}

/* Smooth GPU Layering inside ScrollSmoother without costly multi-pass blur shadows */
.ang-hero-floating-card,
.ang-runway-card,
.ang-grid-card {
  will-change: transform;
}

.ang-hero-panoramic-wrap img {
  filter: drop-shadow(0 16px 32px rgba(60, 30, 20, 0.32));
}

@media (max-width: 1200px) {
  .ang-luxury-header {
    right: 1rem;
    gap: 0.85rem;
    padding: 0.4rem 0.55rem 0.4rem 1rem;
  }
  .ang-nav-links {
    gap: 0.9rem;
  }
  .ang-nav-link {
    font-size: 0.98rem;
  }
}

@media (max-width: 1024px) {
  .footer-royal-scroll-img {
    opacity: 0.24;
    left: 50%;
    transform: translateX(-50%);
    max-width: 78vw;
    max-height: 50vh;
  }
  .hero-container .hero-content {
    z-index: 22 !important;
    padding-top: 4.9rem !important;
    padding-inline: 1rem !important;
    justify-content: flex-start !important;
    transform: none !important;
    translate: none !important;
  }
  .hero-container .hero-content .hero-title {
    font-size: clamp(2.45rem, 9vw, 4.4rem) !important;
    line-height: 0.96 !important;
    margin-bottom: 0.45rem !important;
  }
  .hero-container .hero-content .hero-text-scroll {
    margin-bottom: 0.65rem !important;
    border-width: 3px !important;
  }
  .hero-container .hero-content .hero-text-scroll h1 {
    font-size: clamp(1.25rem, 4.8vw, 2.5rem) !important;
    line-height: 1.08 !important;
    padding: 0.35rem 0.75rem !important;
  }
  .hero-container .hero-content h2 {
    background: rgba(250, 234, 222, 0.88);
    border-radius: 0.9rem;
    padding: 0.55rem 0.9rem;
    margin-top: 0.35rem !important;
    font-size: 0.9rem !important;
    line-height: 1.38 !important;
    max-width: 92vw !important;
    color: var(--color-dark-brown);
  }
  .hero-container .hero-content .hero-button {
    margin-top: 0.75rem !important;
    padding: 0.65rem 1.6rem !important;
    font-size: 0.95rem !important;
    position: relative;
    z-index: 26;
  }
  .ang-hero-categories-bar {
    margin-top: 0.7rem !important;
    gap: 0.35rem !important;
    max-width: 95vw !important;
  }
  .ang-hero-cat-pill {
    padding: 0.3rem 0.62rem !important;
    font-size: 0.74rem !important;
    border-width: 1.5px !important;
  }
}

@media (max-width: 900px) {
  nav.fixed {
    padding: 0.7rem !important;
  }
  nav.fixed img[alt="nav-logo"] {
    height: 36px !important;
    max-width: 150px !important;
  }
  .ang-luxury-header {
    top: 0.7rem;
    right: 0.7rem;
    left: auto;
    max-width: calc(100vw - 165px);
    padding: 0.28rem 0.42rem;
    gap: 0.45rem;
    border-width: 2px;
  }
  .ang-nav-links {
    gap: 0.4rem;
  }
  #navLinkRunway,
  #navLinkAllCards,
  #navLinkCraft,
  #navLinkStores {
    display: none;
  }
  .ang-nav-link {
    font-size: 0.8rem;
  }
  .ang-btn-customise {
    font-size: 0.8rem;
    padding: 0.35rem 0.75rem;
    border-width: 1.5px;
    white-space: nowrap;
  }
  .ang-video-info-badge {
    bottom: 6.75rem;
    font-size: 0.78rem;
    padding: 0.4rem 0.9rem;
  }
}
`;

  fs.writeFileSync(expCssPath, css);
  console.log('[4/5] Fixed angraity-experience.css (hero badges z-index, footer layout, GPU compositor, mobile 390px/tablet)');
}

// =========================================================================
// 5. OPTIMIZE GIANT FLOEMA IMAGES (43 MB -> ~2.5 MB) KEEPING EXACT FILENAMES
// =========================================================================
{
  const floemaImgsDir = path.join(root, 'dist', 'floema', 'images');
  const heavyFiles = [
    { name: '70e411b4618e84a57d0f87b713eb64bc25988f84-7084x4417.png', maxW: 1920, type: 'png' },
    { name: '25df657b91976f95bd5e0c6e2f0f3445175e09fc-3400x2120.png', maxW: 1920, type: 'png' },
    { name: 'a62fcc813d8289258e73376f2950fbeee9f05c20-3201x1396.png', maxW: 1800, type: 'png' },
    { name: '5d7a10dea3ce01853711d82742b7921140d35884-14167x8833.jpg', maxW: 1920, type: 'jpg' }
  ];

  for (const item of heavyFiles) {
    const p = path.join(floemaImgsDir, item.name);
    if (!fs.existsSync(p)) continue;
    const beforeKB = Math.round(fs.statSync(p).size / 1024);
    if (beforeKB < 950) {
      console.log(`  skip ${item.name} (${beforeKB} KB already compact)`);
      continue;
    }
    const tmp = p + '.tmp';
    const pipeline = sharp(p).resize({ width: item.maxW, withoutEnlargement: true });
    if (item.type === 'png') {
      await pipeline.png({ compressionLevel: 9, palette: true, quality: 82 }).toFile(tmp);
    } else {
      await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(tmp);
    }
    const afterKB = Math.round(fs.statSync(tmp).size / 1024);
    fs.renameSync(tmp, p);
    console.log(`  ✓ compressed ${item.name}: ${beforeKB} KB -> ${afterKB} KB`);
  }
  console.log('[5/5] Optimized oversized /floema/ images!');
}
