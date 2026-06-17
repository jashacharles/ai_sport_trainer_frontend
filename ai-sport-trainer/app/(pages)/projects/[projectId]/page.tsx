import SessionList from "@/app/components/sessions/SessionList";

export default function SessionsPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-zinc-800 mb-6">Sessions</h1>
        <SessionList sessions={[]} />
      </div>
    </div>
  );
}
