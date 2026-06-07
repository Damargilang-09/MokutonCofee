import type { Blog } from "../types/blog-types";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="card bg-base-100 border border-base-200 hover:scale-[1.02] transition-transform duration-200">
      <figure>
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body gap-2">
        <span className="text-xs text-gray-400 uppercase tracking-widest">
          {blog.category}
        </span>
        <h2 className="card-title text-moku text-base">{blog.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-3">{blog.excerpt}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="text-xs text-gray-400">
            <span>{blog.author}</span>
            <span className="mx-1">·</span>
            <span>{new Date(blog.publishDate).toLocaleDateString("id-ID", {
              day: "numeric", month: "long", year: "numeric"
            })}</span>
          </div>
          <Link
            to={`/blog/${blog.objectId}`}
            className="btn btn-sm text-moku btn-outline "
          >
            Baca
          </Link>
        </div>
      </div>
    </div>
  );
}