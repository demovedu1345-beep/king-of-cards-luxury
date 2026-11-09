// KING OF CARDS — Haute Wedding Cards & Bespoke Stationery Atelier Companion Experience
// Features: Lenis Smooth Momentum Scrolling, Pinned Horizontal Runway Showcase,
// 20 Royal Product Suites with Live Filtering, 6 Flagship Showrooms, and 3D Customizer.

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
      desc: 'Padded velvet presentation box with 24k gold foil scroll, royal silk tassel, and calligraphy insert.',
      paper: 'Silk Velvet Rigid Box • 24K Gold Stamped Scroll',
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#783747',
      sealName: 'Royal Ruby Burgundy',
      paperClass: 'dark',
      paperBg: '#1E1C1A'
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
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#B49A68',
      sealName: 'Atelier Gold',
      paperClass: 'arch',
      paperBg: '#FDFBF7'
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
      foil: '#CFB53B',
      foilName: 'Champagne Luster',
      seal: '#1C4436',
      sealName: 'Emerald Forest',
      paperClass: 'bevel',
      paperBg: '#FAF8F5'
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
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#B49A68',
      sealName: 'Atelier Gold',
      paperClass: 'arch',
      paperBg: '#FDFBF7'
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
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#783747',
      sealName: 'Royal Ruby Burgundy',
      paperClass: 'arch',
      paperBg: '#FDFBF7'
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
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#B49A68',
      sealName: 'Atelier Gold',
      paperClass: 'arch',
      paperBg: '#FDFBF7'
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
      foil: '#B49A68',
      foilName: 'Antique Bronze',
      seal: '#783747',
      sealName: 'Royal Ruby Burgundy',
      paperClass: 'dark',
      paperBg: '#211D19'
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
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#783747',
      sealName: 'Royal Ruby Burgundy',
      paperClass: 'arch',
      paperBg: '#FDFBF7'
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
      foil: '#CFB53B',
      foilName: 'Champagne Luster',
      seal: '#1C4436',
      sealName: 'Emerald Forest',
      paperClass: 'bevel',
      paperBg: '#FAF8F5'
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
      foil: '#BCC6CC',
      foilName: 'Platinum Silver',
      seal: '#1A1A1A',
      sealName: 'Velvet Noir',
      paperClass: 'deckle',
      paperBg: '#F7F3EB'
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
      paper: 'Heavy 24K Metallic Box • Silk Tray • Monogram Crest',
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#B49A68',
      sealName: 'Atelier Gold',
      paperClass: 'dark',
      paperBg: '#1E1C1A'
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
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#783747',
      sealName: 'Royal Ruby Burgundy',
      paperClass: 'dark',
      paperBg: '#1E1C1A'
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
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#783747',
      sealName: 'Royal Ruby Burgundy',
      paperClass: 'arch',
      paperBg: '#FDFBF7'
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
      foil: '#B76E79',
      foilName: 'Rose Copper',
      seal: '#783747',
      sealName: 'Royal Ruby Burgundy',
      paperClass: 'bevel',
      paperBg: '#FAF8F5'
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
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#783747',
      sealName: 'Royal Ruby Burgundy',
      paperClass: 'arch',
      paperBg: '#FDFBF7'
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
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#B49A68',
      sealName: 'Atelier Gold',
      paperClass: 'arch',
      paperBg: '#FDFBF7'
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
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#B49A68',
      sealName: 'Atelier Gold',
      paperClass: 'arch',
      paperBg: '#FDFBF7'
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
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#783747',
      sealName: 'Royal Ruby Burgundy',
      paperClass: 'dark',
      paperBg: '#211D19'
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
      foil: '#D4AF37',
      foilName: '24k Pure Gold',
      seal: '#1A1A1A',
      sealName: 'Velvet Noir',
      paperClass: 'dark',
      paperBg: '#1E1C1A'
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
      foil: '#B76E79',
      foilName: 'Rose Copper',
      seal: '#783747',
      sealName: 'Royal Ruby Burgundy',
      paperClass: 'arch',
      paperBg: '#FDFBF7'
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
    foil: { name: '24k Pure Gold', color: '#D4AF37' },
    paper: { name: '900 GSM Archival Gilded Board', class: 'arch', bg: '#FDFBF7' },
    seal: { name: 'Royal Ruby Burgundy', color: '#783747' },
    selectedProduct: royalProducts[0]
  };

  function init() {
    if (document.getElementById('angraity-root')) return;

    // 1. Lenis Smooth Momentum Scrolling
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
        console.log('Lenis Smooth Momentum Scrolling initialized.');
      } catch (e) {
        console.warn('Lenis init warning:', e);
      }
    }

    // 2. Custom Minimal Luxury Cursor
    const cursorDot = document.createElement('div');
    cursorDot.className = 'ang-cursor-dot';
    const cursorRing = document.createElement('div');
    cursorRing.className = 'ang-cursor-ring';
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Interactive target expansion for cursor
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('button, a, .ang-runway-card, .ang-grid-card, .ang-hero-floating-card');
      if (target) {
        cursorRing.style.width = '52px';
        cursorRing.style.height = '52px';
        cursorRing.style.borderColor = 'rgba(212, 175, 55, 0.9)';
      } else {
        cursorRing.style.width = '32px';
        cursorRing.style.height = '32px';
        cursorRing.style.borderColor = 'rgba(212, 175, 55, 0.5)';
      }
    });

    // 3. Create Root Wrapper
    const root = document.createElement('div');
    root.id = 'angraity-root';
    document.body.appendChild(root);

    // Inject Navigation Header, Drawer & Toast
    root.innerHTML = `
      <!-- Floating King of Cards Atelier Header -->
      <header class="ang-luxury-header" id="angHeader">
        <nav class="ang-nav-links">
          <a class="ang-nav-link" id="navLinkRunway" href="#runway">Runway Gallery</a>
          <a class="ang-nav-link" id="navLinkAllCards" href="#all-suites">All 20 Suites</a>
          <a class="ang-nav-link" id="navLinkCraft" href="#craft">Artisan Craft</a>
          <a class="ang-nav-link" id="navLinkStores" href="#stores">Showrooms</a>
          <a class="ang-nav-link" href="./floema/" title="Explore Architectural & Spatial Exhibition" style="display: inline-flex; align-items: center; gap: 0.35rem; color: #D4AF37;">
            <span>3D Studio</span>
            <span style="font-size: 0.65rem; background: rgba(212, 175, 55, 0.2); border: 1px solid rgba(212, 175, 55, 0.4); padding: 0.15rem 0.4rem; border-radius: 9999px;">CAD</span>
          </a>
        </nav>
        <button class="ang-btn-customise" id="openCustomizerBtn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          3D Card Atelier
        </button>
      </header>

      <!-- Customizer Drawer / Slide-Over -->
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
            <button class="ang-drawer-tab" data-tab="catalog" id="tabBtnCatalog">Product Catalog (20)</button>
            <button class="ang-drawer-tab" data-tab="stores" id="tabBtnStores">Showrooms & Stores</button>
          </div>

          <!-- Tab 1: 3D Customizer -->
          <div class="ang-drawer-body" id="tabContentCustomizer">
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
                <div class="ang-card-seal-container">
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
                <div class="ang-option-card active" data-foil-name="24k Pure Gold" data-foil-color="#D4AF37">
                  <div class="ang-swatch" style="background: linear-gradient(135deg, #FFE57F, #D4AF37);"></div>
                  <div class="ang-option-name">24k Pure Gold</div>
                </div>
                <div class="ang-option-card" data-foil-name="Rose Copper" data-foil-color="#B76E79">
                  <div class="ang-swatch" style="background: linear-gradient(135deg, #FAD0C4, #B76E79);"></div>
                  <div class="ang-option-name">Rose Copper</div>
                </div>
                <div class="ang-option-card" data-foil-name="Champagne Luster" data-foil-color="#CFB53B">
                  <div class="ang-swatch" style="background: linear-gradient(135deg, #FFF6D5, #CFB53B);"></div>
                  <div class="ang-option-name">Champagne Luster</div>
                </div>
                <div class="ang-option-card" data-foil-name="Platinum Silver" data-foil-color="#BCC6CC">
                  <div class="ang-swatch" style="background: linear-gradient(135deg, #FFFFFF, #BCC6CC);"></div>
                  <div class="ang-option-name">Platinum Silver</div>
                </div>
              </div>
            </div>

            <!-- Archival Paper Stock -->
            <div class="ang-option-section">
              <label class="ang-option-label">Archival Paper & Format</label>
              <div class="ang-option-grid" id="paperOptions">
                <div class="ang-option-card active" data-paper-name="900 GSM Archival Gilded Board" data-paper-class="arch" data-paper-bg="#FDFBF7">
                  <div class="ang-swatch" style="background: #FDFBF7; border: 1px solid #D4AF37;"></div>
                  <div class="ang-option-name">900 GSM Archival Arch</div>
                </div>
                <div class="ang-option-card" data-paper-name="600 GSM Handmade Deckle" data-paper-class="deckle" data-paper-bg="#F7F3EB">
                  <div class="ang-swatch" style="background: #F7F3EB; border: 1px dashed #B49A68;"></div>
                  <div class="ang-option-name">Handmade Deckle Edge</div>
                </div>
                <div class="ang-option-card" data-paper-name="Silk-Lined Padded Box Set" data-paper-class="dark" data-paper-bg="#1E1C1A">
                  <div class="ang-swatch" style="background: #1E1C1A; border: 1px solid #D4AF37;"></div>
                  <div class="ang-option-name">Velvet Padded Box</div>
                </div>
                <div class="ang-option-card" data-paper-name="1000 GSM Laser-Cut Board" data-paper-class="bevel" data-paper-bg="#FAF8F5">
                  <div class="ang-swatch" style="background: #FAF8F5; border: 1px solid #E0D7C6;"></div>
                  <div class="ang-option-name">Laser Cut Gatefold</div>
                </div>
              </div>
            </div>

            <!-- Wax Seal Color -->
            <div class="ang-option-section">
              <label class="ang-option-label">Signature Monogram Wax Seal</label>
              <div class="ang-option-grid" id="sealOptions">
                <div class="ang-option-card active" data-seal-name="Royal Ruby Burgundy" data-seal-color="#783747">
                  <div class="ang-swatch" style="background: #783747;"></div>
                  <div class="ang-option-name">Ruby Burgundy</div>
                </div>
                <div class="ang-option-card" data-seal-name="Atelier Gold" data-seal-color="#B49A68">
                  <div class="ang-swatch" style="background: #B49A68;"></div>
                  <div class="ang-option-name">Atelier Gold</div>
                </div>
                <div class="ang-option-card" data-seal-name="Emerald Forest" data-seal-color="#1C4436">
                  <div class="ang-swatch" style="background: #1C4436;"></div>
                  <div class="ang-option-name">Emerald Forest</div>
                </div>
                <div class="ang-option-card" data-seal-name="Velvet Noir" data-seal-color="#1A1A1A">
                  <div class="ang-swatch" style="background: #1A1A1A;"></div>
                  <div class="ang-option-name">Velvet Noir</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab 2: Catalog -->
          <div class="ang-drawer-body" id="tabContentCatalog" style="display: none;">
            <div style="font-size: 0.8rem; color: #A9A29A; margin-bottom: 1rem;">
              Click any royal suite to immediately load into the 3D Customizer.
            </div>
            <div class="ang-catalog-grid" id="drawerCatalogGrid"></div>
          </div>

          <!-- Tab 3: Flagship Stores -->
          <div class="ang-drawer-body" id="tabContentStores" style="display: none;">
            <div style="font-size: 0.8rem; color: #A9A29A; margin-bottom: 1rem;">
              Visit King of Cards retail showrooms across India & USA for physical touch and tactile proofs.
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;" id="drawerStoresList"></div>
          </div>

          <!-- Drawer Footer -->
          <div class="ang-drawer-footer">
            <button class="ang-btn-primary" id="requestProofBtn">
              Reserve VIP Sample Proof Box (Zero Payment)
            </button>
            <div style="font-size: 0.7rem; text-align: center; color: #77716B; margin-top: 0.5rem;">
              Direct consultation with Senior Calligrapher • Free Worldwide Express Proofing
            </div>
          </div>
        </aside>
      </div>

      <!-- Proof Confirmation Modal -->
      <div class="ang-drawer-backdrop" id="modalBackdrop" style="display: flex; align-items: center; justify-content: center;">
        <div style="background: #191817; border: 1px solid #D4AF37; border-radius: 20px; padding: 2.5rem; max-width: 500px; width: 90%; text-align: center; box-shadow: 0 25px 60px rgba(0,0,0,0.8); position: relative;">
          <div style="font-size: 2.5rem; color: #D4AF37; margin-bottom: 0.5rem;">👑</div>
          <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em; color: #B49A68;">VIP Proof Reserved</div>
          <h3 style="font-family: 'Instrument Serif', Georgia, serif; font-size: 2rem; color: #F5F1E9; margin: 0.5rem 0 1rem 0;">King of Cards Atelier</h3>
          <p style="font-size: 0.875rem; color: #A9A29A; line-height: 1.6; margin-bottom: 1.5rem;">
            Your bespoke wedding invitation specification has been reserved. Reference: <strong id="modalRef" style="color: #D4AF37;">#KOC-7821</strong>.
          </p>
          <div style="background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 1rem; text-align: left; font-size: 0.8rem; line-height: 1.6; color: #D2CDC4; margin-bottom: 1.5rem;">
            <div><strong>Suite:</strong> <span id="modalNames">P & R — Priya & Rohan</span></div>
            <div><strong>Hot Foil:</strong> <span id="modalFoil">24k Pure Gold</span></div>
            <div><strong>Paper:</strong> <span id="modalPaper">900 GSM Archival Gilded Board</span></div>
            <div><strong>Seal:</strong> <span id="modalSeal">Royal Ruby Burgundy</span></div>
          </div>
          <button class="ang-btn-primary" id="closeModalBtn">Return to Atelier</button>
        </div>
      </div>

      <!-- Toast Notification -->
      <div class="ang-toast" id="angToast">
        <span style="color: #D4AF37;">✦</span>
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
          <span style="color: #D4AF37;">Select →</span>
        </div>
      </div>
    `).join('');

    // Populate Drawer Stores Tab
    const drawerStoresList = document.getElementById('drawerStoresList');
    drawerStoresList.innerHTML = royalShowrooms.map(s => `
      <div class="ang-store-card">
        <div class="ang-store-city">${s.city}</div>
        <div class="ang-store-addr">${s.address}</div>
        <div style="font-size: 0.75rem; color: #D4AF37; margin-top: 0.25rem;">📞 ${s.phone}</div>
        <div style="font-size: 0.75rem; color: #77716B;">🕒 ${s.hours}</div>
      </div>
    `).join('');

    // Wire Hero Elements
    injectHeroElements();

    // Wire In-Flow Sections
    injectRunwayGallery();
    injectAllProductsSection();
    injectShowroomsSection();

    // Wire Drawer & Interactions
    setupDrawerInteractions();
  }

  // 4. Inject Hero Page Elements (Cards, Badges, Quickbar)
  function injectHeroElements() {
    const hero = document.querySelector('.hero-container');
    if (!hero) {
      setTimeout(injectHeroElements, 300);
      return;
    }

    if (document.getElementById('angHeroTopBanner')) return;

    // Top Banner Ribbon
    const topBanner = document.createElement('div');
    topBanner.id = 'angHeroTopBanner';
    topBanner.className = 'ang-hero-top-banner';
    topBanner.innerHTML = `
      <span class="crown-icon">👑</span>
      <span>India's Premier Wedding Invitation Atelier • Est. 1995 • 50,000+ Celebrations</span>
    `;
    hero.appendChild(topBanner);

    // Left Floating Card
    const leftCard = document.createElement('div');
    leftCard.className = 'ang-hero-floating-card left';
    const pLeft = royalProducts[0]; // Maroon Scroll
    leftCard.innerHTML = `
      <div class="ang-hero-card-img-wrap">
        <span class="ang-hero-card-badge">Bestseller</span>
        <img src="${pLeft.img}" alt="${pLeft.name}">
      </div>
      <div class="ang-hero-card-content">
        <div class="ang-hero-card-code">${pLeft.id}</div>
        <div class="ang-hero-card-title">${pLeft.name}</div>
        <div class="ang-hero-card-foot">
          <div class="ang-hero-card-price">${pLeft.inr}</div>
          <div class="ang-hero-card-action">Customize ✦</div>
        </div>
      </div>
    `;
    leftCard.addEventListener('click', () => loadProductIntoCustomizer(pLeft));
    hero.appendChild(leftCard);

    // Right Floating Card
    const rightCard = document.createElement('div');
    rightCard.className = 'ang-hero-floating-card right';
    const pRight = royalProducts[2]; // Peacock Door Gatefold
    rightCard.innerHTML = `
      <div class="ang-hero-card-img-wrap">
        <span class="ang-hero-card-badge" style="background: #1C4436; color: #FFF;">2026 Couture</span>
        <img src="${pRight.img}" alt="${pRight.name}">
      </div>
      <div class="ang-hero-card-content">
        <div class="ang-hero-card-code">${pRight.id}</div>
        <div class="ang-hero-card-title">${pRight.name}</div>
        <div class="ang-hero-card-foot">
          <div class="ang-hero-card-price">${pRight.inr}</div>
          <div class="ang-hero-card-action">Customize ✦</div>
        </div>
      </div>
    `;
    rightCard.addEventListener('click', () => loadProductIntoCustomizer(pRight));
    hero.appendChild(rightCard);

    // Bottom Quickbar
    const quickBar = document.createElement('div');
    quickBar.className = 'ang-hero-quickbar';
    quickBar.innerHTML = `
      <a class="ang-quick-pill" href="#runway" id="pillRunway">✦ Runway Gallery</a>
      <a class="ang-quick-pill" href="#all-suites" id="pillSuites">✦ All 20 Royal Suites</a>
      <button class="ang-quick-pill" id="pillCustomizer">✦ 3D Card Customizer</button>
      <a class="ang-quick-pill" href="#stores" id="pillShowrooms">✦ Flagship Showrooms</a>
    `;
    hero.appendChild(quickBar);

    document.getElementById('pillCustomizer').addEventListener('click', () => openDrawer('customizer'));
  }

  // 5. Inject Pinned Horizontal Runway Gallery
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
        <div class="ang-sub-pill">RUNWAY SHOWCASE • 2026 BRIDAL COLLECTION</div>
        <h2 class="ang-runway-title">The Haute Invitation Gallery</h2>
        <p class="ang-runway-subtitle">Glide horizontally across King of Cards' most celebrated couture invitation suites, hand-crafted with archival board and hot foil stamping.</p>
        <div class="ang-runway-controls">
          <button class="ang-runway-arrow" id="runwayPrev" aria-label="Previous Suites">‹</button>
          <button class="ang-runway-arrow" id="runwayNext" aria-label="Next Suites">›</button>
          <span class="ang-runway-drag-hint">↔ Scroll or Drag to Glide Suites</span>
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
                  <button class="ang-btn-custom btn-runway-custom" data-product-id="${p.id}">Customize 3D</button>
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

      // Spotlight glow following cursor on cards
      const cards = runwaySec.querySelectorAll('.ang-runway-card');
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(212, 175, 55, 0.2), rgba(19, 18, 17, 0.85))`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.background = 'rgba(19, 18, 17, 0.85)';
        });
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

  // 6. Inject All 20 Royal Products Section
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
          <div class="ang-sub-pill">THE COMPLETE ARCHIVE • ALL 20 ROYAL SUITES</div>
          <h2 class="ang-runway-title">Official King of Cards Collection</h2>
          <p class="ang-runway-subtitle">Every invitation suite is tailored with bespoke monograms, genuine 24K hot foil stamping, and archival Italian & handmade paper.</p>
        </div>

        <!-- Category Filters -->
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
          <span style="position: absolute; top: 0.5rem; left: 0.5rem; background: rgba(212, 175, 55, 0.9); color: #0A0908; font-size: 0.6rem; font-weight: 800; padding: 0.2rem 0.5rem; border-radius: 4px;">${p.tag}</span>
          <img src="${p.img}" alt="${p.name}">
        </div>
        <div class="ang-grid-card-sku">${p.id} • ${p.category}</div>
        <div class="ang-grid-card-title">${p.name}</div>
        <div class="ang-grid-card-desc">${p.desc}</div>
        <div class="ang-grid-card-foot">
          <div>
            <div class="ang-grid-card-price">${p.inr}</div>
            <div style="font-size: 0.75rem; color: #8C867E;">${p.usd} per suite</div>
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

    // Spotlight cursor on grid cards
    container.querySelectorAll('.ang-grid-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(212, 175, 55, 0.18), rgba(19, 18, 17, 0.85))`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(19, 18, 17, 0.7)';
      });
    });
  }

  // 7. Inject Flagship Showrooms Section
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
          <div class="ang-sub-pill">RETAIL PRESENCE • TOUCH & TACTILE EXPERIENCE</div>
          <h2 class="ang-runway-title">Our Flagship Showrooms</h2>
          <p class="ang-runway-subtitle">Experience our wedding invitation boxes, velvet scrolls, and hot foil finishes in person at our flagship boutiques across India and USA.</p>
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

  // 8. Customizer Drawer Interactions
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
    const modalPaper = document.getElementById('modalPaper');
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

    // Paper Options
    document.querySelectorAll('#paperOptions .ang-option-card').forEach((card) => {
      card.addEventListener('click', () => {
        document.querySelectorAll('#paperOptions .ang-option-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        state.paper = {
          name: card.getAttribute('data-paper-name'),
          class: card.getAttribute('data-paper-class'),
          bg: card.getAttribute('data-paper-bg'),
        };
        cardPreview.classList.remove('arch', 'deckle', 'dark', 'bevel');
        if (state.paper.class) cardPreview.classList.add(state.paper.class);
        cardPreview.style.backgroundColor = state.paper.bg;
        showToast(`Paper Format: ${state.paper.name}`);
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
      modalPaper.textContent = state.paper.name;
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
    state.paper = { name: prod.paper, class: prod.paperClass, bg: prod.paperBg };
    state.seal = { name: prod.sealName, color: prod.seal };

    const cardPreview = document.getElementById('cardPreview');
    const previewSeal = document.getElementById('previewSeal');

    if (cardPreview) {
      cardPreview.style.setProperty('--card-foil-color', prod.foil);
      cardPreview.style.setProperty('--card-seal-color', prod.seal);
      cardPreview.classList.remove('arch', 'deckle', 'dark', 'bevel');
      if (prod.paperClass) cardPreview.classList.add(prod.paperClass);
      cardPreview.style.backgroundColor = prod.paperBg;
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
