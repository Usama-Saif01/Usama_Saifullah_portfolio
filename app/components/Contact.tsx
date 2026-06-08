"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight, Send } from "lucide-react";

// Custom SVG Icons for Brands
const GithubIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const contactLinks = [
  { label: "Email", value: "usamasethar1@gmail.com", href: "mailto:usamasethar1@gmail.com", icon: Mail, color: "var(--accent)" },
  { label: "GitHub", value: "Usama-Saif01", href: "https://github.com/Usama-Saif01", icon: GithubIcon, color: "var(--text-primary)" },
  { label: "LinkedIn", value: "usama-saifullah-sethar", href: "https://linkedin.com/in/usama-saifullah-sethar", icon: LinkedinIcon, color: "#0a66c2" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-28 px-6 w-full bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] font-[var(--font-jetbrains)]">04 / Contact</span>
            <div className="h-px flex-1 max-w-[60px] bg-[var(--border)]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] font-[var(--font-syne)]">
            Let&apos;s Connect
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }}>
            <p className="text-xl leading-relaxed mb-8 text-[var(--text-secondary)]">
              Whether you have a role in <span className="text-[var(--text-primary)] font-semibold">IT technical support</span>, a cybersecurity challenge, an AI project, or just want to talk Linux and networks — I&apos;m always open to interesting conversations.
            </p>

            <motion.a
              href="mailto:usamasethar1@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 bg-[var(--accent)] text-[#f8f7f4]"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send size={18} /> Send a Message
            </motion.a>

            <div className="mt-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full animate-pulse bg-green-600" />
              <span className="text-sm text-[var(--text-secondary)] font-[var(--font-jetbrains)]">Open to full-time & contract roles</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }} className="space-y-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl group transition-all duration-200 bg-[var(--bg-card)] border border-[var(--border)]"
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.45 }}
                  whileHover={{ y: -2, borderColor: link.color, boxShadow: `0 8px 24px -8px rgba(0,0,0,0.12)` }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors bg-[var(--tag-bg)]" style={{ color: link.color }}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium mb-0.5 uppercase tracking-widest text-[var(--text-muted)] font-[var(--font-jetbrains)]">{link.label}</p>
                    <p className="text-sm font-semibold truncate text-[var(--text-primary)]">{link.value}</p>
                  </div>
                  <ArrowUpRight size={16} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: link.color }} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}