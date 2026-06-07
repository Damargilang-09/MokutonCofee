import { authInstance } from "../../../utils/axios-Instance";

export type LoginPayload = {
  email: string;
  password: string;
};

export type UserResponse = {
  objectId: string;
  email: string;
  name: string;
  "user-token": string;
};

export const login = async (payload: LoginPayload) => {
  const response = await authInstance.post("/users/login", {
    login: payload.email,
    password: payload.password,
  });
  return response.data;
};
export const logout = async (): Promise<void> => {
  await authInstance.get("/users/logout");
};