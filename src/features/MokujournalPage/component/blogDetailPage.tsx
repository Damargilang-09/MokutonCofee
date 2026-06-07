import { useParams, Link, useNavigate } from "react-router-dom";
import { useBlogDetail } from "../hooks/useBlogDetail"; 
import { useAuthStore } from "../../../store/useAuthStore"; 
import axiosInstance from "../../../utils/axios-Instance";

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { blog, loading, error } = useBlogDetail(id!);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());

  const handleDelete = async () => {
    if (!confirm("Yakin ingin menghapus artikel ini?")) return;
    try {
      await axiosInstance.delete(`/Blog/${id}`);
      navigate("/MokutonJournal");
    } catch {
      alert("Gagal menghapus artikel.");
    }
  };

  if (loading) return (
    <div className="flex justify-center mt-20">
      <span className="loading loading-spinner loading-lg" />
    </div>
  );

  if (error) return <p className="text-center mt-20 text-red-400">{error}</p>;
  if (!blog) return null;

  return (
    <div className="px-5 md:px-60 mt-20 pb-20">

      {/* Back & Delete Button */}
      <div className="flex justify-between items-center mb-8">
        <Link to="/blog" className="btn btn-sm btn-outline">
          ← Kembali
        </Link>
        {isAuthenticated && (
          <button
            onClick={handleDelete}
            className="btn btn-sm btn-error text-white"
          >
            Hapus Artikel
          </button>
        )}
      </div>

      {/* Category & Date */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs uppercase tracking-widest text-gray-400">
          {blog.category}
        </span>
        <span className="text-gray-300">·</span>
        <span className="text-xs text-gray-400">
          {new Date(blog.publishDate).toLocaleDateString("id-ID", {
            day: "numeric", month: "long", year: "numeric"
          })}
        </span>
      </div>

      <h1 className="font-bold text-3xl md:text-4xl leading-snug mb-4">
        {blog.title}
      </h1>
      <p className="text-sm text-gray-400 mb-8">Oleh {blog.author}</p>
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-xl mb-10"
      />
      <div className="prose max-w-none text-base leading-relaxed">
        {blog.content}
      </div>

    </div>
  );
}