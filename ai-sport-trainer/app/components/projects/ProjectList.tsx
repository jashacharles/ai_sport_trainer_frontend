"use client";

import { useState } from "react";
import { Project } from "@/app/features/projects/project.types";
import ProjectCard from "./ProjectCard";
import AddSessionModal from "../sessions/AddSessionModal";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [showAddSession, setShowAddSession] = useState(false);

  return (
    <div className="flex flex-col gap-3 w-full">
      {projects.map((project) => (
        <ProjectCard
          key={project.projectId}
          project={project}
          onViewDetails={(id) => console.log("view", id)}
        />
      ))}

      {showAddSession && (
        <div className="mt-2">
          <AddSessionModal />
        </div>
      )}

      <button
        onClick={() => setShowAddSession((prev) => !prev)}
        className="mt-2 w-full py-2 text-sm font-medium text-zinc-600 border border-dashed border-zinc-300 rounded-xl hover:border-zinc-500 hover:text-zinc-800 transition-colors"
      >
        + Add Session
      </button>
    </div>
  );
}
