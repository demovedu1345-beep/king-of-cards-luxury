import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsPath = path.resolve(__dirname, '../dist/assets/angraity-experience.js');
let js = fs.readFileSync(jsPath, 'utf8');

// 1. Convert ./images/cards/XXX.png -> ./images/cards/XXX.webp and ./images/hero-cards-panoramic.png -> .webp
js = js.replace(/\.\/images\/cards\/([A-Za-z0-9_-]+)\.png/g, './images/cards/$1.webp');
js = js.replace('./images/hero-cards-panoramic.png', './images/hero-cards-panoramic.webp');

// 2. Replace Lenis competing scroller block with smooth GSAP ScrollSmoother bridge + ScrollTrigger refresh helper
const lenisBlockRegex = /\/\/ 1\. Lenis Smooth Momentum Scrolling[\s\S]*?\/\/ 2\. Create Root Wrapper/;
if (!lenisBlockRegex.test(js)) {
  throw new Error('Could not locate Lenis block in angraity-experience.js');
}
js = js.replace(
  lenisBlockRegex,
  `// 1. Native GSAP ScrollSmoother Bridge & ScrollTrigger Refresh Coordinator
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

    window.addEventListener('load', () => scheduleScrollRefresh(350));

    // 2. Create Root Wrapper`
);

// 3. Add lazy loading to drawer catalog thumbnails
js = js.replace(
  '<img class="ang-product-thumb" src="${p.img}" alt="${p.name}">',
  '<img class="ang-product-thumb" src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">'
);

// 4. Hero high-priority image attributes + hero category filter click wiring + hero-button smooth scroll
js = js.replace(
  '<img src="${pLT.img}" alt="${pLT.name}">',
  '<img src="${pLT.img}" alt="${pLT.name}" fetchpriority="high" decoding="sync">'
);
js = js.replace(
  '<img src="${pLB.img}" alt="${pLB.name}">',
  '<img src="${pLB.img}" alt="${pLB.name}" fetchpriority="high" decoding="sync">'
);
js = js.replace(
  '<img src="${pRT.img}" alt="${pRT.name}">',
  '<img src="${pRT.img}" alt="${pRT.name}" fetchpriority="high" decoding="sync">'
);
js = js.replace(
  '<img src="${pRB.img}" alt="${pRB.name}">',
  '<img src="${pRB.img}" alt="${pRB.name}" fetchpriority="high" decoding="sync">'
);

const oldCatWireRegex = /catBar\.querySelectorAll\('\.ang-hero-cat-pill'\)\.forEach\(pill => \{[\s\S]*?\}\);/;
if (!oldCatWireRegex.test(js)) throw new Error('Could not locate oldCatWireRegex');
js = js.replace(
  oldCatWireRegex,
  `const catMap = { wedding: 'all', boxed: 'boxed', scrolls: 'boxed', 'laser-cut': 'laser-cut', sacred: 'sacred', books: 'books' };
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

      const heroExploreBtn = hero.querySelector('.hero-button');
      if (heroExploreBtn) {
        heroExploreBtn.style.cursor = 'pointer';
        heroExploreBtn.addEventListener('click', () => {
          const showcase = document.getElementById('royal-horizontal-showcase') || document.getElementById('atelier-all-products');
          smoothScrollToEl(showcase);
        });
      }`
);

// Ensure panoramic wrap uses eager high priority too
js = js.replace(
  '<img src="./images/hero-cards-panoramic.webp" alt="Kings of Cards Luxury Wedding Cards Collection"',
  '<img src="./images/hero-cards-panoramic.webp" alt="Kings of Cards Luxury Wedding Cards Collection" fetchpriority="high" decoding="sync"'
);

// 5. Fix video section: autoplay gently via IntersectionObserver when scrolled near + click play-btn toggles play/pause
const oldVideoClickIdx = js.indexOf('// Click handling');
const endVideoSwitcher = js.indexOf('function injectRunwayGallery()');
if (oldVideoClickIdx === -1 || endVideoSwitcher === -1) throw new Error('Could not find injectVideoSwitcher body');

const newVideoBody = `// Viewport lazy-play so hero doesn't choke on 33MB video stream before images load
    if (video) {
      video.preload = 'metadata';
      video.poster = './images/hero-cards-panoramic.webp';
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        }, { rootMargin: '400px 0px' });
        io.observe(pinSection);
      }

      const playBtn = pinSection.querySelector('.play-btn');
      if (playBtn) {
        playBtn.style.cursor = 'pointer';
        playBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (video.paused) {
            video.play().catch(() => {});
            if (window.showToast) window.showToast('Playing King of Cards Factory Tour');
          } else {
            video.pause();
            if (window.showToast) window.showToast('Paused Video Tour');
          }
        });
      }
    }

    // Click handling
    bar.querySelectorAll('.ang-video-opt-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        const opt = videoOptions[idx];

        bar.querySelectorAll('.ang-video-opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const infoTitle = document.getElementById('angVideoInfoTitle');
        if (infoTitle) infoTitle.textContent = opt.title;

        if (video) {
          video.src = opt.src;
          video.currentTime = 0;
          video.play().catch(() => {});
        }

        if (window.showToast) {
          window.showToast('Now Playing: ' + opt.label);
        }
      });
    });
  }

  `;

js = js.substring(0, oldVideoClickIdx) + newVideoBody + js.substring(endVideoSwitcher);

// 6. Fix injectRunwayGallery(): Insert directly BEFORE .nutrition-section (NEVER inside .flavor-section's GSAP .pin-spacer!) + add lazy loading
js = js.replace(
  "const flavorSection = document.querySelector('.flavor-section');\n    if (!flavorSection) {",
  "const nutritionSection = document.querySelector('.nutrition-section');\n    if (!nutritionSection) {"
);
js = js.replace(
  "const flavorSection = document.querySelector('.flavor-section');\r\n    if (!flavorSection) {",
  "const nutritionSection = document.querySelector('.nutrition-section');\r\n    if (!nutritionSection) {"
);

