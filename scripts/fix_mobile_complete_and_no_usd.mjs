import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const root = process.cwd();

// =========================================================================
// 1. REMOVE ALL DOLLAR CURRENCY FROM dist/assets/angraity-experience.js
// =========================================================================
{
  const expJsPath = path.join(root, 'dist', 'assets', 'angraity-experience.js');
  let js = fs.readFileSync(expJsPath, 'utf8');

  // Remove / $XX.XX from price strings and remove usd property values
  js = js.replace(/price:\s*'(₹[^']+?)\s*\/\s*\$[0-9.,]+'/g, "price: '$1'");
  js = js.replace(/usd:\s*'\$[0-9.,]+'/g, "usd: 'Custom Suite'");

  // Remove USD price tag in Runway cards & All 20 Archive Grid cards
  js = js.replace(
    '<span class="ang-runway-price-usd">${p.usd}</span>',
    '<span class="ang-runway-price-usd">INR • Atelier Pricing</span>'
  );
  js = js.replace(
    '${p.usd} per suite',
    'Archival Bespoke Suite'
  );

  // Verify zero literal dollar prices remain anywhere in angraity-experience.js
  if (/\$[0-9]/.test(js)) {
    throw new Error('Literal dollar currency still found in angraity-experience.js');
  }

  fs.writeFileSync(expJsPath, js);
  execSync(`node --check "${expJsPath}"`, { stdio: 'inherit' });
  console.log('✓ Removed all dollar currency from dist/assets/angraity-experience.js');
}

