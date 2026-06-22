"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { attemptLogin } from "@/app/features/auth/auth.api";
import { getProjects } from "@/app/features/projects/project.api";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await attemptLogin({ email, password });
      console.log("Login successful, received result:", result);

      sessionStorage.setItem("access_token", result.access_token);
      sessionStorage.setItem("client", JSON.stringify(result.client));
      sessionStorage.setItem("projects", JSON.stringify(result.projects));
      router.push("/projects");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-zinc-800">Login</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-zinc-800 text-white rounded-lg py-2 text-sm font-semibold hover:bg-zinc-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="flex flex-col gap-2 text-sm text-center">
        <button className="text-zinc-600 hover:text-zinc-800 hover:underline transition-colors">
          Forgot Password?
        </button>
        <span className="text-zinc-400">Don&apos;t have an account?</span>
        <button className="text-zinc-800 font-semibold hover:underline transition-colors">
          Create User
        </button>
      </div>
    </div>
  );
}
