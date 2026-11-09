"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxRevealSectionProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  yOffset?: number;
}

const ParallaxRevealSection: React.FC<ParallaxRevealSectionProps> = ({
  children,
  className = "",
  staggerDelay = 0.08,
  yOffset = 60,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const directChildren = Array.from(section.children) as HTMLElement[];
    if (directChildren.length === 0) return;

    // Set initial state on each direct child
    gsap.set(directChildren, {
      opacity: 0,
      y: yOffset,
      filter: "blur(12px)",
      willChange: "transform, opacity, filter",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 88%",
          end: "top 35%",
          scrub: 0.8,
          once: false,
        },
      });

      directChildren.forEach((child, index) => {
        tl.to(
          child,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          },
          index * staggerDelay
        );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [staggerDelay, yOffset]);

  return (
    <div ref={sectionRef} className={`relative ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxRevealSection;
