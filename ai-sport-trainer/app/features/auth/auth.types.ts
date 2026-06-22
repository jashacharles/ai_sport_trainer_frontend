import { Project } from "@/app/features/projects/project.types";

export interface AuthClient {
  id: string;
  userName: string;
  email: string;
  weight: number;
  height: number;
  age: number;
}

export interface Authentication {
  access_token: string;
  client: AuthClient;
  projects: Project[];
}

export interface AuthenticationInput {
  email: string;
  password: string;
}
