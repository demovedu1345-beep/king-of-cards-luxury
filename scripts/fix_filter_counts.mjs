import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = path.resolve(__dirname, '../dist/assets/angraity-experience.js');
let js = fs.readFileSync(p, 'utf8').replace(/\r\n/g, '\n');

const re = /<div class="ang-category-filter-bar" id="categoryFilterBar">[\s\S]*?<\/div>/;
if (!re.test(js)) throw new Error('categoryFilterBar not found');

js = js.replace(
  re,
  `<div class="ang-category-filter-bar" id="categoryFilterBar">
          <button class="ang-filter-btn active" data-filter="all">All Suites (\${royalProducts.length})</button>
          <button class="ang-filter-btn" data-filter="boxed">Boxed & Scroll (\${royalProducts.filter(p => p.categoryKey === 'boxed').length})</button>
          <button class="ang-filter-btn" data-filter="books">Hardbound Books (\${royalProducts.filter(p => p.categoryKey === 'books').length})</button>
          <button class="ang-filter-btn" data-filter="door-style">Door Style Gatefolds (\${royalProducts.filter(p => p.categoryKey === 'door-style').length})</button>
          <button class="ang-filter-btn" data-filter="laser-cut">Laser-Cut & Filigree (\${royalProducts.filter(p => p.categoryKey === 'laser-cut').length})</button>
          <button class="ang-filter-btn" data-filter="padded">Padded Cards (\${royalProducts.filter(p => p.categoryKey === 'padded').length})</button>
          <button class="ang-filter-btn" data-filter="sacred">Sacred Motifs (\${royalProducts.filter(p => p.categoryKey === 'sacred').length})</button>
        </div>`
);

fs.writeFileSync(p, js);
console.log('Fixed categoryFilterBar counts cleanly!');
