import React, { useRef, useState } from 'react';
import { Sparkles, ArrowRight, Eye, ShieldCheck, Compass, Layers } from 'lucide-react';

interface SpyltScrollVideoSectionProps {
  onCustomizeClick?: (collectionName?: string) => void;
}

const CRAFT_SHOWCASES = [
  {
    id: 1,
    title: 'Royal Farman Unfolding',
    tag: 'Sovereign Heritage',
    desc: 'Pure mulberry paper scrolls with hand-applied gold leaf finials and weighted bronze tassels.',
    video: '/videos/f1.mp4',
    badge: '/images/p1.png',
    stat: '100% Mulberry Fibers',
    rotation: '-rotate-2',
  },
  {
    id: 2,
    title: '24K Foil Die Milling',
    tag: 'Micron Precision',
    desc: 'Heavy brass dies heated to 180°C delivering micro-embossed relief up to 0.85mm depth.',
    video: '/videos/f2.mp4',
    badge: '/images/p2.png',
    stat: '0.85mm Deep Relief',
    rotation: 'rotate-1',
  },
  {
    id: 3,
    title: 'Feathered Deckle Edges',
    tag: 'Water-Torn Luxury',
    desc: 'Individual mould-made sheets torn under submerged water jets for soft organic contours.',
    video: '/videos/f3.mp4',
    badge: '/images/p3.png',
    stat: '650 GSM Cotton Rag',
    rotation: '-rotate-1',
  },
  {
    id: 4,
    title: 'Beeswax Seal Intaglio',
    tag: 'Noble Authentication',
    desc: 'Bohemian beeswax stamped at molten temperature with custom monogram brass matrices.',
    video: '/videos/f4.mp4',
    badge: '/images/p4.png',
    stat: 'Hand-Poured Wax',
    rotation: 'rotate-2',
  },
  {
    id: 5,
    title: 'Laser Filigree Jaali',
    tag: 'Intricate Slicing',
    desc: 'Multi-layer architectural cutwork inspired by Mughal and Renaissance palace archways.',
    video: '/videos/f5.mp4',
    badge: '/images/p5.png',
    stat: '0.12mm Laser Kerf',
    rotation: '-rotate-2',
  },
  {
    id: 6,
    title: 'Padded Raw Silk Folios',
    tag: 'Textile Opulence',
    desc: 'Hand-loomed Banarasi and Mysore raw silk padded with featherlight cotton batting.',
    video: '/videos/f6.mp4',
    badge: '/images/p6.png',
    stat: 'Pure Banarasi Silk',
    rotation: 'rotate-1',
  },
  {
    id: 7,
    title: 'Rigid Keepsake Caskets',
    tag: 'Enduring Legacy',
    desc: '2.5mm binder board boxes lined in plush suede, crafted to preserve wedding memories for generations.',
    video: '/videos/f7.mp4',
    badge: '/images/p7.png',
    stat: 'Generational Keepsake',
    rotation: '-rotate-1',
  },
];

