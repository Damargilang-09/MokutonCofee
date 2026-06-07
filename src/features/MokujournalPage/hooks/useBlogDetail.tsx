import { useEffect, useState } from "react";
import { getBlogById } from "../api/blog-api"; 
import type { Blog } from "../types/blog-types"; 

export const useBlogDetail = (id: string) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id);
        setBlog(data);
      } catch {
        setError("Gagal memuat artikel.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return { blog, loading, error };
};