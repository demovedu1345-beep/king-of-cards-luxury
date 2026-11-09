import { useRef, useEffect } from "react";
import { Crown, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function InfiniteMarquee() {
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

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

  // Dynamic Spylt scroll velocity acceleration
  useEffect(() => {
    const r1 = row1Ref.current;
    const r2 = row2Ref.current;
    if (!r1 || !r2) return;

    let currentMultiplier = 1;

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        // Velocity ranges from ~0 to ~3000 during active scrolling
        const velocity = Math.abs(self.getVelocity());
        const targetMultiplier = 1 + Math.min(velocity / 400, 3.5);
        currentMultiplier = targetMultiplier;
      },
    });

    let animationFrameId: number;
    let offset1 = 0;
    let offset2 = 0;

    const tick = () => {
      // Return smoothly toward 1x speed
      currentMultiplier += (1 - currentMultiplier) * 0.05;

      offset1 -= 1.2 * currentMultiplier;
      offset2 += 0.8 * currentMultiplier;

      // Infinite loop wrap
      if (r1) {
        r1.style.transform = `translate3d(${offset1 % 2000}px, 0, 0)`;
      }
      if (r2) {
        r2.style.transform = `translate3d(${(offset2 % 2000) - 2000}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      st.kill();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={marqueeContainerRef}
      className="relative py-10 bg-[#f5f1ea] border-y border-gold-400/30 overflow-hidden select-none"
    >
      {/* Side Vignette Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-28 sm:w-56 bg-gradient-to-r from-[#f5f1ea] via-[#f5f1ea]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-28 sm:w-56 bg-gradient-to-l from-[#f5f1ea] via-[#f5f1ea]/80 to-transparent z-10 pointer-events-none" />

      {/* Row 1: Fast Leftward Haute Couture Typography (Spylt Giant Condensed Sans) */}
      <div className="flex overflow-hidden whitespace-nowrap mb-5">
        <div
          ref={row1Ref}
          className="flex items-center gap-10 font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight will-change-transform"
        >
          {[...row1Items, ...row1Items, ...row1Items].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 flex-shrink-0">
              <span className="text-gold-foil hover:scale-105 transition-transform duration-300">
                {item}
              </span>
              <div className="w-3 h-3 rounded-full bg-gold-500/70 shadow-sm" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Smooth Rightward Atelier Presence Strip */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <div
          ref={row2Ref}
          className="flex items-center gap-10 text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-charcoal-700 font-bold will-change-transform"
        >
          {[...row2Items, ...row2Items, ...row2Items].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 flex-shrink-0">
              <span className="flex items-center gap-2.5 hover:text-gold-900 transition-colors">
                <Crown className="w-3.5 h-3.5 text-gold-600" />
                {item}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
