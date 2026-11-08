import { Star, Quote, Heart } from "lucide-react";

const REVIEWS = [
  {
    couple: "Devanshi & Rohit Singhania",
    location: "Jagmandir Island Palace, Udaipur",
    cardStyle: "The Imperial Peacock Jharokha (24K Gold Leaf)",
    quote: "When our guests opened the laser-cut jharokha doors, they literally called us to ask which royal court printed them. King of Cards gave our wedding the grand, regal tone it deserved.",
    rating: 5,
    weddingDate: "December 2025",
  },
  {
    couple: "Aanya & Kabir Al-Mansoor",
    location: "Burj Al Arab & Emirates Palace, UAE",
    cardStyle: "The Royal Farman Velvet Scroll Suite",
    quote: "The emerald velvet scrolls with antique brass finials were breathtaking. The multi-lingual Arabic and English calligraphy was completely flawless. Unmatched Indian craftsmanship.",
    rating: 5,
    weddingDate: "February 2026",
  },
  {
    couple: "Dr. Priya & Christopher Bennett",
    location: "Villa Balbiano, Lake Como, Italy",
    cardStyle: "Botanical Luminescence Cast Frosted Acrylic",
    quote: "Living in London, we were nervous about ordering from India, but the Touch & Feel Sample Box arrived in 3 days. The final 450 acrylic suites with real botanical wax seals were pure perfection.",
    rating: 5,
    weddingDate: "October 2025",
  },
];

export function TestimonialsRoyal() {
  return (
    <section className="relative py-28 overflow-hidden bg-obsidian-950 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-gold-950/30 backdrop-blur-md mb-4">
            <Heart className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gold-300 font-semibold">
              Celebrated Alliances
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Stories From Our <span className="text-gold-foil italic">Imperial Patrons</span>
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
            From palace weddings in Rajasthan to destination ceremonies across Europe and the Middle East, read why over 1.2 million families trust King of Cards.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.couple}
              className="glass-panel rounded-2xl p-8 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-6 text-gold-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-gold-500/30 mb-4" />

                <p className="text-sm text-zinc-300 font-light leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-gold-500/15">
                <h4 className="font-serif font-bold text-base text-white group-hover:text-gold-300 transition-colors">
                  {rev.couple}
                </h4>
                <p className="text-xs text-gold-400 font-mono mt-0.5">
                  {rev.location}
                </p>
                <p className="text-[11px] text-zinc-500 font-mono mt-1">
                  Card: {rev.cardStyle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
