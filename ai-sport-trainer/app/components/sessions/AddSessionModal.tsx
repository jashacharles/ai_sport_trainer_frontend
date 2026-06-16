"use client";

export default function AddSessionModal() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl h-64 border-2 border-dashed border-zinc-400 rounded-xl bg-zinc-50 cursor-pointer hover:border-zinc-600 hover:bg-zinc-100 transition-colors">
      <svg
        className="w-10 h-10 text-zinc-400 mb-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 16v-8m0 0-3 3m3-3 3 3M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"
        />
      </svg>
      <p className="text-zinc-500 font-medium">Drop files here</p>
      <p className="text-zinc-400 text-sm mt-1">or click to browse</p>
    </div>
  );
}
