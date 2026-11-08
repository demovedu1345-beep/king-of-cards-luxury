import { Crown, Mail, Phone, MapPin, Download, ArrowRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#f5f1ea] border-t border-gold-400/30 pt-20 pb-12 text-charcoal-700 overflow-hidden">
      
      {/* Background radial gold glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-gold-300/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & Gazette Strip */}
        <div className="pearl-card rounded-2xl p-8 sm:p-10 bg-white border border-gold-400/35 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-800 font-bold block mb-1">
              The Royal Gazette • Complimentary Edition
            </span>
            <h3 className="font-serif text-2xl font-extrabold text-charcoal-950">
              Receive The 2026 Haute Wedding Trend Report
            </h3>
            <p className="text-xs text-charcoal-600 mt-1 max-w-lg">
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
              className="bg-ivory-100 border border-gold-300 rounded-full px-5 py-3 text-xs text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:bg-white flex-grow w-full md:w-72 shadow-inner"
            />
            <button
              type="submit"
              className="squeeze-btn px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0 shadow-md shadow-gold-500/20"
            >
              <span>Join</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-gold-300/60">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-gold-500/40 flex items-center justify-center bg-gold-100 shadow-sm">
                <Crown className="w-4 h-4 text-gold-700" />
              </div>
              <span className="font-serif tracking-[0.2em] text-lg font-bold uppercase text-charcoal-950">
                King of Cards
              </span>
            </div>
            <p className="text-xs text-charcoal-600 font-normal leading-relaxed mb-6 max-w-sm">
              India’s premier wedding invitation maison. Crafting memories since 2002 with artisanal hand-pressed 24K gold foil, architectural laser-cut gates, royal velvet scrolls, and luxury keepsake boxes.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-charcoal-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified ISO 9001:2015 Artisan Guild Member</span>
            </div>
          </div>

          {/* Col 2: By Sacred Tradition */}
          <div>
            <h4 className="font-serif text-sm font-bold text-charcoal-950 uppercase tracking-wider mb-4 text-gold-900">
              By Tradition
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#catalog" className="text-charcoal-700 hover:text-gold-900 transition-colors">Hindu Wedding Cards</a></li>
              <li><a href="#catalog" className="text-charcoal-700 hover:text-gold-900 transition-colors">Muslim Nikah &amp; Farman</a></li>
              <li><a href="#catalog" className="text-charcoal-700 hover:text-gold-900 transition-colors">Sikh Anand Karaj</a></li>
              <li><a href="#catalog" className="text-charcoal-700 hover:text-gold-900 transition-colors">Christian Holy Matrimony</a></li>
              <li><a href="#catalog" className="text-charcoal-700 hover:text-gold-900 transition-colors">South Indian Muhurtham</a></li>
              <li><a href="#catalog" className="text-charcoal-700 hover:text-gold-900 transition-colors">Interfaith &amp; Contemporary</a></li>
            </ul>
          </div>

          {/* Col 3: Silhouette Formats */}
          <div>
            <h4 className="font-serif text-sm font-bold text-charcoal-950 uppercase tracking-wider mb-4 text-gold-900">
              Silhouettes
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#catalog" className="text-charcoal-700 hover:text-gold-900 transition-colors">Laser-Cut Jharokha Doors</a></li>
              <li><a href="#catalog" className="text-charcoal-700 hover:text-gold-900 transition-colors">Royal Farman Velvet Scrolls</a></li>
              <li><a href="#catalog" className="text-charcoal-700 hover:text-gold-900 transition-colors">Cast Frosted Acrylic Slates</a></li>
              <li><a href="#catalog" className="text-charcoal-700 hover:text-gold-900 transition-colors">Padded Raw Silk Folders</a></li>
              <li><a href="#catalog" className="text-charcoal-700 hover:text-gold-900 transition-colors">Rigid Mithai Keepsake Boxes</a></li>
              <li><a href="#catalog" className="text-charcoal-700 hover:text-gold-900 transition-colors">Living Wildflower Seed Cards</a></li>
            </ul>
          </div>

          {/* Col 4: Concierge & Stores */}
          <div>
            <h4 className="font-serif text-sm font-bold text-charcoal-950 uppercase tracking-wider mb-4 text-gold-900">
              VIP Concierge
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-700" />
                <span>+91 99000 33307</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-700" />
                <span>concierge@kingofcards.in</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-700" />
                <span>Bangalore • Mumbai • Delhi</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://kingofcards.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold-800 font-bold hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Digital Lookbook</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-500">
          <p>© 2026 King of Cards India Ltd. All Sovereign Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-charcoal-800 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-charcoal-800 cursor-pointer">Artisan Guarantees</span>
            <span className="hover:text-charcoal-800 cursor-pointer">Worldwide Courier Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
