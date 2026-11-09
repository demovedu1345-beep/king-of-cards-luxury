import { useRef, useEffect } from "react";
import gsap from "gsap";

interface ElasticDividerProps {
  color?: string;
  weight?: number;
  sensitivity?: number;
  maxAmplitude?: number;
  className?: string;
  labelLeft?: string;
  labelRight?: string;
}

export function ElasticDivider({
  color = "#B49A68",
  weight = 1.25,
  sensitivity = 1.2,
  maxAmplitude = 42,
  className = "",
  labelLeft = "ANGRAITY GUILD // 0.02MM TOLERANCE",
  labelRight = "SWEEP CURSOR ACROSS STRING",
}: ElasticDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!container || !svg || !path) return;

    const bend = { x: container.clientWidth / 2, y: 0 };
    let width = container.clientWidth;
    const height = container.clientHeight;
    const midY = Math.round(height / 2);

    function draw() {
      if (!path) return;
      path.setAttribute(
        "d",
        `M0,${midY} Q${bend.x.toFixed(2)},${(midY + bend.y * 2).toFixed(2)} ${width},${midY}`
      );
    }

    function measure() {
      if (!container || !svg) return;
      width = container.clientWidth;
      const h = container.clientHeight;
      svg.setAttribute("viewBox", `0 0 ${width} ${h}`);
      draw();
    }

    measure();

    let liveTl: gsap.core.Timeline | null = null;
    let prevX: number | null = null;
    let prevY: number | null = null;
    let prevT = 0;

    function flick(atX: number, amp: number, dir: number) {
      if (liveTl) liveTl.kill();
      liveTl = gsap.timeline({ onUpdate: draw });
      liveTl
        .to(bend, {
          x: atX,
          y: amp * dir,
          duration: 0.08,
          ease: "sine.out",
        })
        .to(bend, {
          y: 0,
          duration: 1.4,
          ease: "elastic.out(1, 0.28)",
        });
    }

    function onPointerMove(e: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const t = performance.now() / 1000;

      if (prevY !== null && prevX !== null) {
        const dt = Math.max(t - prevT, 0.005);
        const speed = Math.hypot(x - prevX, y - prevY) / dt;
        const amp = Math.min(Math.max(speed * 0.015 * sensitivity, 4), maxAmplitude);
        const crossed = (prevY - midY) * (y - midY) < 0;

        if (crossed) {
          flick(x, amp, y > prevY ? 1 : -1);
        }
      }

      prevX = x;
      prevY = y;
      prevT = t;
    }

    function onPointerEnd() {
      prevX = null;
      prevY = null;
    }

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerEnd);
    container.addEventListener("pointercancel", onPointerEnd);
    window.addEventListener("resize", measure);

    return () => {
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerEnd);
      container.removeEventListener("pointercancel", onPointerEnd);
      window.removeEventListener("resize", measure);
      if (liveTl) liveTl.kill();
    };
  }, [sensitivity, maxAmplitude]);

  return (
    <div className={`relative w-full py-6 select-none overflow-hidden ${className}`}>
      {/* Top Labels */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-[#77716B] mb-2 pointer-events-none">
        <span>{labelLeft}</span>
        <span className="hidden sm:inline">{labelRight}</span>
      </div>

      {/* Elastic String Divider Zone */}
      <div
        ref={containerRef}
        className="relative w-full h-20 cursor-ns-resize touch-pan-y"
        style={{ touchAction: "pan-y" }}
      >
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        >
          <path
            ref={pathRef}
            fill="none"
            stroke={color}
            strokeWidth={weight}
            strokeOpacity={0.7}
          />
        </svg>

        {/* Center Golden Diamond Anchor Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-2.5 h-2.5 rotate-45 border border-[#B49A68] bg-[#F5F1E9] shadow-sm flex items-center justify-center">
            <div className="w-1 h-1 bg-[#B49A68]" />
          </div>
        </div>
      </div>
    </div>
  );
}
