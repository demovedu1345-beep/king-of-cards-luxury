import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const trail1Ref = useRef<HTMLDivElement>(null);
  const trail2Ref = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trail1Pos = useRef({ x: -100, y: -100 });
  const trail2Pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Detect mobile touch
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024) {
      setIsMobile(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive target
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("button, a, input, select, textarea, [role='button'], .squeeze-btn, .interactive-hover");
        setIsPointer(!!interactive);
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let animationFrameId: number;

    const render = () => {
      // Lerp ring towards mouse
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      // Trailing dust particles with softer lerps
      trail1Pos.current.x += (mousePos.current.x - trail1Pos.current.x) * 0.12;
      trail1Pos.current.y += (mousePos.current.y - trail1Pos.current.y) * 0.12;

      trail2Pos.current.x += (mousePos.current.x - trail2Pos.current.x) * 0.08;
      trail2Pos.current.y += (mousePos.current.y - trail2Pos.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (trail1Ref.current) {
        trail1Ref.current.style.transform = `translate3d(${trail1Pos.current.x}px, ${trail1Pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (trail2Ref.current) {
        trail2Ref.current.style.transform = `translate3d(${trail2Pos.current.x}px, ${trail2Pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* Trailing Particle 2 */}
      <div
        ref={trail2Ref}
        className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold-400/30 blur-[1px] transition-opacity duration-300 pointer-events-none"
      />

      {/* Trailing Particle 1 */}
      <div
        ref={trail1Ref}
        className="absolute top-0 left-0 w-2 h-2 rounded-full bg-gold-500/40 blur-[0.5px] transition-opacity duration-300 pointer-events-none"
      />

      {/* Outer Luxury Ring */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 rounded-full border border-gold-500/60 transition-[width,height,background-color,border-color,transform] duration-200 ease-out pointer-events-none flex items-center justify-center ${
          isPointer
            ? "w-12 h-12 bg-gold-500/10 border-gold-600 scale-100"
            : isMouseDown
            ? "w-7 h-7 bg-gold-500/20 border-gold-700 scale-90"
            : "w-8 h-8 bg-transparent scale-100"
        }`}
      />

      {/* Inner Precision Center Point */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 rounded-full bg-gold-600 transition-transform duration-100 ease-out pointer-events-none shadow-sm ${
          isPointer
            ? "w-1.5 h-1.5 opacity-90"
            : isMouseDown
            ? "w-3 h-3 opacity-100 bg-gold-700"
            : "w-2 h-2 opacity-100"
        }`}
      />
    </div>
  );
}
