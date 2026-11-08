import { MapPin, Phone, Calendar, Clock } from "lucide-react";

const BOUTIQUES = [
  {
    city: "Bangalore (Flagship)",
    address: "No. 18, Commercial Street & 4th Block Jayanagar",
    phone: "+91 99000 33307",
    hours: "10:30 AM – 8:30 PM (All 7 Days)",
    tag: "Historic Heritage Store",
  },
  {
    city: "Mumbai Atelier",
    address: "Swami Vivekananda Road, Santacruz West",
    phone: "+91 98200 44412",
    hours: "11:00 AM – 8:00 PM (Mon – Sat)",
    tag: "Bespoke Bridal Lounge",
  },
  {
    city: "Delhi / NCR",
    address: "D-Block, South Extension Part II",
    phone: "+91 98111 55589",
    hours: "11:00 AM – 8:00 PM (Tue – Sun)",
    tag: "Palace Collection Suite",
  },
  {
    city: "Global Video Concierge",
    address: "Private 1-on-1 Zoom Consultation",
    phone: "+91 99000 33307 (WhatsApp)",
    hours: "Timezone Matched (USA, UK, UAE, Canada)",
    tag: "For NRI & Global Couples",
  },
];

export function StoreBoutiques() {
  return (
    <section id="boutiques" className="relative py-28 overflow-hidden bg-obsidian-900 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-gold-950/30 backdrop-blur-md mb-4">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gold-300 font-semibold">
              Physical Experience Centres
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Visit Our <span className="text-gold-foil italic">Flagship Boutiques</span>
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
            Touch 4,000+ real samples, inspect physical wedding hampers, and consult with our master calligraphers at our experience lounges or via private international video consultation.
          </p>
        </div>

        {/* Boutiques Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOUTIQUES.map((b) => (
            <div
              key={b.city}
              className="glass-panel rounded-2xl p-6 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 bg-gold-950/60 px-2 py-0.5 rounded border border-gold-500/30 inline-block mb-3">
                  {b.tag}
                </span>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-300 transition-colors mb-2">
                  {b.city}
                </h3>

                <p className="text-xs text-zinc-300 font-light mb-4 leading-relaxed">
                  {b.address}
                </p>

                <div className="space-y-1.5 text-xs font-mono text-zinc-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    <span>{b.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span className="text-[11px]">{b.hours}</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919900033307?text=Hello%20King%20of%20Cards,%20I%20would%20like%20to%20book%20a%20private%20invitation%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="squeeze-btn w-full py-2.5 rounded-xl border border-gold-500/40 bg-gold-500/10 hover:bg-gold-500 text-gold-300 hover:text-obsidian-950 text-xs font-mono uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Private Lounge</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
