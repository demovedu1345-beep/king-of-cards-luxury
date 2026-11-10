import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const mainJsPath = path.join(root, 'dist', 'assets', 'index-Bf_sU-QZ.js');
const expCssPath = path.join(root, 'dist', 'assets', 'angraity-experience.css');

// 1. Patch index-Bf_sU-QZ.js: snappy ScrollSmoother + earlier .message-content reveal
let mainJs = fs.readFileSync(mainJsPath, 'utf8');

const oldSmoother = 'smooth:1.4,effects:!0,smoothTouch:.8,normalizeScroll:{allowNestedScroll:!0,debounce:!0},ignoreMobileResize:!0';
const newSmoother = 'smooth:1.05,effects:!0,smoothTouch:.18,normalizeScroll:{allowNestedScroll:!0,debounce:!0},ignoreMobileResize:!0';
if (mainJs.includes(oldSmoother)) {
  mainJs = mainJs.replace(oldSmoother, newSmoother);
  console.log('Updated ScrollSmoother config for snappier zero-lag feel (smooth:1.05, smoothTouch:.18)');
} else {
  console.warn('Warning: exact oldSmoother string not found');
}

const oldMsgTriggers = 'Qe.to(o.words,{color:"#faeade",ease:"power1.in",stagger:1,scrollTrigger:{trigger:".message-content",start:"top center",end:"30% center",scrub:!0}}),Qe.to(l.words,{color:"#faeade",ease:"power1.in",stagger:1,scrollTrigger:{trigger:".second-message",start:"top center",end:"bottom center",scrub:!0}}),Qe.timeline({scrollTrigger:{trigger:".msg-text-scroll",start:"top 85%"}}).to(".msg-text-scroll",{duration:.55,clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",ease:"circ.out"}),Qe.timeline({scrollTrigger:{trigger:".message-content p",start:"top center"}}).from(r.words,{yPercent:300,rotate:3,ease:"power1.inOut",duration:1,stagger:.01})';
const newMsgTriggers = 'Qe.to(o.words,{color:"#faeade",ease:"power1.in",stagger:1,scrollTrigger:{trigger:".message-content",start:"top 85%",end:"25% center",scrub:!0}}),Qe.to(l.words,{color:"#faeade",ease:"power1.in",stagger:1,scrollTrigger:{trigger:".second-message",start:"top 85%",end:"55% center",scrub:!0}}),Qe.timeline({scrollTrigger:{trigger:".msg-text-scroll",start:"top 88%"}}).to(".msg-text-scroll",{duration:.55,clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",ease:"circ.out"}),Qe.timeline({scrollTrigger:{trigger:".message-content p",start:"top 85%"}}).from(r.words,{yPercent:180,rotate:2,ease:"power2.out",duration:.75,stagger:.008})';
if (mainJs.includes(oldMsgTriggers)) {
  mainJs = mainJs.replace(oldMsgTriggers, newMsgTriggers);
  console.log('Updated .message-content ScrollTriggers for immediate mobile readability');
} else {
  console.warn('Warning: oldMsgTriggers not found');
}

const oldNutritionTrigger = 'Qe.timeline({scrollTrigger:{trigger:".nutrition-section",start:"top 85%"}}).from(a.chars,{yPercent:100,stagger:.02,ease:"power2.out"}).from(u.words,{yPercent:300,rotate:3,ease:"power1.inOut",duration:1,stagger:.01})';
const newNutritionTrigger = 'Qe.timeline({scrollTrigger:{trigger:".nutrition-section",start:"top 88%"}}).from(a.chars,{yPercent:100,stagger:.015,duration:.45,ease:"power2.out"}).from(u.words,{yPercent:120,rotate:2,ease:"power2.out",duration:.45,stagger:.005},"-=0.3")';
if (mainJs.includes(oldNutritionTrigger)) {
  mainJs = mainJs.replace(oldNutritionTrigger, newNutritionTrigger);
  console.log('Updated .nutrition-section reveal timing for fast mobile readability');
}

fs.writeFileSync(mainJsPath, mainJs, 'utf8');

// 2. Patch angraity-experience.css:
// - Remove redundant GPU-taxing filter:drop-shadow on 24 baked-shadow hero cutouts & 20 grid imgs + backdrop-filter blur on hero p/h2
// - Enlarge mobile/tablet/desktop typography and tighten wasted vertical whitespace across all sections
let css = fs.readFileSync(expCssPath, 'utf8');

