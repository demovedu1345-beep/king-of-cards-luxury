import { Crown, Mail, Phone, MapPin, Download, ArrowRight, ShieldCheck, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#f5f1ea] border-t border-gold-400/30 pt-20 pb-12 text-charcoal-700 overflow-hidden select-none">
      
      {/* Background radial gold glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-80 bg-gold-300/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Floema CAD Blueprint Reference */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-gold-800/60 border-b border-gold-300/40 pb-3">
        <span>+ MAISON FINALE • EDITION: 2026</span>
        <span>BANGALORE • MUMBAI • DELHI • DUBAI • LONDON</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Spylt-Inspired Massive Monumental Footer Headline */}
        <div className="overflow-hidden py-10 text-center border-b border-gold-300/60 mb-16">
          <h2 className="font-display text-5xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight text-gold-900/90 leading-none">
            #ROYALCELEBRATION
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-gold-800 mt-3 tracking-widest uppercase font-semibold">
            ✦ Crafting India's Most Sacred Nuptial Memories Since 2002 ✦
          </p>
        </div>

        {/* Top Newsletter & Gazette Strip */}
        <div className="pearl-card rounded-3xl p-8 sm:p-12 bg-white border border-gold-400/40 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-900 font-bold block mb-1">
              The Royal Gazette • Complimentary Edition
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-950">
              Receive The 2026 Haute Wedding Trend Report
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1 max-w-xl">
              Curated by our master paper sommeliers: color palettes, auspicious muhurtham calendars, and invitation etiquette.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing to The Royal Gazette.");
            }}
            className="flex w-full lg:w-auto items-center gap-3 max-w-md"
          >
            <div className="relative flex-grow">
              <input
                type="email"
                required
                placeholder="Enter your private email..."
                className="w-full bg-ivory-100 border border-gold-300 rounded-full px-5 py-3.5 text-xs text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:bg-white shadow-inner font-mono"
              />
            </div>
            <button
              type="submit"
              className="shimmer-btn squeeze-btn px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 flex-shrink-0 shadow-md shadow-gold-500/20"
            >
              <span>Join</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-gold-300/60">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center bg-gold-100 shadow-sm">
                <Crown className="w-5 h-5 text-gold-700" />
              </div>
              <span className="font-serif tracking-[0.2em] text-xl font-bold uppercase text-charcoal-950">
                King of Cards
              </span>
            </div>
            <p className="text-xs text-charcoal-600 font-normal leading-relaxed mb-6 max-w-sm">
              India’s premier wedding invitation maison. Crafting memories since 2002 with artisanal hand-pressed 24K gold foil, architectural laser-cut gates, royal velvet scrolls, and luxury keepsake boxes.
            </p>
            
            {/* Spylt-style Social Button Pills */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com/kingofcardsindia"
                target="_blank"
                rel="noopener noreferrer"
                className="squeeze-btn w-9 h-9 rounded-full border border-gold-300 bg-white hover:bg-gold-100 text-charcoal-800 flex items-center justify-center shadow-sm"
                title="Instagram"
              >
                <svg className="w-4 h-4 text-gold-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@kingofcards"
                target="_blank"
                rel="noopener noreferrer"
                className="squeeze-btn w-9 h-9 rounded-full border border-gold-300 bg-white hover:bg-gold-100 text-charcoal-800 flex items-center justify-center shadow-sm"
                title="YouTube"
              >
                <svg className="w-4 h-4 text-gold-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919900033307"
                target="_blank"
                rel="noopener noreferrer"
                className="squeeze-btn w-9 h-9 rounded-full border border-gold-300 bg-white hover:bg-gold-100 text-charcoal-800 flex items-center justify-center shadow-sm"
              >
                <Send className="w-4 h-4 text-gold-700" />
              </a>
            </div>

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
