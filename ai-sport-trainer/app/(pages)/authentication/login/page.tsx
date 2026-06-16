import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Link
        href="/pages/projects/view_projects"
        className="flex h-12 w-48 items-center justify-center rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-colors"
      >
        Login
      </Link>
    </div>
  );
}
