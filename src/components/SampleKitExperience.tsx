import { Package, Truck, Sparkles, CheckCircle2 } from "lucide-react";

interface SampleBoxProps {
  onOpenDrawer: () => void;
  count: number;
}

export function SampleKitExperience({ onOpenDrawer, count }: SampleBoxProps) {
  return (
    <section id="sample-box" className="relative py-28 overflow-hidden bg-ivory-100 border-t border-gold-400/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pearl-card rounded-3xl p-8 sm:p-14 bg-white border border-gold-400/40 relative overflow-hidden shadow-2xl">
          
          {/* Ambient Corner Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-400/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/40 bg-gold-50 shadow-sm mb-6">
                <Package className="w-3.5 h-3.5 text-gold-700" />
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gold-900 font-bold">
                  Touch &amp; Feel Experience Box
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal-950 mb-6">
                Never Commit Without <br />
                <span className="text-gold-foil italic">Feeling The Real Paper.</span>
              </h2>

              <p className="text-charcoal-700 text-sm sm:text-base font-normal leading-relaxed mb-8">
                Digital screens can never convey the heft of a 650 GSM cotton sheet, the crisp gleam of 24K hot-stamped foil, or the tactile pop of a wax-sealed envelope. Curate your customized sample pack to inspect in the sanctuary of your home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-xs text-charcoal-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Choose any 3-5 real physical card models</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-charcoal-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Includes paper swatch ring &amp; foil color chips</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-charcoal-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Hand-poured botanical wax seal specimens</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-charcoal-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-bold text-gold-900">100% Refundable on your final wedding order</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenDrawer}
                  className="squeeze-btn px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-xs tracking-wider uppercase flex items-center gap-3 shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40"
                >
                  <Package className="w-4 h-4" />
                  <span>Review Sample Box ({count} Selected)</span>
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-charcoal-600 font-semibold">
                  <Truck className="w-4 h-4 text-gold-700" />
                  <span>Dispatched in 48 Hours via Express Courier</span>
                </div>
              </div>
            </div>

            {/* Right Visual Representation of the Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl pearl-card p-6 bg-ivory-50/70 border border-gold-400 text-center shadow-xl">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 border border-gold-400 flex items-center justify-center bg-gold-100 shadow-inner">
                  <Sparkles className="w-10 h-10 text-gold-700 animate-pulse" />
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal-950 mb-1">
                  The Royal Curated Hamper Box
                </h3>
                <p className="text-xs text-charcoal-600 font-mono mb-4">
                  Complimentary Express Shipping Across India &amp; Worldwide
                </p>

                <div className="p-4 rounded-xl bg-white border border-gold-300 text-left space-y-2 text-xs font-mono shadow-sm">
                  <div className="flex justify-between text-charcoal-800">
                    <span>Sample Cards Selected:</span>
                    <span className="text-gold-900 font-bold">{count} of 5</span>
                  </div>
                  <div className="flex justify-between text-charcoal-800">
                    <span>Paper Swatch Swatchbook:</span>
                    <span className="text-emerald-700 font-bold">Included Free</span>
                  </div>
                  <div className="flex justify-between text-charcoal-800">
                    <span>Metallic Foil Swatches:</span>
                    <span className="text-emerald-700 font-bold">Included Free</span>
                  </div>
                  <div className="flex justify-between text-charcoal-800">
                    <span>Wax Seal Assortment:</span>
                    <span className="text-emerald-700 font-bold">Included Free</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gold-300 flex items-center justify-between text-xs font-mono">
                  <span className="text-charcoal-600 font-semibold">Sample Kit Deposit:</span>
                  <span className="text-sm font-bold text-gold-900">₹499 (100% Credited)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
