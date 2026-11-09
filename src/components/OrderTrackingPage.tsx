import { useState } from "react";
import { Search, CheckCircle2, Clock } from "lucide-react";
import { playTactileClick } from "../utils/soundEffects";

interface TrackingProps {
  onBack: () => void;
  recentOrders?: any[];
}

const LIFECYCLE_STAGES = [
  { id: 1, title: "Order Received", desc: "Catalogued in Bangalore Atelier archives", time: "Day 1" },
  { id: 2, title: "Artwork Proof Generated", desc: "Digital 2400 DPI vector layout compiled", time: "Day 2" },
  { id: 3, title: "Proof Sent & Client Approval", desc: "Awaiting customer sign-off on typography", time: "Day 3" },
  { id: 4, title: "24K Foil & Laser Milling", desc: "180°C hydraulic brass die stamping in progress", time: "Day 4-5" },
  { id: 5, title: "Quality Inspection", desc: "Individual check of wax seal & deckle tolerances", time: "Day 6" },
  { id: 6, title: "White-Glove Dispatched", desc: "Hand-packed in velvet trunks for courier", time: "Day 7" },
  { id: 7, title: "Delivered", desc: "Safely received at client residence", time: "Final" },
];

export function OrderTrackingPage({ onBack, recentOrders = [] }: TrackingProps) {
  const [orderQuery, setOrderQuery] = useState(recentOrders[0]?.orderId || "ANG-889102");
  const [currentStage, setCurrentStage] = useState(4); // Default to stage 4 (24K Foil & Laser Milling)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    playTactileClick();
    // Simulate finding order
    if (orderQuery.includes("ANG")) {
      setCurrentStage(4);
    } else {
      setCurrentStage(2);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E9] pt-32 pb-24 px-4 sm:px-6 lg:px-8 select-none">
      
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-[#77716B] border-b border-[#B49A68]/25 pb-3">
        <button
          onClick={() => { playTactileClick(); onBack(); }}
          className="flex items-center gap-2 hover:text-[#1F1B19] transition-colors"
        >
          <span>← Back to Maison</span>
        </button>
        <span>ANGRAITY ATELIER DISPATCH SYSTEM // ISO 9001</span>
      </div>

      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B49A68]/40 bg-white/90 shadow-sm mb-4">
            <Clock className="w-3.5 h-3.5 text-[#B49A68]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#1F1B19] font-bold">
              Real-time Production Lifecycle
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1F1B19] mb-3">
            Track Your <span className="text-gold-foil italic">Bespoke Suite</span>
          </h1>
          <p className="text-[#77716B] text-xs sm:text-sm">
            Enter your Angraity Order ID to monitor paper milling, foil temperature calibration, and courier dispatch.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-md mx-auto mb-16 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#77716B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={orderQuery}
              onChange={(e) => setOrderQuery(e.target.value)}
              placeholder="e.g. ANG-889102"
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#B49A68]/40 bg-white font-mono text-xs text-[#1F1B19] focus:outline-none focus:border-[#B49A68] shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="squeeze-btn px-6 py-2.5 rounded-full bg-[#1F1B19] text-[#F5F1E9] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#B49A68] transition-colors shadow-md"
          >
            Track
          </button>
        </form>

        {/* Tracking Milestone Card */}
        <div className="pearl-card rounded-3xl p-6 sm:p-10 bg-white border border-[#B49A68]/35 shadow-2xl mb-12">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#B49A68]/25 mb-8 font-mono text-xs">
            <div>
              <span className="text-[#77716B] block text-[10px] uppercase">Active Suite Order</span>
              <strong className="text-sm font-bold text-[#1F1B19]">#{orderQuery}</strong>
            </div>
            <div>
              <span className="text-[#77716B] block text-[10px] uppercase">Current Atelier Status</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE2D5] text-[#783747] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#B49A68] animate-ping" />
                Phase {currentStage}: {LIFECYCLE_STAGES[currentStage - 1].title}
              </span>
            </div>
            <div>
              <span className="text-[#77716B] block text-[10px] uppercase">Destination</span>
              <span className="text-[#1F1B19] font-bold">White-Glove Domestic &amp; Global</span>
            </div>
          </div>

          {/* Vertical Timeline */}
          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#B49A68]/30">
            {LIFECYCLE_STAGES.map((stage) => {
              const isPast = stage.id < currentStage;
              const isCurrent = stage.id === currentStage;
              return (
                <div key={stage.id} className="relative flex items-start gap-4">
                  {/* Stage Dot Indicator */}
                  <div
                    className={`absolute -left-6 sm:-left-8 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isPast
                        ? "bg-[#B49A68] border-[#B49A68] text-white"
                        : isCurrent
                        ? "bg-[#1F1B19] border-[#B49A68] text-[#B49A68] shadow-md shadow-[#B49A68]/50"
                        : "bg-white border-gray-300 text-transparent"
                    }`}
                  >
                    {isPast && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-[#B49A68] animate-pulse" />}
                  </div>

                  {/* Stage Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`font-serif text-sm sm:text-base font-bold ${
                          isCurrent ? "text-[#1F1B19]" : isPast ? "text-[#77716B]" : "text-gray-400"
                        }`}
                      >
                        {stage.title}
                      </h4>
                      <span className="font-mono text-[10px] text-[#77716B]">{stage.time}</span>
                    </div>
                    <p className="text-xs font-mono text-[#77716B] mt-0.5">{stage.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
