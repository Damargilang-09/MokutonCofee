import { useCallback, useEffect, useState } from "react";
import { getProducts, type Product } from "../api/productApi";

export function useProducts(page: number, limit = 12) {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getProducts(page, limit);
      setProducts(res.data);
      setTotal(res.total);
    } catch {
      setError("Gagal memuat produk.");
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  useEffect(() => {
    load();
  }, [load]);

  return { products, total, loading, error, refetch: load };
}
