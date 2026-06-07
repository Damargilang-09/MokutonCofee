import axiosInstance from "../../../utils/axios-Instance";
import type { Contact,CreateContactPayload } from "../types/contactTypes"; 

export const createContact = async (payload: CreateContactPayload): Promise<Contact> => {
  const response = await axiosInstance.post("/Contact", payload);
  return response.data;
};

export const getContacts = async (): Promise<Contact[]> => {
  const response = await axiosInstance.get("/Contact?sortBy=created%20desc");
  return response.data;
};

export const deleteContact = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/Contact/${id}`);
};