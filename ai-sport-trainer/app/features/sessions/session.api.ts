import { apiClient } from "@/app/lib/api-client";
import { Session, CreateSessionInput, CreateSessionResponse } from "./session.types";

export function getSessions(projectId: string): Promise<Session[]> {
  const token = sessionStorage.getItem("access_token") ?? "";
  return apiClient.get<Session[]>(`/sessions?projectId=${projectId}`, token);
}

async function uploadVideo(url: string, file: File): Promise<void> {
  await apiClient.put(url, file, file.type);
}

export async function createSession(
  data: CreateSessionInput,
  file: File,
  onPhase: (phase: "creating" | "uploading") => void
): Promise<Session> {
  const token = sessionStorage.getItem("access_token") ?? "";
  onPhase("creating");
  const { session, uploadUrl } = await apiClient.post<CreateSessionResponse>("/sessions", data, token);
  onPhase("uploading");
  await uploadVideo(uploadUrl, file);
  return session;
}
