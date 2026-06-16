"use client";

export default function EditProfileForm() {
  return (
    <form className="flex flex-col gap-4 w-full max-w-md">
      <h2 className="text-2xl font-bold text-zinc-800">Edit Profile</h2>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">User Name</label>
        <input
          type="text"
          placeholder="Username"
          className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Old Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">New Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium text-zinc-700">Weight (kg)</label>
          <input
            type="number"
            placeholder="70"
            className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium text-zinc-700">Height (cm)</label>
          <input
            type="number"
            placeholder="175"
            className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Age</label>
        <input
          type="number"
          placeholder="25"
          className="border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
      </div>

      <button
        type="submit"
        className="mt-2 bg-zinc-800 text-white rounded-lg py-2 text-sm font-semibold hover:bg-zinc-700 transition-colors"
      >
        Save Changes
      </button>
    </form>
  );
}
