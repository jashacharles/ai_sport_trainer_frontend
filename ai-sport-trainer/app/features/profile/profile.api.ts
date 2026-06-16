import { apiClient } from "@/app/lib/api-client";
import { Profile } from "./profile.types";

export function createProfile(data: Profile): Promise<Profile> {
  return apiClient.post<Profile>("/user", data);
}
