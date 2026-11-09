import { useState } from "react";
import {
  Sparkles,
  Layers,
  Sliders,
  Check,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Palette,
  Type,
  FileText,
  X,
  Mail
} from "lucide-react";
import confetti from "canvas-confetti";
import { playTactileClick, playFoilGlint, playPaperRustle, playCartChime } from "../utils/soundEffects";

interface CustomizerProps {
  onClose?: () => void;
  onSaveDesign?: (design: any) => void;
  onAddToSampleKit?: (item: any) => void;
}

const FONTS = [
  { id: "serif-cinzel", name: "Cinzel Royal", cssClass: "font-serif" },
  { id: "garamond", name: "Cormorant Garamond", cssClass: "font-serif italic" },
  { id: "condensed", name: "Antonio Modern", cssClass: "font-display uppercase" },
  { id: "sans", name: "Jakarta Minimalist", cssClass: "font-sans" },
];

const FOIL_FINISHES = [
  { id: "gold", name: "24K Imperial Gold Leaf", color: "#B49A68", textClass: "text-[#B49A68]" },
  { id: "rose", name: "Champagne Rose Gold", color: "#d99081", textClass: "text-[#d99081]" },
  { id: "silver", name: "Platinum Sterling Silver", color: "#c0c0c0", textClass: "text-[#9e9e9e]" },
  { id: "ink", name: "Obsidian Deep Ink", color: "#1F1B19", textClass: "text-[#1F1B19]" },
];

const PAPERS = [
  { id: "cotton", name: "650 GSM Italian Cotton Rag", texture: "Deckle Edge Texture", color: "#F5F1E9" },
  { id: "parchment", name: "Hand-milled Antique Parchment", texture: "Fine Fiber Grain", color: "#EAE2D5" },
  { id: "acrylic", name: "2.5mm Cast Frosted Acrylic", texture: "Optic Matte Translucent", color: "#ffffff" },
  { id: "silk", name: "Midnight Banarasi Padded Silk", texture: "Woven Zari Filament", color: "#211F20", isDark: true },
];

const WAX_SEALS = [
  { id: "burgundy", name: "Burgundy French Beeswax", color: "#783747", emblem: "A" },
  { id: "emerald", name: "Royal Forest Emerald", color: "#113e28", emblem: "♔" },
  { id: "gold", name: "Antique Champagne Wax", color: "#B49A68", emblem: "✦" },
  { id: "none", name: "No Wax Seal (Clean Envelope)", color: "transparent", emblem: "" },
];

const ENVELOPES = [
  { id: "deckle", name: "French Deckle-Flap Envelope" },
  { id: "vellum", name: "Translucent Botanical Vellum" },
  { id: "velvet", name: "Padded Velvet Folio Casket" },
];

