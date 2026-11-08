import { Crown, Mail, Phone, MapPin, Download, ArrowRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#020203] border-t border-gold-500/20 pt-20 pb-12 text-zinc-400 overflow-hidden">
      
      {/* Background radial gold glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & Gazette Strip */}
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-gold-500/25 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-400 block mb-1">
              The Royal Gazette • Complimentary Edition
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              Receive The 2026 Haute Wedding Trend Report
            </h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-lg">
              Curated by our master paper sommeliers: color palettes, auspicious muhurtham calendars, and invitation etiquette.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing to The Royal Gazette.");
            }}
            className="flex w-full md:w-auto items-center gap-2 max-w-md"
          >
            <input
              type="email"
              required
              placeholder="Enter your private email..."
              className="bg-obsidian-950 border border-zinc-800 rounded-full px-5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400 flex-grow w-full md:w-72"
            />
            <button
              type="submit"
              className="squeeze-btn px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Join</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-zinc-900">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-gold-400/40 flex items-center justify-center bg-gold-500/10">
                <Crown className="w-4 h-4 text-gold-400" />
              </div>
              <span className="font-serif tracking-[0.2em] text-lg font-bold uppercase text-white">
                King of Cards
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6 max-w-sm">
              India’s premier wedding invitation maison. Crafting memories since 2002 with artisanal hand-pressed 24K gold foil, architectural laser-cut gates, royal velvet scrolls, and luxury keepsake boxes.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified ISO 9001:2015 Artisan Guild Member</span>
            </div>
          </div>

          {/* Col 2: By Sacred Tradition */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 text-gold-300">
              By Tradition
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#catalog" className="hover:text-gold-400 transition-colors">Hindu Wedding Cards</a></li>
              <li><a href="#catalog" className="hover:text-gold-400 transition-colors">Muslim Nikah &amp; Farman</a></li>
              <li><a href="#catalog" className="hover:text-gold-400 transition-colors">Sikh Anand Karaj</a></li>
              <li><a href="#catalog" className="hover:text-gold-400 transition-colors">Christian Holy Matrimony</a></li>
              <li><a href="#catalog" className="hover:text-gold-400 transition-colors">South Indian Muhurtham</a></li>
              <li><a href="#catalog" className="hover:text-gold-400 transition-colors">Interfaith &amp; Contemporary</a></li>
            </ul>
          </div>

          {/* Col 3: Silhouette Formats */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 text-gold-300">
              Silhouettes
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#catalog" className="hover:text-gold-400 transition-colors">Laser-Cut Jharokha Doors</a></li>
              <li><a href="#catalog" className="hover:text-gold-400 transition-colors">Royal Farman Velvet Scrolls</a></li>
              <li><a href="#catalog" className="hover:text-gold-400 transition-colors">Cast Frosted Acrylic Slates</a></li>
              <li><a href="#catalog" className="hover:text-gold-400 transition-colors">Padded Raw Silk Folders</a></li>
              <li><a href="#catalog" className="hover:text-gold-400 transition-colors">Rigid Mithai Keepsake Boxes</a></li>
              <li><a href="#catalog" className="hover:text-gold-400 transition-colors">Living Wildflower Seed Cards</a></li>
            </ul>
          </div>

          {/* Col 4: Concierge & Stores */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 text-gold-300">
              VIP Concierge
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>+91 99000 33307</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400" />
                <span>concierge@kingofcards.in</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>Bangalore • Mumbai • Delhi</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://kingofcards.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold-400 hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Digital Lookbook</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 King of Cards India Ltd. All Sovereign Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-zinc-300 cursor-pointer">Artisan Guarantees</span>
            <span className="hover:text-zinc-300 cursor-pointer">Worldwide Courier Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
