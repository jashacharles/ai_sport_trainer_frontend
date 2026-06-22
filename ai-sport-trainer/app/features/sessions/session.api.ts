import { apiClient } from "@/app/lib/api-client";
import { Session, CreateSessionInput } from "./session.types";

export function getSessions(projectId: string): Promise<Session[]> {
  const token = sessionStorage.getItem("access_token") ?? "";
  console.log(`Fetching sessions for projectId: ${projectId} with token: ${token}`);
  return apiClient.get<Session[]>(`/sessions?projectId=${projectId}`, token);
}

export function createSession(data: CreateSessionInput): Promise<Session> {
  const token = sessionStorage.getItem("access_token") ?? "";
  return apiClient.post<Session>("/sessions", data, token);
}
