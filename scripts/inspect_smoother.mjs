import fs from 'fs';

const js = fs.readFileSync('C:/Users/itzra/.gemini/antigravity/scratch/king-of-cards-luxury/dist/assets/index-Bf_sU-QZ.js', 'utf8');

console.log('--- ScrollSmoother occurrences ---');
let i = 0;
while ((i = js.indexOf('ScrollSmoother', i)) !== -1) {
  console.log('At', i, ':', js.substring(i - 100, i + 200));
  i += 14;
}

console.log('\n--- App render / main layout around 344000..end ---');
console.log(js.substring(344000));
