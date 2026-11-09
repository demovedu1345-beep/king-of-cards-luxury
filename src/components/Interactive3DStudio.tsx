import { useState } from "react";
import { Sparkles, Layers, Sliders, Check, Eye, Package, RotateCcw } from "lucide-react";
import { triggerFlyToCart } from "../utils/flyToCart";

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
    motif: "Rigid Box with 4 Dry Fruit Jars",
    tagline: "Dual-tier celebration book & hampers",
    views: ["Closed Luxury Box", "Open Tier 1: Invite Book", "Open Tier 2: 4 Brass Jars", "Silk Ribbon Pull"],
  },
];

const FOIL_FINISHES = [
  { id: "gold", name: "24K Imperial Gold", color: "#be9932" },
  { id: "rose", name: "Champagne Rose Gold", color: "#d99081" },
  { id: "copper", name: "Royal Antique Copper", color: "#b86b43" },
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
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const handleAddSample = (el?: HTMLElement) => {
    const item = {
      id: selectedModel.id,
      sku: selectedModel.sku,
      name: `${selectedModel.name} (${activeFoil.name})`,
      priceINR: selectedModel.priceINR,
      finish: activeFoil.name,
      imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    };

    if (el) {
      triggerFlyToCart(el, item.imageUrl, () => {
        onAddToSampleKit(item);
        setAddedToast(true);
        setTimeout(() => setAddedToast(false), 2500);
      });
    } else {
      onAddToSampleKit(item);
      setAddedToast(true);
      setTimeout(() => setAddedToast(false), 2500);
    }
  };

  return (
    <section id="studio-3d" className="relative py-28 overflow-hidden bg-ivory-50 border-t border-gold-400/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/40 bg-white/80 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gold-800 font-bold">
              Interactive 3D Virtual Atelier
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal-950 mb-4">
            Inspect Every Fold &amp; Foil In <span className="text-gold-foil italic">3D Precision</span>
          </h2>
          <p className="text-charcoal-700 font-normal text-sm sm:text-base leading-relaxed">
            Customize metallic finishes, toggle multi-lingual wedding shlokas, and virtually unbox our
            most revered bespoke creations before requesting physical samples.
          </p>
        </div>

        {/* 3D Studio Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Controls: Model Selection & Foil Finishes */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Model Selector Card */}
            <div className="pearl-card rounded-2xl p-6 bg-white">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gold-800 font-bold mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-gold-600" />
                Select Signature Silhouette
              </h3>
              <div className="flex flex-col gap-2.5">
                {MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSelectedModel(m);
                      setActiveViewIndex(0);
                      setDoorsOpen(false);
                    }}
                    className={`squeeze-btn w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      selectedModel.id === m.id
                        ? "border-gold-500 bg-gold-50/80 shadow-sm font-semibold"
                        : "border-gold-200/60 bg-white hover:border-gold-400/60 text-charcoal-800"
                    }`}
                  >
                    <div>
                      <span className="font-serif font-bold text-sm block text-charcoal-950">{m.name}</span>
                      <span className="text-[11px] font-mono text-charcoal-500">{m.type}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-gold-800">
                      ₹{m.priceINR}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Hot-Stamped Foil Finishes */}
            <div className="pearl-card rounded-2xl p-6 bg-white">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gold-800 font-bold mb-4 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-gold-600" />
                Hot-Stamped Metallic Leaf
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {FOIL_FINISHES.map((foil) => (
                  <button
                    key={foil.id}
                    onClick={() => setActiveFoil(foil)}
                    className={`squeeze-btn p-3 rounded-xl border text-center transition-all ${
                      activeFoil.id === foil.id
                        ? "border-gold-500 bg-gold-100/70 shadow-sm"
                        : "border-gold-200/60 bg-white hover:border-gold-400/50"
                    }`}
                  >
                    <div
                      className="w-5 h-5 rounded-full mx-auto mb-2 border border-black/10 shadow-sm"
                      style={{ backgroundColor: foil.color }}
                    />
                    <span className="text-[10px] font-mono uppercase tracking-wider block text-charcoal-800 font-bold">
                      {foil.name.split(" ")[1] || foil.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sacred Typography / Script Selector */}
            <div className="pearl-card rounded-2xl p-6 bg-white">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gold-800 font-bold mb-3 flex items-center gap-2">
                <Eye className="w-4 h-4 text-gold-600" />
                Language &amp; Auspicious Shlokas
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setActiveLanguage(lang)}
                    className={`squeeze-btn px-3 py-2 text-xs font-mono rounded-lg border text-left transition-colors ${
                      activeLanguage.id === lang.id
                        ? "border-gold-500 bg-gold-100/80 text-gold-900 font-bold"
                        : "border-gold-200/60 bg-white text-charcoal-700 hover:text-charcoal-900"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Stage: Interactive 3D Simulation Canvas */}
          <div className="lg:col-span-8 flex flex-col justify-between pearl-card rounded-3xl p-6 sm:p-10 border border-gold-400/35 relative overflow-hidden bg-white shadow-xl">
            
            {/* Top Stage Bar: SKU, View Options & Interactive Door Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gold-400/25 pb-5">
              <div>
                <span className="text-xs font-mono text-charcoal-500 uppercase tracking-widest block">
                  Interactive Preview • SKU: {selectedModel.sku}
                </span>
                <span className="font-serif text-lg font-bold text-charcoal-950">
                  {selectedModel.name}
                </span>
              </div>

              {/* Views switcher pills */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-ivory-100 border border-gold-300">
                {selectedModel.views.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setActiveViewIndex(i)}
                    className={`px-3 py-1 text-[11px] font-mono tracking-wider rounded-lg transition-colors ${
                      activeViewIndex === i
                        ? "bg-white text-gold-900 font-bold shadow-sm"
                        : "text-charcoal-600 hover:text-charcoal-900"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Interactive Invitation Door Stage */}
            <div className="my-10 relative flex items-center justify-center min-h-[360px] perspective-1200 select-none">
              
              {/* Back Card Panel (Inside invitation) */}
              <div className="w-[340px] sm:w-[420px] h-[340px] rounded-2xl p-6 border-2 border-gold-400/40 bg-gradient-to-br from-ivory-100 via-white to-ivory-200 flex flex-col justify-between shadow-2xl relative">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border border-gold-500 mx-auto mb-2 flex items-center justify-center bg-gold-50">
                    <span className="font-serif text-xl text-gold-700">ॐ</span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gold-800 font-bold block">
                    {selectedModel.motif}
                  </span>
                  <div className="h-[1px] w-20 bg-gold-400 mx-auto my-2" />
                  <p className="font-serif text-xs text-charcoal-800 italic px-4 py-2 bg-gold-50/60 rounded-lg border border-gold-300/40">
                    {activeLanguage.snippet}
                  </p>
                </div>

                <div className="border-t border-gold-300 pt-3 flex items-center justify-between text-[11px] font-mono text-charcoal-600">
                  <span>Hot Foil: <strong className="text-gold-900">{activeFoil.name}</strong></span>
                  <span className="text-royal-crimson font-bold">Royal Wax Monogram</span>
                </div>
              </div>

              {/* Foldable Left Door Panel */}
              <div
                onClick={() => setDoorsOpen(!doorsOpen)}
                className="absolute left-1/2 -translate-x-full w-[170px] sm:w-[210px] h-[340px] rounded-l-2xl border-2 border-r-0 border-gold-500/50 bg-gradient-to-br from-white via-ivory-100 to-ivory-200 p-4 flex flex-col justify-between cursor-pointer transition-transform duration-700 ease-out origin-left shadow-2xl"
                style={{
                  transform: doorsOpen ? "rotateY(-135deg)" : "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="border border-gold-400/40 h-full rounded-l-xl p-3 flex flex-col justify-between bg-gold-50/20">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-gold-800">
                    Jharokha Left Wing
                  </span>
                  <div className="text-center my-auto">
                    <div className="w-10 h-10 rounded-full border border-gold-400 mx-auto mb-2 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-gold-600" />
                    </div>
                    <span className="text-[11px] font-serif font-bold text-charcoal-800 block">
                      Auspicious
                    </span>
                  </div>
                  <span className="text-[8px] font-mono text-charcoal-500">
                    Click to {doorsOpen ? "Close" : "Open"}
                  </span>
                </div>
              </div>

              {/* Foldable Right Door Panel */}
              <div
                onClick={() => setDoorsOpen(!doorsOpen)}
                className="absolute left-1/2 w-[170px] sm:w-[210px] h-[340px] rounded-r-2xl border-2 border-l-0 border-gold-500/50 bg-gradient-to-bl from-white via-ivory-100 to-ivory-200 p-4 flex flex-col justify-between cursor-pointer transition-transform duration-700 ease-out origin-right shadow-2xl"
                style={{
                  transform: doorsOpen ? "rotateY(135deg)" : "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="border border-gold-400/40 h-full rounded-r-xl p-3 flex flex-col justify-between bg-gold-50/20">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-gold-800 text-right">
                    Jharokha Right Wing
                  </span>
                  <div className="text-center my-auto">
                    <div className="w-10 h-10 rounded-full border border-gold-400 mx-auto mb-2 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-gold-600" />
                    </div>
                    <span className="text-[11px] font-serif font-bold text-charcoal-800 block">
                      Celebration
                    </span>
                  </div>
                  <span className="text-[8px] font-mono text-charcoal-500 text-right">
                    Click to {doorsOpen ? "Close" : "Open"}
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Controls Bar */}
            <div className="border-t border-gold-400/25 pt-5 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setDoorsOpen(!doorsOpen)}
                className="squeeze-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-400 bg-gold-50 hover:bg-gold-100 text-charcoal-900 font-bold text-xs font-mono uppercase tracking-wider"
              >
                <RotateCcw className="w-3.5 h-3.5 text-gold-700" />
                <span>{doorsOpen ? "Fold Doors Closed" : "Unfold Jharokha Doors"}</span>
              </button>

              <button
                onClick={(e) => handleAddSample(e.currentTarget)}
                className="squeeze-btn px-7 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 shadow-md shadow-gold-500/20 hover:shadow-gold-500/35"
              >
                {addedToast ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-800" />
                    <span>Added to Sample Kit</span>
                  </>
                ) : (
                  <>
                    <Package className="w-4 h-4 text-charcoal-950" />
                    <span>Add Bespoke Sample to Kit</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
