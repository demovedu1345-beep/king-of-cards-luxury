import { useState } from "react";
import { Sparkles, Layers, Sliders, Check, Eye, Package } from "lucide-react";

interface StudioProps {
  onAddToSampleKit: (item: any) => void;
}

const MODELS = [
  {
    id: "jharokha",
    name: "The Royal Peacock Jharokha",
    type: "Architectural Door Suite",
    sku: "KNSR8811M",
    priceINR: 145,
    bgGradient: "from-[#2b080f] via-obsidian-900 to-obsidian-950",
    motif: "Peacock & Royal Archway",
    tagline: "Inspired by City Palace Udaipur",
    views: ["Closed Doors", "Parted Jharokha", "Insert Leaflet", "Mailing Envelope"],
  },
  {
    id: "scroll",
    name: "The Mughal Farman Velvet Scroll",
    type: "Royal Proclamation Scroll",
    sku: "KFS9012",
    priceINR: 220,
    bgGradient: "from-[#082b1d] via-obsidian-900 to-obsidian-950",
    motif: "Arabic Calligraphy & Antique Brass",
    tagline: "Imperial court proclamation style",
    views: ["Rolled in Velvet Case", "Unrolled Scroll", "Golden Tassel Seal", "Shipping Casket"],
  },
  {
    id: "acrylic",
    name: "Botanical Luminescence Acrylic",
    type: "Cast Frosted Acrylic",
    sku: "KACR771",
    priceINR: 195,
    bgGradient: "from-[#1a1424] via-obsidian-900 to-obsidian-950",
    motif: "Semi-Opaque Slate & Foil Botanicals",
    tagline: "Contemporary European haute aesthetic",
    views: ["Frosted Slab", "In Translucent Vellum", "Hand Wax Seal", "Monogram Suite"],
  },
  {
    id: "box",
    name: "The Maharani Keepsake Sweet Box",
    type: "Luxury Mithai Hamper Box",
    sku: "KBOX440",
    priceINR: 480,
    bgGradient: "from-[#380e1a] via-obsidian-900 to-obsidian-950",
    motif: "Rigid Box with 4 Dry Fruit Jars",
    tagline: "Dual-tier celebration book & hampers",
    views: ["Closed Luxury Box", "Open Tier 1: Invite Book", "Open Tier 2: 4 Brass Jars", "Silk Ribbon Pull"],
  },
];

const FOIL_FINISHES = [
  { id: "gold", name: "24K Imperial Gold", color: "#d4af37", previewClass: "text-amber-300 border-amber-400" },
  { id: "rose", name: "Champagne Rose Gold", color: "#e8a598", previewClass: "text-rose-300 border-rose-400" },
  { id: "silver", name: "Sterling Royal Silver", color: "#e2e8f0", previewClass: "text-slate-200 border-slate-300" },
];

