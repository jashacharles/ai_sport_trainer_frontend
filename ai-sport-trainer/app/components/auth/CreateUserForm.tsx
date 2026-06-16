"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProfile } from "@/app/features/profile/profile.api";

export default function CreateUserForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    userName: "",
    password: "",
    weight: "",
    height: "",
    age: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await createProfile({
        email: form.email,
        userName: form.userName,
        password: form.password,
        weight: Number(form.weight),
        height: Number(form.height),
        age: Number(form.age),
      });
      router.push("/authentication/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <h2 className="text-2xl font-bold text-zinc-800">Create Account</h2>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Email</label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">User Name</label>
        <input
          name="userName"
          type="text"
          placeholder="Username"
          value={form.userName}
          onChange={handleChange}
          required
          className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Password</label>
        <input
          name="password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          required
          className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium text-zinc-700">Weight (kg)</label>
          <input
            name="weight"
            type="number"
            placeholder="70"
            value={form.weight}
            onChange={handleChange}
            required
            className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium text-zinc-700">Height (cm)</label>
          <input
            name="height"
            type="number"
            placeholder="175"
            value={form.height}
            onChange={handleChange}
            required
            className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Age</label>
        <input
          name="age"
          type="number"
          placeholder="25"
          value={form.age}
          onChange={handleChange}
          required
          className="border border-zinc-300 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 bg-zinc-800 text-white rounded-lg py-2 text-sm font-semibold hover:bg-zinc-700 transition-colors disabled:opacity-50"
      >
        {loading ? "Creating..." : "Create Account"}
      </button>
    </form>
  );
}
