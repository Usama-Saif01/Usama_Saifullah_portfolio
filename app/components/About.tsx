"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, BookOpen } from "lucide-react";

const timeline = [
  { year: "2024", title: "B.Sc. in Information Technology (BSIT)", org: "The Shaikh Ayaz University", icon: GraduationCap, desc: "Rigorous foundation in networking, operating systems, cybersecurity, software engineering, and AI/ML." },
  { year: "2022", title: "B.Sc. (Pass)", org: "Shah Abdul Latif University", icon: GraduationCap, desc: "Foundational sciences and computing curriculum providing strong analytical and mathematical skills." },
  { year: "Ongoing", title: "Google Cybersecurity Professional Certificate", org: "Coursera / Google", icon: Briefcase, desc: "Hands-on training in threat analysis, SIEM tools, network hardening, Python automation, and incident response." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6 max-w-6xl mx-auto w-full" aria-label="About">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains)" }}>
            03 / Background
          </span>
          <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "var(--border)" }} />
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
          About Me
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div className="flex items-center gap-2 mb-6">
            <MapPin size={14} style={{ color: "var(--accent)" }} />
            <span className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}>Shikarpur, Sindh, Pakistan</span>
          </div>

          <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <p>I am an IT professional with a <strong style={{ color: "var(--text-primary)" }}>BSIT from The Shaikh Ayaz University</strong> and a deep passion for building systems that are both secure and intelligent.</p>
            <p>On the security side, I specialize in <strong style={{ color: "var(--text-primary)" }}>Kali Linux environments</strong>, Windows Server configuration, and the full suite of network protocols. I approach every system with a security-first mindset.</p>
            <p>In AI/ML, I have built production-grade CNN pipelines for medical imaging diagnosis and implemented autonomous robotics navigation with A* pathfinding in <strong style={{ color: "var(--text-primary)" }}>ROS Noetic</strong>.</p>
            <p>Beyond corporate IT, I am actively exploring opportunities as a <strong style={{ color: "var(--text-primary)" }}>Junior Science Teacher</strong> — motivated by a genuine desire to equip the next generation with technical literacy.</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10">
            {[ { value: "2+", label: "AI Projects" }, { value: "BSIT", label: "Degree" }, { value: "Google", label: "Certified" } ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl text-center bg-[var(--bg-card)] border border-[var(--border)]">
                <div className="text-2xl font-extrabold mb-1" style={{ fontFamily: "var(--font-syne)", color: "var(--accent)" }}>{stat.value}</div>
                <div className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>
          <div className="flex items-center gap-2 mb-8">
            <BookOpen size={16} style={{ color: "var(--accent)" }} />
            <h3 className="font-bold text-lg" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>Education & Credentials</h3>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px" style={{ backgroundColor: "var(--border)" }} />
            <div className="space-y-8">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }} className="relative flex gap-6">
                    <div className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border-[2px] border-[var(--bg)] outline outline-1 outline-[var(--border)]" style={{ backgroundColor: "var(--tag-bg)", color: "var(--accent)" }}>
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-bold text-sm leading-snug" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>{item.title}</h4>
                        <span className="text-xs shrink-0 px-2 py-0.5 rounded-md" style={{ backgroundColor: "var(--tag-bg)", color: "var(--accent)", fontFamily: "var(--font-jetbrains)" }}>{item.year}</span>
                      </div>
                      <p className="text-xs font-medium mb-2" style={{ color: "var(--accent)" }}>{item.org}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}