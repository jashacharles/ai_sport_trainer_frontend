import { apiClient } from "@/app/lib/api-client";
import { Authentication, AuthenticationInput } from "./auth.types";

export function attemptLogin(data: AuthenticationInput): Promise<Authentication> {
  return apiClient.post<Authentication>("/authentication", data);

}
