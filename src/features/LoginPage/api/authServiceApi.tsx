import axiosInstance from "../../../utils/axios-Instance";

export type UserResponse = {
  id: string;
  role: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};

export type AuthUser = {
  id: string;
  role: string;
  name: string;
  email: string;
};

type LoginResponse = {
  message: string;
  user: {
    Name: string;
    Email: string;
  };
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export const login = async (payload: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const response = await axiosInstance.post("/auth/login", payload);
  return response.data;
};

export const register = async (payload: RegisterPayload): Promise<{ message: string }> => {
  const response = await axiosInstance.post("/auth/register", payload);
  return response.data;
};

export const getCurrentUser = async (): Promise<AuthUser> => {
  const response = await axiosInstance.get<{ user: UserResponse }>("/auth/me");
  const { id, role, name, email } = response.data.user;
  return { id, role, name, email };
};

export const logout = async (): Promise<void> => {
  await axiosInstance.post("/auth/logout");
};
