"use client";

import { SessionStatus } from "@/app/features/sessions/session.types";

interface AddSessionModalProps {
  onClose: () => void;
}

export default function AddSessionModal({ onClose }: AddSessionModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 transition-colors text-xl leading-none"
        >
          ✕
        </button>

        <form className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-zinc-800">Add Session</h2>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700">Name</label>
            <input
              type="text"
              placeholder="Session name"
              className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700">Description</label>
            <textarea
              placeholder="Describe this session..."
              rows={3}
              className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 resize-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700">Status</label>
            <select className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 bg-white">
              {(["pending", "processing", "completed", "failed"] as SessionStatus[]).map((s) => (
                <option key={s} value={s} className="capitalize">{s}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="mt-2 bg-zinc-800 text-white rounded-lg py-2 text-sm font-semibold hover:bg-zinc-700 transition-colors"
          >
            Create Session
          </button>
        </form>
      </div>
    </div>
  );
}
