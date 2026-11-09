import { X, Trash2, Package, ArrowRight, Check } from "lucide-react";
import confetti from "canvas-confetti";
import { useState } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: any[];
  onRemoveItem: (id: string) => void;
  onClear: () => void;
  currency: string;
  onProceedToCheckout?: () => void;
}

export function SampleKitDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClear,
  currency,
  onProceedToCheckout,
}: DrawerProps) {
  const [ordered, setOrdered] = useState(false);

  if (!isOpen) return null;

  const handleOrder = () => {
    confetti({
      particleCount: 110,
      spread: 85,
      origin: { y: 0.5 },
      colors: ["#be9932", "#e3cf8b", "#a37d25", "#ffffff"],
    });
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
      onClear();
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-md h-full bg-[#faf8f5] border-l border-gold-400/40 flex flex-col justify-between p-6 sm:p-8 shadow-2xl overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-gold-300 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-gold-700" />
              <h3 className="font-serif text-xl font-bold text-charcoal-950">
                Touch &amp; Feel Sample Box
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-charcoal-400 hover:text-charcoal-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-charcoal-600 font-mono mb-4">
            Curate up to 5 card samples. The ₹499 sample deposit is 100% credited against your final bulk wedding stationery order.
          </p>

          {/* Items List */}
          {items.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-gold-200 rounded-2xl p-6 bg-white">
              <Package className="w-10 h-10 text-charcoal-400 mx-auto mb-3" />
              <p className="font-serif text-charcoal-800 text-sm font-semibold mb-1">Your sample box is empty</p>
              <p className="text-[11px] text-charcoal-500 font-mono">
                Click "Sample Box" on any card or customizer to add up to 5 specimens.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {items.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-gold-300/80 bg-white shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover border border-gold-200"
                      />
                    )}
                    <div>
                      <span className="font-serif text-sm font-bold text-charcoal-950 block">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-mono text-gold-800 font-semibold block">
                        SKU: {item.sku} {item.finish && `• ${item.finish}`}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-charcoal-400 hover:text-red-500 transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        {items.length > 0 && (
          <div className="border-t border-gold-300 pt-6 mt-6 space-y-4">
            <div className="space-y-1 text-xs font-mono">
              <div className="flex justify-between text-charcoal-600">
                <span>Selected Models:</span>
                <span className="text-charcoal-950 font-bold">{items.length} / 5</span>
              </div>
              <div className="flex justify-between text-charcoal-600">
                <span>Swatch Guide &amp; Wax Seals:</span>
                <span className="text-emerald-700 font-bold">Complimentary</span>
              </div>
              <div className="flex justify-between text-charcoal-600">
                <span>Express Courier:</span>
                <span className="text-emerald-700 font-bold">Free</span>
              </div>
              <div className="flex justify-between text-sm font-serif font-bold text-charcoal-950 pt-2 border-t border-gold-200">
                <span>Sample Box Deposit:</span>
                <span className="text-gold-900">{currency === "INR" ? "₹499" : "$10"} (100% Credited)</span>
              </div>
            </div>

            {ordered ? (
              <div className="p-4 rounded-xl border border-emerald-400 bg-emerald-50 text-center text-xs font-mono text-emerald-900 shadow-sm">
                <Check className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <p className="font-bold">Sample Box Confirmed!</p>
                <p className="text-[10px] text-charcoal-600 mt-1">
                  Our wedding concierge is dispatching your samples via courier.
                </p>
              </div>
            ) : (
              <button
                onClick={() => {
                  if (onProceedToCheckout) {
                    onClose();
                    onProceedToCheckout();
                  } else {
                    handleOrder();
                  }
                }}
                className="squeeze-btn w-full py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-gold-500/25"
              >
                <span>Proceed to VIP Dispatch (No Payment)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onClear}
              className="w-full text-center text-[11px] font-mono uppercase tracking-widest text-charcoal-500 hover:text-charcoal-800"
            >
              Clear All Samples
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
