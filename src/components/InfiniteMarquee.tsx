import { Crown, Sparkles } from "lucide-react";

export function InfiniteMarquee() {
  const row1Items = [
    "24K Hot-Stamped Gold Foil",
    "Imperial Rajputana Archways",
    "650 GSM Handmade Cotton Rag",
    "Architectural Jharokha Doors",
    "Royal Velvet Proclamation Scrolls",
    "Cast Frosted Acrylic Slates",
    "French Organic Beeswax Seals",
    "1,200 GSM Keepsake Hampers",
    "Bespoke Calligraphy & Shlokas",
  ];

  const row2Items = [
    "Bangalore Flagship",
    "Mumbai Atelier",
    "Delhi NCR Suite",
    "Dubai UAE",
    "London Mayfair",
    "New York Manhattan",
    "Toronto Ontario",
    "Singapore Marina",
    "Sydney Harbour",
  ];

  return (
    <div className="relative py-8 bg-[#f5f1ea] border-y border-gold-400/30 overflow-hidden select-none">
      {/* Side Vignette Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#f5f1ea] via-[#f5f1ea]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#f5f1ea] via-[#f5f1ea]/80 to-transparent z-10 pointer-events-none" />

      {/* Row 1: Fast Leftward Haute Couture Typography */}
      <div className="flex overflow-hidden whitespace-nowrap mb-4">
        <div className="marquee-left flex items-center gap-8 text-2xl sm:text-4xl font-serif font-extrabold tracking-tight">
          {[...row1Items, ...row1Items].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 flex-shrink-0">
              <span className="text-gold-foil hover:scale-105 transition-transform duration-300">
                {item}
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-gold-500/60 shadow-sm" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Smooth Rightward Atelier Presence Strip */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="marquee-right flex items-center gap-8 text-xs font-mono uppercase tracking-[0.3em] text-charcoal-600 font-semibold">
          {[...row2Items, ...row2Items].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 flex-shrink-0">
              <span className="flex items-center gap-2 hover:text-gold-900 transition-colors">
                <Crown className="w-3 h-3 text-gold-600" />
                {item}
              </span>
              <Sparkles className="w-3 h-3 text-gold-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