export const SpyltScrollVideoSection: React.FC<SpyltScrollVideoSectionProps> = ({
  onCustomizeClick,
}) => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleMouseEnter = (idx: number) => {
    setActiveVideo(idx);
    const video = videoRefs.current[idx];
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (idx: number) => {
    setActiveVideo(null);
    const video = videoRefs.current[idx];
    if (video) {
      video.pause();
    }
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#211F20] text-[#F5F1E9] overflow-hidden">
      {/* Background Ambience with Organic Vignette */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="/floema/images/70e411b4618e84a57d0f87b713eb64bc25988f84-7084x4417.png"
          alt=""
          className="w-full h-full object-cover mix-blend-luminosity filter blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#211F20] via-transparent to-[#211F20]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kinetic Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B49A68]/30 bg-[#B49A68]/10 text-[#B49A68] text-xs font-mono uppercase tracking-[0.25em] mb-6">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Spylt Kinetic Production Showcase</span>
          </div>

          <h2 className="font-zimula text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F1E9] uppercase max-w-5xl leading-[1.05]">
            Where Molten Gold Meets <span className="text-gold-foil">Deckle Cotton</span>
          </h2>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#DCD5CA]/80 font-sans max-w-2xl leading-relaxed">
            Hover over any atelier craft below to scrub through high-velocity artisan milling,
            24-karat intaglio foil pressing, and sovereign parchment binding.
          </p>

          {/* Floating Rotating Seal */}
          <div className="relative mt-8 group cursor-pointer" onClick={() => onCustomizeClick?.()}>
            <div className="w-24 h-24 relative flex items-center justify-center">
              <img
                src="/images/circle-text.svg"
                alt="Angraity Atelier Craft"
                className="w-full h-full object-contain animate-spin-slow invert opacity-75 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute w-10 h-10 rounded-full bg-[#B49A68] flex items-center justify-center text-[#211F20] group-hover:scale-110 transition-transform shadow-lg shadow-[#B49A68]/40">
                <Compass className="w-5 h-5" />
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B49A68] block mt-2">
              Launch 3D Configurator
            </span>
          </div>
        </div>

        {/* 7-Card Kinetic Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {CRAFT_SHOWCASES.map((craft, idx) => (
            <div
              key={craft.id}
              className={`group relative rounded-3xl overflow-hidden border border-[#B49A68]/20 bg-[#1F1B19]/90 hover:border-[#B49A68]/80 transition-all duration-500 hover:shadow-2xl hover:shadow-[#B49A68]/20 flex flex-col transform hover:-translate-y-2 ${craft.rotation}`}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              {/* Media Container with Video Scrubber */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/40">
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={craft.video}
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Glass Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-[#B49A68] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B49A68] animate-ping"></span>
                  <span>{craft.tag}</span>
                </div>

                {/* Right Badge Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-1 flex items-center justify-center">
                  <img src={craft.badge} alt="" className="w-full h-full object-contain filter drop-shadow" />
                </div>

                {/* Overlay Play Indicator when idle */}
                {activeVideo !== idx && (
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                    <div className="w-12 h-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-md flex items-center justify-center text-white/90">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                )}

                {/* Bottom Stat Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-[#DCD5CA]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B49A68]" />
                    <span>{craft.stat}</span>
                  </span>
                  <span className="text-[#B49A68] uppercase font-bold text-[9px] tracking-widest">
                    Craft #{String(craft.id).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Editorial Description Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F1E9] group-hover:text-[#B49A68] transition-colors">
                    {craft.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#77716B] leading-relaxed line-clamp-3">
                    {craft.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onCustomizeClick?.(craft.title)}
                    className="text-xs font-mono uppercase tracking-widest text-[#B49A68] group-hover:text-[#F5F1E9] inline-flex items-center gap-2 hover:underline"
                  >
                    <span>Customise In Studio</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <Layers className="w-4 h-4 text-[#77716B] group-hover:text-[#B49A68] transition-colors" />
                </div>
              </div>
            </div>
          ))}

          {/* 8th Slot: Grand Atelier Callout */}
          <div className="group relative rounded-3xl overflow-hidden border border-[#B49A68]/40 bg-gradient-to-br from-[#783747]/40 via-[#211F20] to-[#1F1B19] p-8 flex flex-col justify-between hover:border-[#B49A68] transition-all duration-500">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B49A68] block mb-3">
                Full Atelier Commission
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E9] leading-snug">
                Need a Completely Bespoke Suite?
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-[#DCD5CA]/80 leading-relaxed font-sans">
                Our master scribes, intaglio engravers, and boxmakers engineer bespoke celebration
                suites for sovereign weddings, dignitaries, and royal celebrations globally.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => onCustomizeClick?.('Bespoke Atelier Suite')}
                className="w-full py-3.5 rounded-full bg-[#B49A68] text-[#1F1B19] font-serif text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#F5F1E9] transition-colors flex items-center justify-center gap-2 shadow-xl shadow-[#B49A68]/20"
              >
                <span>Enter Bespoke Customiser</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919900033307?text=Hello%20Angraity,%20I%20am%20interested%20in%20a%20completely%20bespoke%20suite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full border border-white/20 text-[#DCD5CA] font-mono text-[11px] uppercase tracking-widest hover:border-[#B49A68] hover:text-[#B49A68] transition-colors flex items-center justify-center gap-2"
              >
                <span>Direct Concierge Handoff</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
