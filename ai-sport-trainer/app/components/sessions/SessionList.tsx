"use client";

import { useState } from "react";
import { Session } from "@/app/features/sessions/session.types";
import SessionCard from "./SessionCard";
import AddSessionModal from "./AddSessionModal";

interface SessionListProps {
  sessions: Session[];
}

export default function SessionList({ sessions }: SessionListProps) {
  const [showAddSession, setShowAddSession] = useState(false);

  return (
    <div className="flex flex-col gap-3 w-full">
      {sessions.map((session) => (
        <SessionCard key={session.sessionId} session={session} />
      ))}

      {showAddSession && (
        <AddSessionModal onClose={() => setShowAddSession(false)} />
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
