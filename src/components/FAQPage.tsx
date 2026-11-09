import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowLeft } from "lucide-react";
import { playTactileClick } from "../utils/soundEffects";

interface FAQProps {
  onBack: () => void;
}

const FAQS = [
  {
    q: "How does the Touch & Feel Sample Kit work?",
    a: "You can select up to 5 luxury invitations from our live catalogue to be assembled into a complimentary bespoke sample box. We ship physical specimens directly to your residence so you can feel the 650 GSM cotton paper weight, inspect the 24K hot foil glint, and test the beeswax seal before committing to full production."
  },
  {
    q: "Can we customize sacred shlokas, scripts, and multi-lingual text?",
    a: "Yes, completely. Our Interactive Card Customiser and master calligraphers support Sanskrit, Hindi, Tamil, Telugu, Urdu, Arabic, Punjabi (Gurmukhi), and royal English scripts. We provide complimentary digital vector proofs for your family elders to approve before plate engraving."
  },
  {
    q: "What is the standard production turnaround time?",
    a: "Digital proofs are prepared within 24–48 hours. Once client sign-off is confirmed, physical die casting, foil stamping, and laser assembly take 7 to 10 working days. White-glove domestic and global DHL Express delivery takes 2 to 4 days."
  },
  {
    q: "Are the metallic foils made from real gold?",
    a: "Yes. Our signature suites utilize genuine 24-karat gold leaf foil applied via 180°C hydraulic heated brass dies, ensuring a permanent, mirror-like specular glint that will never tarnish or flake over decades."
  },
  {
    q: "Do you accommodate international wedding delivery?",
    a: "We ship internationally to the UAE, UK, USA, Canada, Singapore, and Australia. All invitations are sealed in humidity-controlled velvet caskets to guarantee pristine arrival."
  }
];

export function FAQPage({ onBack }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    playTactileClick();
    setOpenIndex(openIndex === idx ? null : idx);
  };

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
        <span>ANGRAITY CLIENT CHARTER // ARTISANAL FAQ</span>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B49A68]/40 bg-white/90 shadow-sm mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#B49A68]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#1F1B19] font-bold">
              Frequently Inquired Queries
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1F1B19] mb-4">
            Answers From The <span className="text-gold-foil italic">Atelier</span>
          </h1>
          <p className="text-[#77716B] text-sm leading-relaxed">
            Everything you need to know about bespoke stationery, paper weights, foil calibration, and international dispatch.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="pearl-card rounded-2xl bg-white border border-[#B49A68]/30 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1F1B19]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-[#B49A68]/40 flex items-center justify-center text-[#B49A68] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#EAE2D5]" : "bg-white"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 font-mono text-xs text-[#77716B] leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
