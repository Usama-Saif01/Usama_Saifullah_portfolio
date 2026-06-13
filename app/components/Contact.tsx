"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      botcheck: formData.get("botcheck"), // Our hidden honeypot
    };

    try {
      // 👇 Pointing to our custom Next.js API Route!
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-3xl mx-auto w-full" aria-label="Contact">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12" style={{ backgroundColor: "var(--border)" }} />
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            04 / Connect
          </span>
          <div className="h-px w-12" style={{ backgroundColor: "var(--border)" }} />
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
          Get In Touch
        </h2>
        <p className="text-sm leading-relaxed max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
          Have a question, a project proposal, or just want to say hi? Drop a message below and I'll get back to you as soon as possible.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="p-8 sm:p-10 rounded-[2rem] border backdrop-blur-md relative overflow-hidden"
        style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
          
          {/* Honeypot Spam Protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}>Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" className="px-4 py-3 rounded-xl border outline-none transition-colors" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)", color: "var(--text-primary)" }} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}>Email</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" className="px-4 py-3 rounded-xl border outline-none transition-colors" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)", color: "var(--text-primary)" }} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}>Message</label>
            <textarea id="message" name="message" required rows={5} placeholder="How can I help you?" className="px-4 py-3 rounded-xl border outline-none transition-colors resize-none" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)", color: "var(--text-primary)" }} />
          </div>

          <button type="submit" disabled={status === "submitting" || status === "success"} className="mt-2 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed" style={{ backgroundColor: "var(--accent)", color: "#07111D", fontFamily: "var(--font-jetbrains)" }}>
            {status === "idle" && <><Send size={18} /> Send Message</>}
            {status === "submitting" && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
            {status === "success" && <><CheckCircle2 size={18} /> Message Sent!</>}
            {status === "error" && <><AlertCircle size={18} /> Error! Try Again.</>}
          </button>
        </form>
      </motion.div>
    </section>
  );
}