import { useState, useRef } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Compass, RotateCcw, Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { MagneticButton } from "./MagneticButton";
import { CircularBadge } from "./CircularBadge";
import { CountUp } from "./CountUp";

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
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt calculation based on mouse position over hero card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 14;

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
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#be9932", "#e3cf8b", "#a37d25", "#ffffff", "#791828"],
    });
  };

  return (
    <section id="hero" className="relative min-h-[96vh] pt-36 pb-20 flex items-center justify-center overflow-hidden bg-ivory-radial">
      {/* Delicate background ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[520px] bg-gradient-to-b from-gold-200/25 via-gold-100/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & High-Tension Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            <div className="flex items-center gap-4 mb-6">
              {/* Crowned Pill Tag with Liquid Glass Rim */}
              <div className="liquid-glass inline-flex items-center gap-2.5 px-4 py-2 rounded-full shadow-sm in-blur" style={{ animationDelay: "100ms" }}>
                <span className="w-2 h-2 rounded-full bg-gold-600 animate-ping" />
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold-800 font-bold">
                  Haute Wedding Stationery Atelier
                </span>
              </div>
            </div>

            {/* Massive Display Title */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-[-0.025em] text-charcoal-950 leading-[1.08] mb-6 in-blur" style={{ animationDelay: "250ms" }}>
              Crowning Life’s <br />
              <span className="text-gold-foil italic font-normal">
                Greatest Celebrations.
              </span>
            </h1>

            {/* Editorial Body Description with 65ch constraint */}
            <p className="text-base sm:text-lg text-charcoal-700 font-normal leading-relaxed max-w-[65ch] mb-8 in-blur" style={{ animationDelay: "450ms" }}>
              Where heritage Indian craftsmanship meets contemporary European haute couture.
              Handcrafted laser-cut palace jharokhas, 24K hot-stamped gold foil, royal velvet scrolls,
              and sculpted keepsake invitation boxes designed for the world’s most discerning couples.
            </p>

            {/* Action Buttons with Magnetic Pull Physics */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-12 in-blur" style={{ animationDelay: "650ms" }}>
              <MagneticButton
                onClick={onExploreClick}
                pullStrength={0.25}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40"
              >
                <span>Explore Haute Atelier</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                onClick={onStudioClick}
                pullStrength={0.2}
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-gold-400/50 bg-white/80 hover:bg-white text-gold-800 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 shadow-sm backdrop-blur-md"
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

            {/* Interactive Tilt Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-sm sm:max-w-md h-[480px] cursor-grab active:cursor-grabbing select-none transition-transform duration-200 ease-out transform-style-3d"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
                  cardFlipped ? "rotateY(180deg)" : ""
                }`,
              }}
            >
              {/* FRONT OF CARD - Opulent Ivory & 24K Gold Rajputana Card */}
              <div className="absolute inset-0 rounded-2xl pearl-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden backface-hidden shadow-2xl">
                
                {/* Dynamic Gold Glint Specular Highlight */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 320px at ${glintPos.x}% ${glintPos.y}%, rgba(227, 207, 139, 0.6), transparent 60%)`,
                  }}
                />

                {/* Card Header Ornamental Emblem */}
                <div className="flex items-center justify-between border-b border-gold-400/30 pb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-serif tracking-[0.25em] uppercase text-gold-700 font-bold">
                      Imperial Rajputana Series
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded border border-gold-400/40 text-gold-800 bg-gold-100/70 font-semibold">
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
                  <p className="font-serif italic text-sm text-gold-800 font-medium tracking-wide">
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
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase tracking-[0.2em] text-gold-700/80 pointer-events-none flex items-center gap-1">
                  <Compass className="w-3 h-3 text-gold-600 animate-spin" style={{ animationDuration: "8s" }} />
                  <span>Interactive 3D Tilt</span>
                </div>
              </div>

              {/* BACK OF CARD - Architectural Floorplan & Royal Vow Calligraphy */}
              <div
                className="absolute inset-0 rounded-2xl pearl-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gold-400/30 pb-3">
                  <span className="text-xs font-serif tracking-[0.2em] uppercase text-gold-700 font-bold">
                    Sacred Nuptial Ceremonies
                  </span>
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                </div>

                {/* Back Itinerary Content */}
                <div className="my-auto space-y-3.5 text-center py-2">
                  <div className="p-2.5 rounded-xl border border-gold-400/25 bg-gold-50/50">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-700 block font-bold">
                      Shubh Vivah &amp; Pheras
                    </span>
                    <span className="text-xs font-serif text-charcoal-900 font-semibold">
                      Zenana Mahal Courtyard • 6:30 PM
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl border border-gold-400/25 bg-gold-50/50">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-700 block font-bold">
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
                  <span className="text-gold-700 font-bold">Bangalore • Mumbai • Delhi</span>
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
