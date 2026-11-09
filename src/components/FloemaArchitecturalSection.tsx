import React, { useState } from 'react';
import { Ruler, Maximize2, Sliders, Cpu, Sparkles } from 'lucide-react';

interface FloemaArchitecturalSectionProps {
  onOpenCustomizer?: () => void;
}

const BLUEPRINTS = [
  {
    id: 'box',
    name: 'Rigid Keepsake Box Blueprint',
    sub: 'Die 214-B • Tolerance ±0.05mm',
    svg: '/floema/wireframes/table.svg',
    img: '/floema/images/477a3c25c1ea90ea1552d90a928550a434c2d7c7-3400x2120.jpg',
    metric: '260 × 195 × 42 mm',
    imperial: '10.24 × 7.68 × 1.65 in',
    weight: '780 grams',
    substrate: '2.5mm Archival Holland Binder Board',
    relief: '0.85mm Micro-Etched Deep Cavity',
    description: 'Precision laser-scored rigid casket with magnetic stealth closure and hand-wrapped 350 GSM handmade textured stock.',
  },
  {
    id: 'folio',
    name: 'Tri-Fold Banquet Folio',
    sub: 'Die 108-A • Precision Creased',
    svg: '/floema/wireframes/bike-station.svg',
    img: '/floema/images/c1c668b1eb6e6648bcd52b9202a3ea0f91f7bc64-3400x2120.jpg',
    metric: '210 × 150 × 18 mm',
    imperial: '8.27 × 5.91 × 0.71 in',
    weight: '320 grams',
    substrate: 'Hand-Loomed Banarasi Raw Silk & Cotton Rag',
    relief: '0.60mm Dual-Foil Blind Deboss',
    description: 'Triple flap architectural reveal with custom inner RSVP pocket and gilded ribbon pull mechanism.',
  },
  {
    id: 'deckle',
    name: 'Water-Torn Deckle Slate',
    sub: 'Mould 04 • Organic Fibers',
    svg: '/floema/wireframes/chair.svg',
    img: '/floema/images/25df657b91976f95bd5e0c6e2f0f3445175e09fc-3400x2120.png',
    metric: '180 × 130 × 1.8 mm',
    imperial: '7.09 × 5.12 × 0.07 in',
    weight: '110 grams',
    substrate: '650 GSM 100% Cotton Rag Pulp',
    relief: '0.90mm Hot Foil Impression',
    description: 'Submerged-water torn feathered contours with 24K hand-burnished edge leaf and micro-calligraphy ink well.',
  },
  {
    id: 'seal',
    name: 'Beeswax Seal Intaglio Matrix',
    sub: 'Die 88-Z • Solid Brass Core',
    svg: '/floema/wireframes/waterfountain.svg',
    img: '/floema/images/5d7a10dea3ce01853711d82742b7921140d35884-14167x8833.jpg',
    metric: '32 × 32 × 3.5 mm',
    imperial: '1.26 × 1.26 × 0.14 in',
    weight: '18 grams',
    substrate: 'Bohemian Beeswax with Metallic Bronze Dust',
    relief: '1.20mm Mirror Intaglio Stamping',
    description: 'Deep relief ancestral monogram stamp applied at 115°C with anti-shatter resin flexibility.',
  },
];

