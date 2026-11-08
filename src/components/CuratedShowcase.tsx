import { useRef, useEffect } from "react";
import { ArrowUpRight, Crown, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ShowcaseProps {
  onSelectCategory: (tradition: string) => void;
}

const COLLECTIONS = [
  {
    title: "The Imperial Jharokha",
    tradition: "Hindu",
    subtitle: "Architectural Gates & Peacock Emblems",
    description: "Multi-layered laser-cut palace doors opening into a sacred realm of 24K gold foil shlokas and auspicious blessings.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    accent: "#d4af37",
    tag: "Palace Heritage",
    priceRange: "₹95 – ₹280",
  },
  {
    title: "Mughal Farman Scrolls",
    tradition: "Muslim",
    subtitle: "Embroidered Velvet & Brass Finials",
    description: "Ceremonial proclamations encased within rich emerald and ruby velvet tubes with hand-tied golden zari tassels.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    accent: "#10b981",
    tag: "Royal Proclamation",
    priceRange: "₹180 – ₹450",
  },
  {
    title: "Cast Frosted Acrylic",
    tradition: "Contemporary",
    subtitle: "Champagne Rose Gold & Vellum",
    description: "2.5mm shatter-resistant matte frosted slates screen-printed in metallic rose gold and wrapped in translucent vellum.",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
    accent: "#f43f5e",
    tag: "Haute Modern",
    priceRange: "₹160 – ₹320",
  },
  {
    title: "The Maharani Keepsake Box",
    tradition: "Interfaith",
    subtitle: "Rigid Hamper with 4 Brass Jars",
    description: "Dual-tier architectural wedding gift box holding a multi-page celebration book alongside jars for gourmet saffron & dry fruits.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    accent: "#a855f7",
    tag: "Grand Keepsake",
    priceRange: "₹380 – ₹1,200",
  },
  {
    title: "Padded Sacred Silk",
    tradition: "Sikh",
    subtitle: "Brocade Fabric & 24K Medallions",
    description: "Cushioned hardboard folders bound in raw Banarasi silk with sculpted gold metal insignias and gilded-edge inserts.",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80",
    accent: "#3b82f6",
    tag: "Sacred Ceremonial",
    priceRange: "₹140 – ₹320",
  },
];

export function CuratedShowcase({ onSelectCategory }: ShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP ScrollTrigger subtle reveal animation
    const ctx = gsap.context(() => {
      gsap.from(".showcase-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="collections"
      ref={containerRef}
      className="relative py-28 overflow-hidden bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 border-t border-gold-500/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-gold-950/30 backdrop-blur-md mb-4">
              <Crown className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gold-300 font-semibold">
                Haute Couture Silhouettes
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Curated Royal <span className="text-gold-foil italic">Collections</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-light text-sm sm:text-base max-w-md">
            Every celebration has a soul. Discover invitations crafted from centuries-old Indian artistic lineages, sculpted for today’s grand weddings.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((c) => (
            <div
              key={c.title}
              onClick={() => onSelectCategory(c.tradition)}
              className="showcase-card group cursor-pointer glass-panel rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-400/60 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Image Preview with Parallax Zoom */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
                
                {/* Badge Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full border border-gold-400/30 bg-obsidian-950/80 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-gold-300">
                  {c.tag}
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/20 bg-obsidian-950/60 backdrop-blur-md flex items-center justify-center text-white group-hover:border-gold-400 group-hover:text-gold-400 transition-colors">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300">
                  <span>Tradition: {c.tradition}</span>
                  <span className="text-gold-400 font-bold">{c.priceRange}</span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                    {c.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-300 transition-colors mb-3">
                    {c.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                    {c.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs font-mono">
                  <span className="text-gold-400 uppercase tracking-wider group-hover:underline flex items-center gap-1">
                    <span>View Category Designs</span>
                    <Sparkles className="w-3 h-3" />
                  </span>
                  <span className="text-zinc-500 text-[10px]">600+ Options</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
