import { Package, Truck, Sparkles, CheckCircle2 } from "lucide-react";

interface SampleBoxProps {
  onOpenDrawer: () => void;
  count: number;
}

export function SampleKitExperience({ onOpenDrawer, count }: SampleBoxProps) {
  return (
    <section id="sample-box" className="relative py-28 overflow-hidden bg-gradient-to-b from-obsidian-950 via-[#120a10] to-obsidian-950 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-gold-500/35 relative overflow-hidden bg-radial-vignette">
          
          {/* Ambient Corner Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-gold-950/30 backdrop-blur-md mb-6">
                <Package className="w-3.5 h-3.5 text-gold-400" />
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gold-300 font-semibold">
                  Touch &amp; Feel Experience Box
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                Never Commit Without <br />
                <span className="text-gold-foil italic">Feeling The Real Paper.</span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                Digital screens can never convey the heft of a 650 GSM cotton sheet, the crisp gleam of 24K hot-stamped foil, or the tactile pop of a wax-sealed envelope. Curate your customized sample pack to inspect in the sanctuary of your home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Choose any 3-5 real physical card models</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Includes paper swatch ring &amp; foil color chips</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Hand-poured botanical wax seal specimens</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-bold text-gold-300">100% Refundable on your final wedding order</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenDrawer}
                  className="squeeze-btn px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-obsidian-950 font-semibold text-xs tracking-wider uppercase flex items-center gap-3 shadow-xl shadow-gold-500/25"
                >
                  <Package className="w-4 h-4" />
                  <span>Review Sample Box ({count} Selected)</span>
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Truck className="w-4 h-4 text-gold-400" />
                  <span>Dispatched in 48 Hours via Express Courier</span>
                </div>
              </div>
            </div>

            {/* Right Visual Representation of the Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl glass-panel p-6 border border-gold-500/30 text-center shadow-2xl">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 border border-gold-400/40 flex items-center justify-center bg-gold-500/10 shadow-inner">
                  <Sparkles className="w-10 h-10 text-gold-400 animate-pulse" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  The Royal Curated Hamper Box
                </h3>
                <p className="text-xs text-zinc-400 font-mono mb-4">
                  Complimentary Express Shipping Across India &amp; Worldwide
                </p>

                <div className="p-4 rounded-xl bg-obsidian-950/80 border border-gold-500/20 text-left space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-zinc-300">
                    <span>Sample Cards Selected:</span>
                    <span className="text-gold-400 font-bold">{count} of 5</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Paper Swatch Swatchbook:</span>
                    <span className="text-emerald-400">Included Free</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Metallic Foil Swatches:</span>
                    <span className="text-emerald-400">Included Free</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Wax Seal Assortment:</span>
                    <span className="text-emerald-400">Included Free</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">Sample Kit Deposit:</span>
                  <span className="text-sm font-bold text-gold-300">₹499 (100% Credited)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
