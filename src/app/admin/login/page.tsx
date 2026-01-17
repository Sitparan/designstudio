"use client";

import { supabase } from "@/lib/supabase/client"; // Ensure this uses createBrowserClient from @supabase/ssr
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
    } else {
      // Refresh the current route to ensure the server knows we are logged in
      router.refresh();
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <input 
        className="border p-2"
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        className="border p-2"
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button 
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleLogin} 
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}