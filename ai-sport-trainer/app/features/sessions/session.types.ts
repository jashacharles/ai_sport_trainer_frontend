export type SessionStatus = "pending" | "processing" | "completed" | "failed";

export interface AIFeedback {
  summary: string;


  
  recommendations: string[];
}

export interface Session {
  projectId: string;
  description: string;
}

export interface CreateSessionResponse {
  session: Session;
  uploadUrl: string;
}

export type CreateSessionInput = Session;

