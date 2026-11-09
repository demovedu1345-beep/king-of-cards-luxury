import { Sparkles } from "lucide-react";

interface GradientDividerProps {
  className?: string;
  showSparkles?: boolean;
}

export function GradientDivider({ className = "", showSparkles = true }: GradientDividerProps) {
  return (
    <div className={`relative w-full py-6 flex items-center justify-center overflow-hidden ${className}`}>
      {/* Animated Gradient Line Left */}
      <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400 to-gold-600 opacity-60" />

      {/* Center Royal Crest Diamond */}
      <div className="relative mx-4 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
        <div className="relative w-4 h-4 rotate-45 border border-gold-500 bg-gold-100 flex items-center justify-center shadow-sm">
          <div className="w-1.5 h-1.5 bg-gold-600 rounded-[1px]" />
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />

        {showSparkles && (
          <Sparkles className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 text-gold-500 animate-pulse pointer-events-none" />
        )}
      </div>

      {/* Animated Gradient Line Right */}
      <div className="flex-1 h-[1.5px] bg-gradient-to-r from-gold-600 via-gold-400 to-transparent opacity-60" />
    </div>
  );
}