export function InteractiveCardCustomizer({
  onClose,
  onSaveDesign,
  onAddToSampleKit,
}: CustomizerProps) {
  // Card Text State
  const [hostHeading, setHostHeading] = useState("TOGETHER WITH THEIR FAMILIES");
  const [primaryNames, setPrimaryNames] = useState("AARYAN & MEERA");
  const [eventCeremony, setEventCeremony] = useState("Request the honour of your auspicious presence at their holy matrimony & royal reception");
  const [eventDate, setEventDate] = useState("SATURDAY, THE TWELFTH OF DECEMBER • TWO THOUSAND TWENTY SIX");
  const [eventVenue, setEventVenue] = useState("THE OBEROI RAJVILAS • JAIPUR, RAJASTHAN");
  const [shlokaText, setShlokaText] = useState("॥ श्री गणेशाय नमः ॥ मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः ॥");

  // Styling & Material State
  const [selectedFont, setSelectedFont] = useState(FONTS[0]);
  const [selectedFoil, setSelectedFoil] = useState(FOIL_FINISHES[0]);
  const [selectedPaper, setSelectedPaper] = useState(PAPERS[0]);
  const [selectedWax, setSelectedWax] = useState(WAX_SEALS[0]);
  const [selectedEnvelope, setSelectedEnvelope] = useState(ENVELOPES[0]);
  const [alignment, setAlignment] = useState<"left" | "center" | "right">("center");
  const [viewMode, setViewMode] = useState<"front" | "back" | "envelope">("front");
  const [savedToast, setSavedToast] = useState(false);

  const handleExportProof = () => {
    playFoilGlint();
    confetti({
      particleCount: 80,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#B49A68", "#EAE2D5", "#783747", "#ffffff"],
    });

    const customDesign = {
      id: `custom-${Date.now()}`,
      sku: "ANG-CUSTOM-01",
      name: `${primaryNames} Bespoke Invitation`,
      paper: selectedPaper.name,
      finish: selectedFoil.name,
      waxSeal: selectedWax.name,
      envelope: selectedEnvelope.name,
      priceINR: 185,
      imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    };

    if (onSaveDesign) onSaveDesign(customDesign);
    if (onAddToSampleKit) onAddToSampleKit(customDesign);

    playCartChime();
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  return (
    <div className="relative w-full min-h-[92vh] bg-[#F5F1E9] py-12 px-4 sm:px-6 lg:px-8 select-none">
      {/* CAD Blueprint Status Bar */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-[#77716B] border-b border-[#B49A68]/30 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B49A68] animate-pulse" />
          <span>ANGRAITY BESPOKE STUDIO // CAD CALIPER 1:1</span>
        </div>
        <span>PRINT-SAFE MARGIN: 4.5MM • 2400 DPI VECTOR</span>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-[#B49A68]/20 text-[#1F1B19] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Editor Controls */}
        <div className="lg:col-span-5 flex flex-col gap-6 max-h-[85vh] overflow-y-auto pr-2 scrollbar-thin">
          
          {/* Header Card */}
          <div className="pearl-card rounded-2xl p-6 bg-white border border-[#B49A68]/30 shadow-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D5] text-[#783747] text-[10px] font-mono uppercase font-bold tracking-widest mb-3">
              <Sliders className="w-3 h-3 text-[#B49A68]" />
              <span>Real-time Atelier Configurator</span>
            </div>
            <h2 className="font-serif text-2xl font-extrabold text-[#1F1B19]">
              Customise Every Detail
            </h2>
            <p className="text-[#77716B] text-xs leading-relaxed mt-1">
              Changes reflect instantly in the 1:1 scale preview on the right. Download proofs or request a physical sample.
            </p>
          </div>

          {/* Section 1: Names & Heading */}
          <div className="pearl-card rounded-2xl p-6 bg-white border border-[#B49A68]/30 shadow-md">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#1F1B19] font-bold mb-4 flex items-center gap-2">
              <Type className="w-4 h-4 text-[#B49A68]" />
              1. Names &amp; Lineage
            </h3>
            
            <div className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-[#77716B] uppercase mb-1">Auspicious Shloka / Blessing</label>
                <input
                  type="text"
                  value={shlokaText}
                  onChange={(e) => setShlokaText(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                />
              </div>

              <div>
                <label className="block text-[#77716B] uppercase mb-1">Invitation Preamble</label>
                <input
                  type="text"
                  value={hostHeading}
                  onChange={(e) => setHostHeading(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                />
              </div>

              <div>
                <label className="block text-[#77716B] uppercase mb-1">Primary Names (Bride &amp; Groom)</label>
                <input
                  type="text"
                  value={primaryNames}
                  onChange={(e) => setPrimaryNames(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border-2 border-[#B49A68] bg-white font-serif text-sm font-bold text-[#1F1B19] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#77716B] uppercase mb-1">Ceremony Details</label>
                <textarea
                  rows={2}
                  value={eventCeremony}
                  onChange={(e) => setEventCeremony(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                />
              </div>

              <div>
                <label className="block text-[#77716B] uppercase mb-1">Date &amp; Auspicious Timings</label>
                <input
                  type="text"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                />
              </div>

              <div>
                <label className="block text-[#77716B] uppercase mb-1">Palace / Venue Location</label>
                <input
                  type="text"
                  value={eventVenue}
                  onChange={(e) => setEventVenue(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Typography & Alignment */}
          <div className="pearl-card rounded-2xl p-6 bg-white border border-[#B49A68]/30 shadow-md">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#1F1B19] font-bold mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#B49A68]" />
                2. Font &amp; Layout
              </span>

              {/* Text Alignment Switcher */}
              <div className="flex items-center gap-1 p-1 rounded-lg bg-[#F5F1E9] border border-[#B49A68]/30">
                <button
                  onClick={() => { playTactileClick(); setAlignment("left"); }}
                  className={`p-1 rounded ${alignment === "left" ? "bg-white shadow text-[#B49A68]" : "text-[#77716B]"}`}
                  title="Align Left"
                >
                  <AlignLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => { playTactileClick(); setAlignment("center"); }}
                  className={`p-1 rounded ${alignment === "center" ? "bg-white shadow text-[#B49A68]" : "text-[#77716B]"}`}
                  title="Align Center"
                >
                  <AlignCenter className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => { playTactileClick(); setAlignment("right"); }}
                  className={`p-1 rounded ${alignment === "right" ? "bg-white shadow text-[#B49A68]" : "text-[#77716B]"}`}
                  title="Align Right"
                >
                  <AlignRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </h3>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {FONTS.map((font) => (
                <button
                  key={font.id}
                  onClick={() => {
                    playTactileClick();
                    setSelectedFont(font);
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    selectedFont.id === font.id
                      ? "border-[#B49A68] bg-[#EAE2D5] font-bold text-[#1F1B19] shadow-sm"
                      : "border-gray-200 hover:border-[#B49A68]/40 text-[#77716B]"
                  }`}
                >
                  <span className="block">{font.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Metallic Foil Finish */}
          <div className="pearl-card rounded-2xl p-6 bg-white border border-[#B49A68]/30 shadow-md">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#1F1B19] font-bold mb-4 flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#B49A68]" />
              3. Metallic Foil Stamping
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {FOIL_FINISHES.map((foil) => (
                <button
                  key={foil.id}
                  onClick={() => {
                    playFoilGlint();
                    setSelectedFoil(foil);
                  }}
                  className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    selectedFoil.id === foil.id
                      ? "border-[#B49A68] bg-[#EAE2D5] shadow-sm"
                      : "border-gray-200 hover:border-[#B49A68]/40"
                  }`}
                >
                  <div
                    className="w-4 h-4 rounded-full border border-black/20 flex-shrink-0"
                    style={{ backgroundColor: foil.color }}
                  />
                  <span className="text-[11px] font-mono text-[#1F1B19] font-semibold block leading-tight">
                    {foil.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Paper Stock, Wax Seal & Envelope */}
          <div className="pearl-card rounded-2xl p-6 bg-white border border-[#B49A68]/30 shadow-md">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#1F1B19] font-bold mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#B49A68]" />
              4. Sovereign Material &amp; Wax
            </h3>

            <div className="space-y-3 mb-4">
              <label className="text-[11px] font-mono text-[#77716B] uppercase block">Paper Stock</label>
              <div className="grid grid-cols-2 gap-2">
                {PAPERS.map((paper) => (
                  <button
                    key={paper.id}
                    onClick={() => {
                      playPaperRustle();
                      setSelectedPaper(paper);
                    }}
                    className={`p-2.5 rounded-xl border text-left text-[11px] font-mono transition-all ${
                      selectedPaper.id === paper.id
                        ? "border-[#B49A68] bg-[#EAE2D5] font-bold text-[#1F1B19] shadow-sm"
                        : "border-gray-200 hover:border-[#B49A68]/40 text-[#77716B]"
                    }`}
                  >
                    <span className="block truncate">{paper.name}</span>
                    <span className="text-[9px] text-[#77716B] block">{paper.texture}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <label className="text-[11px] font-mono text-[#77716B] uppercase block">French Beeswax Seal</label>
              <div className="grid grid-cols-2 gap-2">
                {WAX_SEALS.map((wax) => (
                  <button
                    key={wax.id}
                    onClick={() => {
                      playTactileClick();
                      setSelectedWax(wax);
                    }}
                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 text-[11px] font-mono transition-all ${
                      selectedWax.id === wax.id
                        ? "border-[#B49A68] bg-[#EAE2D5] font-bold text-[#1F1B19] shadow-sm"
                        : "border-gray-200 hover:border-[#B49A68]/40 text-[#77716B]"
                    }`}
                  >
                    {wax.color !== "transparent" ? (
                      <div
                        className="w-4 h-4 rounded-full border border-black/20 flex-shrink-0 flex items-center justify-center text-white text-[9px]"
                        style={{ backgroundColor: wax.color }}
                      >
                        {wax.emblem}
                      </div>
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-dashed border-gray-400 flex-shrink-0" />
                    )}
                    <span className="truncate">{wax.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-gray-100">
              <label className="text-[11px] font-mono text-[#77716B] uppercase block">Envelope Style</label>
              <div className="grid grid-cols-1 gap-2">
                {ENVELOPES.map((env) => (
                  <button
                    key={env.id}
                    onClick={() => {
                      playPaperRustle();
                      setSelectedEnvelope(env);
                    }}
                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 text-[11px] font-mono transition-all ${
                      selectedEnvelope.id === env.id
                        ? "border-[#B49A68] bg-[#EAE2D5] font-bold text-[#1F1B19] shadow-sm"
                        : "border-gray-200 hover:border-[#B49A68]/40 text-[#77716B]"
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5 text-[#B49A68]" />
                    <span>{env.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Live 1:1 Scale Preview Stage */}
        <div className="lg:col-span-7 flex flex-col items-center sticky top-28">
          
          {/* Top Stage Views Switcher */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#B49A68]/30 shadow-md mb-6">
            <button
              onClick={() => { playPaperRustle(); setViewMode("front"); }}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                viewMode === "front" ? "bg-[#1F1B19] text-[#F5F1E9] font-bold shadow-sm" : "text-[#77716B]"
              }`}
            >
              Front Invitation
            </button>
            <button
              onClick={() => { playPaperRustle(); setViewMode("back"); }}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                viewMode === "back" ? "bg-[#1F1B19] text-[#F5F1E9] font-bold shadow-sm" : "text-[#77716B]"
              }`}
            >
              Back &amp; Lining
            </button>
            <button
              onClick={() => { playPaperRustle(); setViewMode("envelope"); }}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                viewMode === "envelope" ? "bg-[#1F1B19] text-[#F5F1E9] font-bold shadow-sm" : "text-[#77716B]"
              }`}
            >
              Envelope &amp; Wax
            </button>
          </div>

          {/* The Physical Card Canvas Simulation */}
          <div className="relative w-full max-w-[480px] aspect-[1/1.42] rounded-3xl p-8 sm:p-12 shadow-2xl transition-all duration-500 border-2 border-[#B49A68]/40 flex flex-col justify-between overflow-hidden"
            style={{
              backgroundColor: selectedPaper.color,
              color: selectedPaper.isDark ? "#ffffff" : "#1F1B19",
              boxShadow: "0 25px 50px -12px rgba(180, 154, 104, 0.25)",
            }}
          >
            {/* Fine Laser Filigree Border Inset */}
            <div className="absolute inset-4 rounded-2xl border border-[#B49A68]/35 pointer-events-none" />
            <div className="absolute inset-5 rounded-2xl border border-dashed border-[#B49A68]/20 pointer-events-none" />

            {/* Subtle Metallic Corner Emblems */}
            <div className="absolute top-6 left-6 text-[#B49A68] text-xs pointer-events-none">✦</div>
            <div className="absolute top-6 right-6 text-[#B49A68] text-xs pointer-events-none">✦</div>
            <div className="absolute bottom-6 left-6 text-[#B49A68] text-xs pointer-events-none">✦</div>
            <div className="absolute bottom-6 right-6 text-[#B49A68] text-xs pointer-events-none">✦</div>

            {viewMode === "front" && (
              <>
                {/* Card Top: Auspicious Shloka & Monogram */}
                <div className={`text-${alignment} relative z-10`}>
                  <div className="w-12 h-12 rounded-full border border-[#B49A68] mx-auto mb-2 flex items-center justify-center bg-white/40 shadow-sm">
                    <span className="font-serif text-lg text-[#B49A68]">ॐ</span>
                  </div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#B49A68] font-bold">
                    {shlokaText}
                  </p>
                  <div className="h-[1px] w-24 bg-[#B49A68]/40 mx-auto my-3" />
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#77716B]">
                    {hostHeading}
                  </p>
                </div>

                {/* Card Center: Massive Bespoke Display Typography */}
                <div className={`text-${alignment} my-auto relative z-10`}>
                  <h1
                    className={`${selectedFont.cssClass} text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-3 ${selectedFoil.textClass}`}
                  >
                    {primaryNames}
                  </h1>
                  <p className="text-xs sm:text-sm font-serif italic max-w-sm mx-auto leading-relaxed text-[#77716B]">
                    {eventCeremony}
                  </p>
                </div>

                {/* Card Bottom: Date, Timings & Royal Venue */}
                <div className={`text-${alignment} pt-4 border-t border-[#B49A68]/30 relative z-10`}>
                  <p className="text-xs font-mono font-bold tracking-wider text-[#1F1B19] mb-1">
                    {eventDate}
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#B49A68] font-semibold">
                    {eventVenue}
                  </p>
                </div>
              </>
            )}

            {viewMode === "back" && (
              <div className="h-full flex flex-col justify-between items-center text-center py-8 relative z-10">
                <div className="w-16 h-16 rounded-full border-2 border-[#B49A68] flex items-center justify-center text-2xl font-serif text-[#B49A68]">
                  A
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1F1B19] mb-2">
                    Bespoke Monogram Suite
                  </h3>
                  <p className="text-xs font-mono text-[#77716B] max-w-xs">
                    Archival Italian Deckle Edge with blind-embossed family crest and gilded gold leaf border.
                  </p>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#B49A68]">
                  ANGRAITY ATELIER NO. 4 // BANGALORE
                </div>
              </div>
            )}

            {viewMode === "envelope" && (
              <div className="h-full flex flex-col justify-between items-center text-center py-6 relative z-10">
                <div className="p-4 rounded-xl bg-white/70 border border-[#B49A68]/40 shadow-sm max-w-xs">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#77716B] block">Selected Envelope</span>
                  <strong className="text-xs font-serif font-bold text-[#1F1B19] block">{selectedEnvelope.name}</strong>
                </div>

                {/* Wax Seal Simulation */}
                {selectedWax.color !== "transparent" && (
                  <div
                    className="w-20 h-20 rounded-full border-4 border-black/10 shadow-2xl flex items-center justify-center text-white font-serif text-2xl font-bold rotate-12 transition-transform duration-300 hover:rotate-0"
                    style={{ backgroundColor: selectedWax.color }}
                  >
                    {selectedWax.emblem}
                  </div>
                )}

                <p className="text-[11px] font-mono text-[#77716B]">
                  Finished with Hand-poured French Organic Beeswax
                </p>
              </div>
            )}
          </div>

          {/* Action Bar: Export Proof & Add to Box */}
          <div className="w-full max-w-[480px] mt-6 flex items-center gap-3">
            <button
              onClick={handleExportProof}
              className="squeeze-btn flex-1 py-3.5 px-6 rounded-full bg-[#1F1B19] text-[#F5F1E9] font-mono text-xs uppercase tracking-wider font-bold shadow-xl hover:bg-[#B49A68] hover:text-[#1F1B19] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#B49A68]" />
              <span>Request Physical Sample Proof</span>
            </button>
          </div>

          {savedToast && (
            <div className="mt-4 px-4 py-2 rounded-full bg-emerald-600 text-white font-mono text-xs flex items-center gap-2 shadow-lg animate-bounce">
              <Check className="w-4 h-4" />
              <span>Custom Design saved to your Touch &amp; Feel Box!</span>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
