import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Package, ShieldCheck, Compass, Check } from "lucide-react";
import { triggerFlyToCart } from "../utils/flyToCart";

gsap.registerPlugin(ScrollTrigger);

interface ScrollControlled3DProps {
  onAddToSampleKit: (product: any) => void;
  currency: "INR" | "USD" | "GBP" | "AED";
}

export function ScrollControlled3DExperience({
  onAddToSampleKit,
  currency,
}: ScrollControlled3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const innerLeafletRef = useRef<HTMLDivElement>(null);
  const waxSealRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [activePhase, setActivePhase] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  const productData = {
    id: "peacock-jharokha-3d-experience",
    sku: "KNSR8811M",
    name: "The Imperial Peacock Jharokha",
    priceINR: 145,
    finish: "24K Hot Stamped Gold Leaf",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
  };

  const formatPrice = (priceINR: number) => {
    switch (currency) {
      case "USD":
        return `$${(priceINR / 83).toFixed(2)}`;
      case "GBP":
        return `£${(priceINR / 105).toFixed(2)}`;
      case "AED":
        return `د.إ${(priceINR / 22.6).toFixed(2)}`;
      case "INR":
      default:
        return `₹${priceINR}`;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    const leftDoor = leftDoorRef.current;
    const rightDoor = rightDoorRef.current;
    const innerLeaflet = innerLeafletRef.current;
    const waxSeal = waxSealRef.current;
    if (!container || !stage || !leftDoor || !rightDoor || !innerLeaflet || !waxSeal) return;

    const ctx = gsap.context(() => {
      // Monumental Pinned Scroll Timeline (Namesake / Awwwards SOTD style)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=2800",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.28) setActivePhase(1);
            else if (p < 0.58) setActivePhase(2);
            else if (p < 0.82) setActivePhase(3);
            else setActivePhase(4);
          },
        },
      });

      // Phase 1 -> 2: Camera Dolly In & Parting of Gates
      tl.to(stage, {
        rotateY: 0,
        rotateX: 4,
        scale: 1.05,
        z: 60,
        ease: "power2.out",
      })
      .to(
        leftDoor,
        {
          rotateY: -135,
          ease: "power1.inOut",
        },
        "<0.2"
      )
      .to(
        rightDoor,
        {
          rotateY: 135,
          ease: "power1.inOut",
        },
        "<"
      )

      // Phase 2 -> 3: Foil Leaflet Levitation (lifts up and forward in 3D)
      .to(innerLeaflet, {
        z: 140,
        y: -45,
        rotateX: -8,
        scale: 1.08,
        boxShadow: "0 35px 70px rgba(190, 153, 50, 0.35)",
        ease: "power2.out",
      })

      // Phase 3 -> 4: Monogram Wax Seal Drops & Flatlay settles
      .fromTo(
        waxSeal,
        {
          z: 300,
          y: -120,
          opacity: 0,
          scale: 1.6,
        },
        {
          z: 160,
          y: 65,
          opacity: 1,
          scale: 1,
          ease: "bounce.out",
        }
      )
      .to(
        stage,
        {
          rotateX: 12,
          scale: 0.98,
          ease: "power1.inOut",
        },
        "<0.1"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const handleAddSample = (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerFlyToCart(e.currentTarget, productData.imageUrl, () => {
      onAddToSampleKit(productData);
      setAddedToast(true);
      setTimeout(() => setAddedToast(false), 2400);
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-[#faf8f5] via-white to-[#f5f1ea] border-t border-gold-400/25 overflow-hidden select-none flex flex-col justify-between"
    >
      {/* CAD Blueprint Markings (Floema / Namesake style) */}
      <div className="absolute top-6 left-8 font-mono text-[9px] uppercase tracking-[0.25em] text-gold-800/60 pointer-events-none hidden sm:flex items-center gap-2 z-20">
        <span>+</span>
        <span>AEROSPACE CAD: 3D-SCRUB-STAGE</span>
        <span>•</span>
        <span>PRECISION: 0.02MM</span>
      </div>
      <div className="absolute top-6 right-8 font-mono text-[9px] uppercase tracking-[0.25em] text-gold-800/60 pointer-events-none hidden sm:block z-20">
        + SCROLL TO DRIVE PHYSICAL KINEMATICS
      </div>

      {/* Top Section Header */}
      <div className="pt-12 px-6 sm:px-12 text-center max-w-4xl mx-auto z-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-white/90 shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold-900 font-bold">
            Scroll-Controlled 3D Kinematics
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal-950 tracking-tight">
          Scroll To Drive <span className="text-gold-foil italic">Physical Unboxing</span>
        </h2>
        <p className="text-charcoal-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto font-normal">
          Vertical scroll wheel controls rotation, door parting, 24K foil levitation, and seal seating in real-time 3D perspective space.
        </p>
      </div>

      {/* Main 3D Pinned Workspace Stage */}
      <div className="relative flex-1 flex items-center justify-center perspective-1200 py-10 z-10">
        
        {/* Left Phase Timeline Indicator */}
        <div className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-5 text-left font-mono z-20">
          {[
            { step: 1, title: "01 Closed Archway", desc: "650 GSM cotton jacket" },
            { step: 2, title: "02 Gates Parting", desc: "Dual laser-cut filigree" },
            { step: 3, title: "03 Foil Levitation", desc: "24K hot-stamped shloka" },
            { step: 4, title: "04 Wax Sealing", desc: "French organic beeswax" },
          ].map((phase) => (
            <div
              key={phase.step}
              className={`p-3.5 rounded-2xl border transition-all duration-300 w-52 ${
                activePhase === phase.step
                  ? "border-gold-500 bg-white shadow-xl translate-x-2"
                  : "border-gold-200/60 bg-white/40 text-charcoal-500 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs text-gold-900">{phase.title}</span>
                {activePhase === phase.step && (
                  <span className="w-2 h-2 rounded-full bg-gold-600 animate-ping" />
                )}
              </div>
              <span className="text-[10px] text-charcoal-600 block">{phase.desc}</span>
            </div>
          ))}
        </div>

        {/* 3D Model Stage Container */}
        <div
          ref={stageRef}
          className="relative w-[320px] sm:w-[420px] h-[400px] sm:h-[460px] transform-style-3d shadow-2xl transition-shadow select-none"
          style={{
            transform: "rotateY(-18deg) rotateX(14deg)",
            willChange: "transform",
          }}
        >
          {/* Base Jacket Back Wall */}
          <div className="absolute inset-0 rounded-3xl pearl-card p-6 border-2 border-gold-400/50 bg-gradient-to-br from-white via-[#faf8f5] to-[#f4f0e6] shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-gold-300/60 pb-3">
              <span className="text-[10px] font-mono tracking-widest text-gold-800 uppercase font-bold">
                Royal Rajputana Chamber
              </span>
              <ShieldCheck className="w-4 h-4 text-gold-600" />
            </div>

            <div className="text-center my-auto py-2">
              <div className="w-14 h-14 mx-auto mb-2 rounded-full border border-gold-400 flex items-center justify-center bg-gold-100 shadow-inner">
                <span className="font-serif text-2xl text-gold-800">ॐ</span>
              </div>
              <p className="font-serif text-xs italic text-charcoal-700 px-6">
                “May the union of two royal houses be blessed with eternal light, grace, and abundance.”
              </p>
            </div>

            <div className="border-t border-gold-300/60 pt-3 flex items-center justify-between text-[10px] font-mono text-charcoal-500">
              <span>SKU: {productData.sku}</span>
              <span className="text-gold-900 font-bold">Atelier Edition</span>
            </div>
          </div>

          {/* Inner Levitation Leaflet (lifts in Phase 3) */}
          <div
            ref={innerLeafletRef}
            className="absolute inset-4 rounded-2xl p-6 border-2 border-gold-500 bg-white shadow-xl flex flex-col justify-between transform-style-3d"
            style={{ willChange: "transform" }}
          >
            <div className="flex items-center justify-between border-b border-gold-400 pb-2">
              <span className="text-[10px] font-mono tracking-widest text-gold-900 font-bold uppercase">
                24K Pure Gold Foil Inscription
              </span>
              <Sparkles className="w-4 h-4 text-gold-600" />
            </div>

            <div className="text-center my-auto">
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-950 mb-1">
                Aarav &amp; Meera
              </h3>
              <div className="h-[1.5px] w-24 bg-gold-500 mx-auto my-2" />
              <p className="font-serif italic text-xs text-gold-900 font-medium">
                The City Palace • Lake Pichola, Udaipur
              </p>
              <p className="text-[10px] font-mono text-charcoal-600 uppercase tracking-widest mt-1">
                14th December 2026
              </p>
            </div>

            <div className="border-t border-gold-300 pt-2 flex items-center justify-between text-[10px] font-mono text-charcoal-600">
              <span>Italian Cotton Deckle</span>
              <span className="text-royal-crimson font-bold">Shubh Vivah</span>
            </div>
          </div>

          {/* Left Palace Door (Opens in Phase 2) */}
          <div
            ref={leftDoorRef}
            className="absolute left-0 top-0 bottom-0 w-1/2 rounded-l-3xl border-2 border-r-0 border-gold-500/80 bg-gradient-to-br from-white via-ivory-100 to-ivory-200 p-4 flex flex-col justify-between shadow-2xl origin-left transform-style-3d cursor-pointer"
            style={{ willChange: "transform" }}
          >
            <div className="border border-gold-400/50 h-full rounded-l-2xl p-3 flex flex-col justify-between bg-gold-50/30">
              <span className="text-[8px] font-mono uppercase tracking-widest text-gold-800">
                Left Filigree
              </span>
              <div className="w-8 h-8 rounded-full border border-gold-400 mx-auto flex items-center justify-center">
                <Compass className="w-3.5 h-3.5 text-gold-700" />
              </div>
              <span className="text-[8px] font-mono text-charcoal-500">0.2mm Cut</span>
            </div>
          </div>

          {/* Right Palace Door (Opens in Phase 2) */}
          <div
            ref={rightDoorRef}
            className="absolute right-0 top-0 bottom-0 w-1/2 rounded-r-3xl border-2 border-l-0 border-gold-500/80 bg-gradient-to-bl from-white via-ivory-100 to-ivory-200 p-4 flex flex-col justify-between shadow-2xl origin-right transform-style-3d cursor-pointer"
            style={{ willChange: "transform" }}
          >
            <div className="border border-gold-400/50 h-full rounded-r-2xl p-3 flex flex-col justify-between bg-gold-50/30">
              <span className="text-[8px] font-mono uppercase tracking-widest text-gold-800 text-right">
                Right Filigree
              </span>
              <div className="w-8 h-8 rounded-full border border-gold-400 mx-auto flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-gold-700" />
              </div>
              <span className="text-[8px] font-mono text-charcoal-500 text-right">24K Foil</span>
            </div>
          </div>

          {/* Descending French Beeswax Seal (Phase 4) */}
          <div
            ref={waxSealRef}
            className="absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-royal-crimson to-rose-950 border-2 border-gold-300 shadow-2xl flex items-center justify-center text-gold-200 font-serif font-extrabold text-lg pointer-events-none transform-style-3d z-30"
            style={{ willChange: "transform, opacity" }}
          >
            <span>K</span>
          </div>
        </div>

      </div>

      {/* Bottom Floating Control Bar */}
      <div className="pb-8 px-6 sm:px-12 max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gold-300/50 pt-4 z-20">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl font-bold text-charcoal-950">
            {formatPrice(productData.priceINR)}
          </span>
          <span className="text-xs font-mono text-charcoal-500 uppercase">
            / Bespoke Suite
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            ref={buttonRef}
            onClick={handleAddSample}
            className="shimmer-btn squeeze-btn px-7 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40"
          >
            {addedToast ? (
              <>
                <Check className="w-4 h-4 text-charcoal-950" />
                <span>Flying To Sample Box!</span>
              </>
            ) : (
              <>
                <Package className="w-4 h-4 text-charcoal-950" />
                <span>Add To Sample Box (Fly To Cart)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
