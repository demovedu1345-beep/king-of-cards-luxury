import { useState } from "react";
import { ArrowUpRight, Compass, Layers } from "lucide-react";

interface FloemaRailProps {
  onSelectCategory: (tradition: string) => void;
}

const CATEGORIES = [
  {
    id: "jharokha",
    name: "Imperial Jharokha",
    count: 48,
    tradition: "Hindu",
    blueprintCode: "ARCH-JKH-01",
    dimensions: "280 × 210 mm",
    weight: "650 GSM",
    finish: "24K Gold Leaf & Maroon Velvet",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
    layers: [
      { num: "01", name: "Laser-Carved Palace Gate Jacket", spec: "0.2mm filigree micro-cut" },
      { num: "02", name: "24K Hot-Stamped Gold Leaf Shloka", spec: "180°C hydraulic press" },
      { num: "03", name: "Double-Folded Italian Deckle Insert", spec: "650 GSM handmade cotton rag" },
      { num: "04", name: "Mailing Casket with Royal Wax Seal", spec: "100% French organic beeswax" },
    ],
  },
  {
    id: "farman",
    name: "Mughal Farman Scrolls",
    count: 32,
    tradition: "Muslim",
    blueprintCode: "ARCH-FRM-02",
    dimensions: "340 × 220 mm",
    weight: "400 GSM Parchment",
    finish: "Emerald Velvet & Turned Brass",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80",
    layers: [
      { num: "01", name: "Hand-Embroidered Velvet Tube", spec: "Deep emerald velvet with zari embroidery" },
      { num: "02", name: "Hand-Turned Solid Brass Finials", spec: "Chiseled antique gold patina" },
      { num: "03", name: "Arabic Bismillah Calligraphy Scroll", spec: "Gold foil on metallic parchment" },
      { num: "04", name: "Heavyweight Protective Outer Carton", spec: "Padded gold-bordered box" },
    ],
  },
  {
    id: "acrylic",
    name: "Cast Frosted Acrylic",
    count: 24,
    tradition: "Contemporary",
    blueprintCode: "ARCH-ACR-03",
    dimensions: "180 × 130 mm",
    weight: "2.5 mm Acrylic",
    finish: "Rose Gold Foil & Botanical Vellum",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=900&q=80",
    layers: [
      { num: "01", name: "Cast Semi-Opaque Matte Slate", spec: "2.5mm shatterproof optic acrylic" },
      { num: "02", name: "Metallic Rose Gold Screenprint", spec: "Scratch-resistant thermal cure" },
      { num: "03", name: "Translucent Botanical Vellum Jacket", spec: "French frosted sulfurized paper" },
      { num: "04", name: "Chilled Brass Botanical Wax Seal", spec: "Dried marigold petal infusion" },
    ],
  },
  {
    id: "hamper",
    name: "Maharani Keepsake Box",
    count: 18,
    tradition: "Interfaith",
    blueprintCode: "ARCH-BX-04",
    dimensions: "300 × 240 × 65 mm",
    weight: "1,200 GSM Board",
    finish: "Crimson Suede & 4 Brass Jars",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
    layers: [
      { num: "01", name: "Dual-Tier Rigid Museum Board Casket", spec: "1,200 GSM high-density hardboard" },
      { num: "02", name: "Magnetic Gold Medallion Closure", spec: "24K sculpted royal crest" },
      { num: "03", name: "Hardcover Multi-Day Invitation Book", spec: "Gold-gilded page borders" },
      { num: "04", name: "4 Turned Brass Gourmet Sweet Canisters", spec: "Airtight brass with enamel lids" },
    ],
  },
  {
    id: "silk",
    name: "Padded Raw Silk",
    count: 15,
    tradition: "Sikh",
    blueprintCode: "ARCH-SLK-05",
    dimensions: "270 × 200 mm",
    weight: "800 GSM Padded",
    finish: "Banarasi Silk & Ek Onkar Emblem",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=900&q=80",
    layers: [
      { num: "01", name: "Hand-Cushioned Raw Banarasi Silk", spec: "Woven gold zari filament" },
      { num: "02", name: "24K Gold-Plated Ek Onkar Medallion", spec: "Cast metal relief insignia" },
      { num: "03", name: "3 Multi-Ceremony Velvet Pockets", spec: "Milni, Anand Karaj, Reception" },
      { num: "04", name: "Gilded Beveled Edge Mailing Envelope", spec: "Pearlized Italian shimmer paper" },
    ],
  },
];

