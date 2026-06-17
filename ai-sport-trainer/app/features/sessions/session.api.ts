import { apiClient } from "@/app/lib/api-client";
import { Session, CreateSessionInput } from "./session.types";

export function createSession(data: CreateSessionInput): Promise<Session> {
  console.log("Creating session with data:", data);
  return apiClient.post<Session>("/session", data);
}
