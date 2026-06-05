"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "usamasethar1@gmail.com",
    href: "mailto:usamasethar1@gmail.com",
    icon: Mail,
    color: "var(--accent)",
  },
  {
    label: "GitHub",
    value: "Usama-Saif01",
    href: "https://github.com/Usama-Saif01",
    icon: Github,
    color: "var(--text-primary)",
  },
  {
    label: "LinkedIn",
    value: "usama-saifullah-sethar",
    href: "https://linkedin.com/in/usama-saifullah-sethar",
    icon: Linkedin,
    color: "var(--accent2)",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 px-6"
      style={{
        backgroundColor: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
      }}
      aria-label="Contact"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{
                color: "var(--accent)",
                fontFamily: "var(--font-jetbrains), monospace",
              }}
            >
              04 / Contact
            </span>
            <div
              className="h-px flex-1 max-w-[60px]"
              style={{ backgroundColor: "var(--border)" }}
            />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              color: "var(--text-primary)",
            }}
          >
            Let&apos;s Connect
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p
              className="text-xl leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Whether you have a role in{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                IT technical support
              </span>
              , a cybersecurity challenge, an AI project, or just want to talk
              Linux and networks — I&apos;m always open to interesting
              conversations.
            </p>

            {/* Primary CTA */}
            <motion.a
              href="mailto:usamasethar1@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
                fontFamily: "var(--font-syne), sans-serif",
              }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send size={18} />
              Send a Message
            </motion.a>

            {/* Availability note */}
            <div className="mt-6 flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#16a34a" }}
              />
              <span
                className="text-sm"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-jetbrains), monospace",
                }}
              >
                Open to full-time & contract roles
              </span>
            </div>
          </motion.div>

          {/* Right: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl group transition-all duration-200"
                  style={{
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.45 }}
                  whileHover={{
                    y: -2,
                    borderColor: link.color,
                    boxShadow: `0 8px 24px -8px rgba(0,0,0,0.12)`,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      backgroundColor: "var(--tag-bg)",
                      color: link.color,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs font-medium mb-0.5 uppercase tracking-widest"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-jetbrains), monospace",
                      }}
                    >
                      {link.label}
                    </p>
                    <p
                      className="text-sm font-semibold truncate"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: link.color }}
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
