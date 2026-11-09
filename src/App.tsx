import { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react";
import { SmoothScroll } from "./components/SmoothScroll";
import { LuxuryBackground3D } from "./components/LuxuryBackground3D";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ArchitecturalManifesto } from "./components/ArchitecturalManifesto";
import { SpyltCurvedDip } from "./components/SpyltCurvedDip";
import { InfiniteMarquee } from "./components/InfiniteMarquee";
import { CuratedShowcase } from "./components/CuratedShowcase";
import { GradientDivider } from "./components/GradientDivider";
import { ProductCarousel3D } from "./components/ProductCarousel3D";
import { FloemaCollectionsRail } from "./components/FloemaCollectionsRail";
import { ScrollControlled3DExperience } from "./components/ScrollControlled3DExperience";
import { Interactive3DStudio } from "./components/Interactive3DStudio";
import { CraftsmanshipAtelier } from "./components/CraftsmanshipAtelier";
import { StackedHeritageCards } from "./components/StackedHeritageCards";
import { CatalogExplorer } from "./components/CatalogExplorer";
import { SampleKitExperience } from "./components/SampleKitExperience";
import { TestimonialsRoyal } from "./components/TestimonialsRoyal";
import { StoreBoutiques } from "./components/StoreBoutiques";
import { Footer } from "./components/Footer";
import { SampleKitDrawer } from "./components/SampleKitDrawer";
import { FloemaBlueprintOverlay } from "./components/FloemaBlueprintOverlay";
import { ElasticDivider } from "./components/annnimate/ElasticDivider";
import { ProcessRail } from "./components/annnimate/ProcessRail";
import { SpyltScrollVideoSection } from "./components/SpyltScrollVideoSection";
import { FloemaArchitecturalSection } from "./components/FloemaArchitecturalSection";
import { InteractiveCardCustomizer } from "./components/InteractiveCardCustomizer";
import { ShopPage } from "./components/ShopPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { CheckoutPage } from "./components/CheckoutPage";
import { OrderTrackingPage } from "./components/OrderTrackingPage";
import { AdminDashboardPage } from "./components/AdminDashboardPage";
import { AboutPage } from "./components/AboutPage";
import { FAQPage } from "./components/FAQPage";
import { ContactPage } from "./components/ContactPage";
import { setSoundEnabled } from "./utils/soundEffects";
import type { Product } from "./data/mockProducts";

