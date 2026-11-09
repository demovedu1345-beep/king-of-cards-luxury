interface SpyltCurvedDipProps {
  fillColor?: string;
  bgColor?: string;
  direction?: "down" | "up";
  height?: number; // in pixels
  className?: string;
  showCenterTag?: boolean;
  centerTagText?: string;
}

export function SpyltCurvedDip({
  fillColor = "#f5f1ea",
  bgColor = "transparent",
  direction = "down",
  height = 70,
  className = "",
  showCenterTag = false,
  centerTagText = "ROYAL ARCH // 01",
}: SpyltCurvedDipProps) {
  const isDown = direction === "down";

  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: `${height}px` }}
      >
        {isDown ? (
          // Spylt dipping down curve
          <path
            d="M0,0 C380,85 1060,85 1440,0 L1440,90 L0,90 Z"
            fill={fillColor}
          />
        ) : (
          // Spylt dipping up curve
          <path
            d="M0,90 C380,5 1060,5 1440,90 L1440,0 L0,0 Z"
            fill={fillColor}
          />
        )}
      </svg>

      {showCenterTag && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="px-3.5 py-1 rounded-full bg-white/90 border border-gold-400/40 shadow-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600 animate-pulse" />
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-charcoal-700 font-bold">
              {centerTagText}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
