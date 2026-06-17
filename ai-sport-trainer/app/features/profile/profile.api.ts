import { apiClient } from "@/app/lib/api-client";
import { Profile, CreateProfileInput } from "./profile.types";

export function createProfile(data: CreateProfileInput): Promise<Profile> {
  console.log("Creating profile with data:", data);
  return apiClient.post<Profile>("/user", data);
}
