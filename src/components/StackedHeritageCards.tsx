import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Award, Shield, Box, ArrowRight } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const STACKED_EPOCHS = [
  {
    step: "01",
    title: "Hand-Carved Jaipur Metal Dies",
    subtitle: "Thermal Stamping At 180°C",
    description:
      "Every intricate peacock archway, Sanskrit mantra, and couple monogram begins as a hand-chiseled bronze and brass casting die. Our master die-makers spend up to 48 hours carving each motif to achieve 0.02mm microscopic precision.",
    metric: "0.02mm Precision",
    tag: "Artisanal Metallurgy",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "24K Real Gold Foil Gilding",
    subtitle: "Authentic Hot-Stamped Leaf",
    description:
      "Unlike flat digital ink, our gold leaf is heat-fused onto 650 GSM cotton rag paper using hydraulic pressure. The resulting mirror finish catches candle and chandelier light across royal ballrooms with breathtaking brilliance.",
    metric: "24K Metallic Leaf",
    tag: "Imperial Gilding",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    icon: Award,
  },
  {
    step: "03",
    title: "French Beeswax Monogram Seals",
    subtitle: "Poured by Hand at 90°C",
    description:
      "Crafted from 100% pure organic beeswax infused with crushed marigold petals and champagne mica shimmer. Each envelope is hand-sealed with a chilled solid brass signet ring for a satisfying, aristocratic tactile pop.",
    metric: "100% Organic Beeswax",
    tag: "Sacred Wax Laboratory",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
    icon: Shield,
  },
  {
    step: "04",
    title: "1,200 GSM Architectural Keepsake Hampers",
    subtitle: "Dual-Tiered Gift Boxes",
    description:
      "Engineered from high-density rigid museum board bound in Banarasi silk or velvet. Conceals a hardcover invitation book alongside four hand-turned brass canisters for Kashmiri saffron, silver almonds, and gourmet sweets.",
    metric: "1,200 GSM Rigid Board",
    tag: "Keepsake Hamper",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
    icon: Box,
  },
];

export function StackedHeritageCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = gsap.utils.toArray<HTMLElement>(".stacked-card");

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Last card doesn't need to scale down

        ScrollTrigger.create({
          trigger: card,
          start: "top top+=110",
          endTrigger: container,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });

        // Subtle scale down and dim as next cards slide over
        gsap.to(card, {
          scale: 0.94 - index * 0.02,
          opacity: 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top top+=220",
            end: "top top+=110",
            scrub: true,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-28 bg-[#faf8f5] border-t border-gold-400/25"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/40 bg-white/80 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-700" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gold-900 font-bold">
              The 4 Sovereign Epochs
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal-950 mb-4">
            Pinned Heritage <span className="text-gold-foil italic">Card Stacking</span>
          </h2>
          <p className="text-charcoal-700 font-normal text-sm sm:text-base leading-relaxed">
            Scroll down to experience our stacked archival craftsmanship journey. Each card locks into view while subsequent masterworks rise above it.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative space-y-24 sm:space-y-32 pb-24">
          {STACKED_EPOCHS.map((epoch, idx) => {
            const Icon = epoch.icon;
            return (
              <div
                key={epoch.step}
                className="stacked-card sticky top-28 rounded-3xl overflow-hidden shadow-2xl transition-transform will-change-transform"
                style={{ zIndex: idx + 1 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(190, 153, 50, 0.2)"
                  className="rounded-3xl border-2 border-gold-400/40 bg-white p-8 sm:p-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        {/* Top Epoch Identifier */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-mono text-xs font-extrabold px-3 py-1 rounded-full bg-gold-100 text-gold-900 border border-gold-400/40">
                            EPOCH {epoch.step}
                          </span>
                          <span className="text-xs font-mono uppercase tracking-widest text-charcoal-500 font-semibold">
                            {epoch.tag}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-charcoal-950 mb-2 leading-tight">
                          {epoch.title}
                        </h3>
                        <p className="text-xs font-mono uppercase tracking-wider text-gold-800 font-bold mb-5">
                          {epoch.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-charcoal-700 font-normal leading-relaxed mb-6 max-w-xl">
                          {epoch.description}
                        </p>
                      </div>

                      {/* Footer Metric & Icon */}
                      <div className="pt-6 border-t border-gold-200/80 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gold-100/70 border border-gold-400/40 flex items-center justify-center text-gold-800">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase text-charcoal-500 block">
                              Atelier Benchmark
                            </span>
                            <span className="font-serif font-bold text-sm text-charcoal-950">
                              {epoch.metric}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-gold-900 uppercase">
                          <span>Verified Masterwork</span>
                          <ArrowRight className="w-3.5 h-3.5 text-gold-700" />
                        </div>
                      </div>
                    </div>

                    {/* Right Visual Image */}
                    <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-gold-300 shadow-md">
                      <img
                        src={epoch.image}
                        alt={epoch.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-charcoal-900 font-bold border border-gold-300">
                        Archive Specimen
                      </div>
                    </div>

                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