const LANGUAGES = [
  { id: "sanskrit", name: "Sanskrit / Hindi", snippet: "॥ ॐ श्री गणेशाय नमः ॥ मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः" },
  { id: "urdu", name: "Arabic / Urdu", snippet: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • In the name of Allah, the Most Gracious" },
  { id: "english", name: "Royal English Script", snippet: "Together with their families, request the honour of your presence" },
  { id: "south", name: "Telugu / Tamil", snippet: "శ్రీ రస్తు శుభమస్తు • Kalyanam / Muhurtham Auspicious Timings" },
];

export function Interactive3DStudio({ onAddToSampleKit }: StudioProps) {
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [activeFoil, setActiveFoil] = useState(FOIL_FINISHES[0]);
  const [activeLanguage, setActiveLanguage] = useState(LANGUAGES[0]);
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [doorOpen, setDoorOpen] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const handleAddSample = () => {
    onAddToSampleKit({
      id: selectedModel.id,
      sku: selectedModel.sku,
      name: `${selectedModel.name} (${activeFoil.name})`,
      priceINR: selectedModel.priceINR,
      finish: activeFoil.name,
      imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    });
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <section id="studio-3d" className="relative py-28 overflow-hidden border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-gold-950/30 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gold-300 font-semibold">
              Interactive 3D Virtual Atelier
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Inspect Every Fold &amp; Foil In <span className="text-gold-foil italic">3D Precision</span>
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
            Customize metallic finishes, toggle multi-lingual wedding shlokas, and virtually unbox our
            most revered bespoke creations before requesting physical samples.
          </p>
        </div>

        {/* 3D Studio Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Controls: Model Selection & Foil Finishes */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Model Selector Card */}
            <div className="glass-panel rounded-2xl p-6 border border-gold-500/25">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gold-400 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Select Signature Silhouette
              </h3>
              <div className="flex flex-col gap-2.5">
                {MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSelectedModel(m);
                      setActiveViewIndex(0);
                      setDoorOpen(false);
                    }}
                    className={`squeeze-btn w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                      selectedModel.id === m.id
                        ? "border-gold-400 bg-gold-500/15 text-white shadow-lg shadow-gold-500/10"
                        : "border-zinc-800 bg-obsidian-900/50 hover:border-gold-500/30 text-zinc-300"
                    }`}
                  >
                    <div>
                      <span className="font-serif font-bold text-sm block">{m.name}</span>
                      <span className="text-[11px] font-mono text-zinc-400">{m.type}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-gold-400">
                      ₹{m.priceINR}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Hot-Stamped Foil Finishes */}
            <div className="glass-panel rounded-2xl p-6 border border-gold-500/25">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gold-400 mb-4 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                Hot-Stamped Metallic Leaf
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {FOIL_FINISHES.map((foil) => (
                  <button
                    key={foil.id}
                    onClick={() => setActiveFoil(foil)}
                    className={`squeeze-btn p-3 rounded-xl border text-center transition-all ${
                      activeFoil.id === foil.id
                        ? "border-gold-400 bg-gold-500/20 shadow-md"
                        : "border-zinc-800 bg-obsidian-900/40 hover:border-zinc-700"
                    }`}
                  >
                    <div
                      className="w-5 h-5 rounded-full mx-auto mb-2 border border-white/20 shadow-inner"
                      style={{ backgroundColor: foil.color }}
                    />
                    <span className="text-[10px] font-mono uppercase tracking-wider block text-zinc-200">
                      {foil.name.split(" ")[1] || foil.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sacred Typography / Script Selector */}
            <div className="glass-panel rounded-2xl p-6 border border-gold-500/25">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gold-400 mb-3 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Language &amp; Auspicious Shlokas
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setActiveLanguage(lang)}
                    className={`squeeze-btn px-3 py-2 text-xs font-mono rounded-lg border text-left transition-colors ${
                      activeLanguage.id === lang.id
                        ? "border-gold-400 bg-gold-500/20 text-gold-300 font-bold"
                        : "border-zinc-800 bg-obsidian-900/40 text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Stage: Interactive 3D Simulation Canvas */}
          <div className="lg:col-span-8 flex flex-col justify-between glass-panel rounded-3xl p-6 sm:p-10 border border-gold-500/30 relative overflow-hidden bg-gradient-to-br from-obsidian-900 via-obsidian-950 to-obsidian-950">
            
            {/* Top Stage Bar: SKU, View Options & Interactive Door Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gold-500/20 pb-5">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                  Interactive Preview • SKU: {selectedModel.sku}
                </span>
                <span className="font-serif text-lg font-bold text-white">
                  {selectedModel.name}
                </span>
              </div>

              {/* Views switcher pills */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-obsidian-900/80 border border-zinc-800">
                {selectedModel.views.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setActiveViewIndex(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeViewIndex === i
                        ? "bg-gold-500 text-obsidian-950 font-bold shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Central 3D Card Visualizer Canvas Area */}
            <div className="relative my-8 min-h-[380px] flex items-center justify-center">
              
              {/* Foil Particle Glow Aura */}
              <div
                className="absolute w-72 h-72 rounded-full blur-[80px] opacity-30 pointer-events-none transition-colors duration-500"
                style={{ backgroundColor: activeFoil.color }}
              />

              {/* Dynamic 3D Card Simulation Box */}
              <div
                className={`w-full max-w-md p-8 rounded-2xl border transition-all duration-700 shadow-2xl relative ${
                  doorOpen ? "scale-105" : "scale-100"
                }`}
                style={{
                  borderColor: `${activeFoil.color}60`,
                  background: `linear-gradient(145deg, rgba(16,13,20,0.95), rgba(8,6,10,0.98))`,
                  boxShadow: `0 25px 60px rgba(0,0,0,0.9), 0 0 40px ${activeFoil.color}25`,
                }}
              >
                {/* Metallic Gold Trim Accent */}
                <div
                  className="absolute inset-2 rounded-xl border pointer-events-none opacity-40"
                  style={{ borderColor: activeFoil.color }}
                />

                {/* Card Content rendered according to configuration */}
                <div className="text-center relative z-10 py-4">
                  {/* Auspicious Emblem */}
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-4 border flex items-center justify-center shadow-lg transition-transform duration-500 hover:rotate-12"
                    style={{
                      borderColor: activeFoil.color,
                      background: `radial-gradient(circle, ${activeFoil.color}30, transparent 70%)`,
                    }}
                  >
                    <Sparkles className="w-6 h-6" style={{ color: activeFoil.color }} />
                  </div>

                  {/* Dynamic Shloka / Nuptial Script Header */}
                  <p
                    className="text-xs font-serif italic mb-3 transition-all duration-300 px-4"
                    style={{ color: activeFoil.color }}
                  >
                    {activeLanguage.snippet}
                  </p>

                  <h4 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-wide mb-2">
                    Kavya &amp; Siddharth
                  </h4>

                  <div
                    className="h-[1px] w-28 mx-auto my-3"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${activeFoil.color}, transparent)`,
                    }}
                  />

                  <p className="text-xs font-mono tracking-widest uppercase text-zinc-300">
                    The Oberoi Udaivilas • Udaipur
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-1">
                    Sunday, Nineteenth of November, 2026
                  </p>

                  {/* Interactive Gate Unfold Simulator */}
                  <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center justify-center gap-4">
                    <button
                      onClick={() => setDoorOpen(!doorOpen)}
                      className="squeeze-btn px-4 py-2 rounded-full border text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all"
                      style={{
                        borderColor: activeFoil.color,
                        color: activeFoil.color,
                      }}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{doorOpen ? "Close Outer Jharokha" : "Unfold Architectural Doors"}</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Actions Bar */}
            <div className="border-t border-gold-500/20 pt-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-zinc-400 block font-mono">
                  Customization includes 2 Inserts, Wax Seal &amp; Mailing Envelopes
                </span>
                <span className="text-sm font-serif font-bold text-white">
                  Estimated Bulk Pricing: ₹{selectedModel.priceINR} / unit
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddSample}
                  className="squeeze-btn px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-obsidian-950 font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40"
                >
                  <Package className="w-4 h-4" />
                  <span>Add To Touch &amp; Feel Box</span>
                </button>
              </div>
            </div>

            {/* Added Toast Notification */}
            {addedToast && (
              <div className="absolute top-6 right-6 glass-panel border border-emerald-500/50 bg-emerald-950/90 text-emerald-200 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-mono tracking-wider animate-bounce">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Added to your Free Sample Kit!</span>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