export function App() {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sampleKit, setSampleKit] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [currency, setCurrency] = useState<"INR" | "USD" | "GBP" | "AED">("INR");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");
  const [blueprintMode, setBlueprintMode] = useState(false);
  const [soundEnabled, setSoundEnabledState] = useState(true);

  // Synchronize hash with currentRoute for native browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setCurrentRoute(hash);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (route: string) => {
    window.location.hash = route === "home" ? "" : `#${route}`;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabledState(next);
    setSoundEnabled(next);
  };

  const handleAddToSampleKit = (product: Product | any) => {
    if (!sampleKit.some((item) => item.sku === product.sku)) {
      if (sampleKit.length >= 5) {
        alert("You have reached the maximum of 5 cards for your complimentary Touch & Feel Sample Kit.");
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

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    navigateTo("product-detail");
  };

  const handleOpenCustomizer = (product?: Product) => {
    if (product) setSelectedProduct(product);
    navigateTo("customizer");
  };

  const handleOrderSuccess = (newOrder: any) => {
    setOrders([newOrder, ...orders]);
  };

  return (
    <SmoothScroll>
      {/* Precision Luxury Custom Cursor */}
      <CustomCursor />

      {/* Fixed Viewport Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Floema Architectural CAD Blueprint HUD Overlay */}
      <FloemaBlueprintOverlay
        isActive={blueprintMode}
        onClose={() => setBlueprintMode(false)}
      />

      {/* 3D WebGL Golden Particle Background & Vanta Waves */}
      <LuxuryBackground3D />

      {/* Main Luxury Navigation Bar */}
      <Navbar
        sampleKitCount={sampleKit.length}
        onOpenSampleKit={() => setIsDrawerOpen(true)}
        currency={currency}
        onCurrencyChange={setCurrency}
        onNavigate={navigateTo}
        currentRoute={currentRoute}
        blueprintMode={blueprintMode}
        onToggleBlueprintMode={() => setBlueprintMode(!blueprintMode)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      <main className="relative z-10 min-h-screen">
        
        {/* ROUTE 1: Home Page (The 11 Master Cinematic Sections) */}
        {currentRoute === "home" && (
          <>
            {/* Section 01 & 02: Cinematic Opening & Multi-Layer Parallax Hero */}
            <Hero
              onExploreClick={() => navigateTo("shop")}
              onStudioClick={() => {
                const el = document.getElementById("studio-3d");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              onSampleBoxClick={() => setIsDrawerOpen(true)}
              onCustomizerClick={() => navigateTo("customizer")}
            />

            {/* Kinetic Reading Scrub & Architectural Manifesto */}
            <ArchitecturalManifesto />

            {/* Spylt Signature Organic Dipping Curve Transition */}
            <SpyltCurvedDip
              fillColor="#f5f1ea"
              bgColor="#faf8f5"
              direction="down"
              height={64}
              showCenterTag
              centerTagText="ANGRAITY ARCH // 01"
            />

            {/* Dual-Direction Infinite Marquee with Scroll Velocity Reactivity */}
            <InfiniteMarquee />

            {/* Spylt Inverse Organic Dipping Transition */}
            <SpyltCurvedDip
              fillColor="#faf8f5"
              bgColor="#f5f1ea"
              direction="up"
              height={64}
            />

            {/* Section 03 & 04: Pinned Horizontal Collection Journey (GSAP) */}
            <CuratedShowcase
              onSelectCategory={(tradition) => {
                setSelectedCategoryFilter(tradition);
                navigateTo("shop");
              }}
            />

            {/* Annnimate Elastic Guitar-String Physics Divider */}
            <ElasticDivider
              color="#B49A68"
              labelLeft="ANGRAITY GUILD // TACTILE STRING PHYSICS"
              labelRight="SWEEP CURSOR TO RING STRING"
            />

            {/* Section 05: Signature 3D Display Products with Explosive Click Reveal */}
            <ProductCarousel3D
              onAddToSampleKit={handleAddToSampleKit}
              currency={currency}
            />

            {/* Section 06: An Immersive Design Studio with Annnimate Process Rail */}
            <ProcessRail onOpenCustomizer={() => navigateTo("customizer")} />

            {/* Floema Architectural CAD Tolerances & Metallurgy Section */}
            <FloemaArchitecturalSection onOpenCustomizer={() => navigateTo("customizer")} />

            {/* Floema Architectural Exploded Specimen Explorer */}
            <FloemaCollectionsRail
              onSelectCategory={(tradition) => {
                setSelectedCategoryFilter(tradition);
                navigateTo("shop");
              }}
            />

            {/* Spylt Kinetic Video Scrubber & Artisan Craft Showcase */}
            <SpyltScrollVideoSection
              onCustomizeClick={() => navigateTo("customizer")}
            />

            {/* Section Divider */}
            <GradientDivider showSparkles />

            {/* Monumental NAMESAKE-Style Scroll-Controlled 3D Product Journey */}
            <ScrollControlled3DExperience
              onAddToSampleKit={handleAddToSampleKit}
              currency={currency}
            />

            {/* Section Divider */}
            <GradientDivider showSparkles />

            {/* Section 07: The Interactive 3D Card Studio (Foldable Jharokha Door Unboxer) */}
            <Interactive3DStudio onAddToSampleKit={handleAddToSampleKit} />

            {/* Section 07 Continued: Sovereign Materiality & Craft Atelier */}
            <CraftsmanshipAtelier />

            {/* Section 08: 4 Sovereign Epochs Pinned Heritage Cards Stack */}
            <StackedHeritageCards />

            {/* Section 09: Complete 4,000+ Filterable Catalog with Spotlight Cards */}
            <CatalogExplorer
              onAddToSampleKit={handleAddToSampleKit}
              currency={currency}
              selectedCategoryFilter={selectedCategoryFilter}
            />

            {/* Section 10: Touch & Feel Sample Kit Experience */}
            <SampleKitExperience
              onOpenDrawer={() => setIsDrawerOpen(true)}
              count={sampleKit.length}
            />

            {/* Section 10 Continued: Royal Client Testimonials */}
            <TestimonialsRoyal />

            {/* Flagship Experience Lounges & Boutiques */}
            <StoreBoutiques />

            {/* Spylt Deep Midnight Dipping Transition into Footer */}
            <SpyltCurvedDip
              fillColor="#111013"
              bgColor="#faf8f5"
              direction="down"
              height={76}
              showCenterTag
              centerTagText="ANGRAITY ARCH // FINALE"
            />
          </>
        )}

        {/* ROUTE 2: Shop All & Occasion Specific Pages */}
        {(currentRoute === "shop" ||
          currentRoute === "wedding" ||
          currentRoute === "save-the-date" ||
          currentRoute === "engagement" ||
          currentRoute === "rsvp" ||
          currentRoute === "thank-you" ||
          currentRoute === "birthday" ||
          currentRoute === "anniversary" ||
          currentRoute === "festival" ||
          currentRoute === "corporate" ||
          currentRoute === "personalised") && (
          <ShopPage
            initialOccasion={currentRoute === "shop" ? "all" : currentRoute}
            onSelectProduct={handleSelectProduct}
            onAddToSampleKit={handleAddToSampleKit}
            onOpenCustomizer={handleOpenCustomizer}
            currency={currency}
          />
        )}

        {/* ROUTE 3: Interactive Card Customiser */}
        {currentRoute === "customizer" && (
          <InteractiveCardCustomizer
            onClose={() => navigateTo("home")}
            onAddToSampleKit={handleAddToSampleKit}
          />
        )}

        {/* ROUTE 4: Product Detail Page */}
        {currentRoute === "product-detail" && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => navigateTo("shop")}
            onAddToSampleKit={handleAddToSampleKit}
            onOpenCustomizer={handleOpenCustomizer}
            currency={currency}
          />
        )}

        {/* ROUTE 5: Checkout (VIP Direct Dispatch - No Payment Gate) */}
        {currentRoute === "checkout" && (
          <CheckoutPage
            items={sampleKit}
            onBack={() => navigateTo("home")}
            onClearCart={handleClearSampleKit}
            onOrderSuccess={handleOrderSuccess}
            currency={currency}
          />
        )}

        {/* ROUTE 6: Order Production Lifecycle Tracking */}
        {currentRoute === "tracking" && (
          <OrderTrackingPage
            onBack={() => navigateTo("home")}
            recentOrders={orders}
          />
        )}

        {/* ROUTE 7: About Angraity */}
        {currentRoute === "about" && (
          <AboutPage
            onBack={() => navigateTo("home")}
            onExploreCatalog={() => navigateTo("shop")}
          />
        )}

        {/* ROUTE 8: FAQ */}
        {currentRoute === "faq" && (
          <FAQPage onBack={() => navigateTo("home")} />
        )}

        {/* ROUTE 9: Contact & VIP Concierge */}
        {currentRoute === "contact" && (
          <ContactPage onBack={() => navigateTo("home")} />
        )}

        {/* ROUTE 10: Admin Dashboard */}
        {currentRoute === "admin" && (
          <AdminDashboardPage
            onBack={() => navigateTo("home")}
            orders={orders}
          />
        )}

      </main>

      {/* Haute Footer */}
      <Footer />

      {/* Slide-over Sample Kit Drawer with Instant Checkout trigger */}
      <SampleKitDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        items={sampleKit}
        onRemoveItem={handleRemoveFromSampleKit}
        onClear={handleClearSampleKit}
        currency={currency}
        onProceedToCheckout={() => navigateTo("checkout")}
      />

      {/* Floating 24/7 VIP Bridal Concierge Badge */}
      <aside aria-label="VIP Bridal Concierge" className="fixed bottom-6 left-6 z-40">
        <a
          href="https://wa.me/919900033307?text=Hello%20Angraity,%20I%20would%20like%20to%20inquire%20about%20bespoke%20royal%20invitations"
          target="_blank"
          rel="noopener noreferrer"
          className="squeeze-btn group flex items-center gap-3 px-4 py-2.5 rounded-full border border-[#B49A68]/50 bg-white/95 text-[#1F1B19] shadow-2xl backdrop-blur-xl hover:border-[#B49A68] hover:shadow-[#B49A68]/20 transition-all"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
              <PhoneCall className="w-4 h-4" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border-2 border-white" />
          </div>
          <div className="text-left hidden sm:block">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#77716B] block leading-tight">
              Instant Atelier Assistance
            </span>
            <span className="font-serif text-xs font-bold text-[#B49A68] block leading-tight">
              VIP WhatsApp Concierge
            </span>
          </div>
        </a>
      </aside>
    </SmoothScroll>
  );
}

export default App;
