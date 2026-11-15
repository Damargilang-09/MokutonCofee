import { useEffect } from "react";
import { formatRupiah } from "../../../utils/formatRupiah";
import type { Product } from "../api/productApi";

type Props = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductDetailDrawer({ product, onClose }: Props) {
  // Escape menutup drawer, overlay diklik juga menutup
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          product ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      {/* panel slide dari kanan */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-base-100 shadow-xl z-50 transition-transform duration-300 ${
          product ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {product && (
          <div className="h-full overflow-y-auto">
            <div className="relative">
              <div className="aspect-square w-full bg-base-200 overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-base-content/40">
                    Tidak ada gambar
                  </div>
                )}
              </div>
              <button
                className="btn btn-circle btn-sm absolute top-3 right-3"
                onClick={onClose}
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold">{product.name}</h2>
                  <p className="text-sm text-base-content/60">SKU {product.sku}</p>
                </div>
                {product.stock > 0 ? (
                  <span className="badge badge-success text-white shrink-0">
                    Stok {product.stock}
                  </span>
                ) : (
                  <span className="badge badge-error text-white shrink-0">
                    Stok habis
                  </span>
                )}
              </div>

              <p className="whitespace-pre-line text-base-content/80">
                {product.description || "Tidak ada deskripsi."}
              </p>

              <div className="border-t border-base-300 pt-4">
                <h3 className="text-sm text-base-content/60">Harga</h3>
                <p className="text-xl font-bold">{formatRupiah(product.price)}</p>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
