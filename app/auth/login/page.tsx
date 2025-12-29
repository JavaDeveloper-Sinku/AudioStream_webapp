"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Music } from "lucide-react"; // Audio icon

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Invalid credentials");
      return;
    }

    const data = await res.json();
    localStorage.setItem("token", data.token);

    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-gray-900 p-8 rounded-2xl space-y-6 shadow-xl"
      >
        {/* Brand / Homepage Link */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Music className="w-6 h-6 text-green-500" />
          <Link href="/" className="text-2xl font-bold text-green-400 hover:text-green-500">
            AudioStream
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-center">Login</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 py-3 rounded-lg font-semibold text-black hover:bg-green-400 transition"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="text-green-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
