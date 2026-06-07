export type TeamMember = {
  login: { uuid: string };
  name: { first: string; last: string };
  picture: { large: string };
  email: string;
  location: { city: string; country: string };
};

export type RandomUserResponse = {
  results: TeamMember[];
};