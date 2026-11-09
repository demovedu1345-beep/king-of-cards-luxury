import { useState, useEffect } from "react";
import { Crown, Sparkles, ShoppingBag, PhoneCall, Globe, Menu, X, Compass, Volume2, VolumeX, Clock } from "lucide-react";
import { playTactileClick } from "../utils/soundEffects";

interface NavbarProps {
  sampleKitCount: number;
  onOpenSampleKit: () => void;
  currency: "INR" | "USD" | "GBP" | "AED";
  onCurrencyChange: (c: "INR" | "USD" | "GBP" | "AED") => void;
  onNavigate: (route: string) => void;
  currentRoute?: string;
  blueprintMode?: boolean;
  onToggleBlueprintMode?: () => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
}

export function Navbar({
  sampleKitCount,
  onOpenSampleKit,
  currency,
  onCurrencyChange,
  onNavigate,
  blueprintMode = false,
  onToggleBlueprintMode,
  soundEnabled = true,
  onToggleSound,
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

  const handleNavClick = (route: string) => {
    playTactileClick();
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "py-3 bg-[#F5F1E9]/90 backdrop-blur-xl border-b border-[#B49A68]/20 shadow-md shadow-[#1F1B19]/5"
            : "py-5 bg-[#F5F1E9]/75 backdrop-blur-md border-b border-[#B49A68]/15"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Royal Crest: ANGRAITY */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3.5 group text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-full border border-[#B49A68]/50 flex items-center justify-center bg-gradient-to-br from-[#EAE2D5] via-white to-[#F5F1E9] shadow-sm group-hover:border-[#B49A68] transition-colors">
              <Crown className="w-5 h-5 text-[#B49A68] group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-1 rounded-full bg-[#B49A68]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="font-serif tracking-[0.25em] text-lg sm:text-xl font-bold uppercase text-gold-foil block leading-tight">
                ANGRAITY
              </span>
              <span className="text-[9px] tracking-[0.28em] uppercase text-[#77716B] font-mono block">
                Haute Stationery Atelier • Est. 2002
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1F1B19]">
            
            {/* Shop All Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleNavClick("shop")}
                className="hover:text-[#B49A68] transition-colors duration-200 py-1 relative flex items-center gap-1"
              >
                <span>Collections</span>
                <span className="text-[8px]">▾</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B49A68] transition-all duration-300 group-hover:w-full" />
              </button>

              <div className="absolute left-0 top-full pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white border border-[#B49A68]/30 rounded-2xl p-3 shadow-2xl w-60 grid grid-cols-1 gap-1 text-[11px] font-mono">
                  <button onClick={() => handleNavClick("wedding")} className="px-3 py-1.5 text-left rounded-lg hover:bg-[#F5F1E9] text-[#1F1B19] transition-colors">Wedding Invitations</button>
                  <button onClick={() => handleNavClick("save-the-date")} className="px-3 py-1.5 text-left rounded-lg hover:bg-[#F5F1E9] text-[#1F1B19] transition-colors">Save the Date</button>
                  <button onClick={() => handleNavClick("engagement")} className="px-3 py-1.5 text-left rounded-lg hover:bg-[#F5F1E9] text-[#1F1B19] transition-colors">Engagement Folios</button>
                  <button onClick={() => handleNavClick("rsvp")} className="px-3 py-1.5 text-left rounded-lg hover:bg-[#F5F1E9] text-[#1F1B19] transition-colors">RSVP Cards</button>
                  <button onClick={() => handleNavClick("birthday")} className="px-3 py-1.5 text-left rounded-lg hover:bg-[#F5F1E9] text-[#1F1B19] transition-colors">Birthday &amp; Jubilee</button>
                  <button onClick={() => handleNavClick("corporate")} className="px-3 py-1.5 text-left rounded-lg hover:bg-[#F5F1E9] text-[#1F1B19] transition-colors">Corporate Conclave</button>
                  <button onClick={() => handleNavClick("personalised")} className="px-3 py-1.5 text-left rounded-lg hover:bg-[#F5F1E9] text-[#1F1B19] transition-colors">Personalised Wardrobe</button>
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <button onClick={() => handleNavClick("shop")} className="px-3 py-1.5 text-left rounded-lg text-[#B49A68] font-bold hover:bg-[#EAE2D5] block w-full">Shop All 4,000+ Cards →</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Customiser Trigger */}
            <button
              onClick={() => handleNavClick("customizer")}
              className="hover:text-[#B49A68] transition-colors duration-200 py-1 relative group flex items-center gap-1.5 font-bold text-[#783747]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B49A68] animate-pulse" />
              <span>Card Customiser</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B49A68] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* 3D Display & Studio */}
            <button
              onClick={() => handleNavClick("studio-3d")}
              className="hover:text-[#B49A68] transition-colors duration-200 py-1 relative group"
            >
              3D Studio
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B49A68] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* Production Lifecycle Tracking */}
            <button
              onClick={() => handleNavClick("tracking")}
              className="hover:text-[#B49A68] transition-colors duration-200 py-1 relative group flex items-center gap-1"
            >
              <Clock className="w-3 h-3 text-[#B49A68]" />
              <span>Order Tracking</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B49A68] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* About & Craft */}
            <button
              onClick={() => handleNavClick("about")}
              className="hover:text-[#B49A68] transition-colors duration-200 py-1 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B49A68] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* FAQ */}
            <button
              onClick={() => handleNavClick("faq")}
              className="hover:text-[#B49A68] transition-colors duration-200 py-1 relative group"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B49A68] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick("contact")}
              className="hover:text-[#B49A68] transition-colors duration-200 py-1 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B49A68] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* Admin Console shortcut */}
            <button
              onClick={() => handleNavClick("admin")}
              className="hover:text-[#B49A68] transition-colors duration-200 py-1 relative group text-[#77716B]"
              title="Atelier Admin Console"
            >
              Admin
            </button>
          </nav>

          {/* Right Action Icons: Floema CAD Toggle, Audio, Currency, WhatsApp VIP, and Sample Kit */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            
            {/* Floema CAD Blueprint Mode Toggle */}
            {onToggleBlueprintMode && (
              <button
                onClick={() => {
                  playTactileClick();
                  onToggleBlueprintMode();
                }}
                className={`squeeze-btn hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-[10px] font-mono uppercase tracking-wider transition-all shadow-sm ${
                  blueprintMode
                    ? "bg-[#B49A68] text-[#1F1B19] border-[#B49A68] font-bold shadow-[#B49A68]/25"
                    : "bg-white/80 text-[#1F1B19] border-[#B49A68]/40 hover:border-[#B49A68]"
                }`}
                title="Toggle Floema Architectural CAD Blueprint Mode"
              >
                <Compass className={`w-3 h-3 ${blueprintMode ? "text-[#1F1B19] animate-spin" : "text-[#B49A68]"}`} />
                <span className="hidden md:inline">CAD Mode</span>
              </button>
            )}

            {/* Tactile Audio FX Toggle */}
            {onToggleSound && (
              <button
                onClick={() => {
                  playTactileClick();
                  onToggleSound();
                }}
                className={`squeeze-btn hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-full border text-[10px] font-mono tracking-wider transition-all shadow-sm ${
                  soundEnabled
                    ? "bg-white/90 text-[#1F1B19] border-[#B49A68]/40 hover:border-[#B49A68]"
                    : "bg-gray-100 text-gray-400 border-gray-200"
                }`}
                title={soundEnabled ? "Audio Effects: ON" : "Audio Effects: OFF"}
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3 h-3 text-[#B49A68]" />
                    <span className="hidden lg:inline text-[9px] font-bold">FX ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3 h-3 text-gray-400" />
                    <span className="hidden lg:inline text-[9px]">FX OFF</span>
                  </>
                )}
              </button>
            )}

            {/* Currency Switcher */}
            <div className="relative group hidden sm:flex items-center">
              <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider px-2.5 py-1.5 rounded-full border border-[#B49A68]/40 bg-white/80 text-[#1F1B19] hover:border-[#B49A68] cursor-pointer transition-colors shadow-sm">
                <Globe className="w-3 h-3 text-[#B49A68]" />
                <span>{currency}</span>
              </div>
              <div className="absolute right-0 top-full pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-white border border-[#B49A68]/30 rounded-xl p-1.5 shadow-xl flex flex-col gap-1 text-xs font-mono">
                  {(["INR", "USD", "GBP", "AED"] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        playTactileClick();
                        onCurrencyChange(c);
                      }}
                      className={`px-3 py-1 rounded text-left hover:bg-[#EAE2D5] transition-colors ${
                        currency === c ? "text-[#B49A68] font-bold bg-[#F5F1E9]" : "text-[#77716B]"
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
              href="https://wa.me/919900033307?text=Hello%20Angraity,%20I%20would%20like%20to%20inquire%20about%20bespoke%20royal%20invitations"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playTactileClick}
              className="squeeze-btn hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-semibold tracking-wide transition-colors shadow-sm"
            >
              <PhoneCall className="w-3 h-3 text-emerald-600" />
              <span>VIP Concierge</span>
            </a>

            {/* Sample Kit Bag Trigger Button */}
            <button
              id="navbar-sample-kit-btn"
              onClick={() => {
                playTactileClick();
                onOpenSampleKit();
              }}
              className="squeeze-btn relative flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#B49A68]/40 bg-gradient-to-r from-[#B49A68] via-[#e3cf8b] to-[#B49A68] text-[#1F1B19] font-bold text-xs tracking-wider uppercase shadow-md shadow-[#B49A68]/20 hover:shadow-[#B49A68]/35 transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1F1B19]" />
              <span className="hidden sm:inline">Sample Kit</span>
              {sampleKitCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1F1B19] text-[#F5F1E9] text-[11px] font-bold shadow-sm">
                  {sampleKitCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => {
                playTactileClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="xl:hidden p-2 rounded-lg border border-[#B49A68]/30 bg-white/80 text-[#1F1B19] hover:text-[#B49A68] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/95 border-t border-[#B49A68]/30 mt-3 px-6 py-6 flex flex-col gap-3 text-xs font-semibold tracking-wider uppercase text-[#1F1B19] shadow-xl backdrop-blur-xl">
            <button onClick={() => handleNavClick("home")} className="text-left py-2 hover:text-[#B49A68]">Home</button>
            <button onClick={() => handleNavClick("shop")} className="text-left py-2 hover:text-[#B49A68]">All 4,000+ Cards</button>
            <button onClick={() => handleNavClick("customizer")} className="text-left py-2 text-[#783747] font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B49A68]" />
              Interactive Card Customiser
            </button>
            <button onClick={() => handleNavClick("wedding")} className="text-left py-2 text-[#77716B]">Wedding Invitations</button>
            <button onClick={() => handleNavClick("save-the-date")} className="text-left py-2 text-[#77716B]">Save the Date</button>
            <button onClick={() => handleNavClick("engagement")} className="text-left py-2 text-[#77716B]">Engagement Folios</button>
            <button onClick={() => handleNavClick("studio-3d")} className="text-left py-2 hover:text-[#B49A68]">Virtual 3D Studio</button>
            <button onClick={() => handleNavClick("tracking")} className="text-left py-2 hover:text-[#B49A68]">Order Tracking</button>
            <button onClick={() => handleNavClick("about")} className="text-left py-2 hover:text-[#B49A68]">About Angraity</button>
            <button onClick={() => handleNavClick("faq")} className="text-left py-2 hover:text-[#B49A68]">FAQ</button>
            <button onClick={() => handleNavClick("contact")} className="text-left py-2 hover:text-[#B49A68]">Contact Concierge</button>
            <button onClick={() => handleNavClick("admin")} className="text-left py-2 text-[#77716B]">Admin Console</button>
          </div>
        )}
      </header>
    </>
  );
}
