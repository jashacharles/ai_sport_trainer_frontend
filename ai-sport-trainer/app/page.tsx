"use client";

import Link from "next/link";

export default function Home() {
  const handleLogin = async () => {
    await fetch("http://localhost:3000");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <button
        onClick={handleLogin}
        className="flex h-12 w-48 items-center justify-center rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-colors"
      >
        Login
      </button>
      <Link
        href="/pages/authentication/create_user"
        className="flex h-12 w-48 items-center justify-center rounded-full border border-black font-medium hover:bg-zinc-100 transition-colors"
      >
        Create User
      </Link>
    </div>
  );
}
