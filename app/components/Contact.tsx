"use client";

import { useState, useRef } from "react";
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

// Added distinct brand colors for the glow effects
const contactLinks = [
  { label: "Email", value: "usamasethar1@gmail.com", href: "mailto:usamasethar1@gmail.com", icon: Mail, color: "#ea580c" }, // Orange matches your accent
  { label: "GitHub", value: "Usama-Saif01", href: "https://github.com/Usama-Saif01", icon: GithubIcon, color: "#8b5cf6" }, // Violet to match your tech stack
  { label: "LinkedIn", value: "usama-saifullah-sethar", href: "https://linkedin.com/in/usama-saifullah-sethar", icon: LinkedinIcon, color: "#0a66c2" }, // Official LinkedIn Blue
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  // Track hover state for the glassmorphism glow effect
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return (
    <section id="contact" ref={ref} className="py-28 px-6 w-full bg-[var(--bg)] border-t border-[var(--border)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
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
          
          {/* LEFT COLUMN: Text & Main CTA */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }}>
            <p className="text-lg sm:text-xl leading-relaxed mb-8 text-[var(--text-secondary)]">
              Whether you have a role in <span className="text-[var(--text-primary)] font-bold">IT technical support</span>, a cybersecurity challenge, an AI project, or just want to talk Linux and networks — I&apos;m always open to interesting conversations.
            </p>

            <motion.a
              href="mailto:usamasethar1@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 bg-[var(--accent)] text-[#f8f7f4] shadow-lg"
              whileHover={{ 
                scale: 1.03, 
                y: -2,
                boxShadow: "0 20px 40px -10px var(--accent)" // Adds a glowing shadow on hover
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Send size={18} /> Send a Message
            </motion.a>

            <div className="mt-8 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-[var(--text-secondary)] font-[var(--font-jetbrains)]">Open to full-time & contract roles</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Glassmorphism Links */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }} className="space-y-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              const isHovered = hoveredLink === i;

              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.45 }}
                >
                  <motion.a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredLink(i)}
                    onMouseLeave={() => setHoveredLink(null)}
                    animate={{
                      y: isHovered ? -5 : 0,
                      borderColor: isHovered ? link.color : "var(--border)",
                      backgroundColor: isHovered ? "var(--bg-card)" : "rgba(0,0,0,0)",
                      boxShadow: isHovered ? `0 20px 40px -10px ${link.color}30` : "0 4px 6px -1px rgba(0,0,0,0)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="flex items-center gap-4 p-4 sm:p-6 rounded-2xl bg-transparent backdrop-blur-md border transition-colors cursor-pointer"
                  >
                    {/* Animated Icon Box */}
                    <motion.div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border outline outline-1 transition-colors"
                      animate={{
                        backgroundColor: isHovered ? link.color : "var(--tag-bg)",
                        color: isHovered ? "#fff" : link.color,
                        borderColor: "var(--bg)",
                        // 👇 FIX: Completely changed to rgba(0,0,0,0)
                        outlineColor: isHovered ? link.color : "rgba(0,0,0,0)" 
                      }}
                    >
                      <Icon size={20} />
                    </motion.div>
                    
                    {/* Animated Text Block */}
                    <div className="flex-1 min-w-0">
                      <motion.p 
                        className="text-xs font-medium mb-1 uppercase tracking-widest font-[var(--font-jetbrains)] transition-colors"
                        animate={{ color: isHovered ? "var(--text-primary)" : "var(--text-muted)" }}
                      >
                        {link.label}
                      </motion.p>
                      <h4 
                        className="text-sm sm:text-base font-bold truncate transition-colors" 
                        style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}
                      >
                        {link.value}
                      </h4>
                    </div>

                    {/* Animated Arrow */}
                    <motion.div
                      animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: link.color }}
                    >
                      <ArrowUpRight size={20} className="shrink-0" />
                    </motion.div>
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}