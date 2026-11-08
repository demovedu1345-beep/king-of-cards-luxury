import { useState } from "react";
import { SmoothScroll } from "./components/SmoothScroll";
import { LuxuryBackground3D } from "./components/LuxuryBackground3D";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CuratedShowcase } from "./components/CuratedShowcase";
import { Interactive3DStudio } from "./components/Interactive3DStudio";
import { CraftsmanshipAtelier } from "./components/CraftsmanshipAtelier";
import { CatalogExplorer } from "./components/CatalogExplorer";
import { SampleKitExperience } from "./components/SampleKitExperience";
import { TestimonialsRoyal } from "./components/TestimonialsRoyal";
import { StoreBoutiques } from "./components/StoreBoutiques";
import { Footer } from "./components/Footer";
import { SampleKitDrawer } from "./components/SampleKitDrawer";

export function App() {
  const [sampleKit, setSampleKit] = useState<any[]>([]);
  const [currency, setCurrency] = useState<"INR" | "USD" | "GBP" | "AED">("INR");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");

  const handleAddToSampleKit = (product: any) => {
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
      {/* 3D WebGL Golden Particle Background */}
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
        {/* Flagship Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection("collections")}
          onStudioClick={() => scrollToSection("studio-3d")}
          onSampleBoxClick={() => scrollToSection("sample-box")}
        />

        {/* Curated Royal Collections Showcase */}
        <CuratedShowcase onSelectCategory={handleSelectCategoryFromShowcase} />

        {/* The Interactive 3D Card Studio */}
        <Interactive3DStudio onAddToSampleKit={handleAddToSampleKit} />

        {/* Sovereign Materiality & Craft Atelier */}
        <CraftsmanshipAtelier />

        {/* Complete 4,000+ Filterable Catalog */}
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
    </SmoothScroll>
  );
}

export default App;
