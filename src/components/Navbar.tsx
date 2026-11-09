import { useState, useEffect } from "react";
import { Crown, Sparkles, ShoppingBag, PhoneCall, Globe, Menu, X } from "lucide-react";

interface NavbarProps {
  sampleKitCount: number;
  onOpenSampleKit: () => void;
  currency: "INR" | "USD" | "GBP" | "AED";
  onCurrencyChange: (c: "INR" | "USD" | "GBP" | "AED") => void;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({
  sampleKitCount,
  onOpenSampleKit,
  currency,
  onCurrencyChange,
  onNavigate,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "py-3 bg-[#faf8f5]/90 backdrop-blur-xl border-b border-gold-500/20 shadow-md shadow-gold-950/5"
            : "py-5 bg-[#faf8f5]/65 backdrop-blur-md border-b border-gold-500/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Royal Crest */}
          <button
            onClick={() => onNavigate("hero")}
            className="flex items-center gap-3.5 group text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center bg-gradient-to-br from-gold-100 via-white to-ivory-200 shadow-sm group-hover:border-gold-500 transition-colors">
              <Crown className="w-5 h-5 text-gold-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-1 rounded-full bg-gold-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="font-serif tracking-[0.2em] text-lg sm:text-xl font-bold uppercase text-gold-foil block leading-tight">
                King of Cards
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-charcoal-600 font-mono block">
                Haute Wedding Atelier • Est. 2002
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-semibold tracking-[0.16em] uppercase text-charcoal-800">
            <button
              onClick={() => onNavigate("collections")}
              className="hover:text-gold-700 transition-colors duration-200 py-1 relative group"
            >
              Collections
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-600 transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => onNavigate("movable-showcase")}
              className="hover:text-gold-700 transition-colors duration-200 py-1 relative group flex items-center gap-1.5 font-bold text-gold-900"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-600 animate-pulse" />
              3D Display
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-600 transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => onNavigate("studio-3d")}
              className="hover:text-gold-700 transition-colors duration-200 py-1 relative group"
            >
              3D Studio
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-600 transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => onNavigate("craft")}
              className="hover:text-gold-700 transition-colors duration-200 py-1 relative group"
            >
              The Craft
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-600 transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => onNavigate("catalog")}
              className="hover:text-gold-700 transition-colors duration-200 py-1 relative group"
            >
              All Invitations
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-600 transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => onNavigate("sample-box")}
              className="hover:text-gold-700 transition-colors duration-200 py-1 relative group"
            >
              Sample Box
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-600 transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => onNavigate("boutiques")}
              className="hover:text-gold-700 transition-colors duration-200 py-1 relative group"
            >
              Boutiques
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-600 transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          {/* Right Action Icons: Currency, WhatsApp VIP, and Sample Kit Drawer Trigger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Currency Switcher */}
            <div className="relative group hidden sm:flex items-center">
              <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider px-3 py-1.5 rounded-full border border-gold-400/30 bg-white/80 text-charcoal-800 hover:border-gold-500 cursor-pointer transition-colors shadow-sm">
                <Globe className="w-3 h-3 text-gold-600" />
                <span>{currency}</span>
              </div>
              <div className="absolute right-0 top-full pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-white border border-gold-400/30 rounded-xl p-1.5 shadow-xl flex flex-col gap-1 text-xs font-mono">
                  {(["INR", "USD", "GBP", "AED"] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => onCurrencyChange(c)}
                      className={`px-3 py-1 rounded text-left hover:bg-gold-50 transition-colors ${
                        currency === c ? "text-gold-700 font-bold bg-gold-100/60" : "text-charcoal-700"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* VIP WhatsApp Concierge button */}
            <a
              href="https://wa.me/919900033307?text=Hello%20King%20of%20Cards,%20I%20would%20like%20to%20inquire%20about%20bespoke%20wedding%20invitations"
              target="_blank"
              rel="noopener noreferrer"
              className="squeeze-btn hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide transition-colors shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>VIP Concierge</span>
            </a>

            {/* Sample Kit Bag Trigger Button */}
            <button
              id="navbar-sample-kit-btn"
              onClick={onOpenSampleKit}
              className="squeeze-btn relative flex items-center gap-2.5 px-4 py-2 rounded-full border border-gold-400/40 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-charcoal-950 font-bold text-xs tracking-wider uppercase shadow-md shadow-gold-500/15 hover:shadow-gold-500/30 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-charcoal-950" />
              <span className="hidden sm:inline">Sample Kit</span>
              {sampleKitCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-charcoal-950 text-gold-300 text-[11px] font-bold shadow-sm">
                  {sampleKitCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-gold-400/30 bg-white/80 text-charcoal-800 hover:text-gold-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 border-t border-gold-400/30 mt-3 px-6 py-6 flex flex-col gap-4 text-xs font-semibold tracking-wider uppercase text-charcoal-800 shadow-xl backdrop-blur-xl">
            <button
              onClick={() => { onNavigate("collections"); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-gold-700 transition-colors"
            >
              Curated Collections
            </button>
            <button
              onClick={() => { onNavigate("movable-showcase"); setMobileMenuOpen(false); }}
              className="text-left py-2 text-gold-900 font-bold flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-gold-600" />
              Interactive 3D Display
            </button>
            <button
              onClick={() => { onNavigate("studio-3d"); setMobileMenuOpen(false); }}
              className="text-left py-2 text-gold-700 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-gold-600" />
              Virtual Unboxer Studio
            </button>
            <button
              onClick={() => { onNavigate("craft"); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-gold-700 transition-colors"
            >
              Material &amp; Craftsmanship
            </button>
            <button
              onClick={() => { onNavigate("catalog"); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-gold-700 transition-colors"
            >
              All 4,000+ Invitations
            </button>
            <button
              onClick={() => { onNavigate("sample-box"); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-gold-700 transition-colors"
            >
              Order Sample Box
            </button>
            <button
              onClick={() => { onNavigate("boutiques"); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-gold-700 transition-colors"
            >
              Flagship Boutiques
            </button>
            <div className="pt-4 border-t border-gold-400/20 flex items-center justify-between">
              <span className="text-xs text-charcoal-600 font-mono">Currency</span>
              <div className="flex gap-2">
                {(["INR", "USD", "GBP", "AED"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => onCurrencyChange(c)}
                    className={`px-2.5 py-1 text-xs font-mono rounded ${
                      currency === c ? "bg-gold-500 text-charcoal-950 font-bold" : "text-charcoal-600"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
