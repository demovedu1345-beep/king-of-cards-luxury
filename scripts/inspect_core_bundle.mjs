import fs from 'fs';

const js = fs.readFileSync('C:/Users/itzra/.gemini/antigravity/scratch/king-of-cards-luxury/dist/assets/index-Bf_sU-QZ.js', 'utf8');

const keywords = ['hero-container', 'message-content', 'flavor-section', 'nutrition-section', 'benefit-section', 'vd-pin-section', 'testimonials-section', 'footer-section', 'SplitText', 'ScrollTrigger'];

for (const kw of keywords) {
  let idx = js.indexOf(kw);
  console.log(`\n=== ${kw} (at ${idx}) ===`);
  if (idx !== -1) {
    console.log(js.substring(Math.max(0, idx - 250), Math.min(js.length, idx + 700)));
  }
}
