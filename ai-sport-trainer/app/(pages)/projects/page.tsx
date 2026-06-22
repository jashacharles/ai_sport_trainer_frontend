"use client";

import { useEffect, useState } from "react";
import { Project } from "@/app/features/projects/project.types";
import ProjectList from "@/app/components/projects/ProjectList";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("projects");
    console.log("Retrieved projects from sessionStorage:", stored);
    if (stored) {
      setProjects(JSON.parse(stored) as Project[]);
    }
  }, []);

  const handleProjectsUpdated = (updated: Project[]) => {
    setProjects(updated);
    sessionStorage.setItem("projects", JSON.stringify(updated));
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-zinc-800 mb-6">Projects</h1>
        <ProjectList projects={projects} onProjectsUpdated={handleProjectsUpdated} />
      </div>
    </div>
  );
}