export function FloemaCollectionsRail({ onSelectCategory }: FloemaRailProps) {
  const [selectedCat, setSelectedCat] = useState(CATEGORIES[0]);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  return (
    <section className="relative py-28 bg-[#f5f1ea] border-t border-gold-400/25 overflow-hidden select-none">
      
      {/* Floema Architectural Blueprint Crosshairs & Grid Coordinate Labels */}
      <div className="absolute top-6 left-8 font-mono text-[9px] uppercase tracking-[0.25em] text-gold-800/60 pointer-events-none">
        + CAD REF: FLOEMA-ARCH-KOC-2026
      </div>
      <div className="absolute top-6 right-8 font-mono text-[9px] uppercase tracking-[0.25em] text-gold-800/60 pointer-events-none">
        EXPLODED ANATOMY • AXIS Z: 1200
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/40 bg-white/90 shadow-sm mb-4">
              <Compass className="w-3.5 h-3.5 text-gold-700" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold-900 font-bold">
                Floema Architectural Specimen Explorer
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal-950">
              The Exploded <span className="text-gold-foil italic">Anatomy of Luxury</span>
            </h2>
          </div>

          <p className="text-charcoal-700 font-normal text-xs sm:text-sm max-w-md leading-relaxed md:text-right">
            Inspired by European architectural monographs. Select a signature silhouette to inspect its multi-layer construction, paper GSM calibers, and precision tooling tolerances.
          </p>
        </div>

        {/* Floema Horizontal Rail with Live Collection Counts */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-6 mb-12 scrollbar-none border-b border-gold-300/60">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCat.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat)}
                className={`squeeze-btn flex-shrink-0 px-5 py-3 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${
                  isSelected
                    ? "border-gold-600 bg-white text-charcoal-950 shadow-md font-bold"
                    : "border-gold-300/60 bg-[#f5f1ea] hover:bg-white text-charcoal-700 hover:border-gold-400"
                }`}
              >
                <span className="font-serif text-sm tracking-wide">{cat.name}</span>
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-gold-500 text-charcoal-950 font-bold"
                      : "bg-gold-200/70 text-gold-900 font-semibold"
                  }`}
                >
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Floema Exploded Blueprint Workspace Grid */}
        <div className="pearl-card rounded-3xl p-6 sm:p-10 bg-white border border-gold-400/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Visual Image with Technical Measurement Callouts */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-gold-400/40 bg-ivory-100 shadow-lg group">
                <img
                  src={selectedCat.image}
                  alt={selectedCat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Blueprint Drawing Crosshairs Overlay */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                  REF: {selectedCat.blueprintCode}
                </div>
                <div className="absolute top-4 right-4 font-mono text-[10px] text-gold-300 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded border border-gold-400/30 font-bold">
                  {selectedCat.dimensions}
                </div>

                {/* Bottom Spec Summary */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-300 block mb-0.5 font-bold">
                    {selectedCat.tradition} Tradition
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    {selectedCat.name}
                  </h3>
                </div>
              </div>

              {/* Floema Metric Badges Below Image */}
              <div className="grid grid-cols-2 gap-3 mt-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-ivory-100 border border-gold-300/60">
                  <span className="text-charcoal-500 block text-[10px] uppercase font-semibold">Stock Weight:</span>
                  <span className="font-bold text-charcoal-950">{selectedCat.weight}</span>
                </div>
                <div className="p-3 rounded-xl bg-ivory-100 border border-gold-300/60">
                  <span className="text-charcoal-500 block text-[10px] uppercase font-semibold">Artisanal Finish:</span>
                  <span className="font-bold text-gold-900">{selectedCat.finish}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Exploded 4-Layer Architectural Breakdown */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-gold-200">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-gold-900 font-bold flex items-center gap-2">
                    <Layers className="w-4 h-4 text-gold-600" />
                    Layer-by-Layer Physical Assembly
                  </span>
                  <span className="text-[11px] font-mono text-charcoal-500">
                    4 Component Layers
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mb-6">
                  Every suite is engineered with micro-millimeter precision. Hover over any layer below to inspect its bespoke material provenance.
                </p>

                {/* 4 Architectural Layers */}
                <div className="space-y-3 mb-8">
                  {selectedCat.layers.map((layer, i) => (
                    <div
                      key={layer.num}
                      onMouseEnter={() => setHoveredLayer(i)}
                      onMouseLeave={() => setHoveredLayer(null)}
                      className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        hoveredLayer === i
                          ? "border-gold-500 bg-gold-50/80 shadow-md translate-x-1"
                          : "border-gold-200 bg-white hover:border-gold-300 text-charcoal-900"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs font-bold w-7 h-7 rounded-full bg-gold-100 text-gold-900 border border-gold-400/40 flex items-center justify-center flex-shrink-0">
                          {layer.num}
                        </span>
                        <div>
                          <span className="font-serif font-bold text-sm block text-charcoal-950">
                            {layer.name}
                          </span>
                          <span className="text-xs font-mono text-charcoal-600">
                            {layer.spec}
                          </span>
                        </div>
                      </div>

                      <div className="w-2 h-2 rounded-full bg-gold-500/60" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Explore Collection in Catalog */}
              <div className="pt-6 border-t border-gold-200 flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-xs text-charcoal-600 font-semibold">
                  Available for Immediate Atelier Customization
                </span>

                <button
                  onClick={() => onSelectCategory(selectedCat.tradition)}
                  className="squeeze-btn px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-gold-500/20"
                >
                  <span>Explore {selectedCat.name} Portfolio</span>
                  <ArrowUpRight className="w-4 h-4 text-charcoal-950" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
