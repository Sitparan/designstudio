"use client";

import { useState } from "react";
import { Input, Textarea, Button } from "@/components/ui";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget; // HTMLFormElement
    const formData = new FormData(form);

    const data = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setStatus(result.message);

      if (res.ok && form) {
        form.reset(); // ✅ Safe reset
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input id="name" name="name" label="Name" required />
      <Input id="email" name="email" type="email" label="Email" required />
      <Textarea id="message" name="message" label="Message" rows={5} required />

      <Button type="submit" variant="primary" className="w-full">
        {loading ? "Sending..." : "Send Message"}
      </Button>

      {status && (
        <p className="text-sm text-center text-green-600">{status}</p>
      )}
    </form>
  );
}
