import { useState, useRef } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Compass, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

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

    const rotX = ((y - centerY) / centerY) * -14;
    const rotY = ((x - centerX) / centerX) * 16;

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
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#d4af37", "#fef08a", "#e2c661", "#ffffff"],
    });
  };

  return (
    <section id="hero" className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & High-Tension Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Crowned Pill Tag with Liquid Glass Rim */}
            <div className="liquid-glass inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6 shadow-sm in-blur" style={{ animationDelay: "100ms" }}>
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold-300 font-semibold">
                Haute Wedding Stationery Atelier
              </span>
            </div>

            {/* Massive Display Title */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-[-0.02em] text-white leading-[1.08] mb-6 in-blur" style={{ animationDelay: "250ms" }}>
              Crowning Life’s <br />
              <span className="text-gold-foil italic font-normal">
                Greatest Celebrations.
              </span>
            </h1>

            {/* Editorial Body Description */}
            <p className="text-base sm:text-lg text-zinc-300/90 font-light leading-relaxed max-w-[65ch] mb-8 in-blur" style={{ animationDelay: "450ms" }}>
              Where heritage Indian craftsmanship meets contemporary European haute couture.
              Handcrafted laser-cut palace jharokhas, 24K hot-stamped gold foil, royal velvet scrolls,
              and sculpted keepsake invitation boxes designed for the world’s most discerning couples.
            </p>

            {/* Action Buttons with Emil Kowalski Squeeze Physics */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-12 in-blur" style={{ animationDelay: "650ms" }}>
              <button
                onClick={onExploreClick}
                className="squeeze-btn w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-obsidian-950 font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40"
              >
                <span>Explore Haute Atelier</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStudioClick}
                className="squeeze-btn w-full sm:w-auto px-7 py-4 rounded-full border border-gold-500/40 bg-obsidian-900/60 hover:bg-obsidian-850 text-gold-300 font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 backdrop-blur-xl"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>3D Card Studio</span>
              </button>

              <button
                onClick={onSampleBoxClick}
                className="squeeze-btn w-full sm:w-auto px-6 py-4 rounded-full border border-gold-400/20 bg-gold-950/20 hover:bg-gold-900/40 text-zinc-300 font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span>Free Sample Box</span>
              </button>
            </div>

            {/* Royal Proof Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gold-500/15 w-full max-w-xl">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
                  4,000<span className="text-gold-400">+</span>
                </span>
                <span className="text-[11px] uppercase font-mono tracking-wider text-zinc-400">
                  Bespoke Designs
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
                  1.2M<span className="text-gold-400">+</span>
                </span>
                <span className="text-[11px] uppercase font-mono tracking-wider text-zinc-400">
                  Couples Blessed
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
                  48<span className="text-gold-400">+</span>
                </span>
                <span className="text-[11px] uppercase font-mono tracking-wider text-zinc-400">
                  Global Nations
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Tilt Wedding Invitation Card Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative perspective-1200">
            {/* Ambient Background Aura Glow */}
            <div className="absolute w-80 h-80 rounded-full bg-gold-500/15 blur-[90px] -z-10 pointer-events-none" />

            {/* Interactive Tilt Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-sm sm:max-w-md h-[460px] cursor-grab active:cursor-grabbing select-none transition-transform duration-200 ease-out transform-style-3d"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
                  cardFlipped ? "rotateY(180deg)" : ""
                }`,
              }}
            >
              {/* FRONT OF CARD */}
              <div className="absolute inset-0 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between overflow-hidden border border-gold-500/35 bg-gradient-to-br from-obsidian-900/95 via-obsidian-950/95 to-[#160b0e]/95 backface-hidden shadow-2xl shadow-black">
                
                {/* Dynamic Gold Glint Specular Highlight */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 320px at ${glintPos.x}% ${glintPos.y}%, rgba(254, 243, 199, 0.45), transparent 60%)`,
                  }}
                />

                {/* Card Header Ornamental Emblem */}
                <div className="flex items-center justify-between border-b border-gold-500/20 pb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-serif tracking-[0.25em] uppercase text-gold-400">
                      Imperial Rajputana Series
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded border border-gold-400/30 text-gold-300 bg-gold-950/40">
                    24K Gold Leaf
                  </span>
                </div>

                {/* Card Center: Architectural Jharokha Motifs */}
                <div className="text-center my-auto relative z-10 py-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-gold-400/50 flex items-center justify-center bg-gradient-to-b from-gold-500/20 to-transparent shadow-inner">
                    <span className="font-serif text-2xl text-gold-300">ॐ</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-white mb-2">
                    Aarav &amp; Meera
                  </h3>
                  <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-3" />
                  <p className="font-serif italic text-sm text-gold-200/90 tracking-wide">
                    The Royal Palace of Udaipur • Rajasthan
                  </p>
                  <p className="text-xs text-zinc-400 font-mono tracking-widest uppercase mt-2">
                    Fourteenth of December, Two Thousand Twenty Six
                  </p>
                </div>

                {/* Card Footer: SKU and Wax Seal Details */}
                <div className="flex items-center justify-between border-t border-gold-500/20 pt-4 relative z-10 text-xs">
                  <span className="font-mono text-zinc-400 text-[11px]">
                    SKU: KNSR8811M
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCardFlipped(!cardFlipped);
                    }}
                    className="flex items-center gap-1.5 text-gold-400 hover:text-gold-200 transition-colors font-medium text-xs tracking-wider uppercase"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Flip to Inside</span>
                  </button>
                </div>
              </div>

              {/* BACK OF CARD: The Inside Shloka Leaflet */}
              <div
                className="absolute inset-0 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between overflow-hidden border border-gold-500/35 bg-gradient-to-br from-[#12080c]/95 via-obsidian-950/95 to-obsidian-900/95 shadow-2xl shadow-black backface-hidden"
                style={{ transform: "rotateY(180deg)" }}
              >
                <div className="flex items-center justify-between border-b border-gold-500/20 pb-4">
                  <span className="text-xs font-serif tracking-widest uppercase text-gold-400">
                    Sacred Nuptial Vows
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">Insert 01 of 03</span>
                </div>

                <div className="text-center my-auto space-y-4 py-4">
                  <p className="font-serif italic text-gold-300 text-sm leading-relaxed">
                    &ldquo;माङ्गल्यं तन्तुनानेन मम जीवनहेतुना।<br />
                    कण्ठे बध्नामि सुभगे सञ्जीव शरदः शतम्॥&rdquo;
                  </p>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed max-w-xs mx-auto">
                    With the divine blessings of our beloved elders, we cordially invite your gracious presence to celebrate our union of hearts and souls.
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full border border-gold-500/20 bg-gold-950/30 text-[11px] font-mono text-gold-400">
                    650 GSM Handmade Cotton Stock
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gold-500/20 pt-4">
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Certified Authentic
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCardFlipped(false);
                    }}
                    className="flex items-center gap-1.5 text-gold-400 hover:text-gold-200 transition-colors font-medium text-xs tracking-wider uppercase"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Flip Front</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Micro-hint below card */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-xs font-mono tracking-widest uppercase text-zinc-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-gold-400 animate-spin" />
                Move cursor to inspect 24K foil reflection
              </span>
              <button
                onClick={triggerCelebration}
                className="squeeze-btn text-xs font-mono uppercase px-3 py-1 rounded-full border border-gold-500/30 text-gold-300 hover:bg-gold-500/10 flex items-center gap-1 transition-colors"
                title="Celebrate"
              >
                <Sparkles className="w-3 h-3 text-gold-400" />
                <span>Bless Couple</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
