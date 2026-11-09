import { useState } from "react";
import { Trash2, CheckCircle2, ArrowLeft } from "lucide-react";
import { PRODUCTS, type Product } from "../data/mockProducts";
import { playTactileClick } from "../utils/soundEffects";

interface AdminProps {
  onBack: () => void;
  orders?: any[];
}

export function AdminDashboardPage({ onBack, orders = [] }: AdminProps) {
  const [productList, setProductList] = useState<Product[]>(PRODUCTS);
  const [activeTab, setActiveTab] = useState<"products" | "orders" | "production">("products");

  const handleDeleteProduct = (id: string) => {
    playTactileClick();
    if (confirm("Are you sure you want to retire this signature invitation silhouette from the live atelier?")) {
      setProductList(productList.filter((p) => p.id !== id));
    }
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
          <span>Exit Admin Atelier</span>
        </button>
        <span>ANGRAITY HEADQUARTERS // MASTER CONSOLE</span>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl font-extrabold text-[#1F1B19]">
              Atelier Management Console
            </h1>
            <p className="text-xs font-mono text-[#77716B] mt-1">
              Role: Master Atelier Director • All changes reflect immediately in catalogue and pricing
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#B49A68]/30 shadow-sm font-mono text-xs">
            <button
              onClick={() => { playTactileClick(); setActiveTab("products"); }}
              className={`px-4 py-1.5 rounded-xl transition-all ${
                activeTab === "products" ? "bg-[#1F1B19] text-[#F5F1E9] font-bold" : "text-[#77716B]"
              }`}
            >
              Catalog ({productList.length})
            </button>
            <button
              onClick={() => { playTactileClick(); setActiveTab("orders"); }}
              className={`px-4 py-1.5 rounded-xl transition-all ${
                activeTab === "orders" ? "bg-[#1F1B19] text-[#F5F1E9] font-bold" : "text-[#77716B]"
              }`}
            >
              VIP Bookings ({orders.length})
            </button>
            <button
              onClick={() => { playTactileClick(); setActiveTab("production"); }}
              className={`px-4 py-1.5 rounded-xl transition-all ${
                activeTab === "production" ? "bg-[#1F1B19] text-[#F5F1E9] font-bold" : "text-[#77716B]"
              }`}
            >
              Milling Calibration
            </button>
          </div>
        </div>

        {/* Products Management Tab */}
        {activeTab === "products" && (
          <div className="pearl-card rounded-3xl p-6 sm:p-8 bg-white border border-[#B49A68]/30 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <h2 className="font-serif text-xl font-bold text-[#1F1B19]">
                Live Product Inventory &amp; Specifications
              </h2>
              <span className="text-xs font-mono text-[#B49A68] font-bold">
                ISO 9001:2015 Approved Catalogue
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-[#B49A68]/20 text-[#77716B] uppercase tracking-wider text-[10px]">
                    <th className="pb-3">Product</th>
                    <th className="pb-3">SKU</th>
                    <th className="pb-3">Occasion</th>
                    <th className="pb-3">Stock &amp; Finish</th>
                    <th className="pb-3">Base Price</th>
                    <th className="pb-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {productList.map((product) => (
                    <tr key={product.id} className="hover:bg-[#F5F1E9]/40 transition-colors">
                      <td className="py-3 flex items-center gap-3">
                        <img src={product.imageUrl} alt={product.name} className="w-10 h-10 object-cover rounded-lg" />
                        <div>
                          <strong className="text-xs font-serif text-[#1F1B19] block">{product.name}</strong>
                          <span className="text-[10px] text-[#77716B]">{product.dimensions}</span>
                        </div>
                      </td>
                      <td className="py-3 text-[#77716B]">{product.sku}</td>
                      <td className="py-3 uppercase text-[10px] text-[#783747] font-bold">{product.occasion}</td>
                      <td className="py-3 text-[11px] text-[#1F1B19]">{product.paperGsm}</td>
                      <td className="py-3 font-bold text-[#B49A68]">₹{product.priceINR}</td>
                      <td className="py-3 text-right">
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-1.5 rounded-lg text-rose-700 hover:bg-rose-50 transition-colors"
                          title="Retire from catalog"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="pearl-card rounded-3xl p-6 sm:p-8 bg-white border border-[#B49A68]/30 shadow-xl">
            <h2 className="font-serif text-xl font-bold text-[#1F1B19] mb-4">
              Recent VIP Atelier Orders &amp; Custom Proofs
            </h2>

            {orders.length > 0 ? (
              <div className="space-y-4">
                {orders.map((ord: any, idx: number) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F5F1E9]/60 border border-[#B49A68]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
                    <div>
                      <span className="text-[#B49A68] font-bold">#{ord.orderId}</span>
                      <span className="text-[#77716B] ml-2">Date: {ord.date}</span>
                      <strong className="block text-sm font-serif text-[#1F1B19] mt-1">{ord.customer?.fullName}</strong>
                      <span className="text-[10px] text-[#77716B]">WhatsApp: {ord.customer?.phone}</span>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        <CheckCircle2 className="w-3 h-3" />
                        {ord.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-[#77716B] font-mono text-xs">
                No orders yet. Place a booking through Checkout to see live lifecycle synchronization.
              </div>
            )}
          </div>
        )}

        {/* Production Tab */}
        {activeTab === "production" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="pearl-card rounded-2xl p-6 bg-white border border-[#B49A68]/30 shadow-md">
              <span className="text-[10px] font-mono text-[#77716B] uppercase block">Hydraulic Hot Die Calibration</span>
              <strong className="text-2xl font-serif text-[#1F1B19] block mt-1">180.4°C</strong>
              <span className="text-[10px] font-mono text-emerald-700">Optimal 24K Leaf Adhesion</span>
            </div>
            <div className="pearl-card rounded-2xl p-6 bg-white border border-[#B49A68]/30 shadow-md">
              <span className="text-[10px] font-mono text-[#77716B] uppercase block">Laser Filigree Speed</span>
              <strong className="text-2xl font-serif text-[#1F1B19] block mt-1">0.02mm Tolerances</strong>
              <span className="text-[10px] font-mono text-emerald-700">Zero Micro-Tearing</span>
            </div>
            <div className="pearl-card rounded-2xl p-6 bg-white border border-[#B49A68]/30 shadow-md">
              <span className="text-[10px] font-mono text-[#77716B] uppercase block">Organic French Beeswax Temp</span>
              <strong className="text-2xl font-serif text-[#1F1B19] block mt-1">68°C Pour</strong>
              <span className="text-[10px] font-mono text-emerald-700">Crisp Royal Monogram Relief</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
