import { ArrowLeft, Award } from "lucide-react";
import { playTactileClick } from "../utils/soundEffects";

interface AboutProps {
  onBack: () => void;
  onExploreCatalog: () => void;
}

export function AboutPage({ onBack, onExploreCatalog }: AboutProps) {
  return (
    <div className="min-h-screen bg-[#F5F1E9] pt-32 pb-24 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-[#77716B] border-b border-[#B49A68]/25 pb-3">
        <button
          onClick={() => { playTactileClick(); onBack(); }}
          className="flex items-center gap-2 hover:text-[#1F1B19] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Maison</span>
        </button>
        <span>ANGRAITY MONOGRAPH // EST. 2002</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B49A68]/40 bg-white/90 shadow-sm mb-4">
            <Award className="w-3.5 h-3.5 text-[#B49A68]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#1F1B19] font-bold">
              The Sovereign Heritage
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-[#1F1B19] mb-4">
            The Philosophy of <span className="text-gold-foil italic">Angraity</span>
          </h1>
          <p className="text-[#77716B] text-sm sm:text-base leading-relaxed">
            Founded with a singular conviction: that a nuptial invitation is not ephemeral stationery, but the sacred architectural portal to life's greatest epoch.
          </p>
        </div>

        {/* Story Section */}
        <div className="pearl-card rounded-3xl p-8 sm:p-12 bg-white border border-[#B49A68]/35 shadow-xl mb-12 space-y-6 text-[#1F1B19] leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-[#1F1B19]">
            Reclaiming The Ancient Art of Royal Proclamations
          </h2>
          <p className="text-sm font-normal text-[#77716B]">
            In an era of disposable digital messaging, Angraity stands as a sanctuary for tangible, tactile permanence. Headquartered in Bangalore with ateliers serving Mumbai, Delhi, Dubai, and London, we merge centuries-old Rajputana and Mughal architectural motifs with contemporary European precision.
          </p>
          <p className="text-sm font-normal text-[#77716B]">
            Every sheet of 650 GSM cotton rag is milled exclusively from reclaimed textile remnants, dried under the sun, and hand-torn to produce deckle borders that are never identical. When our 180°C hydraulic heated brass dies press 24-karat gold foil into this fibrous surface, the result is an everlasting impression of devotion.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100 font-mono text-center">
            <div>
              <span className="font-serif text-3xl font-extrabold text-[#B49A68] block">4,000+</span>
              <span className="text-[10px] text-[#77716B] uppercase">Bespoke Silhouettes</span>
            </div>
            <div>
              <span className="font-serif text-3xl font-extrabold text-[#B49A68] block">24 Years</span>
              <span className="text-[10px] text-[#77716B] uppercase">Artisanal Mastery</span>
            </div>
            <div>
              <span className="font-serif text-3xl font-extrabold text-[#B49A68] block">48 Nations</span>
              <span className="text-[10px] text-[#77716B] uppercase">Dispatched Globally</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => { playTactileClick(); onExploreCatalog(); }}
            className="squeeze-btn px-8 py-4 rounded-full bg-[#1F1B19] text-[#F5F1E9] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#B49A68] hover:text-[#1F1B19] transition-all shadow-xl"
          >
            Explore the 2026 Sovereign Collection
          </button>
        </div>
      </div>
    </div>
  );
}
