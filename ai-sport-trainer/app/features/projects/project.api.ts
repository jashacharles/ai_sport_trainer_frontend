import { apiClient } from "@/app/lib/api-client";
import { Project, CreateProjectInput } from "./project.types";

export function getProjects(): Promise<Project[]> {
  const token = sessionStorage.getItem("access_token") ?? "";
  return apiClient.get<Project[]>("/projects", token);
}

export function createProject(data: CreateProjectInput): Promise<Project> {
  const token = sessionStorage.getItem("access_token") ?? "";
  return apiClient.post<Project>("/projects", data, token);
}
