import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const root = process.cwd();

// 1. Patch dist/assets/index-Bf_sU-QZ.js to enable ALL mobile GSAP effects, horizontal scroll pin, video pin circle zoom, tap playback, and full touch smoothing
{
  const jsPath = path.join(root, 'dist', 'assets', 'index-Bf_sU-QZ.js');
  let js = fs.readFileSync(jsPath, 'utf8');

  const patches = [
    // Enable full GSAP touch smoothing on mobile (0.15 -> 0.8)
    [
      'smoothTouch:.15',
      'smoothTouch:.8',
      'smoothTouch: 0.8 on mobile'
    ],
    // Ensure second-text-split reveals cleanly before .flavor-section pins on mobile & desktop
    [
      'scrollTrigger:{trigger:".flavor-section",start:"top 1%"}})',
      'scrollTrigger:{trigger:".flavor-section",start:"top 22%"}})',
      'oT second-text-split trigger start top 22%'
    ],
    // Enable horizontal pinned scroll in pT on BOTH mobile and desktop (remove `l||`)
    [
      'const r=o.current.scrollWidth-window.innerWidth;l||Qe.timeline({scrollTrigger:{trigger:".flavor-section",start:"2% top",end:`+=${r+1500}px`,scrub:!0,pin:!0}}).to(".flavor-section",{x:`-${r+1500}px`,ease:"power1.inOut"})',
      'const sec=document.querySelector(".flavor-section"),innerRow=sec&&sec.firstElementChild,mobDist=Math.max(window.innerWidth,((innerRow&&innerRow.scrollWidth)||o.current.scrollWidth)-window.innerWidth+40),r=window.innerWidth>=1024?(o.current.scrollWidth-window.innerWidth+1500):mobDist;Qe.timeline({scrollTrigger:{trigger:".flavor-section",start:window.innerWidth>=1024?"2% top":"top top",end:`+=${r}px`,scrub:!0,pin:!0,anticipatePin:1,invalidateOnRefresh:!0}}).to(window.innerWidth>=1024?".flavor-section":".flavor-section > div",{x:`-${r}px`,ease:window.innerWidth>=1024?"power1.inOut":"none"})',
      'pT horizontal pin scroll enabled on mobile & desktop'
    ],
    // Enable .vd-pin-section pin + circle zoom animation on BOTH mobile and desktop (remove `o||`)
    [
      'Zl(()=>{o||Qe.timeline({scrollTrigger:{trigger:".vd-pin-section",start:"-15% top",end:"200% top",scrub:1.5,pin:!0}}).to(".video-box",{clipPath:"circle(100% at 50% 50%)",ease:"power1.inOut"})}),j.jsx("section",{className:"vd-pin-section",children:j.jsxs("div",{style:{clipPath:o?"circle(100% at 50% 50%)":"circle(6% at 50% 50%)"}',
      'Zl(()=>{Qe.timeline({scrollTrigger:{trigger:".vd-pin-section",start:o?"top top":"-15% top",end:o?"+=120%":"200% top",scrub:1.2,pin:!0,anticipatePin:1}}).to(".video-box",{clipPath:"circle(100% at 50% 50%)",ease:"power1.inOut"})}),j.jsx("section",{className:"vd-pin-section",children:j.jsxs("div",{style:{clipPath:o?"circle(9% at 50% 50%)":"circle(6% at 50% 50%)"}',
      '_T video pin & circle zoom enabled on mobile & desktop'
    ],
    // Prevent .nutrition-box stats from starting invisible at yPercent:300 before trigger midpoint
    [
      'Ri.create(".nutrition-section p",{type:"words, lines",linesClass:"paragraph-line"})',
      'Ri.create(".nutrition-section p.text-balance",{type:"words, lines",linesClass:"paragraph-line"})',
      'mT nutrition-box stats visible immediately on mobile & desktop'
    ],
    // Trigger nutrition title & paragraph entrance as soon as section enters mobile/desktop viewport
    [
      'Qe.timeline({scrollTrigger:{trigger:".nutrition-section",start:"top center"}})',
      'Qe.timeline({scrollTrigger:{trigger:".nutrition-section",start:"top 85%"}})',
      'mT trigger start top 85%'
    ],
    // Prevent .testimonials-section negative margin from swallowing .vd-pin-section on mobile + add tap toggle on .vd-card
    [
      'Qe.set(".testimonials-section",{marginTop:"-140vh"})',
      'Qe.set(".testimonials-section",{marginTop:window.innerWidth<768?"-12vh":"-140vh"})',
      'yT mobile marginTop adjustment'
    ],
    [
      'onMouseEnter:()=>l(u),onMouseLeave:()=>r(u),children:j.jsx("video"',
      'onMouseEnter:()=>l(u),onMouseLeave:()=>r(u),onClick:()=>{const v=o.current[u];v&&(v.paused?v.play().catch(()=>{}):v.pause())},children:j.jsx("video"',
      'yT mobile tap-to-play unboxing video cards'
    ]
  ];

  for (const [findStr, replStr, label] of patches) {
    if (js.includes(findStr)) {
      js = js.replace(findStr, replStr);
      console.log(`✓ ${label}`);
    } else if (js.includes(replStr)) {
      console.log(`• ${label} (already applied)`);
    } else {
      throw new Error(`Missing pattern in index-Bf_sU-QZ.js: ${label}`);
    }
  }

  fs.writeFileSync(jsPath, js);
  execSync(`node --check "${jsPath}"`, { stdio: 'inherit' });
  console.log('Syntax verified index-Bf_sU-QZ.js');
}

