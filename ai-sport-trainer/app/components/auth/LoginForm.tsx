"use client";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-zinc-800">Login</h2>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>

        <button
          type="submit"
          className="bg-zinc-800 text-white rounded-lg py-2 text-sm font-semibold hover:bg-zinc-700 transition-colors"
        >
          Login
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
