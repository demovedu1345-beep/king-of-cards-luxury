import { Crown, Mail, Phone, MapPin, Download, ArrowRight, ShieldCheck, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#211F20] border-t border-[#B49A68]/40 pt-16 pb-12 text-[#DCD5CA] overflow-hidden select-none">
      
      {/* Spylt Organic Header Dip Transition */}
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-16 absolute top-0 left-0 right-0 pointer-events-none opacity-40 mix-blend-screen"
      />

      {/* Spylt Fluid Splash Background Video */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none opacity-20 overflow-hidden mix-blend-lighten">
        <video
          src="/videos/splash.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="w-full h-full object-contain"
        />
      </div>

      {/* Background radial gold glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-80 bg-[#B49A68]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Floema CAD Blueprint Reference */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-[#B49A68] border-b border-[#B49A68]/30 pb-3">
        <span>+ ANGRAITY SOVEREIGN ATELIER • EDITION: 2026</span>
        <span>BANGALORE • MUMBAI • DELHI • DUBAI • LONDON</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Spylt-Inspired Massive Monumental Footer Headline */}
        <div className="overflow-hidden py-10 text-center border-b border-[#B49A68]/40 mb-16">
          <h2 className="font-display text-5xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight text-[#F5F1E9] leading-none">
            #ANGRAITYLUXURY
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#B49A68] mt-3 tracking-widest uppercase font-semibold">
            ✦ Crafting India's Most Sacred Nuptial Memories Since 2002 ✦
          </p>
        </div>

        {/* Top Newsletter & Gazette Strip */}
        <div className="rounded-3xl p-8 sm:p-12 bg-[#1F1B19]/90 border border-[#B49A68]/40 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B49A68] font-bold block mb-1">
              The Sovereign Gazette • Complimentary Edition
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#F5F1E9]">
              Receive The 2026 Haute Wedding Trend Report
            </h3>
            <p className="text-xs sm:text-sm text-[#DCD5CA]/70 mt-1 max-w-xl">
              Curated by our master paper sommeliers: color palettes, auspicious muhurtham calendars, and invitation etiquette.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing to The Angraity Gazette.");
            }}
            className="flex w-full lg:w-auto items-center gap-3 max-w-md"
          >
            <div className="relative flex-grow">
              <input
                type="email"
                required
                placeholder="Enter your private email..."
                className="w-full bg-black/40 border border-[#B49A68]/40 rounded-full px-5 py-3.5 text-xs text-[#F5F1E9] placeholder-[#77716B] focus:outline-none focus:border-[#B49A68] shadow-inner font-mono"
              />
            </div>
            <button
              type="submit"
              className="shimmer-btn squeeze-btn px-7 py-3.5 rounded-full bg-[#B49A68] hover:bg-[#F5F1E9] text-[#1F1B19] font-bold text-xs uppercase tracking-wider flex items-center gap-2 flex-shrink-0 shadow-md transition-all"
            >
              <span>Join</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#B49A68]/40">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#B49A68]/40 flex items-center justify-center bg-[#EAE2D5] shadow-sm">
                <Crown className="w-5 h-5 text-[#B49A68]" />
              </div>
              <span className="font-serif tracking-[0.25em] text-xl font-bold uppercase text-[#1F1B19]">
                ANGRAITY
              </span>
            </div>
            <p className="text-xs text-[#77716B] font-normal leading-relaxed mb-6 max-w-sm">
              India’s premier wedding invitation and bespoke stationery atelier. Merging centuries-old architectural filigree with 24K hot-stamped gold foil and 650 GSM handmade cotton rag.
            </p>
            
            {/* Social Button Pills */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="squeeze-btn w-9 h-9 rounded-full border border-[#B49A68]/40 bg-white hover:bg-[#EAE2D5] text-[#1F1B19] flex items-center justify-center shadow-sm"
                title="Instagram"
              >
                <svg className="w-4 h-4 text-[#B49A68]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="squeeze-btn w-9 h-9 rounded-full border border-[#B49A68]/40 bg-white hover:bg-[#EAE2D5] text-[#1F1B19] flex items-center justify-center shadow-sm"
                title="YouTube"
              >
                <svg className="w-4 h-4 text-[#B49A68]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919900033307"
                target="_blank"
                rel="noopener noreferrer"
                className="squeeze-btn w-9 h-9 rounded-full border border-[#B49A68]/40 bg-white hover:bg-[#EAE2D5] text-[#1F1B19] flex items-center justify-center shadow-sm"
              >
                <Send className="w-4 h-4 text-[#B49A68]" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#77716B] font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified ISO 9001:2015 Artisan Guild Member</span>
            </div>
          </div>

          {/* Col 2: Occasions */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#1F1B19] uppercase tracking-wider mb-4 text-[#B49A68]">
              Occasions
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#wedding" className="text-[#77716B] hover:text-[#1F1B19] transition-colors">Wedding Invitations</a></li>
              <li><a href="#save-the-date" className="text-[#77716B] hover:text-[#1F1B19] transition-colors">Save the Date</a></li>
              <li><a href="#engagement" className="text-[#77716B] hover:text-[#1F1B19] transition-colors">Engagement Folios</a></li>
              <li><a href="#rsvp" className="text-[#77716B] hover:text-[#1F1B19] transition-colors">RSVP Cards</a></li>
              <li><a href="#birthday" className="text-[#77716B] hover:text-[#1F1B19] transition-colors">Birthday &amp; Jubilee</a></li>
              <li><a href="#corporate" className="text-[#77716B] hover:text-[#1F1B19] transition-colors">Corporate Conclave</a></li>
            </ul>
          </div>

          {/* Col 3: Silhouette Formats */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#1F1B19] uppercase tracking-wider mb-4 text-[#B49A68]">
              Silhouettes
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#shop" className="text-[#77716B] hover:text-[#1F1B19] transition-colors">Laser-Cut Jharokha Doors</a></li>
              <li><a href="#shop" className="text-[#77716B] hover:text-[#1F1B19] transition-colors">Royal Farman Velvet Scrolls</a></li>
              <li><a href="#shop" className="text-[#77716B] hover:text-[#1F1B19] transition-colors">Cast Frosted Acrylic Slates</a></li>
              <li><a href="#shop" className="text-[#77716B] hover:text-[#1F1B19] transition-colors">Padded Raw Silk Folders</a></li>
              <li><a href="#shop" className="text-[#77716B] hover:text-[#1F1B19] transition-colors">Rigid Keepsake Hampers</a></li>
              <li><a href="#customizer" className="text-[#783747] font-bold hover:underline">Interactive Card Customiser</a></li>
            </ul>
          </div>

          {/* Col 4: Concierge & Stores */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#1F1B19] uppercase tracking-wider mb-4 text-[#B49A68]">
              VIP Concierge
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B49A68]" />
                <span>+91 99000 33307</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B49A68]" />
                <span>concierge@angraity.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B49A68]" />
                <span>Bangalore • Mumbai • Delhi</span>
              </li>
              <li className="pt-2">
                <a
                  href="#customizer"
                  className="inline-flex items-center gap-1.5 text-[#B49A68] font-bold hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Design Customiser Studio</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#77716B]">
          <p>© 2026 Angraity Maison Ltd. All Sovereign Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[#1F1B19] cursor-pointer">About Maison</a>
            <a href="#faq" className="hover:text-[#1F1B19] cursor-pointer">Artisan FAQ</a>
            <a href="#contact" className="hover:text-[#1F1B19] cursor-pointer">Contact Concierge</a>
            <a href="#admin" className="hover:text-[#1F1B19] cursor-pointer">Admin Console</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
