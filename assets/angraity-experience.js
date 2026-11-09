// KING OF CARDS — Haute Wedding Cards & Bespoke Stationery Atelier Companion Experience
// 100% Native Design Alignment with Cloned Spylt Architecture:
// Antonio Display Typography, ProximaNova, Milk & Caramel Color Palette, and Spylt Pill Buttons.

(function () {
  'use strict';

  // 20 Authentic King of Cards Suites
  const royalProducts = [
    {
      id: 'KNLW202559',
      name: 'Maroon Royal Scroll Wedding Card Box Set',
      category: 'Boxed Scroll Invitations',
      categoryKey: 'boxed',
      price: '₹1,450 / $18.00',
      inr: '₹1,450',
      usd: '$18.00',
      img: './images/cards/KNLW202559.png',
      tag: 'Bestseller Suite',
      desc: 'Padded velvet presentation box with gold foil scroll, royal silk tassel, and calligraphy insert.',
      paper: 'Silk Velvet Rigid Box • Gold Stamped Scroll',
      foil: '#7f3b2d',
      foilName: 'Royal Red Foil',
      seal: '#7f3b2d',
      sealName: 'Royal Ruby Burgundy'
    },
    {
      id: 'KNLW202574',
      name: 'Cream Book Style Luxury Wedding Invitation',
      category: 'Hardbound Book Suites',
      categoryKey: 'books',
      price: '₹980 / $12.50',
      inr: '₹980',
      usd: '$12.50',
      img: './images/cards/KNLW202574.png',
      tag: 'Trending Couture',
      desc: 'Hardbound ivory book opening with gilded monogram crest, double insert pages, and satin ribbon pull.',
      paper: '900 GSM Archival Gilded Board • Satin Pull',
      foil: '#523122',
      foilName: 'Dark Chocolate Bronze',
      seal: '#a26833',
      sealName: 'Caramel Gold'
    },
    {
      id: 'KNLW202573',
      name: 'White Peacock Door Style Gatefold',
      category: 'Door Style Gatefolds',
      categoryKey: 'door-style',
      price: '₹780 / $9.80',
      inr: '₹780',
      usd: '$9.80',
      img: './images/cards/KNLW202573.png',
      tag: 'Couture Gatefold',
      desc: 'Intricate peacock gatefold doors with laser filigree, embossed gold foil frame, and pearl shimmer envelope.',
      paper: '1000 GSM Laser-Cut Board • Metallic Shimmer',
      foil: '#a26833',
      foilName: 'Champagne Bronze',
      seal: '#523122',
      sealName: 'Classic Cocoa'
    },
    {
      id: 'KNLW202575',
      name: 'White Floral Laser Cut Premium Wedding Invitation',
      category: 'Laser-Cut & Filigree',
      categoryKey: 'laser-cut',
      price: '₹820 / $10.25',
      inr: '₹820',
      usd: '$10.25',
      img: './images/cards/KNLW202575.png',
      tag: 'Botanical Filigree',
      desc: 'Delicate laser-cut botanical vines opening to dual shimmer insert cards with raised thermal lettering.',
      paper: '350 GSM Ivory Pearlized Sheet • Die Cut Floral Arch',
      foil: '#7f3b2d',
      foilName: 'Royal Red Foil',
      seal: '#a26833',
      sealName: 'Caramel Gold'
    },
    {
      id: 'KNLW202577',
      name: 'White Lord Radha Krishna Premium Wedding Invitation',
      category: 'Traditional Sacred Motifs',
      categoryKey: 'sacred',
      price: '₹890 / $11.00',
      inr: '₹890',
      usd: '$11.00',
      img: './images/cards/KNLW202577.png',
      tag: 'Divine Blessings',
      desc: 'Divine Radha Krishna portrait embossing with gold border highlights and festive wedding verse.',
      paper: 'Padded Archival Board • Radha Krishna Laser Relief',
      foil: '#7f3b2d',
      foilName: 'Royal Red Foil',
      seal: '#7f3b2d',
      sealName: 'Royal Ruby Burgundy'
    },
    {
      id: 'KNLW202579',
      name: 'Beige Lord Balaji Padmavathi Premium Wedding Invitation',
      category: 'Traditional Sacred Motifs',
      categoryKey: 'sacred',
      price: '₹880 / $11.00',
      inr: '₹880',
      usd: '$11.00',
      img: './images/cards/KNLW202579.png',
      tag: 'South Indian Classic',
      desc: 'Sacred Tirupati Balaji motif with multi-color traditional inserts and turmeric scented envelope.',
      paper: 'Embossed Gold Border • Saffron & Turmeric Folios',
      foil: '#523122',
      foilName: 'Dark Chocolate Bronze',
      seal: '#a26833',
      sealName: 'Caramel Gold'
    },
    {
      id: 'KNLW202580',
      name: 'Sandal Lord Shiva Parvathi Padded Premium Wedding Invitation',
      category: 'Padded Wedding Cards',
      categoryKey: 'padded',
      price: '₹790 / $9.90',
      inr: '₹790',
      usd: '$9.90',
      img: './images/cards/KNLW202580.png',
      tag: 'Kalyana Utsavam',
      desc: 'Rich sandalwood textured padded card depicting divine Shiva Parvathi Kalyana with gold foil borders.',
      paper: 'Heavy Padded Cardstock • Antique Bronze Stamping',
      foil: '#a26833',
      foilName: 'Antique Bronze',
      seal: '#7f3b2d',
      sealName: 'Royal Ruby Burgundy'
    },
    {
      id: 'KNLW202581',
      name: 'Cream Lord Ganesha Premium Padded Wedding Invitation',
      category: 'Padded Wedding Cards',
      categoryKey: 'padded',
      price: '₹750 / $9.50',
      inr: '₹750',
      usd: '$9.50',
      img: './images/cards/KNLW202581.png',
      tag: 'Shubh Muhurtham',
      desc: 'Auspicious embossed Ganesha medallion nestled on deep ivory padded board with gold foiled shloka.',
      paper: '800 GSM Padded Matte Board • Royal Red Envelope',
      foil: '#7f3b2d',
      foilName: 'Royal Red Foil',
      seal: '#7f3b2d',
      sealName: 'Royal Ruby Burgundy'
    },
    {
      id: 'KNLW202582',
      name: 'Pastel Green Lord Balaji Padmavadhi Premium Wedding Invitation',
      category: 'Traditional Sacred Motifs',
      categoryKey: 'sacred',
      price: '₹860 / $10.80',
      inr: '₹860',
      usd: '$10.80',
      img: './images/cards/KNLW202582.png',
      tag: 'Sage Pastels',
      desc: 'Modern pastel mint green card featuring sacred gold foil motifs and contrasting peach insert cards.',
      paper: 'Pastel Sage Metallic Texture • Multi-Panel Fold',
      foil: '#523122',
      foilName: 'Dark Chocolate Bronze',
      seal: '#523122',
      sealName: 'Classic Cocoa'
    },
    {
      id: 'KNLW202576',
      name: 'Royal Blue Booklet Style Premium Wedding Invitation',
      category: 'Hardbound Book Suites',
      categoryKey: 'books',
      price: '₹920 / $11.50',
      inr: '₹920',
      usd: '$11.50',
      img: './images/cards/KNLW202576.png',
      tag: 'Imperial Navy',
      desc: 'Royal sapphire booklet opening to 4 fold-out program panels, gold foil mandala, and ribbon fastener.',
      paper: 'Navy Sapphire Matte • Gilded Edge Mandala',
      foil: '#222123',
      foilName: 'Obsidian Noir',
      seal: '#222123',
      sealName: 'Velvet Noir'
    },
    {
      id: 'KNLW202562',
      name: 'Gold Premium Door Style Luxury Invitation Box Set',
      category: 'Boxed Scroll Invitations',
      categoryKey: 'boxed',
      price: '₹1,850 / $23.00',
      inr: '₹1,850',
      usd: '$23.00',
      img: './images/cards/KNLW202562.png',
      tag: 'Masterpiece Box',
      desc: 'Double door opening luxury presentation box with magnetic lock, silk card tray, and monogram seal.',
      paper: 'Heavy Metallic Box • Silk Tray • Monogram Crest',
      foil: '#a26833',
      foilName: 'Caramel Gold',
      seal: '#a26833',
      sealName: 'Caramel Gold'
    },
    {
      id: 'KNLW202570',
      name: 'Maroon Premium Balaji Padmavathi Luxury Invitation',
      category: 'Traditional Sacred Motifs',
      categoryKey: 'sacred',
      price: '₹940 / $11.80',
      inr: '₹940',
      usd: '$11.80',
      img: './images/cards/KNLW202570.png',
      tag: 'Zari Embroidery',
      desc: 'Velvet lined maroon card with gold embroidered mantle design, Tirupati deities, and rich tassel.',
      paper: 'Velvet Padded Board • Intricate Mantapa Gold Foil',
      foil: '#7f3b2d',
      foilName: 'Royal Red Foil',
      seal: '#7f3b2d',
      sealName: 'Royal Ruby Burgundy'
    },
    {
      id: 'KNLW202569',
      name: 'Red Balaji Padmavathi Premium Luxury Invitation',
      category: 'Padded Wedding Cards',
      categoryKey: 'padded',
      price: '₹850 / $10.75',
      inr: '₹850',
      usd: '$10.75',
      img: './images/cards/KNLW202569.png',
      tag: 'Sindoor Crimson',
      desc: 'Deep crimson heavy padded card with sacred Balaji motif, multi-color insert folios, and antique gold debossing.',
      paper: 'Multi-color Inserts • Embossed Balaji Padmavathi',
      foil: '#7f3b2d',
      foilName: 'Royal Red Foil',
      seal: '#7f3b2d',
      sealName: 'Royal Ruby Burgundy'
    },
    {
      id: 'KNLW202568',
      name: 'White Lotus Floral Premium Luxury Invitation',
      category: 'Door Style Gatefolds',
      categoryKey: 'door-style',
      price: '₹790 / $9.90',
      inr: '₹790',
      usd: '$9.90',
      img: './images/cards/KNLW202568.png',
      tag: 'Lotus Bloom',
      desc: 'Intricate blooming lotus gatefold flaps with rose gold foil accents and pearlized interior folios.',
      paper: 'Gatefold Lotus Opening • Rose Gold Foil Highlights',
      foil: '#a26833',
      foilName: 'Caramel Gold',
      seal: '#7f3b2d',
      sealName: 'Royal Ruby Burgundy'
    },
    {
      id: 'KNLW202566',
      name: 'Red Premium South Indian Luxury Booklet-Style Wedding Invitation',
      category: 'Hardbound Book Suites',
      categoryKey: 'books',
      price: '₹880 / $11.00',
      inr: '₹880',
      usd: '$11.00',
      img: './images/cards/KNLW202566.png',
      tag: 'South Indian Heritage',
      desc: 'Traditional South Indian wedding booklet with illustrated program rituals, muhurtham times, and gold print.',
      paper: 'Sandal Scented Hardbound Book • Traditional Shloka',
      foil: '#7f3b2d',
      foilName: 'Royal Red Foil',
      seal: '#7f3b2d',
      sealName: 'Royal Ruby Burgundy'
    },
    {
      id: 'KNLW202567',
      name: 'White Royal Floral Arch Premium Luxury Invitation',
      category: 'Door Style Gatefolds',
      categoryKey: 'door-style',
      price: '₹810 / $10.15',
      inr: '₹810',
      usd: '$10.15',
      img: './images/cards/KNLW202567.png',
      tag: 'Royal Archway',
      desc: 'Architectural palace arch doorway with embossed gold columns and botanical jasmine garlands.',
      paper: 'Die-cut Arch Doorway • Botanical Embossing',
      foil: '#523122',
      foilName: 'Dark Chocolate Bronze',
      seal: '#a26833',
      sealName: 'Caramel Gold'
    },
    {
      id: 'KNAM4905',
      name: 'Beige Palace Elephant Padded Wedding Card',
      category: 'Padded Wedding Cards',
      categoryKey: 'padded',
      price: '₹730 / $9.15',
      inr: '₹730',
      usd: '$9.15',
      img: './images/cards/KNAM4905.png',
      tag: 'Vintage Baarat',
      desc: 'Vintage ivory padded wedding card with majestic royal procession elephant motif in embossed gold.',
      paper: 'Textured Handmade Felt Board • Gold Embossed Elephant',
      foil: '#523122',
      foilName: 'Dark Chocolate Bronze',
      seal: '#a26833',
      sealName: 'Caramel Gold'
    },
    {
      id: 'KNMO9319',
      name: 'Sandal Bride Groom Padded Wedding Card',
      category: 'Padded Wedding Cards',
      categoryKey: 'padded',
      price: '₹760 / $9.50',
      inr: '₹760',
      usd: '$9.50',
      img: './images/cards/KNMO9319.png',
      tag: 'Couple Portrait',
      desc: 'Sandalwood tinted padded card with elegant silhouette of the bride and groom taking sacred vows.',
      paper: 'Heavy 750 GSM Board • Couple Silhouette Cutout',
      foil: '#7f3b2d',
      foilName: 'Royal Red Foil',
      seal: '#7f3b2d',
      sealName: 'Royal Ruby Burgundy'
    },
    {
      id: 'KNAM4902',
      name: 'Navy Blue Laser-cut Bride Groom Wedding Card',
      category: 'Laser-Cut & Filigree',
      categoryKey: 'laser-cut',
      price: '₹720 / $9.00',
      inr: '₹720',
      usd: '$9.00',
      img: './images/cards/KNAM4902.png',
      tag: 'Lace Silhouette',
      desc: 'Midnight navy cardstock with ultra-fine laser lace cutting and shimmering champagne backing card.',
      paper: 'Intricate Bridal Couple Laser Lace • Gold Backer',
      foil: '#222123',
      foilName: 'Obsidian Noir',
      seal: '#222123',
      sealName: 'Velvet Noir'
    },
    {
      id: 'KNLW202557',
      name: 'Maroon Premium Floral Luxury Invitation Box Set',
      category: 'Boxed Scroll Invitations',
      categoryKey: 'boxed',
      price: '₹1,650 / $21.00',
      inr: '₹1,650',
      usd: '$21.00',
      img: './images/cards/KNLW202557.png',
      tag: 'Signature Velvet Box',
      desc: 'Handcrafted floral motif box with velvet card padding, gilded envelope liner, and personalized wax seal.',
      paper: 'Handcrafted Floral Velvet Box • Acrylic Monogram Plate',
      foil: '#7f3b2d',
      foilName: 'Royal Red Foil',
      seal: '#7f3b2d',
      sealName: 'Royal Ruby Burgundy'
    }
  ];

  // 6 Flagship Showrooms
  const royalShowrooms = [
    {
      city: 'Bengaluru Flagship Showroom',
      badge: 'Historic Flagship & Atelier',
      phone: '+91 80 4151 7777 / +91 98450 12345',
      hours: 'Mon - Sat: 10:30 AM – 8:30 PM | Sun: 11:00 AM – 7:00 PM',
      address: 'King of Cards House, No. 45, 1st Cross, Chamrajpet (Opp. State Bank of India), Bengaluru, Karnataka 560018',
      mapUrl: 'https://maps.google.com/?q=King+of+Cards+Chamrajpet+Bengaluru'
    },
    {
      city: 'Commercial Street Boutique',
      badge: 'Central Fashion District',
      phone: '+91 80 2558 8888',
      hours: 'Mon - Sun: 10:30 AM – 9:00 PM',
      address: '1st Floor, Tasker Town, Commercial Street Junction, Bengaluru, Karnataka 560001',
      mapUrl: 'https://maps.google.com/?q=King+of+Cards+Commercial+Street+Bengaluru'
    },
    {
      city: 'Hyderabad Jubilee Hills Boutique',
      badge: 'Royal Telangana Showroom',
      phone: '+91 40 6677 9999 / +91 98490 54321',
      hours: 'Mon - Sat: 11:00 AM – 8:30 PM',
      address: 'Plot 72, Road No. 36, Jubilee Hills (Near Peddamma Gudi Metro), Hyderabad, Telangana 500033',
      mapUrl: 'https://maps.google.com/?q=King+of+Cards+Jubilee+Hills+Hyderabad'
    },
    {
      city: 'Mumbai Bandra Atelier',
      badge: 'Bespoke Bridal Salon',
      phone: '+91 22 2640 1111',
      hours: 'Tue - Sun: 11:00 AM – 8:00 PM (By Appointment)',
      address: 'Waterfield Road, Off Linking Road, Bandra West, Mumbai, Maharashtra 400050',
      mapUrl: 'https://maps.google.com/?q=King+of+Cards+Bandra+West+Mumbai'
    },
    {
      city: 'Chennai T. Nagar Showroom',
      badge: 'Tamil Nadu Flagship',
      phone: '+91 44 2434 2222',
      hours: 'Mon - Sun: 10:00 AM – 8:30 PM',
      address: 'Usman Road, T. Nagar (Opp. Panagal Park), Chennai, Tamil Nadu 600017',
      mapUrl: 'https://maps.google.com/?q=King+of+Cards+T+Nagar+Chennai'
    },
    {
      city: 'USA Concierge (New Jersey)',
      badge: 'International Client Services',
      phone: '+1 (732) 555-0199 / WhatsApp: +91 98450 12345',
      hours: 'Mon - Fri: 9:00 AM – 6:00 PM EST (Worldwide Express Fedex Courier)',
      address: 'Oak Tree Road, Edison, New Jersey 08820, United States',
      mapUrl: 'https://maps.google.com/?q=Edison+New+Jersey+USA'
    }
  ];

  // Customizer State
  const state = {
    activeTab: 'customizer',
    monogram: 'P & R',
    names: 'Priya & Rohan',
    details: 'Cordially invite you to celebrate their wedding ceremony\nSaturday, November 28, 2026\nThe Leela Palace • Bengaluru',
    foil: { name: 'Royal Red Foil', color: '#7f3b2d' },
    paper: { name: 'Padded Board Set' },
    seal: { name: 'Royal Ruby Burgundy', color: '#7f3b2d' },
    selectedProduct: royalProducts[0]
  };

  function init() {
    if (document.getElementById('angraity-root')) return;

    // 1. Lenis Smooth Momentum Scrolling (Preserved)
    if (window.Lenis) {
      try {
        const lenis = new window.Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1.1,
          touchMultiplier: 1.8,
        });
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        window.__lenis = lenis;
      } catch (e) {
        console.warn('Lenis init warning:', e);
      }
    }

    // 2. Create Root Wrapper
    const root = document.createElement('div');
    root.id = 'angraity-root';
    document.body.appendChild(root);

    // Inject Navigation Header, Drawer & Toast (Using Spylt Design Tokens)
    root.innerHTML = `
      <!-- Floating King of Cards Atelier Header (Styled like Spylt Pill Nav) -->
      <header class="ang-luxury-header" id="angHeader">
        <nav class="ang-nav-links">
          <a class="ang-nav-link" id="navLinkRunway" href="#runway">Runway Cards</a>
          <a class="ang-nav-link" id="navLinkAllCards" href="#all-suites">All 20 Suites</a>
          <a class="ang-nav-link" id="navLinkCraft" href="#craft">Artisan Craft</a>
          <a class="ang-nav-link" id="navLinkStores" href="#stores">Showrooms</a>
          <a class="ang-nav-link" href="./floema/" title="Explore Architectural 3D Space" style="display: inline-flex; align-items: center; gap: 0.35rem; color: #a26833;">
            <span>3D Studio</span>
            <span style="font-size: 0.75rem; background: #e3a458; color: #523122; padding: 0.1rem 0.5rem; border-radius: 9999px;">CAD</span>
          </a>
        </nav>
        <button class="ang-btn-customise" id="openCustomizerBtn">
          Card Atelier
        </button>
      </header>

      <!-- Customizer Drawer / Slide-Over (Harmonized with Spylt Milk Palette) -->
      <div class="ang-drawer-backdrop" id="drawerBackdrop">
        <aside class="ang-customizer-drawer" id="customizerDrawer">
          <div class="ang-drawer-header">
            <div>
              <div style="font-family: var(--font-display); font-size: 0.85rem; text-transform: uppercase; letter-spacing: -0.02em; color: var(--color-mid-brown); font-weight: 700;">King of Cards • Official Atelier</div>
              <h2 class="ang-drawer-title" id="drawerMainTitle">Interactive Card Proofing</h2>
            </div>
            <button class="ang-drawer-close" id="closeDrawerBtn" aria-label="Close Customizer">✕</button>
          </div>

          <!-- Drawer Navigation Tabs -->
          <div class="ang-drawer-tabs">
            <button class="ang-drawer-tab active" data-tab="customizer" id="tabBtnCustomizer">3D Customizer</button>
            <button class="ang-drawer-tab" data-tab="catalog" id="tabBtnCatalog">Product Catalog (20)</button>
            <button class="ang-drawer-tab" data-tab="stores" id="tabBtnStores">Showrooms & Stores</button>
          </div>

          <!-- Tab 1: 3D Customizer -->
          <div class="ang-drawer-body" id="tabContentCustomizer">
            <div class="ang-card-preview-stage">
              <div class="ang-card-preview" id="cardPreview" style="--card-foil-color: ${state.foil.color}; --card-seal-color: ${state.seal.color};">
                <div>
                  <div class="ang-card-monogram" id="previewMonogram">${state.monogram}</div>
                  <div class="ang-card-eyebrow">Together with their families</div>
                </div>
                <div>
                  <div class="ang-card-names" id="previewNames">${state.names}</div>
                  <div class="ang-card-details" id="previewDetails">${state.details.replace(/\n/g, '<br>')}</div>
                </div>
                <div>
                  <div class="ang-wax-seal" id="previewSeal">
                    <span id="previewSealLetter">P</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Monogram & Names Input -->
            <div class="ang-option-section">
              <label class="ang-option-label">Monogram Initials & Couple Names</label>
              <div style="display: grid; grid-template-columns: 100px 1fr; gap: 0.75rem;">
                <input class="ang-input-field" id="inputMonogram" type="text" value="P & R" maxlength="5" placeholder="P & R">
                <input class="ang-input-field" id="inputNames" type="text" value="Priya & Rohan" placeholder="Priya & Rohan">
              </div>
            </div>

            <!-- Ceremony Details -->
            <div class="ang-option-section">
              <label class="ang-option-label">Invitation Text & Ceremony Details</label>
              <textarea class="ang-input-field" id="inputDetails" rows="3" style="resize: vertical;">${state.details}</textarea>
            </div>

            <!-- Hot Foil Stamping -->
            <div class="ang-option-section">
              <label class="ang-option-label">Artisan Hot Foil Stamping</label>
              <div class="ang-option-grid" id="foilOptions">
                <div class="ang-option-card active" data-foil-name="Royal Red Foil" data-foil-color="#7f3b2d">
                  <div class="ang-swatch" style="background: #7f3b2d;"></div>
                  <div class="ang-option-name">Royal Red Foil</div>
                </div>
                <div class="ang-option-card" data-foil-name="Caramel Gold" data-foil-color="#a26833">
                  <div class="ang-swatch" style="background: #a26833;"></div>
                  <div class="ang-option-name">Caramel Gold</div>
                </div>
                <div class="ang-option-card" data-foil-name="Dark Chocolate Bronze" data-foil-color="#523122">
                  <div class="ang-swatch" style="background: #523122;"></div>
                  <div class="ang-option-name">Cocoa Bronze</div>
                </div>
                <div class="ang-option-card" data-foil-name="Obsidian Noir" data-foil-color="#222123">
                  <div class="ang-swatch" style="background: #222123;"></div>
                  <div class="ang-option-name">Obsidian Noir</div>
                </div>
              </div>
            </div>

            <!-- Wax Seal Color -->
            <div class="ang-option-section">
              <label class="ang-option-label">Signature Monogram Wax Seal</label>
              <div class="ang-option-grid" id="sealOptions">
                <div class="ang-option-card active" data-seal-name="Royal Ruby Burgundy" data-seal-color="#7f3b2d">
                  <div class="ang-swatch" style="background: #7f3b2d;"></div>
                  <div class="ang-option-name">Ruby Burgundy</div>
                </div>
                <div class="ang-option-card" data-seal-name="Caramel Gold" data-seal-color="#a26833">
                  <div class="ang-swatch" style="background: #a26833;"></div>
                  <div class="ang-option-name">Caramel Gold</div>
                </div>
                <div class="ang-option-card" data-seal-name="Classic Cocoa" data-seal-color="#523122">
                  <div class="ang-swatch" style="background: #523122;"></div>
                  <div class="ang-option-name">Classic Cocoa</div>
                </div>
                <div class="ang-option-card" data-seal-name="Velvet Noir" data-seal-color="#222123">
                  <div class="ang-swatch" style="background: #222123;"></div>
                  <div class="ang-option-name">Velvet Noir</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab 2: Catalog -->
          <div class="ang-drawer-body" id="tabContentCatalog" style="display: none;">
            <div style="font-family: var(--font-paragraph); font-size: 0.95rem; color: var(--color-dark-brown); margin-bottom: 1rem;">
              Click any royal suite to immediately load into the 3D Customizer.
            </div>
            <div class="ang-catalog-grid" id="drawerCatalogGrid"></div>
          </div>

          <!-- Tab 3: Flagship Stores -->
          <div class="ang-drawer-body" id="tabContentStores" style="display: none;">
            <div style="font-family: var(--font-paragraph); font-size: 0.95rem; color: var(--color-dark-brown); margin-bottom: 1rem;">
              Visit King of Cards retail showrooms across India & USA for physical touch and tactile proofs.
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;" id="drawerStoresList"></div>
          </div>

          <!-- Drawer Footer -->
          <div class="ang-drawer-footer">
            <button class="ang-btn-primary" id="requestProofBtn">
              Reserve Sample Proof Box (Zero Payment)
            </button>
            <div style="font-family: var(--font-paragraph); font-size: 0.8rem; text-align: center; color: var(--color-dark-brown); opacity: 0.8; margin-top: 0.5rem;">
              Direct consultation with Senior Calligrapher • Free Express Proofing
            </div>
          </div>
        </aside>
      </div>

      <!-- Proof Confirmation Modal -->
      <div class="ang-drawer-backdrop" id="modalBackdrop" style="display: flex; align-items: center; justify-content: center;">
        <div style="background-color: var(--color-card-bg); border: 0.4vw solid var(--color-dark-brown); border-radius: 2rem; padding: 2.5rem; max-width: 500px; width: 90%; text-align: center; box-shadow: 0 25px 60px rgba(0,0,0,0.4); position: relative;">
          <div style="font-family: var(--font-display); font-size: 1rem; text-transform: uppercase; color: var(--color-mid-brown); font-weight: 700;">VIP Proof Reserved</div>
          <h3 style="font-family: var(--font-display); font-size: 2.5rem; color: var(--color-dark-brown); font-weight: 700; text-transform: uppercase; letter-spacing: -0.03em; margin: 0.5rem 0 1rem 0;">King of Cards Atelier</h3>
          <p style="font-family: var(--font-paragraph); font-size: 1rem; color: var(--color-dark-brown); line-height: 1.5; margin-bottom: 1.5rem;">
            Your bespoke wedding invitation specification has been reserved. Reference: <strong id="modalRef" style="color: var(--color-red-brown);">#KOC-7821</strong>.
          </p>
          <div style="background-color: var(--color-milk); border: 2px solid #e8ddca; border-radius: 1rem; padding: 1rem; text-align: left; font-family: var(--font-paragraph); font-size: 0.95rem; line-height: 1.6; color: var(--color-dark-brown); margin-bottom: 1.5rem;">
            <div><strong>Suite:</strong> <span id="modalNames">P & R — Priya & Rohan</span></div>
            <div><strong>Hot Foil:</strong> <span id="modalFoil">Royal Red Foil</span></div>
            <div><strong>Seal:</strong> <span id="modalSeal">Royal Ruby Burgundy</span></div>
          </div>
          <button class="ang-btn-primary" id="closeModalBtn">Return to Atelier</button>
        </div>
      </div>

      <!-- Toast Notification -->
      <div class="ang-toast" id="angToast">
        <span id="toastMsg">Updated card specifications</span>
      </div>
    `;

    // Populate Drawer Catalog Tab
    const drawerCatalogGrid = document.getElementById('drawerCatalogGrid');
    drawerCatalogGrid.innerHTML = royalProducts.map(p => `
      <div class="ang-product-card" data-product-id="${p.id}">
        <img class="ang-product-thumb" src="${p.img}" alt="${p.name}">
        <div class="ang-product-code">${p.id}</div>
        <div class="ang-product-title">${p.name}</div>
        <div class="ang-product-price">
          <span>${p.price}</span>
          <span style="color: var(--color-red-brown);">Select →</span>
        </div>
      </div>
    `).join('');

    // Populate Drawer Stores Tab
    const drawerStoresList = document.getElementById('drawerStoresList');
    drawerStoresList.innerHTML = royalShowrooms.map(s => `
      <div class="ang-store-card">
        <div class="ang-store-city">${s.city}</div>
        <div class="ang-store-addr">${s.address}</div>
        <div style="font-family: var(--font-paragraph); font-size: 0.85rem; color: var(--color-red-brown); font-weight: 700; margin-top: 0.25rem;">📞 ${s.phone}</div>
        <div style="font-family: var(--font-paragraph); font-size: 0.85rem; color: var(--color-mid-brown);">🕒 ${s.hours}</div>
      </div>
    `).join('');

    // Wire Hero Elements
    injectHeroElements();
    injectVideoSwitcher();

    // Wire In-Flow Sections
    injectRunwayGallery();
    injectAllProductsSection();
    injectShowroomsSection();

    // Wire Drawer & Interactions
    setupDrawerInteractions();
  }

        // 3. Inject Hero Page Elements (Rotated Ribbon, 4 Corner Floating Physical Cards & Category Bar)
  function injectHeroElements() {
    const hero = document.querySelector('.hero-container');
    if (!hero) {
      setTimeout(injectHeroElements, 300);
      return;
    }

    if (document.getElementById('angHeroTopBanner')) return;

    // Top Banner Ribbon (Matches Spylt Rotated Text Banner)
    const topBanner = document.createElement('div');
    topBanner.id = 'angHeroTopBanner';
    topBanner.className = 'ang-hero-top-banner';
    topBanner.innerHTML = `
      <span>India's Premier Wedding & Gifting Cards Atelier • Est. 1995 • 50,000+ Celebrations</span>
    `;
    hero.appendChild(topBanner);

    // 4 Corner Floating Physical Cards (Flanking Left & Right)
    // Left Top Card
    const ltCard = document.createElement('div');
    ltCard.className = 'ang-hero-floating-card left-top';
    const pLT = royalProducts[0]; // Maroon Scroll Box Set
    ltCard.innerHTML = `
      <div class="ang-hero-card-img-wrap">
        <span class="ang-hero-card-badge">Royal Bestseller</span>
        <img src="${pLT.img}" alt="${pLT.name}">
      </div>
      <div>
        <div class="ang-hero-card-code">${pLT.id}</div>
        <div class="ang-hero-card-title">${pLT.name}</div>
        <div class="ang-hero-card-foot">
          <div class="ang-hero-card-price">${pLT.inr}</div>
          <div class="ang-hero-card-action">Customize →</div>
        </div>
      </div>
    `;
    ltCard.addEventListener('click', () => loadProductIntoCustomizer(pLT));
    hero.appendChild(ltCard);

    // Left Bottom Card
    const lbCard = document.createElement('div');
    lbCard.className = 'ang-hero-floating-card left-bottom';
    const pLB = royalProducts.find(p => p.id === 'KNLW202562') || royalProducts[2]; // Gifting Box Set
    lbCard.innerHTML = `
      <div class="ang-hero-card-img-wrap">
        <span class="ang-hero-card-badge">Gifting Favor</span>
        <img src="${pLB.img}" alt="${pLB.name}">
      </div>
      <div>
        <div class="ang-hero-card-code">${pLB.id}</div>
        <div class="ang-hero-card-title">${pLB.name}</div>
        <div class="ang-hero-card-foot">
          <div class="ang-hero-card-price">${pLB.inr}</div>
          <div class="ang-hero-card-action">Customize →</div>
        </div>
      </div>
    `;
    lbCard.addEventListener('click', () => loadProductIntoCustomizer(pLB));
    hero.appendChild(lbCard);

    // Right Top Card
    const rtCard = document.createElement('div');
    rtCard.className = 'ang-hero-floating-card right-top';
    const pRT = royalProducts[2]; // Peacock Door Gatefold
    rtCard.innerHTML = `
      <div class="ang-hero-card-img-wrap">
        <span class="ang-hero-card-badge">2026 Couture</span>
        <img src="${pRT.img}" alt="${pRT.name}">
      </div>
      <div>
        <div class="ang-hero-card-code">${pRT.id}</div>
        <div class="ang-hero-card-title">${pRT.name}</div>
        <div class="ang-hero-card-foot">
          <div class="ang-hero-card-price">${pRT.inr}</div>
          <div class="ang-hero-card-action">Customize →</div>
        </div>
      </div>
    `;
    rtCard.addEventListener('click', () => loadProductIntoCustomizer(pRT));
    hero.appendChild(rtCard);

    // Right Bottom Card
    const rbCard = document.createElement('div');
    rbCard.className = 'ang-hero-floating-card right-bottom';
    const pRB = royalProducts[1]; // Ivory Book Style
    rbCard.innerHTML = `
      <div class="ang-hero-card-img-wrap">
        <span class="ang-hero-card-badge">Hardbound</span>
        <img src="${pRB.img}" alt="${pRB.name}">
      </div>
      <div>
        <div class="ang-hero-card-code">${pRB.id}</div>
        <div class="ang-hero-card-title">${pRB.name}</div>
        <div class="ang-hero-card-foot">
          <div class="ang-hero-card-price">${pRB.inr}</div>
          <div class="ang-hero-card-action">Customize →</div>
        </div>
      </div>
    `;
    rbCard.addEventListener('click', () => loadProductIntoCustomizer(pRB));
    hero.appendChild(rbCard);

    // Category Filter Pills Bar (Directly below Hero Button)
    const heroContent = hero.querySelector('.hero-content');
    if (heroContent && !document.getElementById('angHeroCategories')) {
      const catBar = document.createElement('div');
      catBar.id = 'angHeroCategories';
      catBar.className = 'ang-hero-categories-bar';
      catBar.innerHTML = `
        <a href="#all-suites" class="ang-hero-cat-pill" data-cat="wedding">💌 Wedding Cards</a>
        <a href="#all-suites" class="ang-hero-cat-pill" data-cat="boxed">🎁 Gifting & Boxes</a>
        <a href="#all-suites" class="ang-hero-cat-pill" data-cat="scrolls">📜 Royal Boxed Scrolls</a>
        <a href="#all-suites" class="ang-hero-cat-pill" data-cat="laser-cut">✂️ Laser-Cut Lace</a>
        <a href="#all-suites" class="ang-hero-cat-pill" data-cat="sacred">🕉️ Sacred Motifs</a>
        <a href="#all-suites" class="ang-hero-cat-pill" data-cat="books">💎 Hardbound Books</a>
      `;
      heroContent.appendChild(catBar);

      catBar.querySelectorAll('.ang-hero-cat-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const cat = pill.getAttribute('data-cat');
          const filterBtn = document.querySelector(`.ang-filter-btn[data-cat="${cat}"]`);
          if (filterBtn) filterBtn.click();
        });
      });
    }

    // Ensure hero panoramic cards wrap exists
    if (!hero.querySelector('.ang-hero-panoramic-wrap')) {
      const panWrap = document.createElement('div');
      panWrap.className = 'ang-hero-panoramic-wrap';
      panWrap.innerHTML = `
        <img src="./images/hero-cards-panoramic.png" alt="Kings of Cards Luxury Wedding Cards Collection" onclick="openDrawer('customizer')" title="Click to customize any card in our 3D Atelier">
      `;
      hero.appendChild(panWrap);
    }
  }

  // 3b. Inject Video Section Switcher & Factory Tour Controller
  function injectVideoSwitcher() {
    const pinSection = document.querySelector('.vd-pin-section');
    if (!pinSection) {
      setTimeout(injectVideoSwitcher, 300);
      return;
    }

    if (document.getElementById('angVideoSwitcher')) return;

    pinSection.style.position = 'relative';

    const video = pinSection.querySelector('video');

    const videoOptions = [
      {
        id: 'factory',
        icon: '🏭',
        label: 'Factory Tour & Machinery',
        title: 'King of Cards 30,000 sq.ft Manufacturing Facility, Heidelberg Offset Presses & Automation',
        src: 'https://kingofcards.in/cdn/shop/videos/c/vp/60c4f12fb60b468aa984dd4ac76cc3a3/60c4f12fb60b468aa984dd4ac76cc3a3.HD-1080p-7.2Mbps-85600308.mp4'
      },
      {
        id: 'foil',
        icon: '✨',
        label: 'Artisan Hot-Foil & Printing',
        title: 'Artisan 24k Gold Foil Stamping, Thermal Debossing & Intricate Laser Filigree',
        src: 'https://kingofcards.in/cdn/shop/videos/c/vp/2e24160c048e42fdaf966eb4c233b4b7/2e24160c048e42fdaf966eb4c233b4b7.HD-1080p-7.2Mbps-86569869.mp4'
      },
      {
        id: 'unboxing',
        icon: '📦',
        label: 'Royal Boxed Invitation Unboxing',
        title: 'Royal Velvet Presentation Boxes, Satin Silk Liners & Heirloom Keepsakes',
        src: 'https://kingofcards.in/cdn/shop/videos/c/vp/ec30576357314c1594a5cf5243037752/ec30576357314c1594a5cf5243037752.HD-1080p-7.2Mbps-86569868.mp4'
      },
      {
        id: 'scrolls',
        icon: '📜',
        label: 'Sacred Scrolls & Stories',
        title: 'Heirloom Sacred Farman Scrolls & Real Couples Celebrations Worldwide',
        src: 'https://kingofcards.in/cdn/shop/videos/c/vp/f395edd86e4e48c4bcba0ed8a4cc72d2/f395edd86e4e48c4bcba0ed8a4cc72d2.HD-1080p-7.2Mbps-86569867.mp4'
      }
    ];

    // Top Live Info Pill Badge
    const infoBadge = document.createElement('div');
    infoBadge.id = 'angVideoInfoBadge';
    infoBadge.className = 'ang-video-info-badge';
    infoBadge.innerHTML = `
      <span class="pulse-dot"></span>
      <span id="angVideoInfoTitle">${videoOptions[0].title}</span>
    `;
    pinSection.appendChild(infoBadge);

    // Switcher Bar
    const bar = document.createElement('div');
    bar.id = 'angVideoSwitcher';
    bar.className = 'ang-video-switcher-bar';
    bar.innerHTML = `
      <span class="ang-video-switcher-label">🎥 Video Tour:</span>
      ${videoOptions.map((opt, i) => `
        <button class="ang-video-opt-btn ${i === 0 ? 'active' : ''}" data-idx="${i}">
          ${opt.icon} ${opt.label}
        </button>
      `).join('')}
    `;
    pinSection.appendChild(bar);

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


  function injectRunwayGallery() {
    if (document.getElementById('royal-horizontal-showcase')) return;

    const flavorSection = document.querySelector('.flavor-section');
    if (!flavorSection) {
      setTimeout(injectRunwayGallery, 300);
      return;
    }

    const runwaySec = document.createElement('section');
    runwaySec.id = 'royal-horizontal-showcase';
    runwaySec.className = 'ang-runway-section';

    // 10 Featured Runway Suites
    const runwayItems = royalProducts.slice(0, 10);

    runwaySec.innerHTML = `
      <div class="ang-runway-header" id="runway">
        <div class="ang-spylt-badge">RUNWAY SHOWCASE • 2026 BRIDAL COLLECTION</div>
        <h2 class="ang-runway-title">Haute Invitation Gallery</h2>
        <p class="ang-runway-subtitle">Glide horizontally across King of Cards' most celebrated couture invitation suites, hand-crafted with archival board and hot foil stamping.</p>
        <div class="ang-runway-controls">
          <button class="ang-runway-arrow" id="runwayPrev" aria-label="Previous Suites">‹</button>
          <button class="ang-runway-arrow" id="runwayNext" aria-label="Next Suites">›</button>
          <span class="ang-runway-drag-hint">↔ Scroll or Drag to Glide</span>
        </div>
      </div>
      <div class="ang-runway-track-wrap" id="runwayTrackWrap">
        <div class="ang-runway-track" id="runwayTrack">
          ${runwayItems.map(p => `
            <div class="ang-runway-card" data-product-id="${p.id}">
              <div class="ang-runway-card-img">
                <span class="ang-runway-card-tag">${p.tag}</span>
                <img src="${p.img}" alt="${p.name}">
              </div>
              <div class="ang-runway-card-category">${p.category}</div>
              <div class="ang-runway-card-title">${p.name}</div>
              <div class="ang-runway-card-paper">${p.paper}</div>
              <div class="ang-runway-card-footer">
                <div class="ang-runway-price-row">
                  <span class="ang-runway-price-inr">${p.inr}</span>
                  <span class="ang-runway-price-usd">${p.usd}</span>
                </div>
                <div class="ang-runway-btn-row">
                  <button class="ang-btn-custom btn-runway-custom" data-product-id="${p.id}">Customize</button>
                  <button class="ang-btn-sample btn-runway-sample" data-product-id="${p.id}">Sample Proof</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Insert directly after flavorSection
    flavorSection.parentNode.insertBefore(runwaySec, flavorSection.nextSibling);

    // Track horizontal scrolling & arrow navigation
    const trackWrap = document.getElementById('runwayTrackWrap');
    const prevBtn = document.getElementById('runwayPrev');
    const nextBtn = document.getElementById('runwayNext');

    if (trackWrap && prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        trackWrap.scrollBy({ left: -360, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        trackWrap.scrollBy({ left: 360, behavior: 'smooth' });
      });

      // Mouse drag scrolling
      let isDown = false;
      let startX;
      let scrollLeft;

      trackWrap.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - trackWrap.offsetLeft;
        scrollLeft = trackWrap.scrollLeft;
      });
      trackWrap.addEventListener('mouseleave', () => isDown = false);
      trackWrap.addEventListener('mouseup', () => isDown = false);
      trackWrap.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - trackWrap.offsetLeft;
        const walk = (x - startX) * 1.5;
        trackWrap.scrollLeft = scrollLeft - walk;
      });

      // Card customizer click
      runwaySec.querySelectorAll('.btn-runway-custom').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-product-id');
          const prod = royalProducts.find(p => p.id === id);
          if (prod) loadProductIntoCustomizer(prod);
        });
      });

      runwaySec.querySelectorAll('.btn-runway-sample').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-product-id');
          const prod = royalProducts.find(p => p.id === id);
          if (prod) {
            loadProductIntoCustomizer(prod);
            document.getElementById('requestProofBtn').click();
          }
        });
      });
    }
  }

  // 5. Inject All 20 Royal Products Section (Matches Spylt Black Theme)
  function injectAllProductsSection() {
    if (document.getElementById('atelier-all-products')) return;

    const benefitSection = document.querySelector('.benefit-section');
    if (!benefitSection) {
      setTimeout(injectAllProductsSection, 300);
      return;
    }

    const allSec = document.createElement('section');
    allSec.id = 'atelier-all-products';
    allSec.className = 'ang-all-products-section';

    allSec.innerHTML = `
      <div class="ang-products-inner" id="all-suites">
        <div class="ang-products-header">
          <div class="ang-spylt-badge">THE COMPLETE ARCHIVE • ALL 20 ROYAL SUITES</div>
          <h2 class="ang-runway-title" style="color: var(--color-milk);">Official King of Cards Collection</h2>
          <p class="ang-runway-subtitle" style="color: var(--color-milk); opacity: 0.85;">Every invitation suite is tailored with bespoke monograms, genuine hot foil stamping, and archival paper.</p>
        </div>

        <!-- Category Filters (Spylt Pill Style) -->
        <div class="ang-category-filter-bar" id="categoryFilterBar">
          <button class="ang-filter-btn active" data-filter="all">All Suites (20)</button>
          <button class="ang-filter-btn" data-filter="boxed">Boxed & Scroll (4)</button>
          <button class="ang-filter-btn" data-filter="door-style">Door Style Gatefolds (4)</button>
          <button class="ang-filter-btn" data-filter="laser-cut">Laser-Cut & Filigree (3)</button>
          <button class="ang-filter-btn" data-filter="padded">Padded Wedding Cards (5)</button>
          <button class="ang-filter-btn" data-filter="sacred">Traditional Sacred Motifs (4)</button>
        </div>

        <!-- 20 Products Grid -->
        <div class="ang-products-grid" id="allProductsGrid">
          ${renderProductsGrid(royalProducts)}
        </div>
      </div>
    `;

    // Insert directly after benefitSection
    benefitSection.parentNode.insertBefore(allSec, benefitSection.nextSibling);

    // Filter bar wiring
    const filterBtns = allSec.querySelectorAll('.ang-filter-btn');
    const gridContainer = document.getElementById('allProductsGrid');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        const filtered = (filter === 'all')
          ? royalProducts
          : royalProducts.filter(p => p.categoryKey === filter);

        gridContainer.innerHTML = renderProductsGrid(filtered);
        wireGridCardEvents(gridContainer);
        showToast(`Filtered: ${btn.textContent}`);
      });
    });

    wireGridCardEvents(gridContainer);
  }

  function renderProductsGrid(list) {
    return list.map(p => `
      <div class="ang-grid-card" data-product-id="${p.id}">
        <div class="ang-grid-card-img">
          <span style="position: absolute; top: 0.5rem; left: 0.5rem; background-color: var(--color-red-brown); color: var(--color-milk); font-family: var(--font-display); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; padding: 0.2rem 0.6rem; border-radius: var(--radius-pill);">${p.tag}</span>
          <img src="${p.img}" alt="${p.name}">
        </div>
        <div class="ang-grid-card-sku">${p.id} • ${p.category}</div>
        <div class="ang-grid-card-title">${p.name}</div>
        <div class="ang-grid-card-desc">${p.desc}</div>
        <div class="ang-grid-card-foot">
          <div>
            <div class="ang-grid-card-price">${p.inr}</div>
            <div style="font-family: var(--font-paragraph); font-size: 0.85rem; color: var(--color-milk); opacity: 0.6;">${p.usd} per suite</div>
          </div>
          <button class="ang-grid-card-btn btn-grid-custom" data-product-id="${p.id}">Customize →</button>
        </div>
      </div>
    `).join('');
  }

  function wireGridCardEvents(container) {
    container.querySelectorAll('.btn-grid-custom').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-product-id');
        const prod = royalProducts.find(p => p.id === id);
        if (prod) loadProductIntoCustomizer(prod);
      });
    });
  }

  // 6. Inject Flagship Showrooms Section (Matches Spylt Milk Palette)
  function injectShowroomsSection() {
    if (document.getElementById('atelier-showrooms-section')) return;

    const footerSection = document.querySelector('.footer-section');
    if (!footerSection) {
      setTimeout(injectShowroomsSection, 300);
      return;
    }

    const showroomSec = document.createElement('section');
    showroomSec.id = 'atelier-showrooms-section';
    showroomSec.className = 'ang-showrooms-section';

    showroomSec.innerHTML = `
      <div class="ang-showrooms-inner" id="stores">
        <div class="ang-products-header">
          <div class="ang-spylt-badge">RETAIL SHOWROOMS • TACTILE EXPERIENCE</div>
          <h2 class="ang-runway-title">Our Flagship Boutiques</h2>
          <p class="ang-runway-subtitle">Experience our wedding invitation boxes, velvet scrolls, and foil finishes in person at our flagship boutiques across India and USA.</p>
        </div>

        <div class="ang-showrooms-grid">
          ${royalShowrooms.map(s => `
            <div class="ang-showroom-box">
              <span class="ang-showroom-badge">${s.badge}</span>
              <div class="ang-showroom-city">${s.city}</div>
              <div class="ang-showroom-address">${s.address}</div>
              <div class="ang-showroom-details">
                <div><strong>Phone:</strong> ${s.phone}</div>
                <div><strong>Timings:</strong> ${s.hours}</div>
              </div>
              <div class="ang-showroom-foot">
                <a class="ang-showroom-link" href="${s.mapUrl}" target="_blank" rel="noopener">
                  <span>Google Maps</span> ↗
                </a>
                <button class="ang-showroom-book-btn" onclick="document.getElementById('openCustomizerBtn').click()">Book Atelier Proof</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Insert directly before footerSection
    footerSection.parentNode.insertBefore(showroomSec, footerSection);
  }

  // 7. Customizer Drawer Interactions
  function setupDrawerInteractions() {
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
    const modalSeal = document.getElementById('modalSeal');

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
        drawerMainTitle.textContent = 'All 20 Royal Suites';
      } else if (tabName === 'stores') {
        tabBtnStores.classList.add('active');
        tabContentStores.style.display = 'block';
        drawerMainTitle.textContent = 'Flagship Showrooms';
      }
    }

    tabBtnCustomizer.addEventListener('click', () => setTab('customizer'));
    tabBtnCatalog.addEventListener('click', () => setTab('catalog'));
    tabBtnStores.addEventListener('click', () => setTab('stores'));

    window.openDrawer = function (tab = 'customizer') {
      setTab(tab);
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    window.closeDrawer = function () {
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

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
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

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

    // Foil Options
    document.querySelectorAll('#foilOptions .ang-option-card').forEach((card) => {
      card.addEventListener('click', () => {
        document.querySelectorAll('#foilOptions .ang-option-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        state.foil = {
          name: card.getAttribute('data-foil-name'),
          color: card.getAttribute('data-foil-color'),
        };
        cardPreview.style.setProperty('--card-foil-color', state.foil.color);
        showToast(`Foil Selected: ${state.foil.name}`);
      });
    });

    // Seal Options
    document.querySelectorAll('#sealOptions .ang-option-card').forEach((card) => {
      card.addEventListener('click', () => {
        document.querySelectorAll('#sealOptions .ang-option-card').forEach(c => c.classList.remove('active'));
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

    // Product Card Selection in Drawer
    document.querySelectorAll('#drawerCatalogGrid .ang-product-card').forEach((pCard) => {
      pCard.addEventListener('click', () => {
        const pId = pCard.getAttribute('data-product-id');
        const prod = royalProducts.find(p => p.id === pId);
        if (prod) loadProductIntoCustomizer(prod);
      });
    });

    // Request Proof Flow
    const requestProofBtn = document.getElementById('requestProofBtn');
    requestProofBtn.addEventListener('click', () => {
      closeDrawer();
      const randomId = Math.floor(1000 + Math.random() * 9000);
      modalRef.textContent = `#KOC-${randomId}`;
      modalNames.textContent = `${state.monogram} — ${state.names} (${state.selectedProduct.name})`;
      modalFoil.textContent = state.foil.name;
      modalSeal.textContent = state.seal.name;

      modalBackdrop.style.opacity = '1';
      modalBackdrop.style.pointerEvents = 'auto';
      document.body.style.overflow = 'hidden';
    });

    closeModalBtn.addEventListener('click', () => {
      modalBackdrop.style.opacity = '0';
      modalBackdrop.style.pointerEvents = 'none';
      document.body.style.overflow = '';
      showToast('Thank you — your sample card proof is reserved!');
    });

    // Header Links
    document.getElementById('navLinkRunway').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('royal-horizontal-showcase').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('navLinkAllCards').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('atelier-all-products').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('navLinkCraft').addEventListener('click', (e) => {
      e.preventDefault();
      const bSec = document.querySelector('.benefit-section');
      if (bSec) bSec.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('navLinkStores').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('atelier-showrooms-section').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Helper to load product into customizer
  window.loadProductIntoCustomizer = function (prod) {
    state.selectedProduct = prod;
    state.foil = { name: prod.foilName, color: prod.foil };
    state.seal = { name: prod.sealName, color: prod.seal };

    const cardPreview = document.getElementById('cardPreview');
    const previewSeal = document.getElementById('previewSeal');

    if (cardPreview) {
      cardPreview.style.setProperty('--card-foil-color', prod.foil);
      cardPreview.style.setProperty('--card-seal-color', prod.seal);
    }
    if (previewSeal) {
      previewSeal.style.backgroundColor = prod.seal;
    }

    openDrawer('customizer');
    showToast(`Loaded ${prod.name} into customizer`);
  };

  // Toast Helper
  let toastTimeout;
  window.showToast = function (message) {
    const angToast = document.getElementById('angToast');
    const toastMsg = document.getElementById('toastMsg');
    if (!angToast || !toastMsg) return;
    toastMsg.textContent = message;
    angToast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      angToast.classList.remove('show');
    }, 3000);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