// Lighten GPU compositor passes where shadows are already baked or container shadow is used
css = css.replace(
  /\.ang-hero-cutout-item\s*\{([^}]*)will-change:\s*transform;([^}]*)\}/,
  '.ang-hero-cutout-item {$1$2}'
);
css = css.replace(
  /\.ang-hero-cutout-item img\s*\{([^}]*)filter:\s*drop-shadow\([^;]+\);/,
  '.ang-hero-cutout-item img {$1/* alpha-baked shadow keeps 60-120fps scrolling clean */'
);
css = css.replace(
  /\.hero-container \.hero-content h2\s*\{([^}]*)backdrop-filter:\s*blur\(8px\);\s*-webkit-backdrop-filter:\s*blur\(8px\);/,
  '.hero-container .hero-content h2 {$1background: rgba(250, 234, 222, 0.94);'
);
css = css.replace(
  /\.ang-grid-card-img img\s*\{([^}]*)filter:\s*drop-shadow\([^;]+\);/,
  '.ang-grid-card-img img {$1box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);'
);
css = css.replace(
  /\.ang-runway-card-img img\s*\{([^}]*)filter:\s*drop-shadow\([^;]+\);/,
  '.ang-runway-card-img img {$1box-shadow: 0 8px 18px rgba(82, 49, 34, 0.16);'
);

const polishMarker = '\n/* === AUDIT V2: MOBILE TYPOGRAPHY SCALE, SPACE UTILIZATION & ZERO-LAG POLISH === */';
const existingPolish = css.indexOf(polishMarker);
if (existingPolish >= 0) {
  css = css.slice(0, existingPolish);
}

