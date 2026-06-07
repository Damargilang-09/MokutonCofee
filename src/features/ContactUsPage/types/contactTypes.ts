export type Contact = {
  objectId: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  created: string;
};

export type CreateContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};