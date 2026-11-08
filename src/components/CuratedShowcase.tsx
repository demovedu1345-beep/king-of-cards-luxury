import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Crown, Sparkles, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ShowcaseProps {
  onSelectCategory: (tradition: string) => void;
}

const COLLECTIONS = [
  {
    id: "jharokha",
    title: "The Imperial Jharokha",
    tradition: "Hindu",
    subtitle: "Architectural Gates & Peacock Emblems",
    description:
      "Multi-layered laser-cut palace doors opening into a sacred realm of 24K gold foil shlokas and auspicious blessings on 600 GSM handmade deckle-edge cotton paper.",
    specs: ["600 GSM Cotton Paper", "Laser Filigree 0.2mm", "24K Gold Foil"],
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
    accent: "#be9932",
    tag: "Palace Heritage",
    priceRange: "₹95 – ₹280",
  },
  {
    id: "scrolls",
    title: "Mughal Farman Scrolls",
    tradition: "Muslim",
    subtitle: "Embroidered Velvet & Brass Finials",
    description:
      "Ceremonial royal proclamations encased within rich emerald and ruby velvet cylinders, finished with hand-turned brass finials and golden zari cord tassels.",
    specs: ["Pure Velvet Tube", "Brass Cast Finials", "Hand-tied Zari"],
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
    accent: "#113e28",
    tag: "Royal Proclamation",
    priceRange: "₹180 – ₹450",
  },
  {
    id: "acrylic",
    title: "Cast Frosted Acrylic",
    tradition: "Contemporary",
    subtitle: "Champagne Rose Gold & Vellum",
    description:
      "2.5mm shatter-resistant matte frosted slates screen-printed in metallic rose gold, bound in translucent botanical vellum with hand-poured botanical wax seals.",
    specs: ["2.5mm Frosted Acrylic", "Rose Gold Screenprint", "Botanical Wax"],
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80",
    accent: "#a37d25",
    tag: "Haute Modern",
    priceRange: "₹160 – ₹320",
  },
  {
    id: "keepsake",
    title: "The Maharani Keepsake Box",
    tradition: "Interfaith",
    subtitle: "Rigid Hamper with 4 Brass Jars",
    description:
      "Dual-tier architectural wedding gift box holding a multi-page celebration book alongside dedicated compartments for gourmet Iranian saffron, silver almonds, and dry fruits.",
    specs: ["1,200 GSM Hardboard", "4 Brass Saffron Jars", "Magnetic Flap"],
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80",
    accent: "#791828",
    tag: "Grand Keepsake",
    priceRange: "₹380 – ₹1,200",
  },
  {
    id: "silk",
    title: "Padded Sacred Silk",
    tradition: "Sikh",
    subtitle: "Brocade Fabric & 24K Medallions",
    description:
      "Cushioned hardboard folders bound in raw Banarasi silk brocade with sculpted 24K gold-plated Khanda and Ek Onkar insignias with gilded gold foil-edge inserts.",
    specs: ["Raw Banarasi Silk", "24K Metal Emblem", "Gilded Gold Edges"],
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1000&q=80",
    accent: "#835f1f",
    tag: "Sacred Ceremonial",
    priceRange: "₹140 – ₹320",
  },
];

