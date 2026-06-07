import axiosInstance from "../../../utils/axios-Instance";
import type { Blog, CreateBlogPayload } from "../types/blog-types";

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await axiosInstance.get("/Blog?sortBy=publishDate%20desc");
  return response.data;
};

export const getBlogById = async (id: string): Promise<Blog> => {
  const response = await axiosInstance.get(`/Blog/${id}`);
  return response.data;
};

export const createBlog = async (payload: CreateBlogPayload): Promise<Blog> => {
  console.log("Payload createBlog:", payload);
  try {
    const response = await axiosInstance.post("/Blog", payload);
    return response.data;
  } catch (error: any) {
    console.log("Error createBlog:", error.response?.data);
    throw error;
  }
};