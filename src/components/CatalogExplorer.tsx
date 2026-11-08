import { useState, useMemo } from "react";
import { Search, Filter, Sparkles, Check, Eye, Package, ArrowUpDown } from "lucide-react";
import { PRODUCTS, type Product, TRADITIONS, FORMATS } from "../data/mockProducts";
import { SpotlightCard } from "./SpotlightCard";

interface CatalogProps {
  onAddToSampleKit: (product: Product) => void;
  currency: "INR" | "USD" | "GBP" | "AED";
  selectedCategoryFilter: string;
}

export function CatalogExplorer({
  onAddToSampleKit,
  currency,
  selectedCategoryFilter,
}: CatalogProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTradition, setSelectedTradition] = useState<string>(selectedCategoryFilter || "All");
  const [selectedFormat, setSelectedFormat] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with prop when clicked from CuratedShowcase
  useMemo(() => {
    if (selectedCategoryFilter && selectedCategoryFilter !== "All") {
      setSelectedTradition(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  // Format Price by currency
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

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchTradition =
        selectedTradition === "All" || p.tradition === selectedTradition;

      const matchFormat =
        selectedFormat === "All" || p.format === selectedFormat;

      return matchSearch && matchTradition && matchFormat;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.priceINR - b.priceINR;
      if (sortBy === "price-desc") return b.priceINR - a.priceINR;
      return 0;
    });
  }, [searchTerm, selectedTradition, selectedFormat, sortBy]);

  const handleAdd = (p: Product) => {
    onAddToSampleKit(p);
    setToastMessage(`Added ${p.name} to Sample Kit!`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <section id="catalog" className="relative py-28 overflow-hidden bg-ivory-50 border-t border-gold-400/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/40 bg-white/80 shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gold-800 font-bold">
                Complete Invitation Portfolio
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal-950">
              Discover All <span className="text-gold-foil italic">4,000+ Masterpieces</span>
            </h2>
          </div>
          <p className="text-charcoal-700 font-normal text-sm max-w-sm">
            Filter by sacred tradition, silhouette format, or price tier. Every card is fully customizable with your family's personal shlokas and colors.
          </p>
        </div>

        {/* Filter & Search Matrix Toolbar */}
        <div className="pearl-card rounded-2xl p-6 bg-white border border-gold-400/35 mb-12 flex flex-col gap-6 shadow-md">
          
          {/* Search + Sort Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
              <input
                type="text"
                placeholder="Search by SKU (e.g. KNSR8811M), peacock, acrylic, scroll..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-ivory-100/70 border border-gold-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-charcoal-950 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:bg-white transition-all shadow-inner"
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <ArrowUpDown className="w-4 h-4 text-gold-700" />
              <span className="text-xs font-mono text-charcoal-600 uppercase font-semibold">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-gold-300 rounded-xl px-3 py-2 text-xs font-mono text-charcoal-900 font-semibold focus:outline-none focus:border-gold-500 cursor-pointer shadow-sm"
              >
                <option value="featured">Featured Atelier</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Traditions Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gold-200">
            <span className="text-xs font-mono uppercase tracking-wider text-charcoal-700 font-bold mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-gold-700" />
              Tradition:
            </span>
            {TRADITIONS.map((trad) => (
              <button
                key={trad}
                onClick={() => setSelectedTradition(trad)}
                className={`squeeze-btn px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedTradition === trad
                    ? "bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 font-bold shadow-md shadow-gold-500/20"
                    : "bg-ivory-100/70 border border-gold-200 text-charcoal-700 hover:text-charcoal-950 hover:border-gold-400"
                }`}
              >
                {trad}
              </button>
            ))}
          </div>

          {/* Formats Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-charcoal-700 font-bold mr-2">
              Silhouette:
            </span>
            {FORMATS.map((fmt) => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                className={`squeeze-btn px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  selectedFormat === fmt
                    ? "bg-gold-100 border border-gold-500 text-gold-950 font-bold"
                    : "bg-white border border-gold-200 text-charcoal-600 hover:text-charcoal-900"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 pearl-card rounded-2xl bg-white border border-gold-300">
            <p className="font-serif text-xl text-charcoal-700 mb-2">No invitations match your filters</p>
            <p className="text-xs text-charcoal-500 font-mono">Try clearing your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTradition("All");
                setSelectedFormat("All");
              }}
              className="mt-4 px-5 py-2 rounded-full border border-gold-500 text-gold-800 text-xs font-mono uppercase font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <SpotlightCard
                key={p.id}
                spotlightColor="rgba(190, 153, 50, 0.18)"
                className="pearl-card rounded-2xl overflow-hidden bg-white border border-gold-300/80 hover:border-gold-500 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                {/* Image Container with Hover zoom */}
                <div className="relative h-64 overflow-hidden bg-ivory-200">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* SKU Pill Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md border border-gold-400/40 bg-white/90 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-charcoal-900 font-bold shadow-sm">
                    {p.sku}
                  </div>

                  {p.badge && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md border border-gold-500/40 bg-gold-100 text-gold-900 text-[10px] font-mono tracking-wider uppercase font-bold shadow-sm">
                      {p.badge}
                    </div>
                  )}

                  {/* Quick Preview Hover Trigger */}
                  <button
                    onClick={() => setPreviewProduct(p)}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full border border-white/40 bg-white/90 hover:bg-gold-500 hover:text-charcoal-950 text-charcoal-900 text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all opacity-0 group-hover:opacity-100 shadow-md"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick Specs</span>
                  </button>
                </div>

                {/* Content info */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-charcoal-500 uppercase tracking-wider mb-1">
                      <span>{p.tradition} • {p.format}</span>
                      <span className="font-semibold">{p.paperGsm}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-charcoal-950 group-hover:text-gold-800 transition-colors mb-2">
                      {p.name}
                    </h3>

                    <p className="text-xs text-charcoal-600 font-normal line-clamp-2 leading-relaxed mb-4">
                      {p.description}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 border-t border-gold-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-charcoal-500 block">
                        Bulk From
                      </span>
                      <span className="font-serif text-xl font-bold text-gold-900">
                        {formatPrice(p.priceINR)}
                        <span className="text-[10px] font-mono font-normal text-charcoal-500"> / card</span>
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(p)}
                      className="squeeze-btn px-4 py-2 rounded-full border border-gold-400 bg-gold-50 hover:bg-gold-500 text-gold-900 hover:text-charcoal-950 text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      <Package className="w-3.5 h-3.5" />
                      <span>Sample Box</span>
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        )}

        {/* Quick Specs Modal */}
        {previewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="pearl-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-gold-400 relative bg-white shadow-2xl">
              <div className="flex items-start justify-between border-b border-gold-200 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-gold-800 font-bold uppercase tracking-widest block">
                    {previewProduct.sku} • {previewProduct.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-950">
                    {previewProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setPreviewProduct(null)}
                  className="p-1 rounded-full text-charcoal-400 hover:text-charcoal-900 font-mono text-lg"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <img
                  src={previewProduct.imageUrl}
                  alt={previewProduct.name}
                  className="w-full h-56 object-cover rounded-xl border border-gold-200 shadow-sm"
                />
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-mono text-charcoal-500 block uppercase font-semibold">Dimensions:</span>
                    <span className="text-charcoal-900 font-medium">{previewProduct.dimensions}</span>
                  </div>
                  <div>
                    <span className="font-mono text-charcoal-500 block uppercase font-semibold">Paper Grade:</span>
                    <span className="text-charcoal-900 font-medium">{previewProduct.paperGsm}</span>
                  </div>
                  <div>
                    <span className="font-mono text-charcoal-500 block uppercase font-semibold">Artisanal Finish:</span>
                    <span className="text-charcoal-900 font-medium">{previewProduct.finish}</span>
                  </div>
                  <div>
                    <span className="font-mono text-charcoal-500 block uppercase font-semibold">Suite Includes:</span>
                    <ul className="list-disc list-inside text-charcoal-700 space-y-0.5 mt-1">
                      {previewProduct.includes.map((inc) => (
                        <li key={inc}>{inc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gold-200">
                <span className="font-serif text-2xl font-bold text-gold-900">
                  {formatPrice(previewProduct.priceINR)} <span className="text-xs text-charcoal-500 font-mono font-normal">/ unit</span>
                </span>
                <button
                  onClick={() => {
                    handleAdd(previewProduct);
                    setPreviewProduct(null);
                  }}
                  className="squeeze-btn px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-md shadow-gold-500/20"
                >
                  <Package className="w-4 h-4" />
                  <span>Add To Touch &amp; Feel Box</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Global Toast */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 border border-gold-500 bg-white text-charcoal-950 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-mono tracking-wider animate-bounce">
            <Check className="w-4 h-4 text-emerald-600" />
            <span className="font-bold">{toastMessage}</span>
          </div>
        )}

      </div>
    </section>
  );
}
