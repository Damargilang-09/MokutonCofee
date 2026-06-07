export type Blog = {
  objectId: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  thumbnail: string;
  category: string;
  content: string;
};

export type CreateBlogPayload = {
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  thumbnail: string;
  category: string;
  content: string;
};