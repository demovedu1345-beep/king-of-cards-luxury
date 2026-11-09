import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p";
  stagger?: number;
}

export function TextReveal({
  text,
  className = "",
  tag = "h2",
  stagger = 0.035,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const wordEls = el.querySelectorAll(".reveal-word-inner");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordEls,
        {
          y: "110%",
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: "0%",
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.85,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [stagger]);

  const Tag = tag;

  return (
    <div ref={containerRef} className="inline-block overflow-hidden">
      <Tag className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <span className="reveal-word-inner inline-block will-change-transform">
              {word}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