const polishCss = `

/* === AUDIT V2: MOBILE TYPOGRAPHY SCALE, SPACE UTILIZATION & ZERO-LAG POLISH === */

/* Desktop slight readability lift on Hero subtitle & section intros */
@media (min-width: 1025px) {
  .hero-container .hero-content h2 {
    font-size: clamp(1.06rem, 1.25vw, 1.28rem) !important;
    line-height: 1.45 !important;
  }
  .ang-section-sub {
    font-size: 1.2rem !important;
    line-height: 1.55 !important;
  }
}

/* Comprehensive Mobile & Small Tablet Overhaul (<= 1023px) */
@media (max-width: 1023px) {
  /* 0. Hero Mobile Typography Scale-Up (Crisp hierarchy while keeping dense cutout carpet) */
  .hero-container .hero-content {
    padding-top: 4.5rem !important;
  }
  .hero-container .hero-content::before {
    height: 365px !important;
  }
  .hero-container .hero-content .hero-title {
    font-size: clamp(2.75rem, 11.4vw, 3.85rem) !important;
    line-height: 0.92 !important;
    margin-bottom: 0.42rem !important;
  }
  .hero-container .hero-content .hero-text-scroll {
    margin-bottom: 0.5rem !important;
  }
  .hero-container .hero-content .hero-text-scroll h1 {
    font-size: clamp(1.14rem, 4.65vw, 1.6rem) !important;
    line-height: 1.08 !important;
    padding: 0.32rem 0.78rem !important;
  }
  .hero-container .hero-content h2 {
    font-size: 0.94rem !important;
    line-height: 1.34 !important;
    max-width: 93vw !important;
    padding: 0.5rem 0.85rem !important;
  }
  .hero-container .hero-content .hero-button {
    margin-top: 0.55rem !important;
    padding: 0.62rem 1.55rem !important;
    font-size: 0.98rem !important;
  }
  .ang-hero-categories-bar {
    margin-top: 0.52rem !important;
    gap: 0.32rem !important;
  }
  .ang-hero-cat-pill {
    padding: 0.28rem 0.62rem !important;
    font-size: 0.76rem !important;
  }

  /* 1. Message Content (.message-content) — Eliminate Giant Empty Vertical Gaps & Enlarge Text */
  .message-content {
    min-height: auto !important;
    height: auto !important;
    padding: 4.85rem 0.9rem 3.5rem !important;
  }
  .message-content .container,
  .message-content .py-28 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .message-content .msg-wrapper {
    gap: 1.25rem !important;
  }
  .message-content h1,
  .message-content .first-message,
  .message-content .second-message {
    font-size: clamp(2.45rem, 10.6vw, 3.85rem) !important;
    line-height: 0.96 !important;
    letter-spacing: -0.02em !important;
    max-width: 94vw !important;
    color: rgba(250, 234, 222, 0.92);
  }
  .message-content .msg-text-scroll {
    margin: 0.45rem auto !important;
    border-width: 3px !important;
  }
  .message-content .msg-text-scroll h2 {
    font-size: clamp(1.9rem, 8.2vw, 3.1rem) !important;
    line-height: 1.02 !important;
    padding: 0.42rem 1.15rem !important;
  }
  .message-content .mt-10,
  .message-content .md\\:mt-20 {
    margin-top: 1.75rem !important;
  }
  .message-content .px-10 {
    padding-inline: 0.5rem !important;
    max-width: 94vw !important;
  }
  .message-content p {
    font-size: 1.12rem !important;
    line-height: 1.5 !important;
    text-align: center !important;
  }

  /* 2. Horizontal Flavor Showcase (.flavor-section) — Bold Title + Peek First Card + Non-Clipped Card Titles */
  .flavor-section > div > div:first-child {
    width: 88vw !important;
    padding-inline: 0.75rem !important;
  }
  .flavor-section .general-title {
    gap: 1.5rem !important;
  }
  .flavor-section .first-text-split h1,
  .flavor-section .second-text-split h1 {
    font-size: clamp(2.7rem, 11.4vw, 4.15rem) !important;
    line-height: 0.94 !important;
    white-space: normal !important;
    text-align: center !important;
  }
  .flavor-section .flavor-text-scroll {
    border-width: 3.5px !important;
  }
  .flavor-section .flavor-text-scroll h2 {
    font-size: clamp(2.85rem, 13vw, 4.35rem) !important;
    line-height: 0.94 !important;
    padding: 0.35rem 1.15rem !important;
  }
  .flavor-section .slider-wrapper {
    padding-top: 4rem !important;
  }
  .flavor-section .slider-wrapper .flavors > div {
    width: 88vw !important;
    max-width: 420px !important;
    height: 75dvh !important;
    min-height: 530px !important;
    overflow: hidden !important;
  }
  .flavor-section .slider-wrapper .flavors h1 {
    font-size: 1.65rem !important;
    line-height: 1.06 !important;
    bottom: 1.1rem !important;
    left: 1.1rem !important;
    right: 1.1rem !important;
    max-width: calc(100% - 2.2rem) !important;
    white-space: normal !important;
    word-break: break-word !important;
  }

  /* 3. Nutrition Section (.nutrition-section) — Clean Column Stack Fixing Text/Image Overlap & Filling Space */
  .nutrition-section {
    height: auto !important;
    min-height: auto !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    padding-bottom: 1rem !important;
  }
  .nutrition-section > img.w-full {
    order: 0 !important;
    flex-shrink: 0 !important;
  }
  .nutrition-section > div:not(.nutrition-box) {
    order: 1 !important;
    margin-top: 0 !important;
    padding: 1.25rem 1.1rem 0.5rem !important;
    gap: 1.25rem !important;
    position: relative !important;
    z-index: 15 !important;
  }
  .nutrition-section .md\\:translate-y-20,
  .nutrition-section .translate-y-5 {
    transform: none !important;
    translate: none !important;
  }
  .nutrition-section .general-title {
    gap: 1rem !important;
    align-items: flex-start !important;
  }
  .nutrition-section .nutrition-title,
  .nutrition-section .nutrition-text-scroll h2 {
    font-size: clamp(2.85rem, 12.8vw, 4.25rem) !important;
    line-height: 0.94 !important;
  }
  .nutrition-section .nutrition-text-scroll {
    border-width: 3px !important;
  }
  .nutrition-section .nutrition-text-scroll > div {
    padding: 0.35rem 1rem !important;
  }
  .nutrition-section p.text-balance {
    font-size: 1.12rem !important;
    line-height: 1.48 !important;
    text-align: left !important;
    max-width: 94vw !important;
    color: #46281c !important;
  }
  .nutrition-section .big-img {
    order: 2 !important;
    position: relative !important;
    left: auto !important;
    bottom: auto !important;
    transform: none !important;
    width: 106vw !important;
    max-width: none !important;
    height: auto !important;
    margin: 0.65rem 0 0.5rem -3vw !important;
    z-index: 6 !important;
  }
  .nutrition-section .nutrition-box {
    order: 3 !important;
    position: relative !important;
    left: auto !important;
    bottom: auto !important;
    transform: none !important;
    translate: none !important;
    width: calc(100vw - 1.5rem) !important;
    max-width: 96vw !important;
    margin: 0.25rem auto 0 !important;
  }
  .nutrition-section .nutrition-box .list-wrapper {
    padding: 0.95rem 0.9rem !important;
  }
  .nutrition-section .nutrition-box .list-wrapper p:first-child {
    font-size: 0.95rem !important;
    font-weight: 700 !important;
  }
  .nutrition-section .nutrition-box .list-wrapper p:last-child {
    font-size: 1.65rem !important;
    line-height: 1.05 !important;
  }

  /* 4. Benefit Ribbons (.benefit-section) — Bold Full-Width Ribbons & Tight Vertical Rhythm */
  .benefit-section {
    min-height: auto !important;
    padding: 3.5rem 0.65rem 0 !important;
  }
  .benefit-section > div:first-child {
    padding-top: 0 !important;
    padding-bottom: 1.75rem !important;
  }
  .benefit-section .col-center > p,
  .benefit-section > div:first-child p {
    font-size: 1.22rem !important;
    line-height: 1.4 !important;
    max-width: 92vw !important;
    font-weight: 600 !important;
  }
  .benefit-section .mt-20 {
    margin-top: 1.5rem !important;
    gap: 0.45rem !important;
  }
  .benefit-section .general-title {
    max-width: 96vw !important;
    width: auto !important;
  }
  .benefit-section .general-title > div {
    max-width: 95vw !important;
    white-space: normal !important;
    border-width: 3px !important;
  }
  .benefit-section .general-title > div > div {
    padding: 0.5rem 1.05rem 0.6rem !important;
  }
  .benefit-section .general-title h2 {
    font-size: clamp(1.62rem, 7.1vw, 2.35rem) !important;
    line-height: 1.05 !important;
    letter-spacing: -0.01em !important;
    padding: 0 !important;
  }
  .benefit-section .vd-pin-section {
    margin-top: 0 !important;
  }

  /* 5. Video Tour Section (.vd-pin-section) — Legible Status Badge */
  .ang-video-info-badge {
    font-size: 0.85rem !important;
    padding: 0.42rem 0.95rem !important;
  }
  .ang-video-switcher-label,
  .ang-video-opt-btn {
    font-size: 0.84rem !important;
  }

  /* 6. Testimonials ("The Atelier Unboxings") — Larger Heading & Zero Letterbox Bars on Video Cards */
  .testimonials-section > div:first-child {
    padding-top: 4.5rem !important;
  }
  .testimonials-section h1 {
    font-size: clamp(3.25rem, 15vw, 4.75rem) !important;
    line-height: 0.92 !important;
  }
  .testimonials-section .pin-box {
    bottom: 7vh !important;
    height: 57vh !important;
  }
  .testimonials-section .pin-box .vd-card {
    width: 266px !important;
    height: 392px !important;
    left: calc(50% - 133px) !important;
  }
  .testimonials-section .pin-box .vd-card:nth-child(2n) {
    left: calc(50% - 144px) !important;
  }
  .testimonials-section .pin-box .vd-card:nth-child(3n) {
    left: calc(50% - 122px) !important;
  }
  .testimonials-section .pin-box .vd-card video {
    transform: scale(1.48) !important;
  }

  /* 7. Runway, All 20 Archive & Showrooms — Compact Padding, Horizontal Filter Strip, 2-Col Archive & Larger Type */
  .ang-runway-section,
  .ang-all-products-section,
  .ang-showrooms-section {
    padding: 3.75rem 0.95rem 3.5rem !important;
  }
  .ang-section-title {
    font-size: clamp(2.45rem, 10.6vw, 3.6rem) !important;
    line-height: 0.94 !important;
  }
  .ang-section-sub {
    font-size: 1.08rem !important;
    line-height: 1.48 !important;
  }
  .ang-runway-header,
  .ang-products-header {
    margin-bottom: 1.5rem !important;
  }
  .ang-runway-card-title {
    font-size: 1.85rem !important;
    min-height: auto !important;
  }
  .ang-runway-card-paper {
    font-size: 1.02rem !important;
  }
  .ang-showroom-box {
    padding: 1.5rem !important;
    gap: 0.75rem !important;
  }
  .ang-showroom-city {
    font-size: 2.2rem !important;
  }
  .ang-showroom-address,
  .ang-showroom-details {
    font-size: 1.04rem !important;
    line-height: 1.46 !important;
  }
  .ang-category-filter-bar {
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    justify-content: flex-start !important;
    gap: 0.5rem !important;
    padding: 0.2rem 0.25rem 0.5rem !important;
    margin-bottom: 1.5rem !important;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .ang-category-filter-bar::-webkit-scrollbar {
    display: none;
  }
  .ang-filter-btn {
    flex-shrink: 0 !important;
    white-space: nowrap !important;
    font-size: 0.95rem !important;
    padding: 0.52rem 1rem !important;
  }
  .ang-products-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 0.7rem !important;
  }
  .ang-grid-card {
    padding: 0.75rem !important;
    border-radius: 1.1rem !important;
  }
  .ang-grid-card-img {
    height: 145px !important;
    padding: 0.45rem !important;
  }
  .ang-grid-card-sku {
    font-size: 0.76rem !important;
    margin-top: 0.6rem !important;
  }
  .ang-grid-card-title {
    font-size: 1.15rem !important;
    line-height: 1.06 !important;
    min-height: 2.45rem !important;
    margin: 0.2rem 0 0.35rem !important;
  }
  .ang-grid-card-desc {
    font-size: 0.84rem !important;
    line-height: 1.35 !important;
    margin-bottom: 0.65rem !important;
  }
  .ang-grid-card-foot {
    padding-top: 0.55rem !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 0.45rem !important;
  }
  .ang-grid-card-price {
    font-size: 1.12rem !important;
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: baseline !important;
    gap: 0.35rem !important;
  }
  .ang-grid-card-btn {
    width: 100% !important;
    white-space: nowrap !important;
    font-size: 0.84rem !important;
    padding: 0.48rem 0.72rem !important;
  }

  /* 8. Footer Section (.footer-section) — Clean 2-Col Links, Zero mt-40 Gap & Larger Readable Copy */
  .footer-section > div {
    height: auto !important;
    min-height: auto !important;
    padding-top: 2.5rem !important;
    padding-bottom: 2.25rem !important;
  }
  .footer-section h1.general-title {
    font-size: clamp(2.55rem, 10.6vw, 3.8rem) !important;
    line-height: 1 !important;
    padding-block: 0.65rem !important;
  }
  .footer-section .mt-40 {
    margin-top: 2rem !important;
    gap: 1.75rem !important;
  }
  .footer-section .mt-40 > div:first-child {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    align-items: flex-start !important;
    gap: 1.15rem !important;
    width: 100% !important;
  }
  .footer-section .mt-40 > div:first-child p {
    font-size: 1.06rem !important;
    line-height: 1.48 !important;
  }
  .footer-section .md\\:max-w-lg > p {
    font-size: 1.05rem !important;
    line-height: 1.48 !important;
  }
  .footer-section input {
    font-size: 1.15rem !important;
  }
  .footer-section .copyright-box {
    margin-top: 1.75rem !important;
    padding-top: 0.85rem !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 0.75rem !important;
    font-size: 0.94rem !important;
    line-height: 1.45 !important;
    background: linear-gradient(180deg, rgba(34, 33, 35, 0) 0%, rgba(34, 33, 35, 0.78) 45%);
  }
  .footer-section .copyright-box p {
    font-size: 0.92rem !important;
  }
  .footer-royal-scroll-img {
    opacity: 0.14 !important;
    max-width: 75vw !important;
  }
}

@media (max-width: 375px) {
  .ang-products-grid {
    grid-template-columns: 1fr !important;
  }
}
`;

css = css + polishCss;
fs.writeFileSync(expCssPath, css, 'utf8');
console.log('Appended mobile typography, whitespace optimization & zero-lag GPU polish to angraity-experience.css');
