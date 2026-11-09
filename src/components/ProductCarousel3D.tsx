import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Package,
  Layers,
  ArrowRight,
  Check,
  Eye,
  Sliders,
  X,
  PhoneCall,
  Crown
} from "lucide-react";
import confetti from "canvas-confetti";
import { PRODUCTS, type Product } from "../data/mockProducts";
import { SpotlightCard } from "./SpotlightCard";
import { triggerFlyToCart } from "../utils/flyToCart";
import { playTactileClick, playFoilGlint, playPaperRustle } from "../utils/soundEffects";

interface ProductCarousel3DProps {
  onAddToSampleKit: (product: Product) => void;
  currency: "INR" | "USD" | "GBP" | "AED";
}

export function ProductCarousel3D({
  onAddToSampleKit,
  currency,
}: ProductCarousel3DProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFinish, setActiveFinish] = useState<"24K Gold" | "Rose Gold" | "Antique Copper">("24K Gold");
  const [activePhotoView, setActivePhotoView] = useState<"primary" | "secondary">("primary");
  const [addedToast, setAddedToast] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimer = useRef<ReturnType<typeof setInterval> | null>(null);

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

  // Auto-play slow rotation when not hovered
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayTimer.current = setInterval(() => {
        if (!selectedProduct) {
          setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
        }
      }, 5000);
    };

    startAutoPlay();
    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [selectedProduct]);

  const handlePrev = () => {
    playPaperRustle();
    setActiveIndex((prev) => (prev === 0 ? PRODUCTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    playPaperRustle();
    setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 70) {
      handlePrev();
    } else if (dragOffset < -70) {
      handleNext();
    }
    setDragOffset(0);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 50) {
      handlePrev();
    } else if (dragOffset < -50) {
      handleNext();
    }
    setDragOffset(0);
  };

  // Explosive Click animation & modal trigger
  const handleCardClick = (product: Product, index: number) => {
    playTactileClick();
    if (index !== activeIndex) {
      playPaperRustle();
      setActiveIndex(index);
      return;
    }

    playFoilGlint();

    // Trigger golden celebratory confetti burst
    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.55 },
      colors: ["#be9932", "#e3cf8b", "#a37d25", "#ffffff", "#791828"],
      disableForReducedMotion: true,
    });

    setSelectedProduct(product);
    setActivePhotoView("primary");
  };

  const handleAddSample = (product: Product, el?: HTMLElement) => {
    if (el) {
      triggerFlyToCart(el, product.imageUrl, () => {
        onAddToSampleKit(product);
        setAddedToast(true);
        setTimeout(() => setAddedToast(false), 2400);
      });
    } else {
      onAddToSampleKit(product);
      setAddedToast(true);
      setTimeout(() => setAddedToast(false), 2400);
    }
  };

  return (
    <section
      id="movable-showcase"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-ivory-50 via-white to-ivory-100 border-t border-gold-400/25 select-none"
    >
      {/* Background ambient gold aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-gold-300/15 via-gold-200/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/40 bg-white/90 shadow-sm mb-4">
              <Crown className="w-3.5 h-3.5 text-gold-700" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-gold-900 font-bold">
                Movable 3D Perspective Atelier
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal-950">
              Interactive <span className="text-gold-foil italic">Haute Display Stage</span>
            </h2>
          </div>
          <div className="flex flex-col md:items-end">
            <p className="text-charcoal-700 font-normal text-xs sm:text-sm max-w-md leading-relaxed md:text-right">
              Drag horizontally or use directional controls to rotate through our signature creations.
              Click any card for an explosive 3D architectural breakdown.
            </p>
            {/* Quick Navigation Controls */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={handlePrev}
                aria-label="Previous card"
                className="squeeze-btn w-10 h-10 rounded-full border border-gold-400/50 bg-white hover:bg-gold-50 text-charcoal-900 flex items-center justify-center shadow-md hover:border-gold-500 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gold-700" />
              </button>
              <span className="font-mono text-xs font-bold text-gold-900 px-2">
                0{activeIndex + 1} / 0{PRODUCTS.length}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next card"
                className="squeeze-btn w-10 h-10 rounded-full border border-gold-400/50 bg-white hover:bg-gold-50 text-charcoal-900 flex items-center justify-center shadow-md hover:border-gold-500 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gold-700" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Perspective Carousel Stage */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative h-[560px] sm:h-[620px] flex items-center justify-center perspective-1200 cursor-grab active:cursor-grabbing"
        >
          {PRODUCTS.map((product, idx) => {
            // Calculate distance offset from activeIndex
            let offset = idx - activeIndex;
            // Wrap around circularly
            if (offset > PRODUCTS.length / 2) offset -= PRODUCTS.length;
            if (offset < -PRODUCTS.length / 2) offset += PRODUCTS.length;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2; // Show active + 2 adjacent on each side

            if (!isVisible) return null;

            // 3D positioning coordinates
            const translateX = offset * 280 + dragOffset;
            const translateZ = -Math.abs(offset) * 180;
            const rotateY = offset * -18;
            const scale = isCenter ? 1 : 0.84 - Math.abs(offset) * 0.08;
            const opacity = isCenter ? 1 : Math.max(0.35, 1 - Math.abs(offset) * 0.35);

            return (
              <div
                key={product.id}
                onClick={() => handleCardClick(product, idx)}
                style={{
                  transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex: 20 - Math.abs(offset),
                  transition: isDragging ? "none" : "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
                }}
                className={`absolute w-[300px] sm:w-[380px] h-[480px] sm:h-[530px] rounded-3xl overflow-hidden cursor-pointer ${
                  isCenter ? "conic-border shadow-2xl" : "shadow-lg hover:opacity-80"
                }`}
              >
                <SpotlightCard
                  spotlightColor={isCenter ? "rgba(190, 153, 50, 0.28)" : "rgba(190, 153, 50, 0.1)"}
                  className="w-full h-full pearl-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white border border-gold-400/40"
                >
                  {/* Card Top: SKU & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md bg-gold-100 text-gold-900 border border-gold-300">
                      {product.sku}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-charcoal-500 font-semibold">
                      {product.tradition} • {product.format}
                    </span>
                  </div>

                  {/* Card Visual Image with 3D Depth */}
                  <div className="relative my-4 h-[250px] sm:h-[280px] rounded-2xl overflow-hidden bg-ivory-100 border border-gold-300/60 shadow-inner group">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                    {/* Shimmer Tag in center */}
                    {product.badge && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-white/95 text-charcoal-900 border border-gold-400/50 shadow-md">
                        {product.badge}
                      </div>
                    )}

                    {/* Inspect Badge on Center Card */}
                    {isCenter && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gold-500 text-charcoal-950 text-[11px] font-mono uppercase tracking-wider font-bold shadow-lg flex items-center gap-1.5 animate-bounce">
                        <Sparkles className="w-3.5 h-3.5 text-charcoal-950" />
                        <span>Click for 3D Explosion</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: Title & Pricing */}
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-950 line-clamp-1 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    <div className="pt-3 border-t border-gold-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-charcoal-500 block">
                          Atelier Price
                        </span>
                        <span className="font-serif text-lg sm:text-xl font-bold text-gold-900">
                          {formatPrice(product.priceINR)}
                          <span className="text-[10px] font-mono text-charcoal-500 font-normal"> / piece</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-gold-800 uppercase">
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        {/* Carousel Progress Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {PRODUCTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === i
                  ? "w-8 h-2 bg-gradient-to-r from-gold-600 to-gold-400 shadow-sm"
                  : "w-2 h-2 bg-gold-300 hover:bg-gold-400"
              }`}
            />
          ))}
        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* HIGH-LEVEL EXPLOSIVE PRODUCT DETAIL STAGE MODAL            */}
      {/* ═══════════════════════════════════════════════════════════ */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/70 backdrop-blur-md">
          {/* Main Explosive Reveal Window */}
          <div className="card-expand-in relative w-full max-w-4xl max-h-[92vh] overflow-y-auto pearl-card rounded-3xl p-6 sm:p-10 bg-white border-2 border-gold-400 shadow-2xl">
            
            {/* Ambient gold glow in top right */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-400/15 rounded-full blur-3xl pointer-events-none" />

            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-gold-300/80 pb-5 mb-8">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-gold-900 bg-gold-100 font-bold px-2.5 py-0.5 rounded border border-gold-400/40">
                    {selectedProduct.sku}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold">
                    {selectedProduct.tradition} • {selectedProduct.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-charcoal-950 leading-tight">
                  {selectedProduct.name}
                </h3>
              </div>

              {/* Close Button with Spring Spin */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="squeeze-btn w-10 h-10 rounded-full border border-gold-300 bg-ivory-100 hover:bg-gold-100 text-charcoal-900 flex items-center justify-center font-mono transition-transform hover:rotate-90 shadow-sm flex-shrink-0"
              >
                <X className="w-5 h-5 text-charcoal-800" />
              </button>
            </div>

            {/* Modal Grid: Left Visual Stage / Right Specifications */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
              
              {/* Left Column: High-Res Card Image & Angle Switcher */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-gold-400/50 shadow-xl bg-ivory-100 group">
                  <img
                    src={
                      activePhotoView === "primary"
                        ? selectedProduct.imageUrl
                        : selectedProduct.secondaryImage
                    }
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Active Finish Watermark Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gold-400 text-[10px] font-mono uppercase tracking-wider text-gold-900 font-bold shadow-sm">
                    {activeFinish} Specular Finish
                  </div>
                </div>

                {/* Perspective View Angle Selector */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setActivePhotoView("primary")}
                    className={`squeeze-btn py-2 px-3 rounded-xl border text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      activePhotoView === "primary"
                        ? "border-gold-500 bg-gold-100 text-gold-950 font-bold shadow-sm"
                        : "border-gold-200 bg-white text-charcoal-700 hover:border-gold-300"
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Front Gate Face</span>
                  </button>
                  <button
                    onClick={() => setActivePhotoView("secondary")}
                    className={`squeeze-btn py-2 px-3 rounded-xl border text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      activePhotoView === "secondary"
                        ? "border-gold-500 bg-gold-100 text-gold-950 font-bold shadow-sm"
                        : "border-gold-200 bg-white text-charcoal-700 hover:border-gold-300"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>RSVP &amp; Wax Seal</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Customization & Technical Specifications */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                
                {/* Description */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gold-800 font-bold mb-2">
                    Architectural Narrative
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Hot-Stamped Foil Switcher in Modal */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gold-800 font-bold mb-3 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-gold-600" />
                    Select Metallic Foil Hue
                  </h4>
                  <div className="grid grid-cols-3 gap-2.5">
                    {(["24K Gold", "Rose Gold", "Antique Copper"] as const).map((finish) => (
                      <button
                        key={finish}
                        onClick={() => setActiveFinish(finish)}
                        className={`squeeze-btn py-2.5 px-2 rounded-xl border text-center transition-all ${
                          activeFinish === finish
                            ? "border-gold-600 bg-gold-100 font-bold text-gold-950 shadow-sm"
                            : "border-gold-200 bg-white text-charcoal-700 hover:border-gold-300"
                        }`}
                      >
                        <div
                          className="w-4 h-4 rounded-full mx-auto mb-1 border border-black/10"
                          style={{
                            backgroundColor:
                              finish === "24K Gold"
                                ? "#be9932"
                                : finish === "Rose Gold"
                                ? "#d99081"
                                : "#b86b43",
                          }}
                        />
                        <span className="text-[10px] font-mono uppercase tracking-wider block">
                          {finish}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specifications Matrix */}
                <div className="p-4 rounded-2xl bg-ivory-50 border border-gold-300/60 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-charcoal-700">
                    <span className="text-charcoal-500">Dimensions:</span>
                    <span className="font-semibold text-charcoal-950">{selectedProduct.dimensions}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-700">
                    <span className="text-charcoal-500">Paper Caliber:</span>
                    <span className="font-semibold text-charcoal-950">{selectedProduct.paperGsm}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-700">
                    <span className="text-charcoal-500">Master Finish:</span>
                    <span className="font-semibold text-gold-900">{selectedProduct.finish}</span>
                  </div>
                  <div className="pt-2 border-t border-gold-200">
                    <span className="text-charcoal-500 block mb-1">Suite Components:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProduct.includes.map((inc) => (
                        <span
                          key={inc}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-gold-300 text-charcoal-800"
                        >
                          ✓ {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Bottom Actions Bar */}
            <div className="pt-6 border-t border-gold-300/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-charcoal-500 block">
                  Wholesale Atelier Pricing
                </span>
                <span className="font-serif text-3xl font-extrabold text-gold-900">
                  {formatPrice(selectedProduct.priceINR)}
                  <span className="text-xs font-mono font-normal text-charcoal-500"> / bespoke suite</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/919900033307?text=Hello%20King%20of%20Cards,%20I%20am%20interested%20in%20customizing%20${encodeURIComponent(
                    selectedProduct.name
                  )}%20(SKU:%20${selectedProduct.sku})%20with%20${activeFinish}%20finish`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="squeeze-btn flex-1 sm:flex-initial px-5 py-3 rounded-full border border-gold-400 bg-white hover:bg-gold-50 text-gold-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm font-mono"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-gold-700" />
                  <span>WhatsApp Designer</span>
                </a>

                <button
                  onClick={(e) => handleAddSample(selectedProduct, e.currentTarget)}
                  className="shimmer-btn squeeze-btn flex-1 sm:flex-initial px-7 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40"
                >
                  {addedToast ? (
                    <>
                      <Check className="w-4 h-4 text-charcoal-950" />
                      <span>Added To Box!</span>
                    </>
                  ) : (
                    <>
                      <Package className="w-4 h-4 text-charcoal-950" />
                      <span>Add To Touch &amp; Feel Box</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
