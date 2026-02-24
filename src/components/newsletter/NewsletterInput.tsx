"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function NewsletterInput() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Subscribed!");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to subscribe");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="flex flex-col gap-1 min-w-[240px]">
      <form onSubmit={handleSubmit} className="relative group">
        <input
          type="email"
          placeholder="Stay updated..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="absolute right-1 top-1 bottom-1 px-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {status === "loading" ? (
            <Loader2 size={14} className="animate-spin" />
          ) : status === "success" ? (
            <CheckCircle2 size={14} />
          ) : (
            <Send size={14} />
          )}
        </button>
      </form>
      {status !== "idle" && (
        <p className={`text-[10px] px-3 font-medium ${status === "success" ? "text-green-600" : "text-red-500 animate-pulse"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
