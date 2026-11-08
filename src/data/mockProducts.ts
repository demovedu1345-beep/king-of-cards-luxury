export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  tradition: "Hindu" | "Muslim" | "Sikh" | "Christian" | "Interfaith" | "Contemporary";
  format: "Box" | "Scroll" | "Laser Cut" | "Acrylic" | "Padded" | "Seed Paper";
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
  {
    id: "peacock-jharokha",
    sku: "KNSR8811M",
    name: "The Imperial Peacock Jharokha",
    category: "Royal Architectural Doors",
    tradition: "Hindu",
    format: "Laser Cut",
    priceINR: 145,
    priceUSD: 1.85,
    dimensions: "280mm × 210mm",
    paperGsm: "650 GSM Royal Board",
    finish: "24K Hot Stamped Gold Leaf & Maroon Velvet",
    description: "Inspired by the royal palaces of Rajasthan. Features dual laser-cut jharokha doors that part to reveal an intricate peacock emblem with embossed gold foil shlokas.",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller Haute Couture",
    includes: ["Dual-Door Outer Jacket", "2 Gold Foil Inserts", "Wax-Sealed Mailing Envelope"]
  },
  {
    id: "royal-farman-scroll",
    sku: "KFS9012",
    name: "The Mughal Farman Velvet Scroll",
    category: "Royal Farman Scrolls",
    tradition: "Muslim",
    format: "Scroll",
    priceINR: 220,
    priceUSD: 2.80,
    dimensions: "340mm × 220mm (Unrolled)",
    paperGsm: "400 GSM Metallic Parchment",
    finish: "Emerald Velvet Casing with Antique Brass Finials",
    description: "A ceremonial invitation reminiscent of royal court proclamations. Rolled within an emerald velvet cylinder adorned with golden zari tassels and Arabic Bismillah calligraphy.",
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    badge: "Royal Heritage Collection",
    includes: ["Embroidered Velvet Tube", "Golden Tassel Cord", "Hand-Calligraphed Parchment Scroll", "Matching Outer Carton"]
  },
  {
    id: "frosted-acrylic-monogram",
    sku: "KACR771",
    name: "Botanical Luminescence Acrylic",
    category: "Cast Frosted Acrylic",
    tradition: "Contemporary",
    format: "Acrylic",
    priceINR: 195,
    priceUSD: 2.50,
    dimensions: "180mm × 130mm",
    paperGsm: "2.5mm Cast Frosted Acrylic",
    finish: "Hot-Stamped Rose Gold Metallic Foil",
    description: "Minimalist luxury featuring 2.5mm semi-opaque frosted cast acrylic screen-printed with champagne rose gold foil and accompanied by a semi-translucent vellum sleeve.",
    imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    badge: "Trending International",
    includes: ["2.5mm Frosted Acrylic Slate", "Hand-Folded Vellum Wrap", "Botanical Wax Seal Stamp", "Gold Shimmer Envelope"]
  },
  {
    id: "padded-sapphire-divine",
    sku: "KRB10780",
    name: "Lord Shiva & Parvathi Padded Suite",
    category: "Padded Silk Invitations",
    tradition: "Hindu",
    format: "Padded",
    priceINR: 165,
    priceUSD: 2.10,
    dimensions: "260mm × 200mm",
    paperGsm: "800 GSM Padded Silk Board",
    finish: "Midnight Sapphire Silk with Embossed Gold Deities",
    description: "Cushioned hardboard padded wedding card wrapped in midnight sapphire raw silk. Features intricately sculpted 3D relief embossing of Lord Shiva and Parvathi.",
    imageUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    badge: "Sacred Ceremonial",
    includes: ["Hard-Padded Silk Cover", "3 Folding Program Leaflets", "Silk Ribbon Pull", "Gilded Border Envelope"]
  },
  {
    id: "maharani-keepsake-box",
    sku: "KBOX440",
    name: "The Maharani Keepsake Sweet Box",
    category: "Luxury Gift Boxes",
    tradition: "Interfaith",
    format: "Box",
    priceINR: 480,
    priceUSD: 6.20,
    dimensions: "300mm × 240mm × 65mm",
    paperGsm: "1200 GSM Architectural Box Board",
    finish: "Crimson Suede & Magnetic Gold Medallion",
    description: "An unforgettable wedding hamper box with dual trays: the upper tier holds the gilded multi-day wedding celebration book, and the lower tier holds 4 jars for artisanal sweets & dry fruits.",
    imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80",
    badge: "Flagship Luxury Box",
    includes: ["Rigid Magnetic Gift Box", "Gold-Edged Invitation Booklet", "4 Dry-Fruit Brass Jars", "Personalized Wax Monogram"]
  },
  {
    id: "banana-leaf-temple",
    sku: "KJP25040",
    name: "Sacred Banana Leaf & Temple Arch",
    category: "Traditional Heritage",
    tradition: "Hindu",
    format: "Laser Cut",
    priceINR: 85,
    priceUSD: 1.10,
    dimensions: "240mm × 170mm",
    paperGsm: "500 GSM Textured Pulp Board",
    finish: "Rich Emerald Green with Gold Temple Bells",
    description: "Paying homage to South Indian tradition with a stylized banana leaf die-cut that opens to reveal gold-foiled temple bells and auspicious Pellikala motifs.",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    badge: "South Indian Classic",
    includes: ["Die-Cut Banana Leaf Jacket", "2 Muhurtham Inserts", "Matching Green Envelope"]
  },
  {
    id: "ivory-palace-gate",
    sku: "KMARA530",
    name: "The Ivory Palace Gate",
    category: "Laser-Cut Filigree",
    tradition: "Christian",
    format: "Laser Cut",
    priceINR: 120,
    priceUSD: 1.55,
    dimensions: "210mm × 150mm",
    paperGsm: "600 GSM Italian Cotton Pearl Paper",
    finish: "Pearlescent Shimmer & Laser Micro-Lace",
    description: "Laser-carved with architectural precision mimicking the cathedral and palace gates of Europe. Pearlescent ivory finish with delicate champagne foil text.",
    imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    badge: "Pure Elegance",
    includes: ["Laser-Cut Tri-Fold Gate", "Insert with Beveled Edge", "Organza Ribbon Bow", "Pearl Shimmer Envelope"]
  },
  {
    id: "anand-karaj-regal",
    sku: "KANAND99",
    name: "The Royal Anand Karaj Ivory Gold",
    category: "Padded Silk Invitations",
    tradition: "Sikh",
    format: "Padded",
    priceINR: 175,
    priceUSD: 2.25,
    dimensions: "270mm × 200mm",
    paperGsm: "750 GSM Heavy Board",
    finish: "Ek Onkar 24K Gold Medallion & Brocade Fabric",
    description: "Designed for Anand Karaj ceremonies with an elevated Ek Onkar emblem carved in gold metal, placed against a gold-woven raw silk backdrop with velvet lining.",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    badge: "Anand Karaj Suite",
    includes: ["Padded Silk Folder", "3 Ceremony Inserts (Milni, Anand Karaj, Reception)", "Gold Border Envelope"]
  },
  {
    id: "blooming-wildflower-seed",
    sku: "KSEEDA12",
    name: "The Living Botanical Seed Invitation",
    category: "Sustainable Luxe",
    tradition: "Contemporary",
    format: "Seed Paper",
    priceINR: 95,
    priceUSD: 1.25,
    dimensions: "200mm × 140mm",
    paperGsm: "350 GSM Handmade Cotton Seed Paper",
    finish: "Botanical Plant-Based Inks with Embedded Seeds",
    description: "An invitation that grows into vibrant marigolds and wildflowers when planted in soil. Zero waste, biodegradable, and handcrafted by traditional papermakers.",
    imageUrl: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    badge: "Eco-Luxe Living Paper",
    includes: ["Handmade Seed Paper Card", "Planting Instruction Bookmark", "Recycled Kraft Envelope", "Biodegradable Seal"]
  }
];

export const TRADITIONS = ["All", "Hindu", "Muslim", "Sikh", "Christian", "Contemporary"] as const;
export const FORMATS = ["All", "Laser Cut", "Scroll", "Box", "Acrylic", "Padded", "Seed Paper"] as const;
