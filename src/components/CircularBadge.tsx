import { Crown } from "lucide-react";

interface CircularBadgeProps {
  text?: string;
  className?: string;
  size?: number;
}

export function CircularBadge({
  text = "★ ROYAL MAISON DE LUXE • HAUTE ATELIER • EST 2002 • ",
  className = "",
  size = 120,
}: CircularBadgeProps) {
  const radius = 42;
  const viewBoxSize = 100;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Rotating SVG Ring */}
      <svg
        className="w-full h-full animate-spin"
        style={{ animationDuration: "16s", animationTimingFunction: "linear" }}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      >
        <path
          id="badgeCirclePath"
          d={`M ${viewBoxSize / 2}, ${viewBoxSize / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          fill="none"
        />
        <text className="text-[7.8px] font-mono uppercase tracking-[0.22em] fill-gold-800 font-bold">
          <textPath href="#badgeCirclePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Royal Crown Emblem */}
      <div className="absolute inset-0 m-auto w-11 h-11 rounded-full border border-gold-400/60 bg-gradient-to-br from-gold-100 via-white to-ivory-200 flex items-center justify-center shadow-md">
        <Crown className="w-5 h-5 text-gold-700" />
      </div>
    </div>
  );
}
