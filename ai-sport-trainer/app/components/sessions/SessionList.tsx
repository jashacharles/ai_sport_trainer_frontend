"use client";

import { useState } from "react";
import { Session } from "@/app/features/sessions/session.types";
import { getSessions } from "@/app/features/sessions/session.api";
import SessionCard from "./SessionCard";
import AddSessionModal from "./AddSessionModal";

interface SessionListProps {
  projectId: string;
  sessions: Session[];
}

export default function SessionList({ projectId, sessions: initialSessions }: SessionListProps) {
  const [sessions, setSessions] = useState<Session[]>(initialSessions);
  const [showAddSession, setShowAddSession] = useState(false);

  const handleSessionCreated = async () => {
    setShowAddSession(false);
    const updated = await getSessions(projectId);
    setSessions(updated);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {sessions.map((session) => (
        <SessionCard key={session.sessionId ?? session.name} session={session} />
      ))}

      {showAddSession && (
        <AddSessionModal
          projectId={projectId}
          onClose={() => setShowAddSession(false)}
          onSuccess={() => handleSessionCreated()}
        />
      )}

      <button
        onClick={() => setShowAddSession(true)}
        className="mt-2 w-full py-2 text-sm font-medium text-zinc-600 border border-dashed border-zinc-300 rounded-xl hover:border-zinc-500 hover:text-zinc-800 transition-colors"
      >
        + Add Session
      </button>
    </div>
  );
}
