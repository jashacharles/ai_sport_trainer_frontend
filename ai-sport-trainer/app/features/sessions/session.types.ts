export type SessionStatus = "pending" | "processing" | "completed" | "failed";

export interface AIFeedback {
  summary: string;
  recommendations: string[];
}

export interface Session {
  projectId: string;
  sessionId: string;
  name: string;
  description: string;
  status: SessionStatus;
  feedback: AIFeedback | null;
  createdAt: string;
  updatedAt: string;
}

export type CreateSessionInput = Omit<Session, 'sessionId' | 'feedback' | 'createdAt' | 'updatedAt'>