// =========================================================================
// 2. ENHANCE GSAP EFFECTS IN dist/assets/index-Bf_sU-QZ.js FOR MOBILE + DESKTOP
// =========================================================================
{
  const coreJsPath = path.join(root, 'dist', 'assets', 'index-Bf_sU-QZ.js');
  let js = fs.readFileSync(coreJsPath, 'utf8');

  // a) In oT (.flavor-section titles): reveal titles & pill earlier on scroll so all 3 lines are crisp before pinning
  const oldOT = 'scrollTrigger:{trigger:".flavor-section",start:"top 30%"}}),Qe.to(".flavor-text-scroll",{duration:1,clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",scrollTrigger:{trigger:".flavor-section",start:"top 10%"}}),Qe.from(l.chars,{yPercent:200,stagger:.02,ease:"power1.inOut",scrollTrigger:{trigger:".flavor-section",start:"top 22%"}})';
  const newOT = 'scrollTrigger:{trigger:".flavor-section",start:"top 75%"}}),Qe.to(".flavor-text-scroll",{duration:.8,clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",scrollTrigger:{trigger:".flavor-section",start:"top 65%"}}),Qe.from(l.chars,{yPercent:200,stagger:.02,ease:"power1.inOut",scrollTrigger:{trigger:".flavor-section",start:"top 65%"}})';
  if (js.includes(oldOT)) {
    js = js.replace(oldOT, newOT);
    console.log('✓ Tuned oT flavor title triggers (start top 75%/65%)');
  }

  // b) In pT (.flavor-section horizontal scroll): center first card earlier cleanly on mobile
  const oldPT = 'const sec=document.querySelector(".flavor-section"),innerRow=sec&&sec.firstElementChild,mobDist=Math.max(window.innerWidth,((innerRow&&innerRow.scrollWidth)||o.current.scrollWidth)-window.innerWidth+40),r=window.innerWidth>=1024?(o.current.scrollWidth-window.innerWidth+1500):mobDist;Qe.timeline({scrollTrigger:{trigger:".flavor-section",start:window.innerWidth>=1024?"2% top":"top top",end:`+=${r}px`,scrub:!0,pin:!0,anticipatePin:1,invalidateOnRefresh:!0}}).to(window.innerWidth>=1024?".flavor-section":".flavor-section > div",{x:`-${r}px`,ease:window.innerWidth>=1024?"power1.inOut":"none"})';
  const newPT = 'const sec=document.querySelector(".flavor-section"),innerRow=sec&&sec.firstElementChild,isDesk=window.innerWidth>=1024,mobDist=Math.max(window.innerWidth*2,((innerRow&&innerRow.scrollWidth)||o.current.scrollWidth)-window.innerWidth+60),r=isDesk?(o.current.scrollWidth-window.innerWidth+1500):mobDist;Qe.timeline({scrollTrigger:{trigger:".flavor-section",start:isDesk?"2% top":"top top",end:`+=${r}px`,scrub:!0,pin:!0,anticipatePin:1,invalidateOnRefresh:!0}}).to(isDesk?".flavor-section":".flavor-section > div",{x:`-${r}px`,ease:isDesk?"power1.inOut":"none"})';
  if (js.includes(oldPT)) {
    js = js.replace(oldPT, newPT);
    console.log('✓ Refined pT horizontal scroll distance for big mobile cutouts');
  }

  // c) In yT (.testimonials-section — "The Atelier Unboxings" shuffling cards):
  // Make card #1 smoothly enter BEFORE pin (`start:"top 75%"`), then shuffle cards #2-7 smoothly while pinned cleanly,
  // cap title X drift on mobile so "THE ATELIER UNBOXINGS" never flies off 390px screen, and auto-play visible cards on mobile/desktop intersect.
  const oldYT = 'yT=()=>{const o=Ae.useRef([]);Zl(()=>{Qe.set(".testimonials-section",{marginTop:window.innerWidth<768?"-12vh":"-140vh"}),Qe.timeline({scrollTrigger:{trigger:".testimonials-section",start:"top bottom",end:"200% top",scrub:!0}}).to(".testimonials-section .first-title",{xPercent:70}).to(".testimonials-section .sec-title",{xPercent:25},"<").to(".testimonials-section .third-title",{xPercent:-50},"<"),Qe.timeline({scrollTrigger:{trigger:".testimonials-section",start:"10% top",end:"200% top",scrub:1.5,pin:!0}}).from(".vd-card",{yPercent:150,stagger:.2,ease:"power1.inOut"})});';
  const newYT = 'yT=()=>{const o=Ae.useRef([]);Zl(()=>{const mob=window.innerWidth<768;Qe.set(".testimonials-section",{marginTop:mob?"-8vh":"-140vh"}),Qe.timeline({scrollTrigger:{trigger:".testimonials-section",start:"top bottom",end:"200% top",scrub:!0}}).to(".testimonials-section .first-title",{xPercent:mob?8:70}).to(".testimonials-section .sec-title",{xPercent:mob?-6:25},"<").to(".testimonials-section .third-title",{xPercent:mob?-10:-50},"<");if(mob){Qe.from(".vd-card:first-child",{yPercent:45,opacity:.75,ease:"power2.out",scrollTrigger:{trigger:".testimonials-section",start:"top 85%",end:"top 15%",scrub:1}}),Qe.timeline({scrollTrigger:{trigger:".testimonials-section",start:"top top",end:"+=170%",scrub:1.1,pin:!0,anticipatePin:1}}).from(".testimonials-section .vd-card:not(:first-child)",{yPercent:125,rotate:u=>u%2===0?-8:8,stagger:.22,ease:"power2.out"})}else{Qe.timeline({scrollTrigger:{trigger:".testimonials-section",start:"10% top",end:"200% top",scrub:1.5,pin:!0}}).from(".vd-card",{yPercent:150,stagger:.2,ease:"power1.inOut"})}o.current.forEach((v,idx)=>{if(v&&"IntersectionObserver"in window&&mob){const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?v.play().catch(()=>{}):v.pause()),{rootMargin:"150px"});io.observe(v)}})});';
  if (js.includes(oldYT)) {
    js = js.replace(oldYT, newYT);
    console.log('✓ Rebuilt yT shuffling cards animation for mobile ("Atelier Unboxings")');
  } else if (js.includes(newYT)) {
    console.log('• yT shuffling cards animation already rebuilt');
  } else {
    throw new Error('Missing oldYT in index-Bf_sU-QZ.js');
  }

  // d) In fT (.msg-text-scroll): remove delay:1 and crisp 0.55s reveal so "Hand-Pressed Archival" reveals promptly
  const oldMsgScroll = 'Qe.timeline({delay:1,scrollTrigger:{trigger:".msg-text-scroll",start:"top 60%"}}).to(".msg-text-scroll",{duration:1,clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",ease:"circ.inOut"})';
  const oldMsgScrollPrev = 'Qe.timeline({scrollTrigger:{trigger:".msg-text-scroll",start:"top 85%"}}).to(".msg-text-scroll",{duration:1,clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",ease:"circ.inOut"})';
  const newMsgScroll = 'Qe.timeline({scrollTrigger:{trigger:".msg-text-scroll",start:"top 85%"}}).to(".msg-text-scroll",{duration:.55,clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",ease:"circ.out"})';
  if (js.includes(oldMsgScroll)) {
    js = js.replace(oldMsgScroll, newMsgScroll);
    console.log('✓ Tuned .msg-text-scroll reveal (start top 85%, 0.55s)');
  } else if (js.includes(oldMsgScrollPrev)) {
    js = js.replace(oldMsgScrollPrev, newMsgScroll);
    console.log('✓ Tuned .msg-text-scroll reveal duration to 0.55s');
  } else if (js.includes(newMsgScroll)) {
    console.log('• .msg-text-scroll trigger already optimized');
  }

  fs.writeFileSync(coreJsPath, js);
  execSync(`node --check "${coreJsPath}"`, { stdio: 'inherit' });
  console.log('Syntax verified index-Bf_sU-QZ.js');
}

