import { useState } from "react";
import { Sparkles, Check, PhoneCall, ArrowLeft, ShieldCheck, Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { playTactileClick, playCartChime } from "../utils/soundEffects";

interface CheckoutPageProps {
  items: any[];
  onBack: () => void;
  onClearCart: () => void;
  onOrderSuccess: (order: any) => void;
  currency: "INR" | "USD" | "GBP" | "AED";
}

export function CheckoutPage({
  items,
  onBack,
  onClearCart,
  onOrderSuccess,
}: CheckoutPageProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [confirmedOrder, setConfirmedOrder] = useState<any | null>(null);

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert("Please provide your name and phone number for the VIP Atelier Concierge.");
      return;
    }

    playCartChime();
    confetti({
      particleCount: 110,
      spread: 90,
      origin: { y: 0.5 },
      colors: ["#B49A68", "#783747", "#EAE2D5", "#ffffff"],
    });

    const orderId = `ANG-${Date.now().toString().slice(-6)}`;
    const newOrder = {
      orderId,
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      customer: { fullName, email, phone, address, city },
      eventDate,
      specialNotes,
      items: items.length > 0 ? items : [{ name: "The Imperial Peacock Jharokha Bespoke Suite", sku: "ANG-WED-001" }],
      status: "Awaiting Artwork / Proof",
    };

    setConfirmedOrder(newOrder);
    onOrderSuccess(newOrder);
    onClearCart();
  };

  return (
    <div className="min-h-screen bg-[#F5F1E9] pt-32 pb-24 px-4 sm:px-6 lg:px-8 select-none">
      
      {/* Top Header */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-[#77716B] border-b border-[#B49A68]/25 pb-3">
        <button
          onClick={() => { playTactileClick(); onBack(); }}
          className="flex items-center gap-2 hover:text-[#1F1B19] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Atelier</span>
        </button>
        <span>VIP CONCIERGE DIRECT DISPATCH // NO PAYMENT REQUIRED</span>
      </div>

      <div className="max-w-4xl mx-auto">
        {!confirmedOrder ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Form */}
            <div className="md:col-span-7 pearl-card rounded-3xl p-8 bg-white border border-[#B49A68]/35 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE2D5] text-[#783747] text-[10px] font-mono uppercase font-bold tracking-widest mb-4">
                <Heart className="w-3.5 h-3.5 text-[#783747]" />
                <span>White-Glove Atelier Booking</span>
              </div>

              <h1 className="font-serif text-3xl font-extrabold text-[#1F1B19] mb-2">
                Bespoke Order Confirmation
              </h1>
              <p className="text-xs text-[#77716B] leading-relaxed mb-6">
                Zero advance payment required. Our Master Calligrapher will prepare your physical proofs and coordinate directly via VIP WhatsApp Concierge.
              </p>

              <form onSubmit={handleSubmitBooking} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-[#77716B] uppercase mb-1">Your Full Name / Couple's Names *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meera & Aaryan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#77716B] uppercase mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99000 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#77716B] uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="concierge@luxury.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#77716B] uppercase mb-1">Delivery Address for Sample Box *</label>
                  <input
                    type="text"
                    required
                    placeholder="Penthouse / Bungalow, Street address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#77716B] uppercase mb-1">City &amp; Country</label>
                    <input
                      type="text"
                      placeholder="Bangalore, India"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#77716B] uppercase mb-1">Wedding / Event Date</label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#77716B] uppercase mb-1">Special Notes for the Master Calligrapher</label>
                  <textarea
                    rows={3}
                    placeholder="Custom family shlokas, crest monograms, specific 24K gold foil shade..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B49A68]/40 bg-[#F5F1E9]/40 text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
                  />
                </div>

                <button
                  type="submit"
                  className="squeeze-btn w-full py-4 rounded-full bg-[#1F1B19] text-[#F5F1E9] font-mono text-xs uppercase tracking-wider font-bold shadow-2xl hover:bg-[#B49A68] hover:text-[#1F1B19] transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <Sparkles className="w-4 h-4 text-[#B49A68]" />
                  <span>Confirm Dispatch &amp; Connect Concierge</span>
                </button>
              </form>
            </div>

            {/* Right Summary */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="pearl-card rounded-3xl p-6 bg-white border border-[#B49A68]/35 shadow-xl">
                <h3 className="font-serif text-lg font-bold text-[#1F1B19] mb-4">
                  Touch &amp; Feel Box Items ({items.length})
                </h3>

                {items.length > 0 ? (
                  <div className="space-y-3">
                    {items.map((it, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F5F1E9]/60 border border-gray-100">
                        {it.imageUrl && (
                          <img src={it.imageUrl} alt={it.name} className="w-12 h-12 object-cover rounded-lg" />
                        )}
                        <div>
                          <strong className="text-xs font-serif font-bold text-[#1F1B19] block truncate max-w-[200px]">
                            {it.name}
                          </strong>
                          <span className="text-[10px] font-mono text-[#77716B]">SKU: {it.sku || "ANG-BESPOKE"}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#F5F1E9] text-xs font-mono text-[#77716B]">
                    Complimentary Signature Sample Selection will be included.
                  </div>
                )}

                <div className="pt-4 mt-6 border-t border-[#B49A68]/20 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#77716B]">Sample Box &amp; Courier:</span>
                  <span className="text-[#1F1B19] font-bold">100% COMPLIMENTARY</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#EAE2D5] border border-[#B49A68]/30 flex items-center gap-3 font-mono text-xs text-[#1F1B19]">
                <ShieldCheck className="w-5 h-5 text-[#B49A68] flex-shrink-0" />
                <span>Angraity Artisan Guarantee: No charge until you physically hold your custom sample.</span>
              </div>
            </div>

          </div>
        ) : (
          /* Confirmation Receipt Card */
          <div className="pearl-card rounded-3xl p-8 sm:p-12 bg-white border border-[#B49A68]/40 shadow-2xl text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE2D5] text-[#783747] text-[10px] font-mono uppercase font-bold tracking-widest mb-3">
              <span>Order Certified: #{confirmedOrder.orderId}</span>
            </div>

            <h2 className="font-serif text-3xl font-extrabold text-[#1F1B19] mb-3">
              Welcome to the Angraity Family
            </h2>

            <p className="text-sm text-[#77716B] leading-relaxed mb-6">
              Your bespoke invitation request has been safely catalogued in our Bangalore atelier. Our senior bridal consultant is preparing your presentation box.
            </p>

            <div className="p-4 rounded-2xl bg-[#F5F1E9] border border-[#B49A68]/30 text-left font-mono text-xs space-y-2 mb-8">
              <div className="flex justify-between">
                <span className="text-[#77716B]">Client Name:</span>
                <strong className="text-[#1F1B19]">{confirmedOrder.customer.fullName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#77716B]">WhatsApp Contact:</span>
                <strong className="text-[#1F1B19]">{confirmedOrder.customer.phone}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#77716B]">Dispatch Status:</span>
                <strong className="text-[#B49A68] uppercase font-bold">Awaiting Proof Prep (Phase 01)</strong>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a
                href={`https://wa.me/919900033307?text=Hello%20Angraity,%20I%20have%20booked%20order%20%23${confirmedOrder.orderId}%20under%20${confirmedOrder.customer.fullName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="squeeze-btn w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-700 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-emerald-800 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Chat with Bridal Concierge</span>
              </a>

              <button
                onClick={onBack}
                className="squeeze-btn w-full sm:w-auto px-6 py-3.5 rounded-full border border-gray-300 text-[#1F1B19] font-mono text-xs uppercase tracking-wider font-bold hover:bg-gray-50 transition-colors"
              >
                Back to Maison
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
