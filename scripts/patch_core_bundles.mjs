import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cssPath = path.resolve(__dirname, '../dist/assets/index-aLWHP3o0.css');
const jsPath = path.resolve(__dirname, '../dist/assets/index-Bf_sU-QZ.js');

// --- Patch 1: index-aLWHP3o0.css ---
let css = fs.readFileSync(cssPath, 'utf8');
let cssModified = 0;

if (css.includes('@font-face{font-family:ProximaNova\\, sans-serif;src:url(../fonts/ProximaNova-Regular.otf)}')) {
  css = css.replace(
    '@font-face{font-family:ProximaNova\\, sans-serif;src:url(../fonts/ProximaNova-Regular.otf)}',
    '@font-face{font-family:"ProximaNova";src:url(../fonts/ProximaNova-Regular.otf) format("opentype");font-display:swap}'
  );
  cssModified++;
}

if (css.includes('--font-paragraph:"ProximaNova, sans-serif"')) {
  css = css.replace('--font-paragraph:"ProximaNova, sans-serif"', '--font-paragraph:"ProximaNova",sans-serif');
  cssModified++;
}

// Disable native CSS scroll-behavior: smooth so GSAP ScrollSmoother has zero interference!
if (css.includes('scroll-behavior:smooth;')) {
  css = css.replace('scroll-behavior:smooth;', 'scroll-behavior:auto;');
  cssModified++;
}

fs.writeFileSync(cssPath, css);
console.log('Patched index-aLWHP3o0.css sections:', cssModified);

// --- Patch 2: index-Bf_sU-QZ.js ---
let js = fs.readFileSync(jsPath, 'utf8');
let jsModified = 0;

const replacements = [
  [
    'src:"./images/hero-cards-panoramic.png"',
    'src:"./images/hero-cards-panoramic.webp",fetchPriority:"high",loading:"eager"'
  ],
  [
    'src:"./images/hero-img.png"',
    'src:"./images/hero-img.webp",fetchPriority:"high",loading:"eager"'
  ],
  [
    'src:"./images/big-img.png"',
    'src:"./images/big-img.webp",loading:"lazy"'
  ],
  [
    'src:"./images/footer-drink.png"',
    'src:"./images/footer-drink.webp",loading:"lazy"'
  ],
  [
    'src:"https://kingofcards.in/cdn/shop/videos/c/vp/60c4f12fb60b468aa984dd4ac76cc3a3/60c4f12fb60b468aa984dd4ac76cc3a3.HD-1080p-7.2Mbps-85600308.mp4",playsInline:!0,muted:!0,loop:!0,autoPlay:!0',
    'src:"https://kingofcards.in/cdn/shop/videos/c/vp/60c4f12fb60b468aa984dd4ac76cc3a3/60c4f12fb60b468aa984dd4ac76cc3a3.HD-1080p-7.2Mbps-85600308.mp4",playsInline:!0,muted:!0,loop:!0,preload:"metadata",poster:"./images/hero-cards-panoramic.webp"'
  ],
  [
    'Qe.registerPlugin(Kt,Ia);const ST=()=>(Zl(()=>{Ia.create({smooth:3,effects:!0})})',
    'Qe.registerPlugin(Kt,Ia);window.__spyltGSAP=Qe;window.__spyltST=Kt;window.__spyltSmoother=Ia;const ST=()=>(Zl(()=>{window.__spyltSmootherInstance=Ia.create({smooth:2,effects:!0,smoothTouch:.1})})'
  ],
  [
    'Zb.createRoot(document.getElementById("root")).render(j.jsx(Ae.StrictMode,{children:j.jsx(ST,{})}));',
    'Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1200))]).then(()=>{Zb.createRoot(document.getElementById("root")).render(j.jsx(Ae.StrictMode,{children:j.jsx(ST,{})}));setTimeout(()=>{try{Kt.refresh(!0)}catch(e){}},350);});'
  ]
];

for (const [target, repl] of replacements) {
  if (js.includes(target)) {
    js = js.replace(target, repl);
    jsModified++;
    console.log('Replaced:', target.substring(0, 60));
  } else {
    console.warn('WARNING: Target NOT found in index-Bf_sU-QZ.js:', target);
  }
}

fs.writeFileSync(jsPath, js);
console.log('Patched index-Bf_sU-QZ.js total replacements:', jsModified);
