import fs from 'fs';

const js = fs.readFileSync('C:/Users/itzra/.gemini/antigravity/scratch/king-of-cards-luxury/dist/assets/angraity-experience.js', 'utf8');
const css = fs.readFileSync('C:/Users/itzra/.gemini/antigravity/scratch/king-of-cards-luxury/dist/assets/angraity-experience.css', 'utf8');
const coreCss = fs.readFileSync('C:/Users/itzra/.gemini/antigravity/scratch/king-of-cards-luxury/dist/assets/index-aLWHP3o0.css', 'utf8');

console.log('=== URLs / paths in angraity-experience.js ===');
const urls = [...js.matchAll(/https?:\/\/[^"'`\s)]+/g)].map(m => m[0]);
console.log([...new Set(urls)]);

const rels = [...js.matchAll(/\.\/[^"'`\s)]+/g)].map(m => m[0]);
console.log('Relative paths in angraity-experience.js:', [...new Set(rels)]);

console.log('=== URLs / paths in index-aLWHP3o0.css ===');
const cssUrls = [...coreCss.matchAll(/url\([^)]+\)/g)].map(m => m[0]);
console.log([...new Set(cssUrls)]);

console.log('=== URLs / paths in angraity-experience.css ===');
const angCssUrls = [...css.matchAll(/url\([^)]+\)/g)].map(m => m[0]);
console.log([...new Set(angCssUrls)]);
