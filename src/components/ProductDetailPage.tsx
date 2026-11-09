import { useState } from "react";
import { Sparkles, ArrowLeft, Package, Check, ShieldCheck, Clock, Truck } from "lucide-react";
import type { Product } from "../data/mockProducts";
import { triggerFlyToCart } from "../utils/flyToCart";
import { playTactileClick, playPaperRustle } from "../utils/soundEffects";

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onAddToSampleKit: (product: Product) => void;
  onOpenCustomizer: (product: Product) => void;
  currency: "INR" | "USD" | "GBP" | "AED";
}

export function ProductDetailPage({
  product,
  onBack,
  onAddToSampleKit,
  onOpenCustomizer,
  currency,
}: ProductDetailPageProps) {
  const [activeImage, setActiveImage] = useState<"primary" | "secondary">("primary");
  const [selectedQuantity, setSelectedQuantity] = useState(100);
  const [addedToast, setAddedToast] = useState(false);

  const formatPrice = (priceINR: number) => {
    switch (currency) {
      case "USD":
        return `$${(priceINR / 83).toFixed(2)}`;
      case "GBP":
        return `£${(priceINR / 105).toFixed(2)}`;
      case "AED":
        return `د.إ${(priceINR / 22.6).toFixed(2)}`;
      case "INR":
      default:
        return `₹${priceINR}`;
    }
  };

  const handleAddSample = (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerFlyToCart(e.currentTarget, product.imageUrl, () => {
      onAddToSampleKit(product);
      setAddedToast(true);
      setTimeout(() => setAddedToast(false), 2400);
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F1E9] pt-32 pb-24 px-4 sm:px-6 lg:px-8 select-none">
      
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-[#77716B] border-b border-[#B49A68]/25 pb-3">
        <button
          onClick={() => { playTactileClick(); onBack(); }}
          className="flex items-center gap-2 hover:text-[#1F1B19] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Catalogue</span>
        </button>
        <span>ATELIER SPECIFICATION // SKU: {product.sku}</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Multi-Angle Imagery & Thumbnails */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-[#B49A68]/40 shadow-2xl">
            <img
              src={activeImage === "primary" ? product.imageUrl : product.secondaryImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-700"
            />
            
            {product.badge && (
              <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#B49A68]/40 text-xs font-mono uppercase tracking-wider text-[#1F1B19] font-bold shadow-md">
                {product.badge}
              </div>
            )}
          </div>

          {/* View Toggles */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => { playPaperRustle(); setActiveImage("primary"); }}
              className={`flex-1 p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                activeImage === "primary" ? "border-[#B49A68] bg-white shadow-md font-bold" : "border-gray-200 bg-white/60"
              }`}
            >
              <img src={product.imageUrl} alt="Front View" className="w-12 h-12 object-cover rounded-xl" />
              <div>
                <span className="text-xs font-mono uppercase text-[#1F1B19] block">Front Elevation</span>
                <span className="text-[10px] font-mono text-[#77716B]">24K Hot Stamped Foil</span>
              </div>
            </button>

            <button
              onClick={() => { playPaperRustle(); setActiveImage("secondary"); }}
              className={`flex-1 p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                activeImage === "secondary" ? "border-[#B49A68] bg-white shadow-md font-bold" : "border-gray-200 bg-white/60"
              }`}
            >
              <img src={product.secondaryImage} alt="Alternate View" className="w-12 h-12 object-cover rounded-xl" />
              <div>
                <span className="text-xs font-mono uppercase text-[#1F1B19] block">Inner Presentation</span>
                <span className="text-[10px] font-mono text-[#77716B]">Envelope &amp; Wax Seal</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Column: Specification & Purchase Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between pearl-card rounded-3xl p-8 bg-white border border-[#B49A68]/35 shadow-xl">
          <div>
            <div className="flex items-center justify-between text-xs font-mono uppercase text-[#77716B] mb-2">
              <span>{product.category}</span>
              <span className="text-[#B49A68] font-bold">{product.paperGsm}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1F1B19] mb-3 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-3 pb-6 border-b border-[#B49A68]/25 mb-6">
              <span className="font-serif text-3xl font-extrabold text-[#1F1B19]">
                {formatPrice(product.priceINR)}
              </span>
              <span className="text-xs font-mono text-[#77716B]">/ piece (Min. 50 cards)</span>
            </div>

            <p className="text-sm text-[#77716B] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Inclusions Matrix */}
            <div className="p-4 rounded-2xl bg-[#F5F1E9] border border-[#B49A68]/30 mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#77716B] block mb-2 font-bold">
                Suite Inclusions &amp; Architecture:
              </span>
              <ul className="space-y-1.5 text-xs font-mono text-[#1F1B19]">
                {product.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#B49A68]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="text-[10px] font-mono uppercase tracking-wider text-[#77716B] block mb-2">
                Order Quantity Tier:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[50, 100, 250, 500].map((qty) => (
                  <button
                    key={qty}
                    onClick={() => { playTactileClick(); setSelectedQuantity(qty); }}
                    className={`py-2 rounded-xl text-xs font-mono transition-all ${
                      selectedQuantity === qty
                        ? "bg-[#1F1B19] text-[#B49A68] font-bold shadow-md"
                        : "bg-[#F5F1E9] border border-gray-200 text-[#77716B]"
                    }`}
                  >
                    {qty} pcs
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-6 border-t border-[#B49A68]/25">
            <button
              onClick={() => {
                playTactileClick();
                onOpenCustomizer(product);
              }}
              className="squeeze-btn w-full py-4 rounded-full bg-[#1F1B19] text-[#F5F1E9] font-mono text-xs uppercase tracking-wider font-bold shadow-xl hover:bg-[#B49A68] hover:text-[#1F1B19] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#B49A68]" />
              <span>Launch Customiser for this Suite</span>
            </button>

            <button
              onClick={handleAddSample}
              className="squeeze-btn w-full py-3.5 rounded-full border-2 border-[#B49A68] bg-white text-[#1F1B19] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#EAE2D5] transition-all flex items-center justify-center gap-2"
            >
              <Package className="w-4 h-4 text-[#B49A68]" />
              <span>Add to Touch &amp; Feel Box</span>
            </button>

            {addedToast && (
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 text-center font-mono text-xs flex items-center justify-center gap-2">
                <Check className="w-3.5 h-3.5" />
                <span>Added to Touch &amp; Feel Sample Box</span>
              </div>
            )}
          </div>

          {/* Artisan Guarantees */}
          <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-[#77716B]">
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#B49A68]" />
              <span>24K Genuine Foil</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Clock className="w-4 h-4 text-[#B49A68]" />
              <span>7-Day Dispatch</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Truck className="w-4 h-4 text-[#B49A68]" />
              <span>Global Courier</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
