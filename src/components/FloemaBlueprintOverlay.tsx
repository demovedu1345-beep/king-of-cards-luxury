import { useState, useEffect } from "react";
import { Compass, X } from "lucide-react";

interface FloemaBlueprintOverlayProps {
  isActive: boolean;
  onClose: () => void;
}

export function FloemaBlueprintOverlay({ isActive, onClose }: FloemaBlueprintOverlayProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isActive) return;
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 select-none overflow-hidden">
      {/* Precision CAD Drafting Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(190, 153, 50, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(190, 153, 50, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floema Top Blueprint Status Bar */}
      <div className="pointer-events-auto absolute top-20 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-charcoal-950/90 text-gold-300 border border-gold-400/50 shadow-2xl backdrop-blur-md flex items-center gap-4 font-mono text-[10px] tracking-wider uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Compass className="w-3.5 h-3.5 text-gold-400" />
          <span className="font-bold text-white">FLOEMA CAD BLUEPRINT MODE ACTIVE</span>
        </div>
        <span className="text-gold-500/60">•</span>
        <span className="hidden sm:inline">SCALE 1:1.00</span>
        <span className="text-gold-500/60 hidden sm:inline">•</span>
        <span className="hidden sm:inline">TOLERANCE ±0.02MM</span>
        <button
          onClick={onClose}
          className="ml-2 p-1 rounded-full hover:bg-gold-500/20 text-gold-400 hover:text-white transition-colors"
          title="Exit Blueprint Mode"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Floating Precision Coordinate Crosshairs at Cursor */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out pointer-events-none"
        style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
      >
        <div className="relative">
          {/* Caliper Crosshairs */}
          <div className="w-10 h-[1px] bg-gold-500/80 absolute -left-5 top-0" />
          <div className="h-10 w-[1px] bg-gold-500/80 absolute left-0 -top-5" />
          
          {/* Live Caliper Readout Badge */}
          <div className="absolute top-4 left-4 px-2 py-0.5 rounded bg-charcoal-900/90 border border-gold-500/50 text-[9px] font-mono text-gold-300 whitespace-nowrap shadow-lg">
            X:{coords.x}px • Y:{coords.y}px
          </div>
        </div>
      </div>

      {/* Corner Architectural Metadata Reference Stamps */}
      <div className="absolute bottom-8 left-8 p-3 rounded-lg bg-white/90 border border-gold-300/80 shadow-md font-mono text-[9px] text-charcoal-800 leading-tight">
        <div className="font-bold text-gold-900 mb-1">MAISON SPEC SHEET // ARCH-01</div>
        <div>STOCK: 650 GSM 100% COTTON</div>
        <div>DIE: HYDRAULIC BRASS 180°C</div>
        <div>FOIL: 24K AURA IMPERIAL</div>
      </div>

      <div className="absolute bottom-8 right-8 p-3 rounded-lg bg-white/90 border border-gold-300/80 shadow-md font-mono text-[9px] text-charcoal-800 leading-tight text-right">
        <div className="font-bold text-gold-900 mb-1">KING OF CARDS • BANGALORE</div>
        <div>ORIGIN: ATELIER NO. 4</div>
        <div>SYSTEM: CAD/CAM ROTARY</div>
        <div>STATUS: ZERO TOLERANCE</div>
      </div>
    </div>
  );
}
