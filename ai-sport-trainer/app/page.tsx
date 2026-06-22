import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Link
        href="/authentication/login"
        className="flex h-12 w-48 items-center justify-center rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-colors"
      >
        Login
      </Link>
      <Link
        href="/authentication/create_user"
        className="flex h-12 w-48 items-center justify-center rounded-full border border-black font-medium hover:bg-zinc-100 transition-colors"
      >
        Create User
      </Link>
    </div>
  );
}