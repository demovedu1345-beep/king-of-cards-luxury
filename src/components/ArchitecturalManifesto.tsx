import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ArchitecturalManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const banner2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textBlock = textBlockRef.current;
    const banner = bannerRef.current;
    const banner2 = banner2Ref.current;
    if (!container || !textBlock) return;

    const ctx = gsap.context(() => {
      // 1. Spylt-inspired Word-by-Word Kinetic Reading Scrub
      const words = textBlock.querySelectorAll(".scrub-word");
      gsap.to(words, {
        color: "#1a181e",
        opacity: 1,
        ease: "power1.in",
        stagger: 0.1,
        scrollTrigger: {
          trigger: textBlock,
          start: "top 75%",
          end: "bottom 45%",
          scrub: 0.8,
        },
      });

      // 2. Spylt-inspired Expanding ClipPath Polygon Banners
      if (banner) {
        gsap.fromTo(
          banner,
          { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)", opacity: 0 },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 1.1,
            ease: "circ.out",
            scrollTrigger: {
              trigger: banner,
              start: "top 80%",
            },
          }
        );
      }

      if (banner2) {
        gsap.fromTo(
          banner2,
          { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)", opacity: 0 },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 1.1,
            ease: "circ.out",
            scrollTrigger: {
              trigger: banner2,
              start: "top 80%",
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const manifestoText =
    "An invitation is never merely paper and ink. It is the sacred gateway to your family's grandest epoch. We reject synthetic mass production in favor of hand-carved brass casting dies, molten French beeswax seals, and pure 650 GSM cotton rag milled exclusively in historic artisanal workshops. Every fold is an architectural reverie; every gold leaf impression is an everlasting testament to devotion.";

  const words = manifestoText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[#faf8f5] border-t border-gold-400/25 overflow-hidden select-none"
    >
      {/* Floema Architectural Blueprint Grid Crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-[9px] uppercase tracking-[0.25em] text-gold-700/60 flex items-center gap-1.5 pointer-events-none">
        <span>+</span>
        <span>LAT: 12.9716° N</span>
        <span>•</span>
        <span>LON: 77.5946° E</span>
        <span>•</span>
        <span>SPEC: ARCH-MVII</span>
      </div>
      <div className="absolute top-6 right-6 font-mono text-[9px] uppercase tracking-[0.25em] text-gold-700/60 pointer-events-none">
        + REF: KOC-HERITAGE-2026
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-[9px] uppercase tracking-[0.25em] text-gold-700/60 pointer-events-none">
        + SCALE 1:1.00 • DECKLE CALIBER
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[9px] uppercase tracking-[0.25em] text-gold-700/60 pointer-events-none">
        + ISO 9001:2015 CERTIFIED GUILD
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Crowned Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-white/90 shadow-sm mb-8">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold-900 font-bold">
            The Haute Atelier Doctrine
          </span>
        </div>

        {/* Spylt ClipPath Expanding Banner 1 */}
        <div className="flex justify-center mb-6">
          <div
            ref={bannerRef}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-charcoal-950 font-serif text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold shadow-md"
            style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
          >
            ✦ SACRED REVERENCE • ARCHITECTURAL POETRY ✦
          </div>
        </div>

        {/* Spylt Kinetic Scrub Reading Manifesto Block */}
        <div
          ref={textBlockRef}
          className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.38] tracking-[-0.015em] max-w-4xl mx-auto mb-10 text-charcoal-400"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="scrub-word inline-block mr-2 transition-colors duration-150 will-change-transform"
              style={{ opacity: 0.35, color: "#b2a184" }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Spylt ClipPath Expanding Banner 2 */}
        <div className="flex justify-center mb-12">
          <div
            ref={banner2Ref}
            className="px-6 py-2 rounded-xl border border-gold-400 bg-gold-100 text-gold-950 font-mono text-[11px] uppercase tracking-[0.25em] font-bold shadow-sm"
            style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
          >
            HAND-MILLED AT 180°C • IMMORTALIZED IN 24K LEAF
          </div>
        </div>

        {/* Floema Architectural Metadata Calibration Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gold-300/50 max-w-3xl mx-auto text-left font-mono">
          <div className="p-3 rounded-xl bg-white/70 border border-gold-200 shadow-sm">
            <span className="text-[10px] text-charcoal-500 uppercase block">Thermal Die</span>
            <span className="font-serif text-sm font-bold text-charcoal-950">180°C Hydraulic</span>
          </div>
          <div className="p-3 rounded-xl bg-white/70 border border-gold-200 shadow-sm">
            <span className="text-[10px] text-charcoal-500 uppercase block">Laser Jali</span>
            <span className="font-serif text-sm font-bold text-charcoal-950">0.02mm Filigree</span>
          </div>
          <div className="p-3 rounded-xl bg-white/70 border border-gold-200 shadow-sm">
            <span className="text-[10px] text-charcoal-500 uppercase block">Parchment</span>
            <span className="font-serif text-sm font-bold text-charcoal-950">650 GSM Cotton</span>
          </div>
          <div className="p-3 rounded-xl bg-white/70 border border-gold-200 shadow-sm">
            <span className="text-[10px] text-charcoal-500 uppercase block">Wax Seal</span>
            <span className="font-serif text-sm font-bold text-charcoal-950">100% French Beeswax</span>
          </div>
        </div>

      </div>
    </section>
  );
}