js = js.replace(
  '<img src="${p.img}" alt="${p.name}">',
  '<img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">'
);

js = js.replace(
  'flavorSection.parentNode.insertBefore(runwaySec, flavorSection.nextSibling);',
  'nutritionSection.parentNode.insertBefore(runwaySec, nutritionSection);\n    scheduleScrollRefresh(250);'
);

// 7. Fix injectAllProductsSection(): Insert directly BEFORE .footer-section (NEVER between .benefit-section & .testimonials-section!), add Books filter button + lazy loading
js = js.replace(
  "const benefitSection = document.querySelector('.benefit-section');\n    if (!benefitSection) {",
  "const footerSection = document.querySelector('.footer-section');\n    if (!footerSection) {"
);
js = js.replace(
  "const benefitSection = document.querySelector('.benefit-section');\r\n    if (!benefitSection) {",
  "const footerSection = document.querySelector('.footer-section');\r\n    if (!footerSection) {"
);

// Add Books filter button cleanly
js = js.replace(
  '<button class="ang-filter-btn" data-filter="boxed">Boxed & Scroll (4)</button>',
  '<button class="ang-filter-btn" data-filter="boxed">Boxed & Scroll (4)</button>\n          <button class="ang-filter-btn" data-filter="books">Hardbound Books (3)</button>'
);

js = js.replace(
  'benefitSection.parentNode.insertBefore(allSec, benefitSection.nextSibling);',
  'const showroomAnchor = document.getElementById("atelier-showrooms-section") || footerSection;\n    footerSection.parentNode.insertBefore(allSec, showroomAnchor);\n    scheduleScrollRefresh(250);'
);

// Lazy loading on grid cards
js = js.replace(
  '<span style="position: absolute; top: 0.5rem; left: 0.5rem; background-color: var(--color-red-brown); color: var(--color-milk); font-family: var(--font-display); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; padding: 0.2rem 0.6rem; border-radius: var(--radius-pill);">${p.tag}</span>\r\n          <img src="${p.img}" alt="${p.name}">',
  '<span style="position: absolute; top: 0.5rem; left: 0.5rem; background-color: var(--color-red-brown); color: var(--color-milk); font-family: var(--font-display); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; padding: 0.2rem 0.6rem; border-radius: var(--radius-pill);">${p.tag}</span>\r\n          <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">'
);
js = js.replace(
  '<span style="position: absolute; top: 0.5rem; left: 0.5rem; background-color: var(--color-red-brown); color: var(--color-milk); font-family: var(--font-display); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; padding: 0.2rem 0.6rem; border-radius: var(--radius-pill);">${p.tag}</span>\n          <img src="${p.img}" alt="${p.name}">',
  '<span style="position: absolute; top: 0.5rem; left: 0.5rem; background-color: var(--color-red-brown); color: var(--color-milk); font-family: var(--font-display); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; padding: 0.2rem 0.6rem; border-radius: var(--radius-pill);">${p.tag}</span>\n          <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">'
);

// Trigger ScrollTrigger refresh when filtering category updates grid height
js = js.replace(
  'wireGridCardEvents(gridContainer);\n        showToast(`Filtered: ${btn.textContent}`);',
  'wireGridCardEvents(gridContainer);\n        scheduleScrollRefresh(150);\n        showToast(`Filtered: ${btn.textContent}`);'
);
js = js.replace(
  'wireGridCardEvents(gridContainer);\r\n        showToast(`Filtered: ${btn.textContent}`);',
  'wireGridCardEvents(gridContainer);\r\n        scheduleScrollRefresh(150);\r\n        showToast(`Filtered: ${btn.textContent}`);'
);

// 8. Refresh ScrollTrigger after showrooms injection as well
js = js.replace(
  'footerSection.parentNode.insertBefore(showroomSec, footerSection);',
  'footerSection.parentNode.insertBefore(showroomSec, footerSection);\n    scheduleScrollRefresh(350);'
);

// 9. Update header links to use smoothScrollToEl inside GSAP ScrollSmoother!
const headerLinksOld = /\/\/ Header Links[\s\S]*?\}\);(?=\s*\}\s*\/\/ Helper)/;
if (!headerLinksOld.test(js)) throw new Error('Could not find header links block');
js = js.replace(
  headerLinksOld,
  `// Header Links (Smooth ScrollSmoother Gliding)
    document.getElementById('navLinkRunway').addEventListener('click', (e) => {
      e.preventDefault();
      smoothScrollToEl(document.getElementById('royal-horizontal-showcase'));
    });

    document.getElementById('navLinkAllCards').addEventListener('click', (e) => {
      e.preventDefault();
      smoothScrollToEl(document.getElementById('atelier-all-products'));
    });

    document.getElementById('navLinkCraft').addEventListener('click', (e) => {
      e.preventDefault();
      smoothScrollToEl(document.querySelector('.benefit-section'));
    });

    document.getElementById('navLinkStores').addEventListener('click', (e) => {
      e.preventDefault();
      smoothScrollToEl(document.getElementById('atelier-showrooms-section'));
    });`
);

// Also update drawer button & anchor references so smoothScrollToEl works after injectAllProducts
js = js.replace(
  "const bSec = document.querySelector('.benefit-section');",
  "const bSec = document.querySelector('.benefit-section');"
);

// Replace direct scrollIntoView references inside injected DOM if any
fs.writeFileSync(jsPath, js);
console.log('Successfully updated dist/assets/angraity-experience.js!');
