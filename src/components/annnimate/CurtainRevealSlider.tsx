import React, { useState, useRef } from 'react';
import { Sparkles, MoveHorizontal, ShieldCheck } from 'lucide-react';

interface CurtainRevealSliderProps {
  onExploreClick?: () => void;
}

export const CurtainRevealSlider: React.FC<CurtainRevealSliderProps> = ({
  onExploreClick,
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPos(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#F5F1E9] text-[#1F1B19] overflow-hidden select-none border-t border-[#B49A68]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B49A68]/40 bg-white shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B49A68]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#783747] font-bold">
              Annnimate Luxury Curtain Split
            </span>
          </div>
          <h2 className="font-zimula text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#1F1B19]">
            Raw Cotton Pulp <span className="text-[#B49A68]">vs. 24K Gilded Finish</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#77716B] font-sans">
            Drag the golden caliper slider horizontally to reveal the transformative power of 180°C hydraulic die stamping on handmade 650 GSM cotton rag.
          </p>
        </div>

        {/* Interactive Curtain Stage */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full max-w-5xl h-[420px] sm:h-[580px] mx-auto rounded-3xl overflow-hidden border-2 border-[#B49A68]/40 shadow-2xl cursor-ew-resize bg-black"
        >
          {/* Layer B: Finished 24K Gold Masterpiece (Full Background) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/floema/images/70e411b4618e84a57d0f87b713eb64bc25988f84-7084x4417.png"
              alt="Finished 24K Gilded Invitation"
              className="w-full h-full object-cover filter contrast-125"
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            <div className="absolute bottom-6 right-6 px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-[#B49A68]/40 text-[#F5F1E9] text-xs font-mono uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B49A68] animate-ping" />
              <span>Finished: 24K Stamped Gold Leaf &amp; Wax Matrix</span>
            </div>
          </div>

          {/* Layer A: Raw 650 GSM Cotton Rag Deckle (Clipped Left Side) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="absolute inset-0 w-[1000px] sm:w-[1280px] h-full max-w-none">
              <img
                src="/floema/images/25df657b91976f95bd5e0c6e2f0f3445175e09fc-3400x2120.png"
                alt="Raw Cotton Pulp"
                className="w-full h-full object-cover filter contrast-90"
              />
              <div className="absolute inset-0 bg-stone-900/20 pointer-events-none" />
            </div>

            <div className="absolute bottom-6 left-6 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#B49A68]/40 text-[#1F1B19] text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg">
              <ShieldCheck className="w-4 h-4 text-[#783747]" />
              <span>Raw: 650 GSM Unpressed Mulberry &amp; Cotton</span>
            </div>
          </div>

          {/* Golden Caliper Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#B49A68] via-white to-[#B49A68] shadow-[0_0_15px_rgba(180,154,104,0.8)] z-30 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-[#B49A68] bg-[#1F1B19] text-[#B49A68] shadow-2xl flex items-center justify-center pointer-events-auto">
              <MoveHorizontal className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="text-center mt-8">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#B49A68] hover:text-[#1F1B19] transition-colors font-bold"
          >
            <span>Explore All 10 Occasion Folios In Catalog →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
