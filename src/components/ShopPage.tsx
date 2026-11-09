import { useState, useMemo } from "react";
import { Search, Filter, Sparkles, Eye, Package, ArrowUpDown } from "lucide-react";
import { PRODUCTS, type Product, OCCASIONS, FORMATS } from "../data/mockProducts";
import { SpotlightCard } from "./SpotlightCard";
import { triggerFlyToCart } from "../utils/flyToCart";
import { playTactileClick, playPaperRustle } from "../utils/soundEffects";

interface ShopPageProps {
  initialOccasion?: string;
  onSelectProduct: (product: Product) => void;
  onAddToSampleKit: (product: Product) => void;
  onOpenCustomizer: (product?: Product) => void;
  currency: "INR" | "USD" | "GBP" | "AED";
}

export function ShopPage({
  initialOccasion = "all",
  onSelectProduct,
  onAddToSampleKit,
  onOpenCustomizer,
  currency,
}: ShopPageProps) {
  const [selectedOccasion, setSelectedOccasion] = useState(initialOccasion);
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

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

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesOccasion =
        selectedOccasion === "all" || p.occasion === selectedOccasion;
      const matchesFormat =
        selectedFormat === "All" || p.format === selectedFormat;
      const matchesSearch =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesOccasion && matchesFormat && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.priceINR - b.priceINR;
      if (sortBy === "price-desc") return b.priceINR - a.priceINR;
      return 0;
    });
  }, [selectedOccasion, selectedFormat, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#F5F1E9] pt-32 pb-24 px-4 sm:px-6 lg:px-8 select-none">
      
      {/* Top Breadcrumb & CAD Reference */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-[#77716B] border-b border-[#B49A68]/25 pb-3">
        <span>ANGRAITY HAUTE CATALOGUE // FULL SUITE ARCHIVES</span>
        <span>{filteredProducts.length} DESIGNS AVAILABLE • 100% HANDCRAFTED</span>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B49A68]/40 bg-white/90 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B49A68]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#1F1B19] font-bold">
              The Sovereign Collection
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-[#1F1B19] tracking-tight mb-4">
            Immersive Card <span className="text-gold-foil italic">Archives</span>
          </h1>
          <p className="text-[#77716B] text-sm sm:text-base leading-relaxed">
            From regal laser-cut jharokha doors to contemporary frosted acrylics and banarasi silk boxes. Filter by occasion or customise your own suite.
          </p>
        </div>

        {/* Occasion Navigation Rail */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-[#B49A68]/30">
          {OCCASIONS.map((occ) => {
            const isSelected = selectedOccasion === occ.id;
            return (
              <button
                key={occ.id}
                onClick={() => {
                  playTactileClick();
                  playPaperRustle();
                  setSelectedOccasion(occ.id);
                }}
                className={`squeeze-btn flex-shrink-0 px-4 py-2 rounded-full border text-xs font-mono uppercase tracking-wider transition-all ${
                  isSelected
                    ? "bg-[#1F1B19] text-[#B49A68] border-[#B49A68] font-bold shadow-md shadow-[#B49A68]/15"
                    : "bg-white/80 text-[#77716B] border-gray-200 hover:border-[#B49A68]/50"
                }`}
              >
                {occ.name}
              </button>
            );
          })}
        </div>

        {/* Filter Bar: Search, Formats & Sorting */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#B49A68]/30 shadow-md mb-12">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#77716B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, motif, or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#F5F1E9]/40 border border-[#B49A68]/30 text-xs font-mono text-[#1F1B19] focus:outline-none focus:border-[#B49A68]"
            />
          </div>

          {/* Format & Sort Dropdowns */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 text-xs font-mono text-[#77716B]">
              <Filter className="w-3.5 h-3.5 text-[#B49A68]" />
              <select
                value={selectedFormat}
                onChange={(e) => { playTactileClick(); setSelectedFormat(e.target.value); }}
                className="px-3 py-1.5 rounded-xl border border-[#B49A68]/30 bg-white text-[#1F1B19] text-xs font-mono focus:outline-none"
              >
                {FORMATS.map((f) => (
                  <option key={f} value={f}>{f === "All" ? "All Formats" : f}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#77716B]">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#B49A68]" />
              <select
                value={sortBy}
                onChange={(e) => { playTactileClick(); setSortBy(e.target.value as any); }}
                className="px-3 py-1.5 rounded-xl border border-[#B49A68]/30 bg-white text-[#1F1B19] text-xs font-mono focus:outline-none"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

        </div>

        {/* Product Cards Grid with Spotlight Cards */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <SpotlightCard
                key={product.id}
                spotlightColor="rgba(180, 154, 104, 0.16)"
                className="rounded-3xl p-6 bg-white border border-[#B49A68]/35 shadow-xl flex flex-col justify-between group hover:border-[#B49A68] transition-all duration-300"
              >
                <div>
                  {/* Product Card Image Container with secondary image crossfade on hover */}
                  <div
                    onClick={() => { playTactileClick(); onSelectProduct(product); }}
                    className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 cursor-pointer bg-[#F5F1E9] border border-[#B49A68]/20"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                      src={product.secondaryImage}
                      alt={`${product.name} alternate view`}
                      className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#B49A68]/40 text-[9px] font-mono uppercase tracking-wider text-[#1F1B19] font-bold shadow-sm">
                        {product.badge}
                      </div>
                    )}

                    {/* Quick View Pill */}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#1F1B19]/90 text-[#F5F1E9] text-[10px] font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3 h-3 text-[#B49A68]" />
                      <span>Inspect 3D</span>
                    </div>
                  </div>

                  {/* Metadata & Title */}
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#77716B] mb-1">
                    <span>SKU: {product.sku}</span>
                    <span className="text-[#B49A68] font-bold">{product.paperGsm}</span>
                  </div>

                  <h3
                    onClick={() => { playTactileClick(); onSelectProduct(product); }}
                    className="font-serif text-lg font-bold text-[#1F1B19] hover:text-[#B49A68] cursor-pointer transition-colors leading-snug mb-2"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#77716B] line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                {/* Bottom Price & Actions */}
                <div className="pt-4 border-t border-[#B49A68]/25 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#77716B] uppercase block">Starting at</span>
                    <span className="font-serif text-lg font-extrabold text-[#1F1B19]">
                      {formatPrice(product.priceINR)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        playTactileClick();
                        onOpenCustomizer(product);
                      }}
                      className="squeeze-btn px-3 py-2 rounded-xl border border-[#B49A68]/40 bg-[#EAE2D5] text-[#1F1B19] text-[10px] font-mono uppercase tracking-wider font-bold hover:bg-[#B49A68] transition-colors"
                      title="Customise Names & Text"
                    >
                      Customise
                    </button>

                    <button
                      onClick={(e) => {
                        triggerFlyToCart(e.currentTarget, product.imageUrl, () => {
                          onAddToSampleKit(product);
                        });
                      }}
                      className="squeeze-btn px-3.5 py-2 rounded-xl bg-[#1F1B19] text-[#F5F1E9] text-[10px] font-mono uppercase tracking-wider font-bold hover:bg-[#B49A68] hover:text-[#1F1B19] transition-all flex items-center gap-1.5 shadow-md"
                    >
                      <Package className="w-3.5 h-3.5 text-[#B49A68]" />
                      <span>Sample</span>
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-[#B49A68]/30 p-12">
            <p className="font-serif text-xl text-[#1F1B19] mb-2">No invitations found for this selection.</p>
            <p className="text-xs font-mono text-[#77716B] mb-6">Try resetting filters or search terms.</p>
            <button
              onClick={() => { setSelectedOccasion("all"); setSelectedFormat("All"); setSearchQuery(""); }}
              className="px-6 py-2.5 rounded-full bg-[#1F1B19] text-[#F5F1E9] font-mono text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
