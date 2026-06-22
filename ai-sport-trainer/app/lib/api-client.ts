import { Profile, CreateProfileInput } from "@/app/features/profile/profile.types";
import { Project, CreateProjectInput } from "@/app/features/projects/project.types";
import { Session, CreateSessionInput } from "@/app/features/sessions/session.types";

const BASE_URL = "http://localhost:4000"; // sending request to port 4000

async function get<T>(path: string, token?: string): Promise<T> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(`${BASE_URL}${path}`, { method: "GET", headers });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || `Request failed with status ${res.status}`);
  }

  const data = await res.json() as T;
  console.log(`[api-client] GET ${path} response:`, data);
  return data;
}

async function post<T>(path: string, body: unknown, token?: string): Promise<T> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || `Request failed with status ${res.status}`);
  }
  const data = await res.json() as T;
  console.log(`[api-client] POST ${path} response:`, data);
  return data;
}

export const apiClient = {
  get,
  post,
  createProfile: (data: CreateProfileInput) => post<Profile>("/profiles", data),
  createProject: (data: CreateProjectInput) => post<Project>("/projects", data),
  createSession: (data: CreateSessionInput) => post<Session>("/sessions", data),
};
