import { useState } from "react";
import { PhoneCall, Mail, MapPin, ArrowLeft, Clock, Send, Check } from "lucide-react";
import { playTactileClick, playCartChime } from "../utils/soundEffects";

interface ContactProps {
  onBack: () => void;
}

export function ContactPage({ onBack }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playCartChime();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E9] pt-32 pb-24 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-[#77716B] border-b border-[#B49A68]/25 pb-3">
        <button
          onClick={() => { playTactileClick(); onBack(); }}
          className="flex items-center gap-2 hover:text-[#1F1B19] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Maison</span>
        </button>
        <span>ANGRAITY CONCIERGE // 24/7 PRIVATE BRIDAL DESK</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B49A68]/40 bg-white/90 shadow-sm mb-4">
            <PhoneCall className="w-3.5 h-3.5 text-[#B49A68]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#1F1B19] font-bold">
              Private Bridal Consultation
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1F1B19] mb-4">
            Connect With The <span className="text-gold-foil italic">Atelier</span>
          </h1>
          <p className="text-[#77716B] text-sm leading-relaxed">
            Schedule a private consultation at our Bangalore flagship lounge or connect directly with our master calligrapher via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Form */}
          <div className="md:col-span-7 pearl-card rounded-3xl p-8 bg-white border border-[#B49A68]/35 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-[#77716B] uppercase mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Meera Kapoor"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                  />
                </div>

                <div>
                  <label className="block text-[#77716B] uppercase mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 99000 00000"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                  />
                </div>

                <div>
                  <label className="block text-[#77716B] uppercase mb-1">Message or Nuptial Date</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your celebration date, guest count, and preferred silhouettes..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                  />
                </div>

                <button
                  type="submit"
                  className="squeeze-btn w-full py-4 rounded-full bg-[#1F1B19] text-[#F5F1E9] font-mono text-xs uppercase tracking-wider font-bold shadow-xl hover:bg-[#B49A68] hover:text-[#1F1B19] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#B49A68]" />
                  <span>Send Concierge Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1F1B19]">Thank You, {name}</h3>
                <p className="text-xs text-[#77716B]">Our senior bridal consultant will contact you via WhatsApp shortly.</p>
              </div>
            )}
          </div>

          {/* Contact Details */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="pearl-card rounded-3xl p-6 bg-white border border-[#B49A68]/30 shadow-lg space-y-4 font-mono text-xs">
              <h3 className="font-serif text-base font-bold text-[#1F1B19]">Direct Atelier Contacts</h3>
              
              <div className="flex items-center gap-3 text-[#1F1B19]">
                <PhoneCall className="w-4 h-4 text-[#B49A68]" />
                <span>+91 99000 33307</span>
              </div>
              <div className="flex items-center gap-3 text-[#1F1B19]">
                <Mail className="w-4 h-4 text-[#B49A68]" />
                <span>concierge@angraity.com</span>
              </div>
              <div className="flex items-start gap-3 text-[#1F1B19]">
                <MapPin className="w-4 h-4 text-[#B49A68] flex-shrink-0 mt-0.5" />
                <span>Angraity Sovereign Lounge, Palace Road, Bangalore 560001</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#EAE2D5] border border-[#B49A68]/30 font-mono text-xs text-[#1F1B19]">
              <div className="flex items-center gap-2 font-bold mb-1">
                <Clock className="w-3.5 h-3.5 text-[#B49A68]" />
                <span>Private Consultation Hours:</span>
              </div>
              <p className="text-[#77716B]">Monday – Saturday: 10:00 AM – 8:00 PM IST</p>
              <p className="text-[#77716B]">Sunday: By Prior Appointment Only</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
