import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

export const authInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKENDLESS_API_URL}/${import.meta.env.VITE_BACKENDLESS_APPLICATION_ID}/${import.meta.env.VITE_BACKENDLESS_API_KEY}`,
});

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKENDLESS_API_URL}/${import.meta.env.VITE_BACKENDLESS_APPLICATION_ID}/${import.meta.env.VITE_BACKENDLESS_API_KEY}/data`,
});

axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().user?.token;
  if (token) {
    config.headers["user-token"] = token;
  }
  return config;
});

export default axiosInstance;
