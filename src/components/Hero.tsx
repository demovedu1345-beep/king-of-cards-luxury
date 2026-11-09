import { useState, useRef, useEffect } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Compass, RotateCcw, Heart } from "lucide-react";
import confetti from "canvas-confetti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "./MagneticButton";
import { CircularBadge } from "./CircularBadge";
import { CountUp } from "./CountUp";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onExploreClick: () => void;
  onStudioClick: () => void;
  onSampleBoxClick: () => void;
}

export function Hero({ onExploreClick, onStudioClick, onSampleBoxClick }: HeroProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glintPos, setGlintPos] = useState({ x: 50, y: 50 });
  const [cardFlipped, setCardFlipped] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroStageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ribbonBannerRef = useRef<HTMLDivElement>(null);
  const titleCharsRef = useRef<HTMLDivElement>(null);

  // Multi-layer mouse parallax tracking
  const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMouseOffset({
      x: (clientX - centerX) / centerX,
      y: (clientY - centerY) / centerY,
    });
  };

  // Spylt & Floema GSAP Orchestration:
  // 1. Spylt ClipPath expanding ribbon banner
  // 2. Spylt Character-by-character SplitText entrance
  // 3. Spylt 3D Hero Rotation + Scale + Y-percent scrub on scroll!
  useEffect(() => {
    const hero = heroSectionRef.current;
    const stage = heroStageRef.current;
    const ribbon = ribbonBannerRef.current;
    const titleBlock = titleCharsRef.current;
    if (!hero || !stage) return;

    const ctx = gsap.context(() => {
      // 1. Spylt Expanding ClipPath Ribbon Banner Entrance
      if (ribbon) {
        gsap.fromTo(
          ribbon,
          { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)", opacity: 0 },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 1.1,
            delay: 0.3,
            ease: "circ.out",
          }
        );
      }

      // 2. Spylt Character-by-Character Headline Split Entrance
      if (titleBlock) {
        const chars = titleBlock.querySelectorAll(".hero-char");
        gsap.fromTo(
          chars,
          { yPercent: 180, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.02,
            delay: 0.45,
            ease: "power2.out",
          }
        );
      }

      // 3. The Signature Spylt 3D Hero Scroll Perspective Transform
      // As you scroll down from hero, stage rotates 4deg, scales down to 0.93, and shifts down!
      gsap.to(stage, {
        rotate: 4.5,
        scale: 0.93,
        yPercent: 22,
        opacity: 0.25,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  // 3D Tilt calculation based on mouse position over hero card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -16;
    const rotY = ((x - centerX) / centerX) * 18;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlintPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlintPos({ x: 50, y: 50 });
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 110,
      spread: 85,
      origin: { y: 0.6 },
      colors: ["#be9932", "#e3cf8b", "#a37d25", "#ffffff", "#791828"],
    });
  };

  const titleLine1 = "Crowning Life’s";
  const titleLine2 = "Greatest Celebrations.";

  return (
    <section
      id="hero"
      ref={heroSectionRef}
      onMouseMove={handleSectionMouseMove}
      className="relative min-h-[98vh] pt-36 pb-20 flex items-center justify-center overflow-hidden bg-ivory-radial"
    >
      {/* ═══════════════════════════════════════════════════════════ */}
      {/* MULTI-LAYER STEREOSCOPIC FOREGROUND PARALLAX ELEMENTS       */}
      {/* ═══════════════════════════════════════════════════════════ */}
      {/* Floating 3D Royal Wax Seal (Top-Left Foreground Layer) */}
      <div
        className="pointer-events-none absolute top-28 left-8 sm:left-20 z-30 hidden md:flex items-center gap-2.5 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * -32}px, ${mouseOffset.y * -26}px, 0)`,
        }}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-crimson to-rose-950 border-2 border-gold-300 shadow-2xl flex items-center justify-center text-gold-200 font-serif font-extrabold text-sm rotate-12">
          K
        </div>
        <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-gold-400/40 text-[9px] font-mono uppercase tracking-wider text-charcoal-800 shadow-sm">
          Pure French Beeswax
        </div>
      </div>

      {/* Floating 24K Botanical Golden Emblem (Bottom-Right Foreground Layer) */}
      <div
        className="pointer-events-none absolute bottom-24 right-10 sm:right-28 z-30 hidden md:flex items-center gap-2 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * 38}px, ${mouseOffset.y * 32}px, 0)`,
        }}
      >
        <div className="w-10 h-10 rounded-full bg-gold-100 border border-gold-400 flex items-center justify-center text-gold-700 shadow-lg rotate-[-15deg]">
          <Sparkles className="w-5 h-5 text-gold-600 animate-pulse" />
        </div>
        <span className="px-2.5 py-1 rounded-md bg-white/95 border border-gold-300 text-[9px] font-mono uppercase text-gold-900 font-bold shadow-sm">
          24K Hot Stamped
        </span>
      </div>

      {/* Floating Gold Foil Flake (Mid-Left Foreground Layer) */}
      <div
        className="pointer-events-none absolute top-1/2 left-6 z-20 hidden lg:block transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * -45}px, ${mouseOffset.y * 30}px, 0)`,
        }}
      >
        <div className="w-6 h-6 rotate-45 border-2 border-gold-400 bg-gold-200/40 backdrop-blur-sm shadow-md animate-pulse" />
      </div>

      {/* Floema Architectural Blueprint Crosshairs */}
      <div className="absolute top-6 left-8 font-mono text-[9px] uppercase tracking-[0.25em] text-gold-700/60 pointer-events-none hidden sm:flex items-center gap-2">
        <span>+</span>
        <span>FLOEMA CAD REF: 2026-HERITAGE</span>
        <span>•</span>
        <span>BLPRNT: V9.2</span>
      </div>
      <div className="absolute top-6 right-8 font-mono text-[9px] uppercase tracking-[0.25em] text-gold-700/60 pointer-events-none hidden sm:block">
        + PERSPECTIVE: 1200PX • SCALE: 1:1
      </div>

      {/* Animated gradient mesh background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="gradient-orb-1 absolute top-1/4 left-1/4 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-gold-300/20 via-gold-200/10 to-transparent blur-[120px]" />
        <div className="gradient-orb-2 absolute top-1/3 right-1/4 w-[600px] h-[480px] rounded-full bg-gradient-to-bl from-gold-400/15 via-gold-100/20 to-transparent blur-[140px]" />
        <div className="gradient-orb-3 absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[360px] rounded-full bg-gradient-to-t from-gold-200/25 via-gold-100/10 to-transparent blur-[100px]" />
      </div>

      <div
        ref={heroStageRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full will-change-transform"
        style={{ transformOrigin: "top center" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Spylt Split Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Spylt Expanding ClipPath Pill Banner */}
            <div className="mb-6 overflow-hidden">
              <div
                ref={ribbonBannerRef}
                className="liquid-glass inline-flex items-center gap-2.5 px-4 py-2 rounded-full shadow-sm"
                style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
              >
                <span className="w-2 h-2 rounded-full bg-gold-600 animate-ping" />
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold-900 font-bold">
                  Haute Wedding Stationery Atelier • Est. 2002
                </span>
              </div>
            </div>

            {/* Massive Display Title with Spylt Character-by-Character SplitText */}
            <div ref={titleCharsRef} className="mb-6 overflow-hidden">
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-[-0.025em] text-charcoal-950 leading-[1.08]">
                <div className="overflow-hidden">
                  {titleLine1.split("").map((char, i) => (
                    <span
                      key={i}
                      className="hero-char inline-block will-change-transform"
                      style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <div className="overflow-hidden">
                  <span className="text-gold-foil italic font-normal">
                    {titleLine2.split("").map((char, i) => (
                      <span
                        key={i}
                        className="hero-char inline-block will-change-transform"
                        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </div>
              </h1>
            </div>

            {/* Editorial Body Description with 65ch constraint */}
            <p
              className="text-base sm:text-lg text-charcoal-700 font-normal leading-relaxed max-w-[65ch] mb-8 in-blur"
              style={{ animationDelay: "450ms" }}
            >
              Where heritage Indian craftsmanship meets contemporary European haute couture.
              Handcrafted laser-cut palace jharokhas, 24K hot-stamped gold foil, royal velvet scrolls,
              and sculpted keepsake invitation boxes designed for the world’s most discerning couples.
            </p>

            {/* Action Buttons with Magnetic Pull Physics & Shimmer Light Streak */}
            <div
              className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-12 in-blur"
              style={{ animationDelay: "650ms" }}
            >
              <MagneticButton
                onClick={onExploreClick}
                pullStrength={0.25}
                className="shimmer-btn w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40"
              >
                <span>Explore Haute Atelier</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                onClick={onStudioClick}
                pullStrength={0.2}
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-gold-400/50 bg-white/80 hover:bg-white text-gold-900 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 shadow-sm backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span>3D Card Studio</span>
              </MagneticButton>

              <MagneticButton
                onClick={onSampleBoxClick}
                pullStrength={0.15}
                className="w-full sm:w-auto px-6 py-4 rounded-full border border-gold-300 bg-gold-50/70 hover:bg-gold-100 text-charcoal-800 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <span>Free Sample Box</span>
              </MagneticButton>
            </div>

            {/* Royal Proof Metrics with Live CountUp */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gold-400/25 w-full max-w-xl">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-950 block">
                  <CountUp end={4000} duration={2.4} suffix="+" />
                </span>
                <span className="text-[11px] uppercase font-mono tracking-wider text-charcoal-600">
                  Bespoke Designs
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-950 block">
                  <CountUp end={1.2} duration={2.0} decimals={1} suffix="M+" />
                </span>
                <span className="text-[11px] uppercase font-mono tracking-wider text-charcoal-600">
                  Couples Blessed
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-950 block">
                  <CountUp end={48} duration={1.8} suffix="+" />
                </span>
                <span className="text-[11px] uppercase font-mono tracking-wider text-charcoal-600">
                  Global Nations
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Tilt Wedding Invitation Card Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative perspective-1200">
            {/* Ambient Background Aura Glow */}
            <div className="absolute w-80 h-80 rounded-full bg-gold-400/20 blur-[80px] -z-10 pointer-events-none" />

            {/* Spinning Circular Royal Crest Badge */}
            <div className="absolute -top-8 -right-4 z-20 hidden sm:block">
              <CircularBadge size={110} />
            </div>

            {/* Interactive Tilt Container with Shimmering Conic Halo */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="conic-border relative w-full max-w-sm sm:max-w-md h-[480px] cursor-grab active:cursor-grabbing select-none transition-transform duration-200 ease-out transform-style-3d shadow-2xl"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
                  cardFlipped ? "rotateY(180deg)" : ""
                }`,
              }}
            >
              {/* FRONT OF CARD - Opulent Ivory & 24K Gold Rajputana Card */}
              <div className="absolute inset-0 rounded-2xl pearl-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden backface-hidden shadow-2xl bg-white">
                
                {/* Dynamic Gold Glint Specular Highlight */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-45 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 340px at ${glintPos.x}% ${glintPos.y}%, rgba(227, 207, 139, 0.7), transparent 60%)`,
                  }}
                />

                {/* Card Header Ornamental Emblem */}
                <div className="flex items-center justify-between border-b border-gold-400/30 pb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-serif tracking-[0.25em] uppercase text-gold-800 font-bold">
                      Imperial Rajputana Series
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded border border-gold-400/40 text-gold-900 bg-gold-100/70 font-bold">
                    24K Gold Leaf
                  </span>
                </div>

                {/* Card Center: Architectural Jharokha Motifs */}
                <div className="text-center my-auto relative z-10 py-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-gold-400 flex items-center justify-center bg-gradient-to-b from-gold-100 to-white shadow-inner">
                    <span className="font-serif text-2xl text-gold-700">ॐ</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wide text-charcoal-950 mb-1">
                    Aarav &amp; Meera
                  </h3>
                  <div className="h-[1.5px] w-28 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto my-3" />
                  <p className="font-serif italic text-sm text-gold-900 font-medium tracking-wide">
                    The Royal Palace of Udaipur • Rajasthan
                  </p>
                  <p className="text-[11px] text-charcoal-600 font-mono tracking-widest uppercase mt-2">
                    Fourteenth of December, Two Thousand Twenty Six
                  </p>
                </div>

                {/* Card Footer: SKU and Wax Seal Details */}
                <div className="flex items-center justify-between border-t border-gold-400/30 pt-3 relative z-10 text-xs">
                  <span className="font-mono text-charcoal-500 text-[11px]">
                    SKU: KNSR8811M
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-serif text-charcoal-700 font-medium">
                      650 GSM Handmade Cotton
                    </span>
                    <div className="w-5 h-5 rounded-full bg-royal-crimson shadow-md flex items-center justify-center border border-gold-300">
                      <span className="text-[8px] text-gold-200 font-serif">K</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Drag Hint */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase tracking-[0.2em] text-gold-800/90 pointer-events-none flex items-center gap-1 font-semibold">
                  <Compass className="w-3 h-3 text-gold-600 animate-spin" style={{ animationDuration: "8s" }} />
                  <span>Interactive 3D Tilt</span>
                </div>
              </div>

              {/* BACK OF CARD - Architectural Floorplan & Royal Vow Calligraphy */}
              <div
                className="absolute inset-0 rounded-2xl pearl-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl bg-white"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gold-400/30 pb-3">
                  <span className="text-xs font-serif tracking-[0.2em] uppercase text-gold-800 font-bold">
                    Sacred Nuptial Ceremonies
                  </span>
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                </div>

                {/* Back Itinerary Content */}
                <div className="my-auto space-y-3.5 text-center py-2">
                  <div className="p-2.5 rounded-xl border border-gold-400/25 bg-gold-50/50">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-800 block font-bold">
                      Shubh Vivah &amp; Pheras
                    </span>
                    <span className="text-xs font-serif text-charcoal-900 font-semibold">
                      Zenana Mahal Courtyard • 6:30 PM
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl border border-gold-400/25 bg-gold-50/50">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-800 block font-bold">
                      Royal Sangeet &amp; Sufi Night
                    </span>
                    <span className="text-xs font-serif text-charcoal-900 font-semibold">
                      Jagmandir Island Palace • Lake Pichola
                    </span>
                  </div>
                  <p className="text-[11px] font-serif italic text-charcoal-600 pt-1">
                    “Two souls united in timeless bond under the desert stars.”
                  </p>
                </div>

                {/* Back Footer */}
                <div className="flex items-center justify-between border-t border-gold-400/30 pt-3 text-[11px] font-mono text-charcoal-600">
                  <span>King of Cards Atelier</span>
                  <span className="text-gold-800 font-bold">Bangalore • Mumbai • Delhi</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Controls: Flip & Confetti Celebration */}
            <div className="flex items-center gap-3 mt-6 z-20">
              <button
                onClick={() => setCardFlipped(!cardFlipped)}
                className="squeeze-btn inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/40 bg-white/90 hover:bg-white text-charcoal-800 text-xs font-bold font-mono tracking-wider uppercase shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5 text-gold-600" />
                <span>{cardFlipped ? "View Front Face" : "Inspect Back RSVP"}</span>
              </button>

              <button
                onClick={triggerCelebration}
                className="squeeze-btn inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/40 bg-gold-100 hover:bg-gold-200 text-gold-900 text-xs font-bold font-mono tracking-wider uppercase shadow-sm"
              >
                <Heart className="w-3.5 h-3.5 text-royal-crimson fill-royal-crimson" />
                <span>Bless Couple</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
