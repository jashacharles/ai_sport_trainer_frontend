"use client";

export default function ProjectForm() {
  return (
    <form className="flex flex-col gap-4 w-full max-w-md">
      <h2 className="text-2xl font-bold text-zinc-800">New Project</h2>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Project Name</label>
        <input
          type="text"
          placeholder="My Training Project"
          className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Sport Type</label>
        <input
          type="text"
          placeholder="e.g. Running, Swimming, Cycling"
          className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Goal</label>
        <textarea
          placeholder="Describe your training goal..."
          rows={3}
          className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-2 bg-zinc-800 text-white rounded-lg py-2 text-sm font-semibold hover:bg-zinc-700 transition-colors"
      >
        Create Project
      </button>
    </form>
  );
}
