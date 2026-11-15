import { useState } from "react";
import axios from "axios";
import { createProduct, updateProduct, type Product } from "../api/productApi";

type Props = {
  /** null = buat produk baru; Product = edit produk ini */
  product: Product | null;
  onClose: () => void;
  onSaved: () => void;
};

export default function ProductFormModal({ product, onClose, onSaved }: Props) {
  const isEdit = !!product;

  const [sku, setSku] = useState(product?.sku ?? "");
  const [name, setName] = useState(product?.name ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [stock, setStock] = useState(String(product?.stock ?? ""));
  const [price, setPrice] = useState(String(product?.price ?? ""));
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!sku.trim() || !name.trim()) {
      setError("SKU dan Nama wajib diisi.");
      return;
    }
    if (!isEdit && !image) {
      setError("Gambar wajib untuk produk baru.");
      return;
    }

    setSaving(true);
    try {
      const values = { sku, name, description, stock, price, image };
      if (isEdit) {
        await updateProduct(product.id, values);
      } else {
        await createProduct(values);
      }
      onSaved();
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const message = (err.response?.data as { error?: string } | undefined)
          ?.error;
        setError(message ?? "Gagal menyimpan produk.");
      } else {
        setError("Gagal menyimpan produk.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">
          {isEdit ? "Edit Produk" : "Tambah Produk"}
        </h3>
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="label">SKU</label>
            <input
              type="text"
              className="input w-full"
              placeholder="SKU"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
            />
          </div>
          <div>
            <label className="label">Nama</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Nama produk"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="label">Deskripsi</label>
            <textarea
              className="textarea w-full"
              placeholder="Deskripsi"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">Stok</label>
              <input
                type="number"
                min={0}
                className="input w-full"
                placeholder="Stok"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div>
              <label className="label">Harga</label>
              <input
                type="number"
                min={1}
                className="input w-full"
                placeholder="Harga"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="label">
              Gambar {isEdit && "(kosongkan jika tidak diganti)"}
            </label>
            <input
              type="file"
              accept="image/*"
              className="file-input w-full"
              onChange={(e) => setImage(e.target.files?.[0] ?? null)}
            />
          </div>

          {error && <p className="text-error text-xs">{error}</p>}

          <div className="modal-action">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Batal
            </button>
            <button
              type="submit"
              className="btn btn-neutral"
              disabled={saving}
            >
              {saving ? (
                <span className="loading loading-spinner loading-sm" />
              ) : isEdit ? (
                "Simpan"
              ) : (
                "Tambah"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
