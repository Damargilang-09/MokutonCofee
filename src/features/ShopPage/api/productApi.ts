import axiosInstance from "../../../utils/axios-Instance";

export type Product = {
  id: string;
  sku: string;
  name: string;
  image: string;
  imageid: string;
  description: string;
  stock: number;
  price: number;
  created_at: string;
  updated_at: string;
};

type ProductsResponse = {
  message: string;
  page: number;
  limit: number;
  total: number;
  data: Product[];
};

export const getProducts = async (
  page = 1,
  limit = 12
): Promise<ProductsResponse> => {
  const response = await axiosInstance.get("/products", {
    params: { page, limit },
  });
  return response.data;
};

export type ProductFormValues = {
  sku: string;
  name: string;
  description: string;
  stock: string;
  price: string;
  image?: File | null;
};

// backend membaca semua field via c.PostForm / FormFile (multipart)
function buildForm(values: ProductFormValues): FormData {
  const form = new FormData();
  form.append("sku", values.sku);
  form.append("name", values.name);
  form.append("description", values.description);
  form.append("stock", values.stock);
  form.append("price", values.price);
  if (values.image) form.append("image", values.image);
  return form;
}

export const createProduct = async (
  values: ProductFormValues
): Promise<Product> => {
  const response = await axiosInstance.post<{ data: Product }>(
    "/products",
    buildForm(values)
  );
  return response.data.data;
};

export const updateProduct = async (
  id: string,
  values: ProductFormValues
): Promise<Product> => {
  const response = await axiosInstance.patch<{ data: Product }>(
    `/products/${id}`,
    buildForm(values)
  );
  return response.data.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/products/${id}`);
};
