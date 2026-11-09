export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  occasion:
    | "wedding"
    | "save-the-date"
    | "engagement"
    | "rsvp"
    | "thank-you"
    | "birthday"
    | "anniversary"
    | "festival"
    | "corporate"
    | "personalised";
  tradition: "Hindu" | "Muslim" | "Sikh" | "Christian" | "Interfaith" | "Contemporary";
  format: "Box" | "Scroll" | "Laser Cut" | "Acrylic" | "Padded" | "Seed Paper" | "Deckle Fold";
  priceINR: number;
  priceUSD: number;
  dimensions: string;
  paperGsm: string;
  finish: string;
  description: string;
  imageUrl: string;
  secondaryImage: string;
  badge?: string;
  includes: string[];
}

export const PRODUCTS: Product[] = [
  // 1. Wedding Invitations
  {
    id: "peacock-jharokha",
    sku: "ANG-WED-001",
    name: "The Imperial Peacock Jharokha",
    category: "Royal Architectural Doors",
    occasion: "wedding",
    tradition: "Hindu",
    format: "Laser Cut",
    priceINR: 145,
    priceUSD: 1.85,
    dimensions: "280mm × 210mm",
    paperGsm: "650 GSM Royal Board",
    finish: "24K Hot Stamped Gold Leaf & Maroon Velvet",
    description: "Inspired by the royal palaces of Rajasthan. Dual laser-cut palace gates part to reveal an intricate peacock emblem with embossed gold foil shlokas on deckle cotton paper.",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller Haute Couture",
    includes: ["Dual-Door Outer Jacket", "2 Gold Foil Inserts", "Wax-Sealed Mailing Envelope"]
  },
  {
    id: "royal-farman-scroll",
    sku: "ANG-WED-002",
    name: "The Mughal Farman Velvet Scroll",
    category: "Royal Farman Scrolls",
    occasion: "wedding",
    tradition: "Muslim",
    format: "Scroll",
    priceINR: 220,
    priceUSD: 2.80,
    dimensions: "340mm × 220mm (Unrolled)",
    paperGsm: "400 GSM Metallic Parchment",
    finish: "Emerald Velvet Casing with Antique Brass Finials",
    description: "Ceremonial court proclamation invitation rolled within rich emerald velvet casing adorned with golden zari cord tassels and gold foil Arabic Bismillah calligraphy.",
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    badge: "Royal Heritage",
    includes: ["Embroidered Velvet Tube", "Golden Tassel Cord", "Hand-Calligraphed Parchment Scroll", "Matching Outer Carton"]
  },
  {
    id: "frosted-acrylic-monogram",
    sku: "ANG-WED-003",
    name: "Botanical Luminescence Acrylic",
    category: "Cast Frosted Acrylic",
    occasion: "wedding",
    tradition: "Contemporary",
    format: "Acrylic",
    priceINR: 195,
    priceUSD: 2.50,
    dimensions: "180mm × 130mm",
    paperGsm: "2.5mm Cast Frosted Acrylic",
    finish: "Hot-Stamped Rose Gold Metallic Foil",
    description: "Minimalist modern luxury with 2.5mm shatterproof optic matte acrylic screen-printed with metallic rose gold foil, enclosed in botanical vellum with wax seal.",
    imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    badge: "Contemporary Icon",
    includes: ["2.5mm Frosted Acrylic Slate", "Hand-Folded Vellum Wrap", "Botanical Wax Seal Stamp", "Gold Shimmer Envelope"]
  },
  {
    id: "padded-sapphire-divine",
    sku: "ANG-WED-004",
    name: "Midnight Banarasi Padded Silk Suite",
    category: "Padded Silk Invitations",
    occasion: "wedding",
    tradition: "Sikh",
    format: "Padded",
    priceINR: 165,
    priceUSD: 2.10,
    dimensions: "260mm × 200mm",
    paperGsm: "800 GSM Padded Silk Board",
    finish: "Midnight Sapphire Silk with 24K Sculpted Crest",
    description: "Cushioned hardboard folio wrapped in handwoven Banarasi silk with sculpted gold-plated emblem and gilded foil-edged ceremony inserts.",
    imageUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    badge: "Sacred Ceremonial",
    includes: ["Hard-Padded Silk Cover", "3 Folding Program Leaflets", "Silk Ribbon Pull", "Gilded Border Envelope"]
  },
  {
    id: "maharani-keepsake-box",
    sku: "ANG-WED-005",
    name: "The Maharani Keepsake Sweet Box",
    category: "Luxury Gift Boxes",
    occasion: "wedding",
    tradition: "Interfaith",
    format: "Box",
    priceINR: 480,
    priceUSD: 6.10,
    dimensions: "300mm × 240mm × 65mm",
    paperGsm: "1,200 GSM Hardened Grey Board",
    finish: "Crimson Suede Velvet with 4 Brass Mithai Jars",
    description: "Monumental wedding invitation box featuring a hardcover celebration chronicle, magnetic crest latch, and lower velvet tray with 4 airtight brass sweet canisters.",
    imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    badge: "The Grand Royal Casket",
    includes: ["Dual-Tier Rigid Box", "Hardcover Invite Book", "4 Turned Brass Canisters", "Custom Suede Monogram Ribbon"]
  },

  // 2. Save the Date
  {
    id: "save-the-date-vellum",
    sku: "ANG-STD-001",
    name: "Translucent Botanical Save the Date",
    category: "Vellum Overlays",
    occasion: "save-the-date",
    tradition: "Contemporary",
    format: "Deckle Fold",
    priceINR: 85,
    priceUSD: 1.10,
    dimensions: "175mm × 125mm",
    paperGsm: "180 GSM French Vellum & 600 GSM Cotton",
    finish: "Floating Gold Foil Date with Pressed Fern",
    description: "A minimal, ethereal announcement featuring translucent French vellum layered over pure white cotton rag with hot-stamped gold typography.",
    imageUrl: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    badge: "Modern Essential",
    includes: ["Translucent Vellum Card", "600 GSM Backer Board", "Wax Seal Envelope"]
  },
  {
    id: "save-the-date-arch",
    sku: "ANG-STD-002",
    name: "Rajputana Arch Save the Date",
    category: "Die-Cut Cards",
    occasion: "save-the-date",
    tradition: "Hindu",
    format: "Laser Cut",
    priceINR: 95,
    priceUSD: 1.25,
    dimensions: "180mm × 130mm",
    paperGsm: "600 GSM Terracotta Deckle Paper",
    finish: "Antique Gold Foil Stamping",
    description: "An architectural palace silhouette in warm terracotta cotton with gold foil typography and custom couple monogram.",
    imageUrl: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    badge: "Heritage Silhouette",
    includes: ["Arch Die-cut Card", "Golden Zari Tie", "Mailing Envelope"]
  },

  // 3. Engagement Cards
  {
    id: "engagement-ring-crest",
    sku: "ANG-ENG-001",
    name: "Gilded Ring Solitaire Engagement Folio",
    category: "Gatefold Folios",
    occasion: "engagement",
    tradition: "Contemporary",
    format: "Laser Cut",
    priceINR: 120,
    priceUSD: 1.55,
    dimensions: "200mm × 140mm",
    paperGsm: "500 GSM Pearl Shimmer Board",
    finish: "Embossed Rose Gold Solitaire Crest",
    description: "A romantic gatefold celebration card honoring your engagement with hand-embossed rings and gold calligraphy.",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
    badge: "Romantic Atelier",
    includes: ["Gatefold Folio", "Insert Card", "Pearl Envelope"]
  },

  // 4. RSVP Cards
  {
    id: "rsvp-deckle-suite",
    sku: "ANG-RSV-001",
    name: "Amalfi Deckle-Edge RSVP Card",
    category: "Formal Enclosures",
    occasion: "rsvp",
    tradition: "Contemporary",
    format: "Deckle Fold",
    priceINR: 45,
    priceUSD: 0.60,
    dimensions: "120mm × 90mm",
    paperGsm: "350 GSM Italian Deckle Edge",
    finish: "Letterpress Black Ink & Gold Foil Checkboxes",
    description: "A refined response card featuring authentic torn deckle edges, QR code digital RSVP option, and pre-addressed return envelope.",
    imageUrl: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    badge: "Timeless Stationery",
    includes: ["RSVP Card", "Pre-addressed Return Envelope"]
  },

  // 5. Thank You Cards
  {
    id: "thank-you-monogram",
    sku: "ANG-THX-001",
    name: "Embossed Monogram Thank You Notes",
    category: "Personal Notes",
    occasion: "thank-you",
    tradition: "Contemporary",
    format: "Deckle Fold",
    priceINR: 55,
    priceUSD: 0.70,
    dimensions: "150mm × 105mm",
    paperGsm: "450 GSM Heavy Cotton Notelet",
    finish: "Deep Blind Deboss & 24K Gold Leaf",
    description: "Handcrafted note cards to express gratitude to your esteemed wedding and celebration guests. Blank interior for personal handwritten messages.",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    badge: "Gratitude Suite",
    includes: ["Pack of 25 Notelets", "Lined Envelopes"]
  },

  // 6. Birthday Cards
  {
    id: "birthday-jubilee-gold",
    sku: "ANG-BDY-001",
    name: "Sovereign Jubilee Birthday Invitation",
    category: "Milestone Celebrations",
    occasion: "birthday",
    tradition: "Contemporary",
    format: "Laser Cut",
    priceINR: 90,
    priceUSD: 1.15,
    dimensions: "180mm × 130mm",
    paperGsm: "500 GSM Midnight Black Board",
    finish: "Gold Foil Holographic Geometric Patterns",
    description: "An opulent milestone birthday celebration invitation for 25th, 50th, or 75th jubilees, featuring geometric foil borders and gold gilded edges.",
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    badge: "Milestone Jubilee",
    includes: ["Gold Gilded Card", "Custom Velvet Envelope"]
  },

  // 7. Anniversary Cards
  {
    id: "anniversary-golden-epoch",
    sku: "ANG-ANV-001",
    name: "The Golden Epoch 50th Anniversary",
    category: "Epoch Celebrations",
    occasion: "anniversary",
    tradition: "Interfaith",
    format: "Padded",
    priceINR: 140,
    priceUSD: 1.80,
    dimensions: "220mm × 160mm",
    paperGsm: "700 GSM Ivory Padded Silk",
    finish: "Pure 24K Leaf Embossed Family Tree",
    description: "Commemorate half a century of devotion. Padded silk cover embossed with family lineage crests and archival celebration photography inserts.",
    imageUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    badge: "Golden Jubilee",
    includes: ["Padded Silk Card", "2 Inserts", "Wax Sealed Box"]
  },

  // 8. Festival & Greeting Cards
  {
    id: "diwali-royal-diya",
    sku: "ANG-FST-001",
    name: "Imperial Deepavali Diya Card",
    category: "Sacred Festivals",
    occasion: "festival",
    tradition: "Hindu",
    format: "Laser Cut",
    priceINR: 75,
    priceUSD: 0.95,
    dimensions: "180mm × 130mm",
    paperGsm: "450 GSM Marigold Cotton Board",
    finish: "Intricate Laser Diya & Shimmering Gold Foil",
    description: "Send auspicious Deepavali and New Year blessings with multi-layered laser-cut oil lamps that catch the festive light.",
    imageUrl: "https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    badge: "Festive Collection",
    includes: ["Laser Cut Diya Card", "Gold Envelope with Wax Seal"]
  },

  // 9. Corporate Invitations
  {
    id: "corporate-summit-slate",
    sku: "ANG-COR-001",
    name: "Executive Gala & Summit Invitation",
    category: "Corporate Haute Stationery",
    occasion: "corporate",
    tradition: "Contemporary",
    format: "Acrylic",
    priceINR: 175,
    priceUSD: 2.25,
    dimensions: "210mm × 148mm (A5)",
    paperGsm: "2mm Matte Obsidian Slate",
    finish: "Metallic Silver Screenprint with Blind Deboss",
    description: "For corporate summits, annual shareholder galas, and diplomatic conclaves. Optic matte slate with frosted borders and NFC chip integration.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
    badge: "Executive Diplomatic",
    includes: ["Matte Obsidian Slate", "Lined Suede Jacket", "Personalised Guest Card"]
  },

  // 10. Personalised Stationery
  {
    id: "personalised-social-stationery",
    sku: "ANG-PER-001",
    name: "Bespoke Personalized Monogram Desk Box",
    category: "Private Stationery",
    occasion: "personalised",
    tradition: "Contemporary",
    format: "Box",
    priceINR: 280,
    priceUSD: 3.60,
    dimensions: "240mm × 180mm × 50mm",
    paperGsm: "600 GSM 100% Cotton Rag",
    finish: "Copperplate Engraved Monogram & Hand-painted Beveled Edge",
    description: "A private stationery wardrobe comprising 50 heavy cotton correspondence cards, tissue-lined envelopes, and a desktop presentation casket in French buckram.",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    badge: "Private Wardrobe",
    includes: ["50 Monogram Cards", "50 Lined Envelopes", "Rigid Buckram Desk Box"]
  }
];

export const TRADITIONS = [
  "All",
  "Hindu",
  "Muslim",
  "Sikh",
  "Christian",
  "Interfaith",
  "Contemporary"
] as const;

export const OCCASIONS = [
  { id: "all", name: "All Occasions" },
  { id: "wedding", name: "Wedding Invitations" },
  { id: "save-the-date", name: "Save the Date" },
  { id: "engagement", name: "Engagement Invitations" },
  { id: "rsvp", name: "RSVP Cards" },
  { id: "thank-you", name: "Thank You Cards" },
  { id: "birthday", name: "Birthday Cards" },
  { id: "anniversary", name: "Anniversary Cards" },
  { id: "festival", name: "Festival & Greeting Cards" },
  { id: "corporate", name: "Corporate Invitations" },
  { id: "personalised", name: "Personalised Stationery" },
] as const;

export const FORMATS = [
  "All",
  "Box",
  "Scroll",
  "Laser Cut",
  "Acrylic",
  "Padded",
  "Deckle Fold"
] as const;
