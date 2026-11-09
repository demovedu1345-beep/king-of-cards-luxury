// ANGRAITY — Haute Stationery & Fine Print Atelier Companion Experience
// Integrates floating navigation, interactive 3D card tilt customizer, real-time foil & paper rendering,
// and zero-payment VIP proof reservation flow.

(function () {
  'use strict';

  // Wait for DOM to be ready
  function init() {
    if (document.getElementById('angraity-root')) return;

    // Create wrapper root
    const root = document.createElement('div');
    root.id = 'angraity-root';
    document.body.appendChild(root);

    // State
    const state = {
      monogram: 'A & G',
      names: 'Alexander & Genevieve',
      details: 'Request the pleasure of your company\nSaturday, October 18, 2026\nVilla San Michele • Florence, Italy',
      foil: { name: '24k Pure Gold', color: '#D4AF37', border: 'rgba(212, 175, 55, 0.5)' },
      paper: { name: '900 GSM Heavy Cotton Arch', class: 'arch', bg: '#FDFBF7' },
      seal: { name: 'Royal Burgundy', color: '#783747' },
      isDrawerOpen: false,
    };

    // Inject HTML Markup
    root.innerHTML = `
      <!-- Floating Atelier Header -->
      <header class="ang-luxury-header" id="angHeader">
        <nav class="ang-nav-links">
          <a class="ang-nav-link" id="navLinkSuites" href="#suites">Signature Suites</a>
          <a class="ang-nav-link" id="navLinkCraft" href="#craft">Mastery & Specs</a>
          <a class="ang-nav-link" href="./floema/" title="Explore Architectural & Spatial Exhibition" style="display: inline-flex; align-items: center; gap: 0.35rem; color: #D4AF37;">
            <span>Architectural Studio</span>
            <span style="font-size: 0.65rem; background: rgba(212, 175, 55, 0.2); border: 1px solid rgba(212, 175, 55, 0.4); padding: 0.15rem 0.4rem; border-radius: 9999px;">3D Space</span>
          </a>
        </nav>
        <button class="ang-btn-customise" id="openCustomizerBtn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          Bespoke Customizer
        </button>
      </header>

      <!-- Customizer Drawer Backdrop & Panel -->
      <div class="ang-drawer-backdrop" id="drawerBackdrop">
        <aside class="ang-customizer-drawer" id="customizerDrawer">
          <div class="ang-drawer-header">
            <div>
              <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.2em; color: #B49A68; font-weight: 600;">Atelier Bespoke Workshop</div>
              <h2 class="ang-drawer-title" style="margin: 0.25rem 0 0 0;">Interactive Suite Proofing</h2>
            </div>
            <button class="ang-drawer-close" id="closeDrawerBtn" aria-label="Close Customizer">✕</button>
          </div>

          <div class="ang-drawer-body">
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
                    <span id="previewSealLetter">A</span>
                  </div>
                  <div style="font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9A948D;">Hand-Poured Wax Seal</div>
                </div>
              </div>
            </div>

            <!-- Customizer Controls -->
            <div class="ang-field-group">
              <label class="ang-field-label" for="inputMonogram">Monogram Initials</label>
              <input type="text" id="inputMonogram" class="ang-input-text" value="${state.monogram}" maxlength="8" placeholder="e.g. A & G">
            </div>

            <div class="ang-field-group">
              <label class="ang-field-label" for="inputNames">Honor / Couple Names</label>
              <input type="text" id="inputNames" class="ang-input-text" value="${state.names}" placeholder="e.g. Alexander & Genevieve">
            </div>

            <div class="ang-field-group">
              <label class="ang-field-label" for="inputDetails">Ceremony Invitation Details</label>
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

            <!-- Paper Stock Selector -->
            <div class="ang-field-group">
              <label class="ang-field-label">Archival Cardstock & Silhouette</label>
              <div class="ang-options-grid" id="paperOptions">
                <div class="ang-option-card active" data-paper-name="900 GSM Heavy Cotton Arch" data-paper-class="arch" data-paper-bg="#FDFBF7">
                  <span style="font-size: 1rem;">🏛</span>
                  <span>900 GSM Gilded Arch</span>
                </div>
                <div class="ang-option-card" data-paper-name="600 GSM Handmade Deckle" data-paper-class="deckle" data-paper-bg="#F7F3EB">
                  <span style="font-size: 1rem;">📜</span>
                  <span>600 GSM Deckle Edge</span>
                </div>
                <div class="ang-option-card" data-paper-name="800 GSM Ultra Matte Obsidian" data-paper-class="dark" data-paper-bg="#1E1C1A">
                  <span style="font-size: 1rem;">🖤</span>
                  <span>800 GSM Noir Obsidian</span>
                </div>
                <div class="ang-option-card" data-paper-name="1000 GSM Triple Museum Board" data-paper-class="bevel" data-paper-bg="#FAF8F5">
                  <span style="font-size: 1rem;">💎</span>
                  <span>1000 GSM Museum Board</span>
                </div>
              </div>
            </div>

            <!-- Wax Seal Color Selector -->
            <div class="ang-field-group">
              <label class="ang-field-label">Hand-Poured Botanical Wax Seal</label>
              <div class="ang-options-grid" id="sealOptions">
                <div class="ang-option-card active" data-seal-name="Royal Burgundy" data-seal-color="#783747">
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
          <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.25em; color: #B49A68; margin-bottom: 0.5rem;">White-Glove Commission</div>
          <h3 style="font-family: 'Instrument Serif', Georgia, serif; font-size: 2rem; color: #F5F1E9; margin: 0 0 1rem;">Sample Suite Reserved</h3>
          <p style="color: #A9A29A; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">
            Your bespoke stationery proof specifications have been dispatched to the Angraity Master Printmaker. No payment is required. A physical archival proof will be hand-embossed and delivered in our signature wax-sealed velvet folio.
          </p>

          <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 1rem; text-align: left; margin-bottom: 1.75rem; font-size: 0.8rem; color: #EAE2D5; display: flex; flex-direction: column; gap: 0.4rem;">
            <div style="display: flex; justify-content: space-between;"><span style="color: #8C867E;">Reference:</span> <strong style="color: #D4AF37;" id="modalRef">ANG-7821</strong></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: #8C867E;">Monogram / Names:</span> <span id="modalNames">Alexander & Genevieve</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: #8C867E;">Foil Deboss:</span> <span id="modalFoil">24k Pure Gold</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: #8C867E;">Paper Stock:</span> <span id="modalPaper">900 GSM Heavy Cotton Arch</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: #8C867E;">Wax Seal:</span> <span id="modalSeal">Royal Burgundy</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: #8C867E;">Payment Status:</span> <span style="color: #6EE7B7; font-weight: 600;">Complimentary Atelier Gift ($0.00)</span></div>
          </div>

          <button class="ang-btn-proof" id="closeModalBtn" style="width: 100%;">
            Return to Atelier Showcase
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
    const customizerDrawer = document.getElementById('customizerDrawer');
    const openCustomizerBtn = document.getElementById('openCustomizerBtn');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
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

    // Toggle Drawer
    function openDrawer() {
      state.isDrawerOpen = true;
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      state.isDrawerOpen = false;
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    openCustomizerBtn.addEventListener('click', openDrawer);
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
      state.monogram = e.target.value.trim() || 'A & G';
      previewMonogram.textContent = state.monogram;
      previewSealLetter.textContent = state.monogram.charAt(0) || 'A';
    });

    inputNames.addEventListener('input', (e) => {
      state.names = e.target.value.trim() || 'Alexander & Genevieve';
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
        showToast(`Selected ${state.foil.name} Debossing`);
      });
    });

    // Paper Stock Selection
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

        // Reset classes
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

        showToast(`Stock updated: ${state.paper.name}`);
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

    // Request VIP Proof Button
    const requestProofBtn = document.getElementById('requestProofBtn');
    requestProofBtn.addEventListener('click', () => {
      // Close customizer drawer
      closeDrawer();

      // Populate confirmation modal
      const randomId = Math.floor(1000 + Math.random() * 9000);
      modalRef.textContent = `ANG-${randomId}`;
      modalNames.textContent = `${state.monogram} — ${state.names}`;
      modalFoil.textContent = state.foil.name;
      modalPaper.textContent = state.paper.name;
      modalSeal.textContent = state.seal.name;

      // Open Modal
      modalBackdrop.style.opacity = '1';
      modalBackdrop.style.pointerEvents = 'auto';
      document.body.style.overflow = 'hidden';
    });

    function closeModal() {
      modalBackdrop.style.opacity = '0';
      modalBackdrop.style.pointerEvents = 'none';
      document.body.style.overflow = '';
      showToast('Thank you — your sample proof is queued!');
    }

    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });

    // Smooth Scroll Anchor Handlers
    document.getElementById('navLinkSuites').addEventListener('click', (e) => {
      e.preventDefault();
      // Look for suites section or flavor section
      const candidates = document.querySelectorAll('section, div');
      for (let el of candidates) {
        if (el.textContent.includes('Signature Suites') || el.textContent.includes('Imperial Wedding Suite')) {
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
        if (el.textContent.includes('Paper Weight') || el.textContent.includes('Mastery in Paper')) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: window.innerHeight * 3.5, behavior: 'smooth' });
    });

    // Also connect existing CTAs in the React/GSAP DOM
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, a');
      if (!target) return;
      const text = (target.textContent || '').trim().toLowerCase();
      if (text.includes('explore atelier suites') || text.includes('chug a spylt')) {
        e.preventDefault();
        // Scroll to suites
        document.getElementById('navLinkSuites').click();
      } else if (text.includes('find in stores') || text.includes('order sample') || text.includes('customise')) {
        e.preventDefault();
        openDrawer();
      }
    });

    console.log('ANGRAITY Atelier Companion Experience successfully loaded.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
