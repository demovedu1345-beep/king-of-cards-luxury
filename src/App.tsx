import { useState } from "react";
import { PhoneCall } from "lucide-react";
import { SmoothScroll } from "./components/SmoothScroll";
import { LuxuryBackground3D } from "./components/LuxuryBackground3D";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { InfiniteMarquee } from "./components/InfiniteMarquee";
import { CuratedShowcase } from "./components/CuratedShowcase";
import { GradientDivider } from "./components/GradientDivider";
import { ProductCarousel3D } from "./components/ProductCarousel3D";
import { Interactive3DStudio } from "./components/Interactive3DStudio";
import { CraftsmanshipAtelier } from "./components/CraftsmanshipAtelier";
import { StackedHeritageCards } from "./components/StackedHeritageCards";
import { CatalogExplorer } from "./components/CatalogExplorer";
import { SampleKitExperience } from "./components/SampleKitExperience";
import { TestimonialsRoyal } from "./components/TestimonialsRoyal";
import { StoreBoutiques } from "./components/StoreBoutiques";
import { Footer } from "./components/Footer";
import { SampleKitDrawer } from "./components/SampleKitDrawer";
import type { Product } from "./data/mockProducts";

export function App() {
  const [sampleKit, setSampleKit] = useState<any[]>([]);
  const [currency, setCurrency] = useState<"INR" | "USD" | "GBP" | "AED">("INR");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");

  const handleAddToSampleKit = (product: Product | any) => {
    // Avoid duplicate additions if already selected
    if (!sampleKit.some((item) => item.sku === product.sku)) {
      if (sampleKit.length >= 5) {
        alert("You have reached the maximum of 5 cards for your Touch & Feel Sample Kit.");
        return;
      }
      setSampleKit([...sampleKit, product]);
    }
  };

  const handleRemoveFromSampleKit = (id: string) => {
    setSampleKit(sampleKit.filter((item) => item.id !== id));
  };

  const handleClearSampleKit = () => {
    setSampleKit([]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCategoryFromShowcase = (tradition: string) => {
    setSelectedCategoryFilter(tradition);
    scrollToSection("catalog");
  };

  return (
    <SmoothScroll>
      {/* Precision Luxury Custom Cursor */}
      <CustomCursor />

      {/* Fixed Viewport Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* 3D WebGL Golden Particle Background & Vanta Waves */}
      <LuxuryBackground3D />

      {/* Main Luxury Navigation Bar */}
      <Navbar
        sampleKitCount={sampleKit.length}
        onOpenSampleKit={() => setIsDrawerOpen(true)}
        currency={currency}
        onCurrencyChange={setCurrency}
        onNavigate={scrollToSection}
      />

      <main className="relative z-10">
        {/* Flagship Hero Section with 3D Tilt Card & Conic Border */}
        <Hero
          onExploreClick={() => scrollToSection("collections")}
          onStudioClick={() => scrollToSection("studio-3d")}
          onSampleBoxClick={() => scrollToSection("sample-box")}
        />

        {/* Dual-Direction Haute Couture Infinite Marquee */}
        <InfiniteMarquee />

        {/* Curated Royal Collections Showcase (Pinned Horizontal GSAP Scroll) */}
        <CuratedShowcase onSelectCategory={handleSelectCategoryFromShowcase} />

        {/* Section Divider */}
        <GradientDivider showSparkles />

        {/* NEW: Movable 3D Perspective Display Product Section with High-Level Explosive Click Reveal */}
        <ProductCarousel3D
          onAddToSampleKit={handleAddToSampleKit}
          currency={currency}
        />

        {/* Section Divider */}
        <GradientDivider showSparkles />

        {/* The Interactive 3D Card Studio (Foldable Jharokha Door Unboxer) */}
        <Interactive3DStudio onAddToSampleKit={handleAddToSampleKit} />

        {/* Sovereign Materiality & Craft Atelier */}
        <CraftsmanshipAtelier />

        {/* 4 Sovereign Epochs Pinned Heritage Cards Stack */}
        <StackedHeritageCards />

        {/* Complete 4,000+ Filterable Catalog with Spotlight Cards */}
        <CatalogExplorer
          onAddToSampleKit={handleAddToSampleKit}
          currency={currency}
          selectedCategoryFilter={selectedCategoryFilter}
        />

        {/* Touch & Feel Sample Kit Experience */}
        <SampleKitExperience
          onOpenDrawer={() => setIsDrawerOpen(true)}
          count={sampleKit.length}
        />

        {/* Royal Client Testimonials */}
        <TestimonialsRoyal />

        {/* Flagship Experience Lounges & Boutiques */}
        <StoreBoutiques />
      </main>

      {/* Haute Footer */}
      <Footer />

      {/* Slide-over Sample Kit Drawer */}
      <SampleKitDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        items={sampleKit}
        onRemoveItem={handleRemoveFromSampleKit}
        onClear={handleClearSampleKit}
        currency={currency}
      />

      {/* Floating 24/7 VIP Bridal Concierge Badge */}
      <aside aria-label="VIP Bridal Concierge" className="fixed bottom-6 left-6 z-40">
        <a
          href="https://wa.me/919900033307?text=Hello%20King%20of%20Cards,%20I%20would%20like%20to%20inquire%20about%20bespoke%20royal%20invitations"
          target="_blank"
          rel="noopener noreferrer"
          className="squeeze-btn group flex items-center gap-3 px-4 py-2.5 rounded-full border border-gold-400/50 bg-white/95 text-charcoal-900 shadow-2xl backdrop-blur-xl hover:border-gold-500 hover:shadow-gold-500/20 transition-all"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
              <PhoneCall className="w-4 h-4" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border-2 border-white" />
          </div>
          <div className="text-left hidden sm:block">
            <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-500 block leading-tight">
              Instant Atelier Assistance
            </span>
            <span className="font-serif text-xs font-bold text-gold-900 block leading-tight">
              VIP WhatsApp Concierge
            </span>
          </div>
        </a>
      </aside>
    </SmoothScroll>
  );
}

export default App;
