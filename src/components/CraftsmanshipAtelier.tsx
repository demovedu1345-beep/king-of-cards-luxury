import { Shield, Sparkles, Feather, Award, Compass, HeartHandshake } from "lucide-react";

const CRAFT_PILLARS = [
  {
    icon: Sparkles,
    title: "24K Hot-Stamped Foil",
    metric: "0.02mm Precision",
    description:
      "Heat-pressed metallic leaf that captures every microscopic nuance of traditional Mughal filigree and Sanskrit typography without ever flaking or dulling.",
  },
  {
    icon: Feather,
    title: "Heavyweight Cotton Stocks",
    metric: "Up to 1,200 GSM",
    description:
      "Sourced from historic European and Indian mills. From buttery 650 GSM cotton rag to rigid museum-grade archival hardboard.",
  },
  {
    icon: Shield,
    title: "Hand-Poured Wax Seals",
    metric: "100% French Beeswax",
    description:
      "Each seal is poured by hand using antique brass stamping dies, infused with crushed marigold petals or real gold shimmer dust.",
  },
  {
    icon: Award,
    title: "Laser-Carved Jali Filigree",
    metric: "Sub-Millimeter Cut",
    description:
      "Inspired by the stone jharokhas of Jaipur and Fatehpur Sikri, sculpted through computer-guided lasers for impossible architectural delicacy.",
  },
  {
    icon: Compass,
    title: "Multi-Lingual Sacred Proofing",
    metric: "12 Indian Scripts",
    description:
      "In-house scholars verify Sanskrit Shlokas, Arabic Quranic Ayats, Gurbani Verses, and regional Telugu/Tamil wedding scriptures before printing.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Royal Concierge",
    metric: "1-on-1 Designer",
    description:
      "A private wedding stationery designer assists you through typography selection, color swatches, paper thickness, and guest list address printing.",
  },
];

export function CraftsmanshipAtelier() {
  return (
    <section id="craft" className="relative py-28 overflow-hidden bg-ivory-100 border-t border-gold-400/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/40 bg-white/80 shadow-sm mb-4">
            <Feather className="w-3.5 h-3.5 text-gold-700" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gold-900 font-bold">
              The Sovereign Standard
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal-950 mb-4">
            The Secrets of Our <span className="text-gold-foil italic">Imperial Atelier</span>
          </h2>
          <p className="text-charcoal-700 font-normal text-sm sm:text-base leading-relaxed">
            In an era of disposable digital messages, an invitation is a tactile heirloom.
            We treat every fold, ribbon, and embossed letter as a reverent testament to your family’s honor.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CRAFT_PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="pearl-card rounded-2xl p-8 bg-white transition-all duration-300 hover:-translate-y-1.5 relative group overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl group-hover:bg-gold-400/20 transition-all pointer-events-none" />

                <div className="w-12 h-12 rounded-xl border border-gold-400/50 bg-gold-100/60 flex items-center justify-center text-gold-800 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold text-charcoal-950 group-hover:text-gold-900 transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-900 bg-gold-100/90 px-2 py-0.5 rounded border border-gold-400/40 font-bold">
                    {p.metric}
                  </span>
                </div>

                <p className="text-xs text-charcoal-600 font-normal leading-relaxed mt-3">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Paper Weight & Texture Comparison Strip */}
        <div className="mt-16 pearl-card rounded-2xl p-8 bg-white border border-gold-400/35">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gold-300/40">
            <div className="p-4">
              <span className="font-serif text-3xl font-extrabold text-charcoal-950 block mb-1">350 GSM</span>
              <span className="text-xs text-gold-900 font-bold uppercase tracking-wider font-mono">Organic Seed Paper</span>
              <p className="text-[11px] text-charcoal-600 mt-1">Living paper with embedded wildflower seeds</p>
            </div>
            <div className="p-4">
              <span className="font-serif text-3xl font-extrabold text-charcoal-950 block mb-1">650 GSM</span>
              <span className="text-xs text-gold-900 font-bold uppercase tracking-wider font-mono">Italian Cotton Rag</span>
              <p className="text-[11px] text-charcoal-600 mt-1">Soft deckled edge &amp; deep letterpress impression</p>
            </div>
            <div className="p-4">
              <span className="font-serif text-3xl font-extrabold text-charcoal-950 block mb-1">800 GSM</span>
              <span className="text-xs text-gold-900 font-bold uppercase tracking-wider font-mono">Padded Silk Hardboard</span>
              <p className="text-[11px] text-charcoal-600 mt-1">Cushioned velvet with metallic sheen</p>
            </div>
            <div className="p-4">
              <span className="font-serif text-3xl font-extrabold text-charcoal-950 block mb-1">1,200 GSM</span>
              <span className="text-xs text-gold-900 font-bold uppercase tracking-wider font-mono">Architectural Box Board</span>
              <p className="text-[11px] text-charcoal-600 mt-1">Indestructible luxury keepsake hampers</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
