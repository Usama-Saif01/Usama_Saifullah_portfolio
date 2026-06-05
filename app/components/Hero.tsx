"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
      aria-label="Hero"
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent2) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-4xl">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{
              backgroundColor: "var(--accent-light)",
              color: "var(--accent)",
              border: "1px solid var(--accent)",
              fontFamily: "var(--font-jetbrains), monospace",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
            Available for opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-syne), sans-serif", color: "var(--text-primary)" }}
        >
          Building Secure,{" "}
          <span className="relative inline-block" style={{ color: "var(--accent)" }}>
            Intelligent
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6 C50 2, 100 2, 198 6"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </span>{" "}
          <br className="hidden sm:block" />
          Systems.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.54 }}
          className="text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          IT Technical Support specialist &amp; Cybersecurity enthusiast. I configure
          networks, harden Linux environments, build ML pipelines, and bring
          security-first thinking to every layer of the stack.{" "}
          <span style={{ color: "var(--text-muted)" }}>Based in Shikarpur, Sindh.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.66 }}
          className="flex flex-wrap gap-4 mb-14"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer"
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff",
              fontFamily: "var(--font-syne), sans-serif",
            }}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
            <ArrowDown size={16} />
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200"
            style={{
              backgroundColor: "var(--bg-card)",
              color: "var(--text-primary)",
              border: "1px solid var(--border)",
              fontFamily: "var(--font-syne), sans-serif",
            }}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={16} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78 }}
          className="flex items-center gap-6"
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains), monospace" }}
          >
            Find me on
          </span>
          <div className="h-px flex-1 max-w-[40px]" style={{ backgroundColor: "var(--border)" }} />
          <div className="flex gap-3">
            <motion.a
              href="https://github.com/Usama-Saif01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-colors"
              style={{ backgroundColor: "var(--tag-bg)", color: "var(--text-secondary)" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/usama-saifullah-sethar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-colors"
              style={{ backgroundColor: "var(--tag-bg)", color: "var(--text-secondary)" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-muted)" }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jetbrains), monospace" }}
        >
          scroll
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
