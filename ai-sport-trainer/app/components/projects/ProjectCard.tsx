"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Project } from "@/app/features/projects/project.types";
import { getSessions } from "@/app/features/sessions/session.api";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (projectId: string) => void;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleViewDetails = async () => {
    setError(null);
    setLoading(true);
    try {
      const sessions = await getSessions(project.id);
      console.log(`Fetched sessions for project ${project.id}:`, sessions);
      sessionStorage.setItem(`sessions_${project.id}`, JSON.stringify(sessions));
      router.push(`/projects/${project.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load sessions");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between w-full px-5 py-4 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-zinc-800">{project.projectName}</h3>
        <span className="text-sm text-zinc-500">{project.sportType}</span>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
      <button
        onClick={handleViewDetails}
        disabled={loading}
        className="px-4 py-2 text-sm font-medium text-zinc-700 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors disabled:opacity-50"
      >
        {loading ? "Loading..." : "View Details"}
      </button>
    </div>
  );
}