// 2. Patch dist/assets/angraity-experience.css for full responsive horizontal scroll, benefit cards, nutrition pills, testimonials deck, and video switcher on mobile phones
{
  const cssPath = path.join(root, 'dist', 'assets', 'angraity-experience.css');
  let css = fs.readFileSync(cssPath, 'utf8');

  const marker = '/* === AUDIT REFINEMENTS: MOBILE ALL EFFECTS & HORIZONTAL SCROLL === */';
  const idx = css.indexOf(marker);
  if (idx !== -1) css = css.slice(0, idx).trimEnd() + '\n';

  css += `\n\n${marker}
@media (max-width: 1023px) {
  /* Horizontal Pinned Showcase (.flavor-section) — Authentic Horizontal Track on Phones & Tablets */
  .flavor-section {
    height: 100dvh !important;
    min-height: 100dvh !important;
    overflow: visible !important;
  }
  .flavor-section > div {
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
    width: max-content !important;
    height: 100% !important;
  }
  .flavor-section > div > div:first-child {
    width: 96vw !important;
    height: 100% !important;
    flex: none !important;
    margin-top: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding-inline: 1rem !important;
  }
  .flavor-section .general-title {
    width: 100% !important;
    align-items: center !important;
    gap: 1.5rem !important;
  }
  .flavor-section .first-text-split h1,
  .flavor-section .second-text-split h1 {
    font-size: clamp(2rem, 8.5vw, 3.8rem) !important;
    line-height: 0.96 !important;
    text-align: center !important;
    white-space: nowrap !important;
  }
  .flavor-section .flavor-text-scroll {
    position: relative !important;
    translate: none !important;
  }
  .flavor-section .flavor-text-scroll h2 {
    font-size: clamp(2rem, 8.5vw, 3.8rem) !important;
    line-height: 0.96 !important;
    white-space: nowrap !important;
  }
  .flavor-section .slider-wrapper {
    width: max-content !important;
    min-height: 100dvh !important;
    height: 100dvh !important;
    margin-top: 0 !important;
    display: flex !important;
    align-items: center !important;
  }
  .flavor-section .slider-wrapper .flavors {
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
    gap: 2.25rem !important;
    margin-top: 0 !important;
    padding-right: 12vw !important;
    width: max-content !important;
    height: auto !important;
  }
  .flavor-section .slider-wrapper .flavors > div {
    width: 76vw !important;
    max-width: 340px !important;
    height: 52dvh !important;
    min-height: 350px !important;
    flex: none !important;
    border-radius: 1.5rem !important;
  }
  .flavor-section .slider-wrapper .flavors h1 {
    font-size: 1.15rem !important;
    line-height: 1.12 !important;
    bottom: 0.9rem !important;
    left: 0.9rem !important;
    right: 0.9rem !important;
  }

  /* Message Section Mobile Legibility */
  .message-content h1 {
    font-size: clamp(2.1rem, 10vw, 4.5rem) !important;
    line-height: 1.05 !important;
  }
}

@media (max-width: 768px) {
  /* Nutrition Section Mobile Fit */
  .nutrition-section .nutrition-title,
  .nutrition-section .nutrition-text-scroll h2 {
    font-size: clamp(2.1rem, 9.5vw, 3.6rem) !important;
    line-height: 1 !important;
  }
  .nutrition-section .general-title {
    gap: 1.75rem !important;
    align-items: flex-start !important;
  }
  .nutrition-section .nutrition-text-scroll {
    margin-top: 0.35rem !important;
  }
  .nutrition-section .nutrition-box {
    width: calc(100vw - 1.5rem) !important;
    max-width: 96vw !important;
    padding: 0.85rem 1rem !important;
    border-width: 4px !important;
    bottom: 1rem !important;
  }
  .nutrition-section .nutrition-box .list-wrapper {
    gap: 0.65rem !important;
    justify-content: space-around !important;
  }
  .nutrition-section .nutrition-box .list-wrapper p {
    color: #865720 !important;
    opacity: 1 !important;
  }
  .nutrition-section .nutrition-box .list-wrapper .spacer-border {
    height: 3rem !important;
  }

  /* Benefit Ribbons Mobile Fit (No Overflow Clipping) */
  .benefit-section {
    padding-bottom: 4rem !important;
  }
  .benefit-section .general-title {
    font-size: clamp(1.05rem, 4.7vw, 1.75rem) !important;
    line-height: 1.15 !important;
    max-width: 92vw !important;
  }
  .benefit-section .general-title > div {
    max-width: 92vw !important;
    white-space: normal !important;
    border-width: 2.5px !important;
  }
  .benefit-section .general-title h2 {
    font-size: clamp(1.05rem, 4.7vw, 1.75rem) !important;
    line-height: 1.15 !important;
    padding-inline: 0.5rem !important;
  }

  /* Video Pin Section Mobile Controls & Play Circle */
  .vd-pin-section .play-btn {
    width: 68px !important;
    height: 68px !important;
  }
  .vd-pin-section .play-btn img {
    width: 24px !important;
    height: 24px !important;
    margin-left: 4px !important;
  }
  .vd-pin-section img.spin-circle {
    width: 118px !important;
    height: 118px !important;
  }
  .ang-video-switcher-bar {
    bottom: 1rem !important;
    width: calc(100vw - 1.5rem) !important;
    max-width: calc(100vw - 1.5rem) !important;
    padding: 0.4rem 0.6rem !important;
    gap: 0.45rem !important;
    overflow-x: auto !important;
    flex-wrap: nowrap !important;
    justify-content: flex-start !important;
    -webkit-overflow-scrolling: touch;
  }
  .ang-video-switcher-label {
    font-size: 0.78rem !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
  }
  .ang-video-opt-btn {
    white-space: nowrap !important;
    flex-shrink: 0 !important;
    font-size: 0.75rem !important;
    padding: 0.35rem 0.75rem !important;
  }
  .ang-video-info-badge {
    bottom: 5.2rem !important;
    font-size: 0.72rem !important;
    padding: 0.35rem 0.85rem !important;
    max-width: 92vw !important;
  }

  /* Testimonials Stacked Video Cards Mobile */
  .testimonials-section {
    height: 100dvh !important;
    overflow: hidden !important;
  }
  .testimonials-section > div:first-child {
    padding-top: 6.5rem !important;
  }
  .testimonials-section h1 {
    font-size: 12.5vw !important;
    line-height: 0.98 !important;
    margin-left: 0 !important;
    text-align: center !important;
  }
  .testimonials-section .pin-box {
    bottom: 6vh !important;
    height: 50vh !important;
    padding-inline: 0 !important;
    left: 0 !important;
    right: 0 !important;
  }
  .testimonials-section .pin-box .vd-card {
    width: 240px !important;
    height: 360px !important;
    left: calc(50% - 120px) !important;
    margin-inline-start: 0 !important;
    border-width: 4px !important;
  }

  /* Mobile Footer Readability */
  .footer-section h1.general-title {
    font-size: clamp(2.1rem, 11vw, 3.6rem) !important;
    line-height: 1.05 !important;
  }
  .footer-section input {
    font-size: 1.15rem !important;
  }
  .footer-royal-scroll-img {
    opacity: 0.14 !important;
  }
}
`;

  fs.writeFileSync(cssPath, css);
  console.log('✓ Updated dist/assets/angraity-experience.css for full mobile effects & horizontal scroll');
}