// =========================================================================
// 3. UPDATE dist/assets/angraity-experience.css FOR ALL MOBILE LAYOUT & BIGGER CUTOUTS
// =========================================================================
{
  const expCssPath = path.join(root, 'dist', 'assets', 'angraity-experience.css');
  let css = fs.readFileSync(expCssPath, 'utf8');

  const marker = '/* === AUDIT REFINEMENTS: MOBILE ALL EFFECTS & HORIZONTAL SCROLL === */';
  const idx = css.indexOf(marker);
  if (idx !== -1) css = css.slice(0, idx).trimEnd() + '\n';

  css += `\n\n${marker}
/* Zoom .vd-card video slightly to eliminate baked letterbox black bars */
.testimonials-section .pin-box .vd-card video {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  transform: scale(1.22);
}

@media (max-width: 1023px) {
  /* Section 1 (.message-content): Clean Spacing Around "Hand-Pressed Archival" Ribbon */
  .message-content {
    padding-top: 4.5rem !important;
    padding-bottom: 4.5rem !important;
  }
  .message-content h1 {
    font-size: clamp(2rem, 9vw, 4rem) !important;
    line-height: 1.04 !important;
  }
  .message-content .msg-text-scroll {
    position: relative !important;
    margin: 0.75rem auto !important;
    max-width: 92vw !important;
  }
  .message-content .msg-text-scroll h2 {
    font-size: clamp(1.2rem, 5.4vw, 2.3rem) !important;
    line-height: 1.05 !important;
    padding: 0.35rem 0.75rem !important;
    white-space: nowrap !important;
  }

  /* Horizontal Pinned Showcase (.flavor-section) — LARGE Wedding Card Cutouts on Phones & Tablets */
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
    width: 100vw !important;
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
    gap: 1.25rem !important;
  }
  .flavor-section .first-text-split h1,
  .flavor-section .second-text-split h1 {
    font-size: clamp(2.15rem, 9vw, 3.8rem) !important;
    line-height: 0.96 !important;
    text-align: center !important;
    white-space: nowrap !important;
  }
  .flavor-section .flavor-text-scroll {
    position: relative !important;
    translate: none !important;
    margin-inline: auto !important;
  }
  .flavor-section .flavor-text-scroll h2 {
    font-size: clamp(2.1rem, 8.8vw, 3.6rem) !important;
    line-height: 0.96 !important;
    white-space: nowrap !important;
  }
  .flavor-section .slider-wrapper {
    width: max-content !important;
    min-height: 100dvh !important;
    height: 100dvh !important;
    margin-top: 0 !important;
    padding-top: 3.5rem !important;
    display: flex !important;
    align-items: center !important;
  }
  .flavor-section .slider-wrapper .flavors {
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
    gap: 1.75rem !important;
    margin-top: 0 !important;
    padding-right: 10vw !important;
    width: max-content !important;
    height: auto !important;
  }
  .flavor-section .slider-wrapper .flavors > div {
    width: 86vw !important;
    max-width: 400px !important;
    height: 68dvh !important;
    min-height: 500px !important;
    flex: none !important;
    border-radius: 1.75rem !important;
    overflow: visible !important;
  }
  .flavor-section .slider-wrapper .flavors .drinks {
    height: 92% !important;
    max-height: 92% !important;
    width: auto !important;
    max-width: 96% !important;
    object-fit: contain !important;
    bottom: 4% !important;
  }
  .flavor-section .slider-wrapper .flavors .elements {
    top: 2% !important;
    width: 96% !important;
    max-height: 55% !important;
    object-fit: contain !important;
  }
  .flavor-section .slider-wrapper .flavors h1 {
    font-size: 1.35rem !important;
    line-height: 1.1 !important;
    bottom: 1rem !important;
    left: 1.1rem !important;
    right: 1.1rem !important;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
  }
}

@media (max-width: 768px) {
  /* In-Flow Sections: Generous Top Padding Under Fixed Header */
  .ang-runway-section,
  .ang-all-products-section,
  .ang-showrooms-section {
    padding-top: 5.5rem !important;
  }

  /* Nutrition Section Mobile Fit — No Outer Rectangular Outline */
  .nutrition-section > div {
    padding-top: 3.5rem !important;
  }
  .nutrition-section .nutrition-title,
  .nutrition-section .nutrition-text-scroll h2 {
    font-size: clamp(2rem, 9.2vw, 3.4rem) !important;
    line-height: 1 !important;
  }
  .nutrition-section .general-title {
    gap: 1.35rem !important;
    align-items: flex-start !important;
  }
  .nutrition-section .nutrition-text-scroll {
    margin-top: 0.25rem !important;
  }
  .nutrition-section .nutrition-box {
    width: calc(100vw - 1.5rem) !important;
    max-width: 96vw !important;
    padding: 0 !important;
    border: none !important;
    background: transparent !important;
    bottom: 1rem !important;
  }
  .nutrition-section .nutrition-box .list-wrapper {
    gap: 0.65rem !important;
    justify-content: space-around !important;
    border: 5px solid #e8ddca !important;
    border-radius: 9999px !important;
    background-color: #fdebd2 !important;
    padding: 0.85rem 1.1rem !important;
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
    padding-top: 4.5rem !important;
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

  /* Testimonials Stacked Shuffling Cards Mobile ("The Atelier Unboxings") */
  .testimonials-section {
    height: 100dvh !important;
    overflow: hidden !important;
  }
  .testimonials-section > div:first-child {
    padding-top: 6rem !important;
  }
  .testimonials-section h1 {
    font-size: 13vw !important;
    line-height: 0.98 !important;
    margin-left: 0 !important;
    text-align: center !important;
  }
  .testimonials-section .pin-box {
    bottom: 7vh !important;
    height: 52vh !important;
    padding-inline: 0 !important;
    left: 0 !important;
    right: 0 !important;
  }
  .testimonials-section .pin-box .vd-card {
    width: 246px !important;
    height: 368px !important;
    left: calc(50% - 123px) !important;
    margin-inline-start: 0 !important;
    border-width: 4px !important;
    border-radius: 1.35rem !important;
    box-shadow: 0 18px 42px rgba(45, 25, 16, 0.28);
  }
  .testimonials-section .pin-box .vd-card:nth-child(2n) {
    left: calc(50% - 135px) !important;
  }
  .testimonials-section .pin-box .vd-card:nth-child(3n) {
    left: calc(50% - 111px) !important;
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

  fs.writeFileSync(expCssPath, css);
  console.log('✓ Updated dist/assets/angraity-experience.css for large mobile horizontal cutouts, shuffling deck, nutrition pill, and message layout');
}