export const FloemaArchitecturalSection: React.FC<FloemaArchitecturalSectionProps> = ({
  onOpenCustomizer,
}) => {
  const [selectedBlueprint, setSelectedBlueprint] = useState(BLUEPRINTS[0]);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [foilType, setFoilType] = useState('24K Royal Gold');

  return (
    <section className="relative py-28 md:py-36 bg-[#F5F1E9] text-[#1F1B19] border-t border-[#B49A68]/20 overflow-hidden">
      {/* Floema Architectural Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="/floema/images/70e411b4618e84a57d0f87b713eb64bc25988f84-7084x4417.png"
          alt=""
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Monograph in Floema Editorial Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#B49A68]/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#783747] mb-3">
              <Ruler className="w-3.5 h-3.5 text-[#B49A68]" />
              <span>Floema-Inspired Architectural Suite</span>
            </div>
            <h2 className="font-zimula text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#1F1B19]">
              CAD Tolerances &amp; <span className="text-[#B49A68]">Structural Schematics</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#77716B] max-w-2xl font-sans">
              Every Angraity folio is mathematically drafted with millimeter precision before
              laser-guided brass die milling and master hand-creasing.
            </p>
          </div>

          {/* Unit Toggle & Atelier Badge */}
          <div className="flex items-center gap-4">
            <div className="inline-flex rounded-full border border-[#B49A68]/40 bg-white p-1 text-xs font-mono">
              <button
                onClick={() => setUnit('metric')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  unit === 'metric'
                    ? 'bg-[#B49A68] text-white shadow-sm font-bold'
                    : 'text-[#77716B] hover:text-[#1F1B19]'
                }`}
              >
                Metric (mm)
              </button>
              <button
                onClick={() => setUnit('imperial')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  unit === 'imperial'
                    ? 'bg-[#B49A68] text-white shadow-sm font-bold'
                    : 'text-[#77716B] hover:text-[#1F1B19]'
                }`}
              >
                Imperial (in)
              </button>
            </div>

            <button
              onClick={onOpenCustomizer}
              className="px-5 py-2.5 rounded-full border border-[#B49A68] bg-[#B49A68]/10 hover:bg-[#B49A68] hover:text-white transition-all text-xs font-serif font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Launch Studio</span>
            </button>
          </div>
        </div>

        {/* Blueprint Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {BLUEPRINTS.map((bp) => (
            <button
              key={bp.id}
              onClick={() => setSelectedBlueprint(bp)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                selectedBlueprint.id === bp.id
                  ? 'border-[#B49A68] bg-white shadow-lg ring-1 ring-[#B49A68]/50'
                  : 'border-[#B49A68]/20 bg-[#EAE2D5]/40 hover:bg-white hover:border-[#B49A68]/50'
              }`}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B49A68] block">
                {bp.sub}
              </span>
              <span className="font-serif text-sm sm:text-base font-bold text-[#1F1B19] block mt-1 leading-snug">
                {bp.name}
              </span>
            </button>
          ))}
        </div>

        {/* Master Showcase: Blueprint SVG + High-Res Texture + CAD Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Technical Vector Drawing */}
          <div className="lg:col-span-7 rounded-3xl border border-[#B49A68]/30 bg-white p-6 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <img
                src={selectedBlueprint.img}
                alt=""
                className="w-full h-full object-cover filter blur-[2px]"
              />
            </div>

            {/* Header info */}
            <div className="relative z-10 flex items-center justify-between pb-6 border-b border-[#B49A68]/15">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#783747] font-bold">
                  Technical Elevation Drawing
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1F1B19] mt-0.5">
                  {selectedBlueprint.name}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F1E9] border border-[#B49A68]/30 text-[10px] font-mono text-[#77716B]">
                <Cpu className="w-3 h-3 text-[#B49A68]" />
                <span>CNC Die Precision</span>
              </div>
            </div>

            {/* Central SVG Schematic Canvas */}
            <div className="relative z-10 my-8 py-10 flex items-center justify-center bg-[#F5F1E9]/60 rounded-2xl border border-dashed border-[#B49A68]/40 min-h-[300px]">
              <div className="relative max-w-[80%] max-h-[260px] flex items-center justify-center">
                <img
                  src={selectedBlueprint.svg}
                  alt={selectedBlueprint.name}
                  className="w-full h-full object-contain filter drop-shadow-md text-[#1F1B19]"
                />
                <div className="absolute -bottom-4 right-0 px-2.5 py-1 rounded-md bg-[#211F20] text-white text-[10px] font-mono">
                  Scale 1:1 CAD
                </div>
              </div>
            </div>

            {/* Technical Narrative */}
            <div className="relative z-10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#77716B]">
              <p className="max-w-md leading-relaxed">
                {selectedBlueprint.description}
              </p>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[#1F1B19] font-bold">Die Cut Calibrated</span>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Material Specifier & 24K Foil Metallurgy */}
          <div className="lg:col-span-5 rounded-3xl border border-[#B49A68]/30 bg-[#EAE2D5]/70 p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B49A68] font-bold">
                  Material Metallurgy Matrix
                </span>
                <Maximize2 className="w-4 h-4 text-[#77716B]" />
              </div>

              {/* Master Photograph Preview */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-[#B49A68]/30 shadow-inner mb-6 group">
                <img
                  src={selectedBlueprint.img}
                  alt={selectedBlueprint.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                  <span>Archival Photography</span>
                  <span className="text-[#B49A68] font-bold">Floema Sanity 14K</span>
                </div>
              </div>

              {/* Specs Table */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-2 border-b border-[#B49A68]/20">
                  <span className="text-[#77716B]">Dimensions</span>
                  <span className="font-bold text-[#1F1B19]">
                    {unit === 'metric' ? selectedBlueprint.metric : selectedBlueprint.imperial}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#B49A68]/20">
                  <span className="text-[#77716B]">Dry Weight</span>
                  <span className="font-bold text-[#1F1B19]">{selectedBlueprint.weight}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#B49A68]/20">
                  <span className="text-[#77716B]">Substrate</span>
                  <span className="font-bold text-[#1F1B19] text-right max-w-[200px]">
                    {selectedBlueprint.substrate}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#B49A68]/20">
                  <span className="text-[#77716B]">Relief Impression</span>
                  <span className="font-bold text-[#783747]">{selectedBlueprint.relief}</span>
                </div>
              </div>

              {/* Interactive Hot-Foil Metallurgy Swatches */}
              <div className="mt-6 pt-4 border-t border-[#B49A68]/30">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#77716B] block mb-2.5">
                  Applied Foil Metallurgy
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  {[
                    { name: '24K Royal Gold', color: 'bg-gradient-to-r from-[#B49A68] to-[#e3cf8b]' },
                    { name: 'Rose Copper', color: 'bg-gradient-to-r from-[#d97706] to-[#fbbf24]' },
                    { name: 'Sovereign Silver', color: 'bg-gradient-to-r from-slate-300 to-slate-100' },
                  ].map((f) => (
                    <button
                      key={f.name}
                      onClick={() => setFoilType(f.name)}
                      className={`p-2 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                        foilType === f.name
                          ? 'border-[#B49A68] bg-white shadow-md'
                          : 'border-transparent bg-white/50 hover:bg-white'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full ${f.color} shadow-sm border border-black/10`}></div>
                      <span className="text-[10px] text-center leading-tight">{f.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Launch CTA */}
            <div className="mt-8 pt-4">
              <button
                onClick={onOpenCustomizer}
                className="w-full py-3.5 rounded-full bg-[#1F1B19] text-[#F5F1E9] font-serif text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#B49A68] hover:text-[#1F1B19] transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/10"
              >
                <Sparkles className="w-4 h-4 text-[#B49A68]" />
                <span>Configure This Dimension In Customiser</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
