import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../api/blog-api";
import { useAuthStore } from "../../../store/useAuthStore";

const CATEGORIES = ["Brewing", "Beans", "Barista", "News"];

export default function CreateBlogPage() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    thumbnail: "",
    category: "Brewing",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.title || !form.content || !form.excerpt) {
      setError("Title, excerpt, dan content wajib diisi.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await createBlog({
        ...form,
        author: user?.name ?? "Mokuton",
        publishDate: new Date().toISOString(),
      });
      navigate("/MokutonJournal");
    } catch {
      setError("Gagal menyimpan artikel.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-5 md:px-60 mt-20 pb-20 text-moku">
      <h1 className="font-bold text-3xl mb-8">Tulis Artikel Baru</h1>

      {error && <div className="alert alert-error mb-6 text-sm">{error}</div>}

      <div className="flex flex-col gap-5">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-moku">Judul</legend>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Judul artikel..."
            value={form.title}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-moku">Excerpt</legend>
          <textarea
            name="excerpt"
            className="textarea textarea-bordered w-full h-20"
            placeholder="Ringkasan singkat artikel..."
            value={form.excerpt}
            onChange={handleChange}
            maxLength={250}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-moku">Thumbnail URL</legend>
          <input
            type="text"
            name="thumbnail"
            className="input w-full"
            placeholder="https://..."
            value={form.thumbnail}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-moku">Kategori</legend>
          <select
            name="category"
            className="select select-bordered w-full"
            value={form.category}
            onChange={handleChange}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-moku">Konten</legend>
          <textarea
            name="content"
            className="textarea textarea-bordered w-full h-64"
            placeholder="Tulis isi artikel di sini..."
            value={form.content}
            onChange={handleChange}
          />
        </fieldset>

        <button
          className="btn w-fit px-10 hover:scale-[1.02] transition-transform duration-200"
          style={{
            backgroundColor: "#7D9B76",
            borderColor: "#86917B",
            color: "white",
          }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            "Publikasikan"
          )}
        </button>
      </div>
    </div>
  );
}
