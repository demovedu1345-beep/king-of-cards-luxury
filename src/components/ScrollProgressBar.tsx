import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 scroll-progress-glow transition-all duration-75 ease-out"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
      {scrollProgress > 98 && (
        <div className="absolute top-0 right-0 w-3 h-3 -mt-[4px] rounded-full bg-gold-400 blur-[2px] animate-ping" />
      )}
    </div>
  );
}
