export type SessionStatus = "pending" | "processing" | "completed" | "failed";

export interface AIFeedback {
  summary: string;
  strengths: string[];
  improvements: string[];
  score: number;
}

export interface Session {
  id: string;
  projectId: string;
  name: string;
  description: string;
  fileUrl: string;
  status: SessionStatus;
  feedback: AIFeedback | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSessionRequest {
  name: string;
  description: string;
  file: File;
}

export interface UpdateSessionRequest {
  name?: string;
  description?: string;
}
