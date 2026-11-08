import { useState, useMemo } from "react";
import { Search, Filter, Sparkles, Check, Eye, Package, ArrowUpDown } from "lucide-react";
import { PRODUCTS, type Product, TRADITIONS, FORMATS } from "../data/mockProducts";

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
    <section id="catalog" className="relative py-28 overflow-hidden bg-obsidian-900 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-gold-950/30 backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gold-300 font-semibold">
                Complete Invitation Portfolio
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Discover All <span className="text-gold-foil italic">4,000+ Masterpieces</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-light text-sm max-w-sm">
            Filter by sacred tradition, silhouette format, or price tier. Every card is fully customizable with your family's personal shlokas and colors.
          </p>
        </div>

        {/* Filter & Search Matrix Toolbar */}
        <div className="glass-panel rounded-2xl p-6 border border-gold-500/20 mb-12 flex flex-col gap-6">
          
          {/* Search + Sort Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search by SKU (e.g. KNSR8811M), peacock, acrylic, scroll..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-obsidian-950/80 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400 transition-colors"
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <ArrowUpDown className="w-4 h-4 text-zinc-400" />
              <span className="text-xs font-mono text-zinc-400 uppercase">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-obsidian-950/80 border border-zinc-800 rounded-xl px-3 py-2 text-xs font-mono text-gold-300 focus:outline-none focus:border-gold-400 cursor-pointer"
              >
                <option value="featured">Featured Atelier</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Traditions Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/60">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-gold-400" />
              Tradition:
            </span>
            {TRADITIONS.map((trad) => (
              <button
                key={trad}
                onClick={() => setSelectedTradition(trad)}
                className={`squeeze-btn px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedTradition === trad
                    ? "bg-gold-500 text-obsidian-950 font-bold shadow-md shadow-gold-500/20"
                    : "bg-obsidian-950/50 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-gold-500/30"
                }`}
              >
                {trad}
              </button>
            ))}
          </div>

          {/* Formats Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 mr-2">
              Silhouette:
            </span>
            {FORMATS.map((fmt) => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                className={`squeeze-btn px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  selectedFormat === fmt
                    ? "bg-gold-500/20 border border-gold-400 text-gold-300 font-bold"
                    : "bg-obsidian-950/40 border border-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-2xl border border-zinc-800">
            <p className="font-serif text-xl text-zinc-400 mb-2">No invitations match your filters</p>
            <p className="text-xs text-zinc-500 font-mono">Try clearing your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTradition("All");
                setSelectedFormat("All");
              }}
              className="mt-4 px-4 py-2 rounded-full border border-gold-400 text-gold-400 text-xs font-mono uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="glass-panel rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Container with Hover zoom */}
                <div className="relative h-64 overflow-hidden bg-obsidian-950">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />

                  {/* SKU Pill Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md border border-gold-400/30 bg-obsidian-950/80 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-gold-300">
                    {p.sku}
                  </div>

                  {p.badge && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md border border-amber-500/30 bg-amber-950/70 text-amber-300 text-[10px] font-mono tracking-wider uppercase">
                      {p.badge}
                    </div>
                  )}

                  {/* Quick Preview Hover Trigger */}
                  <button
                    onClick={() => setPreviewProduct(p)}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full border border-white/20 bg-obsidian-950/70 hover:bg-gold-500 hover:text-obsidian-950 text-white text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick Specs</span>
                  </button>
                </div>

                {/* Content info */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                      <span>{p.tradition} • {p.format}</span>
                      <span>{p.paperGsm}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-300 transition-colors mb-2">
                      {p.name}
                    </h3>

                    <p className="text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed mb-4">
                      {p.description}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                        Bulk From
                      </span>
                      <span className="font-serif text-lg font-bold text-gold-400">
                        {formatPrice(p.priceINR)}
                        <span className="text-[10px] font-mono font-normal text-zinc-400"> / card</span>
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(p)}
                      className="squeeze-btn px-4 py-2 rounded-full border border-gold-500/40 bg-gold-500/10 hover:bg-gold-500 text-gold-300 hover:text-obsidian-950 text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all"
                    >
                      <Package className="w-3.5 h-3.5" />
                      <span>Sample Box</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Specs Modal */}
        {previewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-panel max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-gold-500/40 relative bg-obsidian-950">
              <div className="flex items-start justify-between border-b border-gold-500/20 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">
                    {previewProduct.sku} • {previewProduct.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {previewProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setPreviewProduct(null)}
                  className="p-1 rounded-full text-zinc-400 hover:text-white font-mono text-lg"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <img
                  src={previewProduct.imageUrl}
                  alt={previewProduct.name}
                  className="w-full h-56 object-cover rounded-xl border border-zinc-800"
                />
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-mono text-zinc-500 block uppercase">Dimensions:</span>
                    <span className="text-zinc-200 font-medium">{previewProduct.dimensions}</span>
                  </div>
                  <div>
                    <span className="font-mono text-zinc-500 block uppercase">Paper Grade:</span>
                    <span className="text-zinc-200 font-medium">{previewProduct.paperGsm}</span>
                  </div>
                  <div>
                    <span className="font-mono text-zinc-500 block uppercase">Artisanal Finish:</span>
                    <span className="text-zinc-200 font-medium">{previewProduct.finish}</span>
                  </div>
                  <div>
                    <span className="font-mono text-zinc-500 block uppercase">Suite Includes:</span>
                    <ul className="list-disc list-inside text-zinc-300 space-y-0.5 mt-1">
                      {previewProduct.includes.map((inc) => (
                        <li key={inc}>{inc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gold-500/20">
                <span className="font-serif text-xl font-bold text-gold-400">
                  {formatPrice(previewProduct.priceINR)} <span className="text-xs text-zinc-400 font-mono">/ unit</span>
                </span>
                <button
                  onClick={() => {
                    handleAdd(previewProduct);
                    setPreviewProduct(null);
                  }}
                  className="squeeze-btn px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 font-semibold text-xs tracking-wider uppercase flex items-center gap-2"
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
          <div className="fixed bottom-6 right-6 z-50 glass-panel border border-gold-500/60 bg-obsidian-950/95 text-gold-300 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-mono tracking-wider animate-bounce">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

      </div>
    </section>
  );
}
