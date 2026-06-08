"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t w-full bg-[var(--bg)] border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          className="text-sm text-[var(--text-muted)] font-[var(--font-jetbrains)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © {year} Usama Sethar.{" "}
          <span style={{ color: "var(--accent)" }}>All rights reserved.</span>
        </motion.p>
        <motion.p
          className="text-sm text-[var(--text-muted)] font-[var(--font-jetbrains)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Built with <span style={{ color: "var(--accent)" }}>Next.js 16</span> &{" "}
          <span style={{ color: "var(--accent)" }}>Tailwind CSS v4</span>
        </motion.p>
      </div>
    </footer>
  );
}