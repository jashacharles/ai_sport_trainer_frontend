import { Session } from "@/app/features/sessions/session.types";

interface SessionCardProps {
  session: Session;
}

export default function SessionCard({ session }: SessionCardProps) {
  return (
    <div className="flex flex-col gap-3 w-full px-5 py-4 bg-white border border-zinc-200 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
          {new Date(session.createdAt).toLocaleString()}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 capitalize">
          {session.status}
        </span>
      </div>

      <p className="text-sm text-zinc-700">{session.description}</p>

      {session.feedback && (
        <div className="flex flex-col gap-2 border-t border-zinc-100 pt-3">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">AI Recommendations</p>
          <p className="text-sm text-zinc-700">{session.feedback.summary}</p>
          {session.feedback.improvements.length > 0 && (
            <ul className="list-disc list-inside text-sm text-zinc-600 flex flex-col gap-1">
              {session.feedback.improvements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
