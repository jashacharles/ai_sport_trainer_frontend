import { apiClient } from "@/app/lib/api-client";
import { Project, CreateProjectInput } from "./project.types";

export function createProject(data: CreateProjectInput): Promise<Project> {
  console.log("Creating project with data:", data);
  return apiClient.post<Project>("/project", data);
}
