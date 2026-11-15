import { useEffect, useState } from "react";
import { formatRupiah } from "../../utils/formatRupiah";
import { useProducts } from "../../features/ShopPage/hooks/useProducts";
import { useAuthStore } from "../../store/useAuthStore";
import { deleteProduct, type Product } from "../../features/ShopPage/api/productApi";
import ProductFormModal from "../../features/ShopPage/component/productFormModal";
import ProductDetailDrawer from "../../features/ShopPage/component/productDetailDrawer";

type ModalState = { open: false } | { open: true; product: Product | null };

const PAGE_LIMIT = 9;

export default function ShopCoffeePage() {
  const [page, setPage] = useState(1);
  const { products, total, loading, error, refetch } = useProducts(
    page,
    PAGE_LIMIT
  );
  const user = useAuthStore((state) => state.user);
  const isAdmin = user?.role === "admin";

  const totalPages = Math.max(1, Math.ceil(total / PAGE_LIMIT));

  // setelah hapus di halaman terakhir, mundur ke halaman yang masih ada
  useEffect(() => {
    if (!loading && page > totalPages) {
      setPage(totalPages);
    }
  }, [loading, page, totalPages]);

  const goToPage = (next: number) => {
    if (next < 1 || next > totalPages || next === page) return;
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [modal, setModal] = useState<ModalState>({ open: false });
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [detail, setDetail] = useState<Product | null>(null);

  const handleDelete = async (product: Product) => {
    if (!confirm(`Yakin ingin menghapus produk "${product.name}"?`)) return;
    setDeletingId(product.id);
    try {
      await deleteProduct(product.id);
      await refetch();
    } catch {
      alert("Gagal menghapus produk.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      {isAdmin && (
        <div className="px-5 md:pl-15 mt-25 md:mt-5 flex justify-end">
          <button
            className="btn btn-neutral"
            onClick={() => setModal({ open: true, product: null })}
          >
            + Tambah Produk
          </button>
        </div>
      )}

      <div className="grid md:grid-cols-3 grid-cols-2 gap-10 md:pl-15 px-5 w-screen h-full md:my-10 mt-30">
        {loading && <p className="col-span-full">Memuat produk…</p>}
        {error && <p className="col-span-full text-error">{error}</p>}
        {products.map((product) => (
          <ul key={product.id}>
            <li
              className="card bg-base-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setDetail(product)}
            >
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
              <div className="card-body p-5">
                {isAdmin && (
                  <div className="flex justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      className="btn btn-xs btn-outline"
                      onClick={() => setModal({ open: true, product })}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-xs btn-error text-white"
                      onClick={() => handleDelete(product)}
                      disabled={deletingId === product.id}
                    >
                      {deletingId === product.id
                        ? "Menghapus…"
                        : "Hapus"}
                    </button>
                  </div>
                )}
                <h2 className="card-title">{product.name}</h2>
                <p className="text-sm text-base-content/60 line-clamp-2 min-h-10">
                  {product.description || "Tidak ada deskripsi."}
                </p>
                <div className="mt-auto flex items-end justify-between gap-2">
                  <div>
                    <h3 className="text-sm text-base-content/60">start from</h3>
                    <p className="font-bold">{formatRupiah(product.price)}</p>
                  </div>
                  {product.stock > 0 ? (
                    <span className="badge badge-outline">Stok {product.stock}</span>
                  ) : (
                    <span className="badge badge-error text-white">Stok habis</span>
                  )}
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>

      {total > 0 && (
        <div className="flex justify-center items-center gap-2 pb-10">
          <button
            className="btn btn-sm"
            disabled={page <= 1 || loading}
            onClick={() => goToPage(page - 1)}
          >
            «
          </button>
          <span className="text-sm">
            Halaman {page} dari {totalPages} ({total} produk)
          </span>
          <button
            className="btn btn-sm"
            disabled={page >= totalPages || loading}
            onClick={() => goToPage(page + 1)}
          >
            »
          </button>
        </div>
      )}

      {modal.open && (
        <ProductFormModal
          product={modal.product}
          onClose={() => setModal({ open: false })}
          onSaved={() => {
            setModal({ open: false });
            refetch();
          }}
        />
      )}

      <ProductDetailDrawer product={detail} onClose={() => setDetail(null)} />
    </>
  );
}
