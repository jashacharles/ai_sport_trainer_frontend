"use client";

import { useState, useRef, DragEvent } from "react";
import { Session } from "@/app/features/sessions/session.types";
import { createSession } from "@/app/features/sessions/session.api";

interface AddSessionModalProps {
  projectId: string;
  onClose: () => void;
  onSuccess: (session: Session) => void;
}

export default function AddSessionModal({ projectId, onClose, onSuccess }: AddSessionModalProps) {
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phase, setPhase] = useState<"idle" | "creating" | "uploading">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("video/")) {
      setError("Please upload a video file.");
      return;
    }
    setError(null);
    setVideoFile(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile) { setError("Please select a video file."); return; }
    setError(null);
    try {
      const session = await createSession({ projectId, description }, videoFile, setPhase);
      onSuccess(session);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create session");
      setPhase("idle");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 transition-colors text-xl leading-none"
        >
          ✕
        </button>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-zinc-800">Add Session</h2>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700">Description</label>
            <textarea
              placeholder="Describe this session..."
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 resize-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700">Video</label>
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-lg px-4 py-8 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${
                isDragging ? "border-zinc-500 bg-zinc-50" : "border-zinc-300 hover:border-zinc-400"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }}
              />
              {videoFile ? (
                <p className="text-sm text-zinc-700 font-medium text-center break-all">{videoFile.name}</p>
              ) : (
                <>
                  <p className="text-sm text-zinc-500">Drop a video file here</p>
                  <p className="text-xs text-zinc-400">or click to browse</p>
                </>
              )}
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={phase !== "idle"}
            className="mt-2 bg-zinc-800 text-white rounded-lg py-2 text-sm font-semibold hover:bg-zinc-700 transition-colors disabled:opacity-50"
          >
            {phase === "creating" ? "Creating..." : phase === "uploading" ? "Uploading..." : "Create Session"}
          </button>
        </form>
      </div>
    </div>
  );
}
