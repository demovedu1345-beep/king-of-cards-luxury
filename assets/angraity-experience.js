// KING OF CARDS — Haute Wedding Cards & Bespoke Stationery Atelier Companion Experience
// Real products, interactive 3D card customizer, flagship store showcases, zero-payment proof flow.

(function () {
  'use strict';

  function init() {
    if (document.getElementById('angraity-root')) return;

    // Create wrapper root
    const root = document.createElement('div');
    root.id = 'angraity-root';
    document.body.appendChild(root);

    // Products catalog from King of Cards
    const products = [
      {
        id: 'KNLW202559',
        name: 'Maroon Royal Scroll & Box Set',
        category: 'Boxed Scroll Invitations',
        price: '₹1,450 / $18.00',
        img: './images/brown-drink.webp',
        desc: 'Padded velvet presentation box with 24k gold foil scroll, royal silk tassel, and calligraphy insert.',
        foil: '#D4AF37',
        foilName: '24k Pure Gold',
        seal: '#783747',
        sealName: 'Royal Ruby Burgundy',
        paperClass: 'dark',
        paperName: 'Silk-Lined Padded Box Set',
        paperBg: '#1E1C1A'
      },
      {
        id: 'KNLW202574',
        name: 'Cream Book Style Luxury Wedding Invitation',
        category: 'Hardbound Book Suites',
        price: '₹980 / $12.50',
        img: './images/hero-img.png',
        desc: 'Hardbound ivory book opening with gilded monogram crest, double insert pages, and satin ribbon pull.',
        foil: '#D4AF37',
        foilName: '24k Pure Gold',
        seal: '#B49A68',
        sealName: 'Atelier Gold',
        paperClass: 'arch',
        paperName: '900 GSM Archival Gilded Board',
        paperBg: '#FDFBF7'
      },
      {
        id: 'KNLW202573',
        name: 'White Peacock Door Style Gatefold',
        category: 'Door Style Gatefolds',
        price: '₹780 / $9.80',
        img: './images/white-drink.webp',
        desc: 'Intricate peacock gatefold doors with laser filigree, embossed gold foil frame, and pearl shimmer envelope.',
        foil: '#CFB53B',
        foilName: 'Champagne Luster',
        seal: '#1C4436',
        sealName: 'Emerald Forest',
        paperClass: 'bevel',
        paperName: '1000 GSM Laser-Cut Board',
        paperBg: '#FAF8F5'
      },
      {
        id: 'KNLW202569',
        name: 'Royal Ruby Balaji Padded Suite',
        category: 'Traditional Padded Cards',
        price: '₹850 / $10.75',
        img: './images/red-drink.webp',
        desc: 'Deep crimson heavy padded card with sacred Balaji motif, multi-color insert folios, and antique gold debossing.',
        foil: '#D4AF37',
        foilName: '24k Pure Gold',
        seal: '#783747',
        sealName: 'Royal Ruby Burgundy',
        paperClass: 'arch',
        paperName: '900 GSM Archival Gilded Board',
        paperBg: '#FDFBF7'
      },
      {
        id: 'KNLW202576',
        name: 'Royal Sapphire Booklet Style Invitation',
        category: 'Multi-Panel Booklets',
        price: '₹920 / $11.50',
        img: './images/blue-drink.webp',
        desc: 'Royal navy sapphire tri-fold booklet with embossed gold foil mandala, RSVP card, and wax-sealed envelope.',
        foil: '#BCC6CC',
        foilName: 'Platinum Silver',
        seal: '#1A1A1A',
        sealName: 'Velvet Noir',
        paperClass: 'deckle',
        paperName: '600 GSM Handmade Deckle',
        paperBg: '#F7F3EB'
      },
      {
        id: 'KNLW202562',
        name: 'Gold Premium Door Style Luxury Box Set',
        category: 'Metallic Luxury Boxes',
        price: '₹1,850 / $23.00',
        img: './images/orange-drink.webp',
        desc: 'Heavy 24k metallic gold door box with magnetic closure, silk-lined card tray, and monogrammed wax seal.',
        foil: '#D4AF37',
        foilName: '24k Pure Gold',
        seal: '#B49A68',
        sealName: 'Atelier Gold',
        paperClass: 'dark',
        paperName: 'Silk-Lined Padded Box Set',
        paperBg: '#1E1C1A'
      },
      {
        id: 'KNAM4902',
        name: 'Noir Obsidian Laser-Cut Keepsake',
        category: 'Architectural Laser Cut',
        price: '₹720 / $9.00',
        img: './images/black-drink.webp',
        desc: 'Ultra-matte noir obsidian cardstock with delicate bridal silhouette cutouts and pure gold foil underlay.',
        foil: '#D4AF37',
        foilName: '24k Pure Gold',
        seal: '#1A1A1A',
        sealName: 'Velvet Noir',
        paperClass: 'dark',
        paperName: 'Silk-Lined Padded Box Set',
        paperBg: '#1E1C1A'
      },
      {
        id: 'KNLW202557',
        name: 'Maroon Floral Luxury Invitation Box',
        category: 'Floral Presentation Boxes',
        price: '₹1,650 / $21.00',
        img: './images/footer-drink.png',
        desc: 'Handcrafted floral motif box with velvet card padding, gilded envelope liner, and personalized wax seal.',
        foil: '#B76E79',
        foilName: 'Rose Copper',
        seal: '#783747',
        sealName: 'Royal Ruby Burgundy',
        paperClass: 'arch',
        paperName: '900 GSM Archival Gilded Board',
        paperBg: '#FDFBF7'
      }
    ];

    // State
    const state = {
      activeTab: 'customizer', // 'customizer' | 'catalog' | 'stores'
      monogram: 'P & R',
      names: 'Priya & Rohan',
      details: 'Cordially invite you to celebrate their wedding ceremony\nSaturday, November 28, 2026\nThe Leela Palace • Bengaluru',
      foil: { name: '24k Pure Gold', color: '#D4AF37', border: 'rgba(212, 175, 55, 0.5)' },
      paper: { name: '900 GSM Archival Gilded Board', class: 'arch', bg: '#FDFBF7' },
      seal: { name: 'Royal Ruby Burgundy', color: '#783747' },
      selectedProduct: products[0]
    };

    // Inject HTML Markup
    root.innerHTML = `
      <!-- Floating King of Cards Atelier Header -->
      <header class="ang-luxury-header" id="angHeader">
        <nav class="ang-nav-links">
          <a class="ang-nav-link" id="navLinkSuites" href="#suites">Signature Cards</a>
          <a class="ang-nav-link" id="navLinkCraft" href="#craft">Craftsmanship</a>
          <a class="ang-nav-link" id="navLinkStores" href="#stores">Flagship Stores</a>
          <a class="ang-nav-link" href="./floema/" title="Explore Architectural & Spatial Exhibition" style="display: inline-flex; align-items: center; gap: 0.35rem; color: #D4AF37;">
            <span>Architectural Studio</span>
            <span style="font-size: 0.65rem; background: rgba(212, 175, 55, 0.2); border: 1px solid rgba(212, 175, 55, 0.4); padding: 0.15rem 0.4rem; border-radius: 9999px;">3D CAD</span>
          </a>
        </nav>
        <button class="ang-btn-customise" id="openCustomizerBtn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          Card Atelier
        </button>
      </header>

      <!-- Customizer & Catalog Drawer -->
      <div class="ang-drawer-backdrop" id="drawerBackdrop">
        <aside class="ang-customizer-drawer" id="customizerDrawer">
          <div class="ang-drawer-header">
            <div>
              <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.2em; color: #B49A68; font-weight: 600;">King of Cards • Official Atelier</div>
              <h2 class="ang-drawer-title" id="drawerMainTitle" style="margin: 0.25rem 0 0 0;">Interactive Card Proofing</h2>
            </div>
            <button class="ang-drawer-close" id="closeDrawerBtn" aria-label="Close Customizer">✕</button>
          </div>

          <!-- Drawer Navigation Tabs -->
          <div class="ang-drawer-tabs">
            <button class="ang-drawer-tab active" data-tab="customizer" id="tabBtnCustomizer">3D Customizer</button>
            <button class="ang-drawer-tab" data-tab="catalog" id="tabBtnCatalog">Product Catalog (8)</button>
            <button class="ang-drawer-tab" data-tab="stores" id="tabBtnStores">Showrooms & Stores</button>
          </div>

          <!-- Tab Content: 3D Customizer -->
          <div class="ang-drawer-body" id="tabContentCustomizer">
            <!-- 3D Interactive Card Preview Stage -->
            <div class="ang-card-preview-stage">
              <div class="ang-card-preview arch" id="cardPreview" style="--card-foil-color: ${state.foil.color}; --card-seal-color: ${state.seal.color};">
                <div class="ang-foil-shimmer"></div>
                <div>
                  <div class="ang-card-monogram" id="previewMonogram">${state.monogram}</div>
                  <div class="ang-card-eyebrow">Together with their families</div>
                </div>
                <div>
                  <div class="ang-card-names" id="previewNames">${state.names}</div>
                  <div class="ang-card-details" id="previewDetails">${state.details.replace(/\n/g, '<br>')}</div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                  <div class="ang-card-seal" id="previewSeal">
                    <span id="previewSealLetter">P</span>
                  </div>
                  <div style="font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9A948D;">Hand-Poured Wax Seal</div>
                </div>
              </div>
            </div>

            <!-- Customizer Controls -->
            <div class="ang-field-group">
              <label class="ang-field-label" for="inputMonogram">Monogram Initials</label>
              <input type="text" id="inputMonogram" class="ang-input-text" value="${state.monogram}" maxlength="8" placeholder="e.g. P & R">
            </div>

            <div class="ang-field-group">
              <label class="ang-field-label" for="inputNames">Honor / Couple Names</label>
              <input type="text" id="inputNames" class="ang-input-text" value="${state.names}" placeholder="e.g. Priya & Rohan">
            </div>

            <div class="ang-field-group">
              <label class="ang-field-label" for="inputDetails">Invitation Details & Venue</label>
              <textarea id="inputDetails" class="ang-input-text" rows="3" style="resize: vertical;">${state.details}</textarea>
            </div>

            <!-- Foil Selector -->
            <div class="ang-field-group">
              <label class="ang-field-label">Hot Foil Debossing</label>
              <div class="ang-options-grid" id="foilOptions">
                <div class="ang-option-card active" data-foil-name="24k Pure Gold" data-foil-color="#D4AF37" data-foil-border="rgba(212, 175, 55, 0.5)">
                  <span class="ang-swatch-dot" style="background: linear-gradient(135deg, #FFE27D, #D4AF37, #996515);"></span>
                  <span>24k Pure Gold</span>
                </div>
                <div class="ang-option-card" data-foil-name="Rose Copper" data-foil-color="#B76E79" data-foil-border="rgba(183, 110, 121, 0.5)">
                  <span class="ang-swatch-dot" style="background: linear-gradient(135deg, #E8A598, #B76E79, #703D45);"></span>
                  <span>Rose Copper</span>
                </div>
                <div class="ang-option-card" data-foil-name="Champagne Luster" data-foil-color="#CFB53B" data-foil-border="rgba(207, 181, 59, 0.5)">
                  <span class="ang-swatch-dot" style="background: linear-gradient(135deg, #F3E5AB, #CFB53B, #8C733E);"></span>
                  <span>Champagne Luster</span>
                </div>
                <div class="ang-option-card" data-foil-name="Platinum Silver" data-foil-color="#BCC6CC" data-foil-border="rgba(188, 198, 204, 0.5)">
                  <span class="ang-swatch-dot" style="background: linear-gradient(135deg, #FFFFFF, #BCC6CC, #708090);"></span>
                  <span>Platinum Silver</span>
                </div>
              </div>
            </div>

            <!-- Paper Stock / Box Format Selector -->
            <div class="ang-field-group">
              <label class="ang-field-label">Archival Stock & Packaging Format</label>
              <div class="ang-options-grid" id="paperOptions">
                <div class="ang-option-card active" data-paper-name="900 GSM Archival Gilded Board" data-paper-class="arch" data-paper-bg="#FDFBF7">
                  <span style="font-size: 1rem;">🏛</span>
                  <span>900 GSM Gilded Arch</span>
                </div>
                <div class="ang-option-card" data-paper-name="600 GSM Handmade Deckle" data-paper-class="deckle" data-paper-bg="#F7F3EB">
                  <span style="font-size: 1rem;">📜</span>
                  <span>600 GSM Deckle Edge</span>
                </div>
                <div class="ang-option-card" data-paper-name="800 GSM Silk-Lined Padded Box" data-paper-class="dark" data-paper-bg="#1E1C1A">
                  <span style="font-size: 1rem;">🎁</span>
                  <span>Silk-Lined Box Set</span>
                </div>
                <div class="ang-option-card" data-paper-name="1000 GSM Laser-Cut Board" data-paper-class="bevel" data-paper-bg="#FAF8F5">
                  <span style="font-size: 1rem;">💎</span>
                  <span>Laser-Cut Keepsake</span>
                </div>
              </div>
            </div>

            <!-- Wax Seal Color Selector -->
            <div class="ang-field-group">
              <label class="ang-field-label">Hand-Poured Wax Seal</label>
              <div class="ang-options-grid" id="sealOptions">
                <div class="ang-option-card active" data-seal-name="Royal Ruby Burgundy" data-seal-color="#783747">
                  <span class="ang-swatch-dot" style="background: #783747;"></span>
                  <span>Royal Burgundy</span>
                </div>
                <div class="ang-option-card" data-seal-name="Emerald Forest" data-seal-color="#1C4436">
                  <span class="ang-swatch-dot" style="background: #1C4436;"></span>
                  <span>Emerald Forest</span>
                </div>
                <div class="ang-option-card" data-seal-name="Velvet Noir" data-seal-color="#1A1A1A">
                  <span class="ang-swatch-dot" style="background: #1A1A1A;"></span>
                  <span>Velvet Noir</span>
                </div>
                <div class="ang-option-card" data-seal-name="Atelier Gold" data-seal-color="#B49A68">
                  <span class="ang-swatch-dot" style="background: #B49A68;"></span>
                  <span>Atelier Gold</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab Content: Catalog Showcase -->
          <div class="ang-drawer-body" id="tabContentCatalog" style="display: none;">
            <div style="font-size: 0.85rem; color: #A9A29A; margin-bottom: 0.5rem; line-height: 1.5;">
              Explore King of Cards' curated luxury wedding invitations. Select any design to customize your bespoke physical proof.
            </div>
            <div class="ang-catalog-grid" id="catalogGrid">
              ${products.map(p => `
                <div class="ang-product-card" data-product-id="${p.id}">
                  <img src="${p.img}" alt="${p.name}" class="ang-product-thumb">
                  <div class="ang-product-code">${p.id}</div>
                  <div class="ang-product-title">${p.name}</div>
                  <div style="font-size: 0.7rem; color: #77716B;">${p.category}</div>
                  <div class="ang-product-price">
                    <span>${p.price}</span>
                    <span style="color: #D4AF37; font-size: 0.7rem; font-weight: 700;">CUSTOMIZE →</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Tab Content: Flagship Showrooms -->
          <div class="ang-drawer-body" id="tabContentStores" style="display: none;">
            <div style="font-size: 0.85rem; color: #A9A29A; margin-bottom: 1rem; line-height: 1.5;">
              Visit King of Cards' luxury experience centers across major metro locations or connect with our international wedding concierge.
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div class="ang-store-card">
                <div class="ang-store-city">Bengaluru Flagship Boutique</div>
                <div class="ang-store-addr">
                  17, 1st Cross, Near State Bank of India, Chamrajpet, Bengaluru, Karnataka 560018<br>
                  <strong style="color: #D4AF37;">Phone:</strong> +91 80 2661 5865 • Open Mon-Sun 10:30 AM - 8:30 PM
                </div>
              </div>

              <div class="ang-store-card">
                <div class="ang-store-city">Bengaluru Commercial Street Studio</div>
                <div class="ang-store-addr">
                  1st Floor, Commercial Street, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001<br>
                  <strong style="color: #D4AF37;">Phone:</strong> +91 80 4123 7890 • Open Mon-Sun 11:00 AM - 9:00 PM
                </div>
              </div>

              <div class="ang-store-card">
                <div class="ang-store-city">Hyderabad Luxury Atelier</div>
                <div class="ang-store-addr">
                  Plot No. 42, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033<br>
                  <strong style="color: #D4AF37;">Phone:</strong> +91 40 2355 4901 • Private VIP appointments available
                </div>
              </div>

              <div class="ang-store-card">
                <div class="ang-store-city">Mumbai Design Concierge</div>
                <div class="ang-store-addr">
                  Ground Floor, Linking Road, Near Bandra West, Mumbai, Maharashtra 400050<br>
                  <strong style="color: #D4AF37;">Phone:</strong> +91 22 2640 1820 • Destination wedding curation
                </div>
              </div>

              <div class="ang-store-card">
                <div class="ang-store-city">USA International Showroom (New Jersey)</div>
                <div class="ang-store-addr">
                  Oak Tree Road, Suite 204, Edison, New Jersey 08820, USA<br>
                  <strong style="color: #D4AF37;">Phone:</strong> +1 (732) 555-0198 • Global doorstep shipping
                </div>
              </div>
            </div>
          </div>

          <!-- Drawer Footer -->
          <div class="ang-drawer-footer">
            <button class="ang-btn-proof" id="requestProofBtn">
              Reserve Complimentary VIP Sample Proof
            </button>
          </div>
        </aside>
      </div>

      <!-- Proof Confirmation Modal -->
      <div class="ang-drawer-backdrop" id="modalBackdrop" style="display: flex; align-items: center; justify-content: center; z-index: 2000;">
        <div style="background: #1C1A18; border: 1px solid #B49A68; border-radius: 16px; padding: 2.5rem; max-width: 520px; width: 90%; text-align: center; box-shadow: 0 30px 80px rgba(0,0,0,0.8); position: relative;" id="proofModalContent">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 1px solid #D4AF37; margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center; color: #D4AF37; font-size: 1.5rem;">
            ✓
          </div>
          <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.25em; color: #B49A68; margin-bottom: 0.5rem;">King of Cards • White-Glove Commission</div>
          <h3 style="font-family: 'Instrument Serif', Georgia, serif; font-size: 2rem; color: #F5F1E9; margin: 0 0 1rem;">Sample Suite Reserved</h3>
          <p style="color: #A9A29A; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">
            Your bespoke card specifications have been queued at the King of Cards master atelier. No payment is required. A physical archival proof will be hand-embossed and delivered in our signature wax-sealed presentation folio.
          </p>

          <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 1rem; text-align: left; margin-bottom: 1.75rem; font-size: 0.8rem; color: #EAE2D5; display: flex; flex-direction: column; gap: 0.4rem;">
            <div style="display: flex; justify-content: space-between;"><span style="color: #8C867E;">Reference:</span> <strong style="color: #D4AF37;" id="modalRef">KOC-8291</strong></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: #8C867E;">Monogram / Names:</span> <span id="modalNames">Priya & Rohan</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: #8C867E;">Foil Deboss:</span> <span id="modalFoil">24k Pure Gold</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: #8C867E;">Board & Packaging:</span> <span id="modalPaper">900 GSM Archival Gilded Board</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: #8C867E;">Wax Seal:</span> <span id="modalSeal">Royal Ruby Burgundy</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: #8C867E;">Payment Status:</span> <span style="color: #6EE7B7; font-weight: 600;">Complimentary Atelier Gift ($0.00)</span></div>
          </div>

          <button class="ang-btn-proof" id="closeModalBtn" style="width: 100%;">
            Return to King of Cards Showcase
          </button>
        </div>
      </div>

      <!-- Toast Notification -->
      <div class="ang-toast" id="angToast">
        <span style="color: #D4AF37;">✦</span>
        <span id="toastMsg">Updated card specifications</span>
      </div>
    `;

    // Elements
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const openCustomizerBtn = document.getElementById('openCustomizerBtn');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const drawerMainTitle = document.getElementById('drawerMainTitle');

    const tabBtnCustomizer = document.getElementById('tabBtnCustomizer');
    const tabBtnCatalog = document.getElementById('tabBtnCatalog');
    const tabBtnStores = document.getElementById('tabBtnStores');

    const tabContentCustomizer = document.getElementById('tabContentCustomizer');
    const tabContentCatalog = document.getElementById('tabContentCatalog');
    const tabContentStores = document.getElementById('tabContentStores');

    const cardPreview = document.getElementById('cardPreview');
    const previewMonogram = document.getElementById('previewMonogram');
    const previewNames = document.getElementById('previewNames');
    const previewDetails = document.getElementById('previewDetails');
    const previewSeal = document.getElementById('previewSeal');
    const previewSealLetter = document.getElementById('previewSealLetter');

    const inputMonogram = document.getElementById('inputMonogram');
    const inputNames = document.getElementById('inputNames');
    const inputDetails = document.getElementById('inputDetails');

    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalRef = document.getElementById('modalRef');
    const modalNames = document.getElementById('modalNames');
    const modalFoil = document.getElementById('modalFoil');
    const modalPaper = document.getElementById('modalPaper');
    const modalSeal = document.getElementById('modalSeal');

    const angToast = document.getElementById('angToast');
    const toastMsg = document.getElementById('toastMsg');

    // Toast helper
    let toastTimeout;
    function showToast(message) {
      toastMsg.textContent = message;
      angToast.classList.add('show');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        angToast.classList.remove('show');
      }, 3000);
    }

    // Tab Switching
    function setTab(tabName) {
      state.activeTab = tabName;
      [tabBtnCustomizer, tabBtnCatalog, tabBtnStores].forEach(b => b.classList.remove('active'));
      [tabContentCustomizer, tabContentCatalog, tabContentStores].forEach(c => c.style.display = 'none');

      if (tabName === 'customizer') {
        tabBtnCustomizer.classList.add('active');
        tabContentCustomizer.style.display = 'flex';
        drawerMainTitle.textContent = 'Interactive Card Proofing';
      } else if (tabName === 'catalog') {
        tabBtnCatalog.classList.add('active');
        tabContentCatalog.style.display = 'block';
        drawerMainTitle.textContent = 'Luxury Card Catalog';
      } else if (tabName === 'stores') {
        tabBtnStores.classList.add('active');
        tabContentStores.style.display = 'block';
        drawerMainTitle.textContent = 'Flagship Showrooms';
      }
    }

    tabBtnCustomizer.addEventListener('click', () => setTab('customizer'));
    tabBtnCatalog.addEventListener('click', () => setTab('catalog'));
    tabBtnStores.addEventListener('click', () => setTab('stores'));

    // Drawer Open / Close
    function openDrawer(tab = 'customizer') {
      setTab(tab);
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    openCustomizerBtn.addEventListener('click', () => openDrawer('customizer'));
    closeDrawerBtn.addEventListener('click', closeDrawer);
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) closeDrawer();
    });

    // 3D Card Tilt Interaction
    cardPreview.addEventListener('mousemove', (e) => {
      const rect = cardPreview.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      cardPreview.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    cardPreview.addEventListener('mouseleave', () => {
      cardPreview.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });

    // Two-Way Binding Inputs
    inputMonogram.addEventListener('input', (e) => {
      state.monogram = e.target.value.trim() || 'P & R';
      previewMonogram.textContent = state.monogram;
      previewSealLetter.textContent = state.monogram.charAt(0) || 'P';
    });

    inputNames.addEventListener('input', (e) => {
      state.names = e.target.value.trim() || 'Priya & Rohan';
      previewNames.textContent = state.names;
    });

    inputDetails.addEventListener('input', (e) => {
      state.details = e.target.value;
      previewDetails.innerHTML = state.details.replace(/\n/g, '<br>');
    });

    // Foil Selection
    const foilOptions = document.querySelectorAll('#foilOptions .ang-option-card');
    foilOptions.forEach((card) => {
      card.addEventListener('click', () => {
        foilOptions.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');

        state.foil = {
          name: card.getAttribute('data-foil-name'),
          color: card.getAttribute('data-foil-color'),
          border: card.getAttribute('data-foil-border'),
        };

        cardPreview.style.setProperty('--card-foil-color', state.foil.color);
        showToast(`Selected ${state.foil.name} Hot Foil`);
      });
    });

    // Paper / Packaging Selection
    const paperOptions = document.querySelectorAll('#paperOptions .ang-option-card');
    paperOptions.forEach((card) => {
      card.addEventListener('click', () => {
        paperOptions.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');

        state.paper = {
          name: card.getAttribute('data-paper-name'),
          class: card.getAttribute('data-paper-class'),
          bg: card.getAttribute('data-paper-bg'),
        };

        cardPreview.classList.remove('arch', 'deckle', 'dark', 'bevel');
        if (state.paper.class) {
          cardPreview.classList.add(state.paper.class);
        }
        cardPreview.style.backgroundColor = state.paper.bg;

        if (state.paper.class === 'dark') {
          cardPreview.style.color = '#F5F1E9';
          cardPreview.querySelector('.ang-card-eyebrow').style.color = '#B49A68';
          cardPreview.querySelector('.ang-card-names').style.color = '#FDFBF7';
          cardPreview.querySelector('.ang-card-details').style.color = '#D2CDC4';
        } else {
          cardPreview.style.color = '#1F1B19';
          cardPreview.querySelector('.ang-card-eyebrow').style.color = '#77716B';
          cardPreview.querySelector('.ang-card-names').style.color = '#1F1B19';
          cardPreview.querySelector('.ang-card-details').style.color = '#4A4643';
        }

        showToast(`Format updated: ${state.paper.name}`);
      });
    });

    // Wax Seal Selection
    const sealOptions = document.querySelectorAll('#sealOptions .ang-option-card');
    sealOptions.forEach((card) => {
      card.addEventListener('click', () => {
        sealOptions.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');

        state.seal = {
          name: card.getAttribute('data-seal-name'),
          color: card.getAttribute('data-seal-color'),
        };

        cardPreview.style.setProperty('--card-seal-color', state.seal.color);
        previewSeal.style.backgroundColor = state.seal.color;
        showToast(`Wax Seal: ${state.seal.name}`);
      });
    });

    // Product Card Selection in Catalog
    const productCards = document.querySelectorAll('.ang-product-card');
    productCards.forEach((pCard) => {
      pCard.addEventListener('click', () => {
        const pId = pCard.getAttribute('data-product-id');
        const prod = products.find(p => p.id === pId);
        if (prod) {
          state.selectedProduct = prod;
          state.foil = { name: prod.foilName, color: prod.foil };
          state.paper = { name: prod.paperName, class: prod.paperClass, bg: prod.paperBg };
          state.seal = { name: prod.sealName, color: prod.seal };

          // Update preview
          cardPreview.style.setProperty('--card-foil-color', prod.foil);
          cardPreview.style.setProperty('--card-seal-color', prod.seal);
          previewSeal.style.backgroundColor = prod.seal;
          cardPreview.classList.remove('arch', 'deckle', 'dark', 'bevel');
          if (prod.paperClass) cardPreview.classList.add(prod.paperClass);
          cardPreview.style.backgroundColor = prod.paperBg;

          setTab('customizer');
          showToast(`Loaded ${prod.name} into customizer`);
        }
      });
    });

    // Request VIP Proof Button
    const requestProofBtn = document.getElementById('requestProofBtn');
    requestProofBtn.addEventListener('click', () => {
      closeDrawer();

      const randomId = Math.floor(1000 + Math.random() * 9000);
      modalRef.textContent = `KOC-${randomId}`;
      modalNames.textContent = `${state.monogram} — ${state.names}`;
      modalFoil.textContent = state.foil.name;
      modalPaper.textContent = state.paper.name;
      modalSeal.textContent = state.seal.name;

      modalBackdrop.style.opacity = '1';
      modalBackdrop.style.pointerEvents = 'auto';
      document.body.style.overflow = 'hidden';
    });

    function closeModal() {
      modalBackdrop.style.opacity = '0';
      modalBackdrop.style.pointerEvents = 'none';
      document.body.style.overflow = '';
      showToast('Thank you — your sample card proof is reserved!');
    }

    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });

    // Smooth Scroll Anchor Handlers
    document.getElementById('navLinkSuites').addEventListener('click', (e) => {
      e.preventDefault();
      const candidates = document.querySelectorAll('section, div');
      for (let el of candidates) {
        if (el.textContent.includes('Maroon Royal Scroll') || el.textContent.includes('Signature Suites') || el.textContent.includes('The Royal')) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: window.innerHeight * 1.8, behavior: 'smooth' });
    });

    document.getElementById('navLinkCraft').addEventListener('click', (e) => {
      e.preventDefault();
      const candidates = document.querySelectorAll('section, div');
      for (let el of candidates) {
        if (el.textContent.includes('Board Weight') || el.textContent.includes('Mastery in Laser-Cut') || el.textContent.includes('Exclusive Cards')) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: window.innerHeight * 3.5, behavior: 'smooth' });
    });

    document.getElementById('navLinkStores').addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer('stores');
    });

    // Connect CTAs in cloned UI
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, a');
      if (!target) return;
      const text = (target.textContent || '').trim().toLowerCase();
      if (text.includes('explore luxury cards') || text.includes('explore atelier suites') || text.includes('chug a spylt')) {
        e.preventDefault();
        document.getElementById('navLinkSuites').click();
      } else if (text.includes('find in stores') || text.includes('order sample') || text.includes('customise')) {
        e.preventDefault();
        openDrawer('catalog');
      }
    });

    console.log('King of Cards Luxury Atelier Companion Experience successfully loaded.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
