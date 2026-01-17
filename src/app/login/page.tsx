"use client";

import { supabase } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error.message);
    return;
  }

  // THIS IS THE CRITICAL PART:
  // 1. Refresh the router to sync server-side cookies
  router.refresh(); 
  
  // 2. Use Next.js router instead of window.location for a cleaner transition
  router.push("/admin/dashboard");
};

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4">
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
