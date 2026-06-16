import { Project } from "@/app/features/projects/project.types";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (projectId: string) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <div className="flex items-center justify-between w-full px-5 py-4 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-zinc-800">{project.projectName}</h3>
        <span className="text-sm text-zinc-500">{project.sportType}</span>
      </div>
      <button
        onClick={() => onViewDetails(project.projectId)}
        className="px-4 py-2 text-sm font-medium text-zinc-700 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors"
      >
        View Details
      </button>
    </div>
  );
}
