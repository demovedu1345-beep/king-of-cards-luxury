import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight, Play, Pause } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SpyltPinnedVideoSectionProps {
  onOpenCustomizer?: () => void;
}

export const SpyltPinnedVideoSection: React.FC<SpyltPinnedVideoSectionProps> = ({
  onOpenCustomizer,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const title3Ref = useRef<HTMLHeadingElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // Ensure video metadata loaded to scrub currentTime
    const onLoadedMetadata = () => {
      const duration = video.duration || 5;

      const trigger = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 1.2,
        onUpdate: (self) => {
          setScrollProgress(Math.round(self.progress * 100));
          if (!video.seeking && Number.isFinite(duration) && duration > 0) {
            video.currentTime = self.progress * duration;
          }
        },
      });

      // Animate phase typography with split-text kinetic transforms
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
        },
      });

      tl.to(title1Ref.current, { opacity: 0, y: -60, scale: 0.95 }, 0.2)
        .fromTo(title2Ref.current, { opacity: 0, y: 60, scale: 0.95 }, { opacity: 1, y: 0, scale: 1 }, 0.3)
        .to(title2Ref.current, { opacity: 0, y: -60, scale: 0.95 }, 0.6)
        .fromTo(title3Ref.current, { opacity: 0, y: 60, scale: 0.95 }, { opacity: 1, y: 0, scale: 1 }, 0.7);

      return () => {
        trigger.kill();
        tl.kill();
      };
    };

    if (video.readyState >= 1) {
      onLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', onLoadedMetadata);
      return () => video.removeEventListener('loadedmetadata', onLoadedMetadata);
    }
  }, []);

  const toggleManualPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#111013] text-[#F5F1E9] overflow-hidden flex items-center justify-center select-none"
    >
      {/* Background Ambience Texture from Floema */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="/floema/images/70e411b4618e84a57d0f87b713eb64bc25988f84-7084x4417.png"
          alt=""
          className="w-full h-full object-cover filter contrast-125"
        />
      </div>

      {/* Main Video Element - Scroll Scrubbed */}
      <div className="relative w-full max-w-6xl h-[75vh] sm:h-[82vh] rounded-3xl overflow-hidden border border-[#B49A68]/30 shadow-2xl bg-black">
        <video
          ref={videoRef}
          src="/videos/pin-video.mp4"
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-cover filter contrast-110"
        />

        {/* Video Overlay Tint & Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none" />

        {/* Top HUD: Floema CAD Coordinates & Scrub Meter */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-[#B49A68] pointer-events-none z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B49A68] animate-ping" />
            <span>PINNED SCRUB ATELIER • KINETIC FRAME SYNC</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#DCD5CA]">ROTATION: {scrollProgress * 3.6}°</span>
            <span className="px-2.5 py-1 rounded bg-[#B49A68]/20 border border-[#B49A68]/40 text-[#F5F1E9] font-bold">
              {scrollProgress}% SCRUB
            </span>
          </div>
        </div>

        {/* Kinetic Masked Headlines Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none z-10">
          {/* Phase 1 Headline */}
          <h2
            ref={title1Ref}
            className="font-zimula text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#F5F1E9] max-w-5xl leading-none drop-shadow-2xl"
          >
            The Imperial <span className="text-gold-foil">Unboxing</span>
          </h2>

          {/* Phase 2 Headline */}
          <h2
            ref={title2Ref}
            className="absolute font-zimula text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#F5F1E9] max-w-5xl leading-none drop-shadow-2xl opacity-0"
          >
            Molten <span className="text-gold-foil">24K Gold Leaf</span>
          </h2>

          {/* Phase 3 Headline */}
          <h2
            ref={title3Ref}
            className="absolute font-zimula text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#F5F1E9] max-w-5xl leading-none drop-shadow-2xl opacity-0"
          >
            Sovereign <span className="text-gold-foil">Heritage</span>
          </h2>

          <p className="mt-6 text-xs sm:text-sm md:text-base text-[#DCD5CA]/80 font-sans max-w-lg leading-relaxed drop-shadow">
            Vertical scroll controls the high-speed unboxing cinematic frame-by-frame.
          </p>
        </div>

        {/* Bottom Interactive HUD: Controls & CTA */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleManualPlay}
              className="px-4 py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-xs font-mono uppercase tracking-wider text-[#F5F1E9] hover:border-[#B49A68] hover:text-[#B49A68] transition-all flex items-center gap-2"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause Loop' : 'Play Continuous'}</span>
            </button>

            <span className="text-[11px] font-mono text-[#DCD5CA]/60 hidden md:inline">
              Scroll page to scrub • Drag with cursor
            </span>
          </div>

          <button
            onClick={onOpenCustomizer}
            className="px-6 py-3 rounded-full bg-[#B49A68] hover:bg-[#F5F1E9] text-[#1F1B19] font-serif text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2 shadow-2xl shadow-[#B49A68]/30"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch 3D Configurator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
