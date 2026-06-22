"use client";

import { useState } from "react";
import { Project } from "@/app/features/projects/project.types";
import { getProjects } from "@/app/features/projects/project.api";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
  onProjectsUpdated: (projects: Project[]) => void;
}

export default function ProjectList({ projects, onProjectsUpdated }: ProjectListProps) {
  const [showAddProject, setShowAddProject] = useState(false);

  const handleProjectCreated = async () => {
    const updated = await getProjects();
    onProjectsUpdated(updated);
    setShowAddProject(false);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onViewDetails={(id) => console.log("view", id)}
        />
      ))}

      {showAddProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative">
            <button
              onClick={() => setShowAddProject(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 transition-colors text-xl leading-none"
            >
              ✕
            </button>
            <ProjectForm onSuccess={handleProjectCreated} />
          </div>
        </div>
      )}

      <button
        onClick={() => setShowAddProject(true)}
        className="mt-2 w-full py-2 text-sm font-medium text-zinc-600 border border-dashed border-zinc-300 rounded-xl hover:border-zinc-500 hover:text-zinc-800 transition-colors"
      >
        + Add Project
      </button>
    </div>
  );
}
