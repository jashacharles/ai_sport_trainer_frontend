export interface Profile {
  id: string;
  email: string;
  userName: string;
  password: string;
  weight: number;
  height: number;
  age: number;
}

export type CreateProfileInput = Omit<Profile, 'id'>
