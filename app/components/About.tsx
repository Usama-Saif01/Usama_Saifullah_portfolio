"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, BookOpen } from "lucide-react";

// 👇 Added distinct colors for each timeline event
const timeline = [
  { year: "2022-2025", title: "B.S in Information Technology (BSIT)", org: "The Shaikh Ayaz University", icon: GraduationCap, desc: "Rigorous foundation in networking, operating systems, cybersecurity, software engineering, and AI/ML.", color: "#8b5cf6" }, // Violet
  { year: "2022", title: "B.Sc. (Pass)", org: "Shah Abdul Latif University", icon: GraduationCap, desc: "Foundational sciences and computing curriculum providing strong analytical and mathematical skills.", color: "#f59e0b" }, // Amber
  { year: "2024", title: "Google Cybersecurity Professional Certificate", org: "Coursera / Google", icon: Briefcase, desc: "Hands-on training in threat analysis, SIEM tools, network hardening, Python automation, and incident response.", color: "#10b981" }, // Emerald
];

// 👇 Added distinct colors for each stat box
const statsData = [
  { value: "2+", label: "AI Projects", color: "#f43f5e" },    // Rose Pink
  { value: "BSIT", label: "Degree", color: "#10b981" },       // Emerald Green
  { value: "Google", label: "Certified", color: "#0ea5e9" }   // Ocean Blue
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  // Track hover states for dynamic coloring
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredTime, setHoveredTime] = useState<number | null>(null);

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
        {/* LEFT COLUMN: Narrative & Stats */}
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

          {/* DYNAMIC QUICK STATS */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-10">
            {statsData.map((stat, i) => {
              const isHovered = hoveredStat === i;
              return (
                <motion.div 
                  key={stat.label}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                  animate={{
                    y: isHovered ? -5 : 0,
                    borderColor: isHovered ? stat.color : "var(--border)",
                    backgroundColor: isHovered ? "var(--bg-card)" : "rgba(0, 0, 0, 0)",
                    boxShadow: isHovered ? `0 15px 30px -10px ${stat.color}40` : "0 4px 6px -1px rgba(0, 0, 0, 0)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="p-2 sm:p-6 rounded-2xl text-center border bg-transparent backdrop-blur-md flex flex-col justify-center items-center overflow-hidden transition-colors cursor-pointer"
                >
                  <div 
                    className="text-base sm:text-3xl font-extrabold mb-1 tracking-tight transition-colors" 
                    style={{ fontFamily: "var(--font-syne)", color: isHovered ? stat.color : "var(--text-primary)" }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-[10px] sm:text-xs whitespace-nowrap transition-colors" 
                    style={{ color: isHovered ? "var(--text-primary)" : "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Timeline */}
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
                const isHovered = hoveredTime === i;
                
                return (
                  <motion.div 
                    key={i} 
                    onMouseEnter={() => setHoveredTime(i)}
                    onMouseLeave={() => setHoveredTime(null)}
                    initial={{ opacity: 0, y: 20 }} 
                    animate={inView ? { opacity: 1, y: 0 } : {}} 
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }} 
                    className="relative flex gap-6 cursor-pointer group"
                  >
                    {/* Animated Timeline Node */}
                    <motion.div 
                      animate={{
                        backgroundColor: isHovered ? item.color : "var(--bg-card)",
                        color: isHovered ? "#fff" : item.color,
                        borderColor: "var(--bg)",
                        outlineColor: isHovered ? item.color : "var(--border)"
                      }}
                      className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border-[2px] outline outline-1 transition-colors"
                    >
                      <Icon size={16} />
                    </motion.div>
                    
                    {/* Animated Timeline Card */}
                    <motion.div 
                      animate={{
                        y: isHovered ? -5 : 0,
                        borderColor: isHovered ? item.color : "var(--border)",
                        backgroundColor: isHovered ? "var(--bg-card)" : "rgba(0, 0, 0, 0)",
                        boxShadow: isHovered ? `0 20px 40px -10px ${item.color}30` : "0 4px 6px -1px rgba(0, 0, 0, 0)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="flex-1 p-6 rounded-2xl bg-transparent backdrop-blur-md border transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-bold text-sm leading-snug transition-colors" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
                          {item.title}
                        </h4>
                        <span 
                          className="text-xs shrink-0 px-2 py-0.5 rounded-md transition-colors" 
                          style={{ backgroundColor: isHovered ? item.color : "var(--tag-bg)", color: isHovered ? "#fff" : "var(--text-secondary)", fontFamily: "var(--font-jetbrains)" }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <p className="text-xs font-semibold mb-3 transition-colors" style={{ color: isHovered ? item.color : "var(--text-muted)" }}>{item.org}</p>
                      <p className="text-sm leading-relaxed transition-colors" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                    </motion.div>
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