"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Session } from "@/app/features/sessions/session.types";
import SessionList from "@/app/components/sessions/SessionList";

export default function SessionsPage() {
  const { projectId } = useParams() as { projectId: string };
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem(`sessions_${projectId}`);
    if (stored) {
      setSessions(JSON.parse(stored) as Session[]);
    }
  }, [projectId]);

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-zinc-800 mb-6">Sessions</h1>
        <SessionList projectId={projectId} sessions={sessions} />
      </div>
    </div>
  );
}
