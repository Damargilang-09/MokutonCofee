
import { useState } from "react";
import { useBlog } from "../../features/MokujournalPage/hooks/useGetBlog"; 
import BlogCard from "../../features/MokujournalPage/component/Blogcard"; 

const CATEGORIES = ["Semua", "Brewing", "Beans", "Barista", "News"];

export default function MokuJournalPage() {
  const { blogs, loading, error } = useBlog();
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = activeCategory === "Semua"
    ? blogs
    : blogs.filter((b) => b.category === activeCategory);

  if (loading) return <div className="flex justify-center mt-20"><span className="loading loading-spinner loading-lg" /></div>;
  if (error) return <p className="text-center mt-20 text-red-400">{error}</p>;

  return (
    <div className="px-5 md:px-25 my-20">

      {/* Header */}
      <div className="mb-10">
        <h1 className="font-bold text-moku text-3xl">Mokuton Journal</h1>
        <p className="text-gray-400 mt-2">Cerita, tips, dan insight seputar dunia kopi.</p>
      </div>

      {/* Filter Category */}
      <div className="flex gap-5 mb-8 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`btn btn-sm ${activeCategory === cat ? "btn-neutral" : "btn-outline"}`}
            style={activeCategory === cat ? { backgroundColor: "#7D9B76", borderColor: "#7D9B76" } : {}}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Blog */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((blog) => (
          <BlogCard key={blog.objectId} blog={blog} />
        ))}
      </div>

    </div>
  );
}