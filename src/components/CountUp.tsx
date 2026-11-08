import { useState, useEffect, useRef } from "react";

interface CountUpProps {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  start = 0,
  end,
  duration = 2.2,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = "",
}: CountUpProps) {
  const [value, setValue] = useState(start);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const totalMs = duration * 1000;

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / totalMs, 1);
            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const current = start + (end - start) * easeProgress;
            setValue(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setValue(end);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [start, end, duration]);

  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.floor(value).toLocaleString();

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