export function CuratedShowcase({ onSelectCategory }: ShowcaseProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    const progressBar = progressBarRef.current;
    if (!wrapper || !track) return;

    const ctx = gsap.context(() => {
      // Calculate horizontal scroll distance
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth + 80);
      };

      // Main Pinned Horizontal Scroll Animation
      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth + 400}`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBar) {
              progressBar.style.width = `${self.progress * 100}%`;
            }
            const currentIdx = Math.min(
              COLLECTIONS.length - 1,
              Math.floor(self.progress * COLLECTIONS.length)
            );
            setActiveIdx(currentIdx);
          },
        },
      });

      // Subtle parallax scale effect on each card
      gsap.utils.toArray<HTMLElement>(".horizontal-card-inner").forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.96, opacity: 0.85 },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left 85%",
              end: "center center",
              scrub: true,
            },
          }
        );
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="collections"
      ref={wrapperRef}
      className="relative min-h-screen bg-ivory-100 overflow-hidden border-t border-gold-400/25"
    >
      {/* Pinned Top Navigation Bar for Collections */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-8 pb-4 px-6 sm:px-12 bg-gradient-to-b from-ivory-100 via-ivory-100/90 to-transparent flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-gold-500/40 bg-gold-100 flex items-center justify-center">
            <Crown className="w-4 h-4 text-gold-700" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-gold-800 font-bold block">
              Haute Architecture Showcase
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-charcoal-950">
              Curated Royal Collections
            </h2>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-xs font-mono tracking-wider text-charcoal-600">
            0{activeIdx + 1} / 0{COLLECTIONS.length}
          </span>
          <div className="w-28 sm:w-48 h-1.5 bg-ivory-300 rounded-full overflow-hidden border border-gold-400/30">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full transition-all duration-75"
              style={{ width: "20%" }}
            />
          </div>
        </div>
      </div>

      {/* Horizontal Track Container */}
      <div
        ref={trackRef}
        className="flex items-center h-screen pl-6 sm:pl-16 pr-24 gap-8 sm:gap-12 w-max"
        style={{ willChange: "transform" }}
      >
        {/* Intro Overview Card */}
        <div className="w-[340px] sm:w-[420px] flex-shrink-0 flex flex-col justify-center pr-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/40 bg-white/80 shadow-sm w-max mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-gold-800 font-bold">
              Bespoke Lineage
            </span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-950 mb-4 leading-tight">
            Immersive Horizontal <br />
            <span className="text-gold-foil">Masterpiece Tour</span>
          </h3>
          <p className="text-sm text-charcoal-700 leading-relaxed mb-8">
            Scroll downwards to glide through India’s most regal invitation suites.
            Every piece is tailored with hand-gilded foils, sculpted seals, and pure cotton rag parchment.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-800 font-bold">
            <span>Scroll vertically to explore</span>
            <ChevronRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Collection Panels */}
        {COLLECTIONS.map((col, idx) => (
          <div
            key={col.id}
            className="w-[380px] sm:w-[500px] h-[580px] sm:h-[620px] flex-shrink-0 relative group"
          >
            <div className="horizontal-card-inner h-full rounded-3xl pearl-card overflow-hidden flex flex-col justify-between shadow-xl border border-gold-400/30 bg-white hover:border-gold-500/60 transition-all duration-300">
              
              {/* Image & Header Badge */}
              <div className="relative h-[280px] sm:h-[320px] overflow-hidden bg-ivory-200">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Tradition & Price Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-white/90 text-charcoal-900 border border-gold-400/30 shadow-sm backdrop-blur-md">
                    {col.tradition} • {col.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-gold-900 bg-gold-200/90 border border-gold-400/40 shadow-sm backdrop-blur-md">
                    {col.priceRange}
                  </span>
                </div>

                {/* Subtitle in Photo Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gold-300 block mb-1">
                    Suite 0{idx + 1}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold leading-snug drop-shadow-md">
                    {col.title}
                  </h4>
                </div>
              </div>

              {/* Description & Specs Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-gradient-to-b from-white to-ivory-50">
                <div>
                  <p className="text-xs font-mono tracking-wider text-gold-800 uppercase font-bold mb-2">
                    {col.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed line-clamp-3 mb-4">
                    {col.description}
                  </p>

                  {/* Specification Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {col.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-ivory-200/80 border border-gold-400/20 text-charcoal-800"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onSelectCategory(col.tradition)}
                  className="squeeze-btn w-full py-3.5 px-5 rounded-xl border border-gold-400/50 bg-gradient-to-r from-gold-50 via-gold-100/60 to-gold-50 hover:from-gold-100 hover:to-gold-200 text-charcoal-950 font-bold text-xs font-mono tracking-wider uppercase flex items-center justify-between group shadow-sm"
                >
                  <span>Explore {col.tradition} Collection</span>
                  <ArrowUpRight className="w-4 h-4 text-gold-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
