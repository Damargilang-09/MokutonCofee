import axios from "axios";

/**
 * Client untuk MokutonCoffee-API (Go/Gin).
 * Auth memakai JWT di httpOnly cookie "token", jadi wajib withCredentials
 * dan tidak perlu interceptor header token.
 */
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8000/api",
  withCredentials: true,
});

export default axiosInstance;
