import { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, Eye, Layers, Compass, Scissors, Award } from "lucide-react";
import { playTactileClick, playPaperRustle } from "../../utils/soundEffects";

interface ProcessStep {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  spec: string;
  image: string;
  icon: any;
}

const STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "Curate Design",
    subtitle: "Select from 12 Distinct Occasion Suites",
    description: "Browse 4,000+ archival palace silhouettes, contemporary frosted acrylics, or bespoke farman scrolls. Filter by wedding, anniversary, or corporate gala.",
    spec: "CAD Silhouette Specification: 1:1 Scale",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
    icon: Compass,
  },
  {
    num: "02",
    title: "Personalise",
    subtitle: "Real-time Calligraphy & Sacred Shlokas",
    description: "Input family lineage, event timings, and auspicious mantras in our Interactive Card Customiser. Preview live font kerning and multi-lingual scripts.",
    spec: "Typography: Cinzel & Cormorant Garamond",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Choose Material",
    subtitle: "Sovereign 650 GSM Cotton & 24K Leaf",
    description: "Select between hand-milled Amalfi deckle-edge rag, Japanese pearlized stock, or raw Banarasi silk brocade, accented with hot-stamped 24K gold foil.",
    spec: "Stock: 650 GSM Cotton Rag • 180°C Hydraulic Die",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1000&q=80",
    icon: Layers,
  },
  {
    num: "04",
    title: "3D Preview",
    subtitle: "Virtual Unboxer & Light Angle Simulation",
    description: "Inspect every gatefold crease, metallic specular glint, and wax seal relief in our 360° interactive 3D digital studio before physical plate engraving.",
    spec: "Specular Reflection Engine: 60 FPS WebGL",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80",
    icon: Eye,
  },
  {
    num: "05",
    title: "Confirm Proof",
    subtitle: "High-Resolution Physical Sample Approval",
    description: "Receive your Touch & Feel Sample Kit at your doorstep or sign off on the 2400 DPI vector digital blueprint with our VIP Bridal Concierge.",
    spec: "Proof Certification: ISO 9001:2015 Approved",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80",
    icon: CheckCircle2,
  },
  {
    num: "06",
    title: "Receive Product",
    subtitle: "Hand-Assembled with Beeswax Monogram",
    description: "Each suite is individually inspected, tied with hand-spun gold zari cords, and sealed in temperature-controlled velvet trunks with white-glove courier.",
    spec: "Finishing: 100% French Organic Beeswax Seal",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    icon: Award,
  },
];

interface ProcessRailProps {
  onOpenCustomizer?: () => void;
}

export function ProcessRail({ onOpenCustomizer }: ProcessRailProps) {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index: number) => {
    playTactileClick();
    playPaperRustle();
    setActiveStep(index);
  };

  const current = STEPS[activeStep];
  const StepIcon = current.icon;

  return (
    <section id="process" className="relative py-28 bg-[#EAE2D5]/50 border-t border-[#B49A68]/30 overflow-hidden select-none">
      {/* Floema CAD Blueprint Reference Markers */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-6 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-[#77716B]">
        <span>+ ANGRAITY ATELIER METHODOLOGY // 06 PHASES</span>
        <span>ZERO TOLERANCE • BRASS DIE CASTING</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B49A68]/40 bg-white/90 shadow-sm mb-4">
              <Scissors className="w-3.5 h-3.5 text-[#B49A68]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#1F1B19] font-bold">
                From Concept to Sovereign Stationery
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1F1B19]">
              How Angraity <span className="text-gold-foil italic">Breathes Life</span> Into Paper
            </h2>
          </div>

          <p className="text-[#77716B] font-normal text-xs sm:text-sm max-w-md leading-relaxed md:text-right">
            Every bespoke invitation passes through six rigorous artisanal milestones before receiving the royal beeswax seal of approval.
          </p>
        </div>

        {/* Process Rail Horizontal Progress Bar */}
        <div className="relative mb-12">
          {/* Background Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#B49A68]/25 -translate-y-1/2 z-0" />
          
          {/* Active Highlight Line */}
          <div
            className="absolute top-1/2 left-0 h-[2.5px] bg-gradient-to-r from-[#B49A68] to-[#783747] -translate-y-1/2 transition-all duration-500 z-0"
            style={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
          />

          {/* Interactive Steps Badges */}
          <div className="relative z-10 flex items-center justify-between">
            {STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;
              return (
                <button
                  key={step.num}
                  onClick={() => handleStepClick(idx)}
                  className={`group relative flex flex-col items-center focus:outline-none transition-all duration-300 ${
                    isActive ? "scale-110" : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-bold border-2 transition-all shadow-md ${
                      isActive
                        ? "bg-[#1F1B19] text-[#B49A68] border-[#B49A68] shadow-[#B49A68]/30"
                        : isPast
                        ? "bg-[#B49A68] text-white border-[#B49A68]"
                        : "bg-white text-[#77716B] border-[#B49A68]/40 hover:border-[#B49A68]"
                    }`}
                  >
                    {step.num}
                  </div>
                  <span
                    className={`mt-2 text-[10px] sm:text-xs font-mono uppercase tracking-wider hidden md:block transition-colors ${
                      isActive ? "text-[#1F1B19] font-bold" : "text-[#77716B]"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Feature Presentation Display */}
        <div className="pearl-card rounded-3xl p-6 sm:p-10 bg-white border border-[#B49A68]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Step Editorial Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D5] text-[#783747] text-[10px] font-mono uppercase font-bold tracking-widest mb-4">
                <StepIcon className="w-3.5 h-3.5" />
                <span>Phase {current.num} • {current.title}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#1F1B19] mb-3">
                {current.subtitle}
              </h3>
              <p className="text-[#77716B] text-sm sm:text-base leading-relaxed mb-6">
                {current.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#B49A68]/25 flex flex-wrap items-center justify-between gap-4">
              <div className="font-mono text-xs text-[#1F1B19]">
                <span className="text-[#77716B] block text-[10px] uppercase">Technical Milestone</span>
                <strong className="text-[#B49A68] font-bold">{current.spec}</strong>
              </div>

              {onOpenCustomizer && (
                <button
                  onClick={() => {
                    playTactileClick();
                    onOpenCustomizer();
                  }}
                  className="squeeze-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1B19] text-[#F5F1E9] text-xs font-mono uppercase tracking-wider font-bold hover:bg-[#B49A68] hover:text-[#1F1B19] transition-all shadow-md"
                >
                  <span>Launch Customiser</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: High-Resolution Atelier Milestone Imagery */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-inner border border-[#B49A68]/30 group">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B19]/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-[10px] uppercase tracking-wider">
              <span>ANGRAITY ARCHIVES // ATELIER 04</span>
              <span>PHASE {current.num} APPROVED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
