"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, BookOpen, Code2, Award, ExternalLink } from "lucide-react"; 

const educationList = [
  { year: "2022-2025", title: "B.S in Information Technology (BSIT)", org: "The Shaikh Ayaz University", icon: GraduationCap, desc: "Rigorous foundation in networking, operating systems, cybersecurity, software engineering, and AI/ML.", color: "#8b5cf6" }, 
  { year: "2022", title: "B.Sc. (Pass)", org: "Shah Abdul Latif University", icon: BookOpen, desc: "Foundational sciences and computing curriculum providing strong analytical and mathematical skills.", color: "#f59e0b" }, 
];

// 👇 Live Coursera Verification Links Added!
const certificationList = [
  { 
    year: "2025", 
    title: "Google Prompting Essentials Specialization", 
    org: "Coursera / Google", 
    icon: Code2, 
    desc: "Advanced training in prompt engineering, leveraging AI for rapid data analysis, automation, and optimizing technical workflows.", 
    color: "#da1616",
    link: "https://coursera.org/share/020483d8ab4b3b509be8141d2b510e7d" 
  }, 
  { 
    year: "2025", 
    title: "Google Cybersecurity Professional Certificate", 
    org: "Coursera / Google", 
    icon: Briefcase, 
    desc: "Hands-on training in threat analysis, SIEM tools, network hardening, Python automation, and incident response.", 
    color: "#10b981",
    link: "https://coursera.org/share/85e382fda475cf161411b4adb39b6710" 
  }, 
];

const statsData = [
  { value: "2+", label: "AI Projects", color: "#f43f5e" },    
  { value: "BSIT", label: "Degree", color: "#10b981" },       
  { value: "Google", label: "Certified", color: "#0ea5e9" }   
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredEdu, setHoveredEdu] = useState<number | null>(null);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

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

        {/* RIGHT COLUMN: Split Timelines */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>
          
          {/* --- EDUCATION SECTION --- */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap size={18} style={{ color: "var(--accent)" }} />
              <h3 className="font-bold text-xl tracking-tight" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>Academic Background</h3>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px" style={{ backgroundColor: "var(--border)" }} />
              <div className="space-y-8">
                {educationList.map((item, i) => {
                  const Icon = item.icon;
                  const isHovered = hoveredEdu === i;
                  
                  return (
                    <motion.div 
                      key={i} 
                      onMouseEnter={() => setHoveredEdu(i)}
                      onMouseLeave={() => setHoveredEdu(null)}
                      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }} 
                      className="relative flex gap-6 cursor-pointer group"
                    >
                      <motion.div 
                        animate={{ backgroundColor: isHovered ? item.color : "var(--bg-card)", color: isHovered ? "#fff" : item.color, borderColor: "var(--bg)", outlineColor: isHovered ? item.color : "var(--border)" }}
                        className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border-[2px] outline outline-1 transition-colors"
                      >
                        <Icon size={16} />
                      </motion.div>
                      <motion.div 
                        animate={{ y: isHovered ? -5 : 0, borderColor: isHovered ? item.color : "var(--border)", backgroundColor: isHovered ? "var(--bg-card)" : "rgba(0, 0, 0, 0)", boxShadow: isHovered ? `0 20px 40px -10px ${item.color}30` : "0 4px 6px -1px rgba(0, 0, 0, 0)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="flex-1 p-6 rounded-2xl bg-transparent backdrop-blur-md border transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-bold text-sm leading-snug transition-colors" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>{item.title}</h4>
                          <span className="text-xs shrink-0 px-2 py-0.5 rounded-md transition-colors" style={{ backgroundColor: isHovered ? item.color : "var(--tag-bg)", color: isHovered ? "#fff" : "var(--text-secondary)", fontFamily: "var(--font-jetbrains)" }}>{item.year}</span>
                        </div>
                        <p className="text-xs font-semibold mb-3 transition-colors" style={{ color: isHovered ? item.color : "var(--text-muted)" }}>{item.org}</p>
                        <p className="text-sm leading-relaxed transition-colors" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* --- CERTIFICATIONS SECTION --- */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Award size={18} style={{ color: "var(--accent)" }} />
              <h3 className="font-bold text-xl tracking-tight" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>Industry Certifications</h3>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px" style={{ backgroundColor: "var(--border)" }} />
              <div className="space-y-8">
                {certificationList.map((item, i) => {
                  const Icon = item.icon;
                  const isHovered = hoveredCert === i;
                  
                  return (
                    <motion.a 
                      key={i} 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoveredCert(i)}
                      onMouseLeave={() => setHoveredCert(null)}
                      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 + 0.6, duration: 0.5 }} 
                      className="relative flex gap-6 cursor-pointer group outline-none"
                    >
                      <motion.div 
                        animate={{ backgroundColor: isHovered ? item.color : "var(--bg-card)", color: isHovered ? "#fff" : item.color, borderColor: "var(--bg)", outlineColor: isHovered ? item.color : "var(--border)" }}
                        className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border-[2px] outline outline-1 transition-colors"
                      >
                        <Icon size={16} />
                      </motion.div>
                      <motion.div 
                        animate={{ y: isHovered ? -5 : 0, borderColor: isHovered ? item.color : "var(--border)", backgroundColor: isHovered ? "var(--bg-card)" : "rgba(0, 0, 0, 0)", boxShadow: isHovered ? `0 20px 40px -10px ${item.color}30` : "0 4px 6px -1px rgba(0, 0, 0, 0)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="flex-1 p-6 rounded-2xl bg-transparent backdrop-blur-md border transition-colors relative"
                      >
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          className="absolute top-4 right-4"
                          style={{ color: item.color }}
                        >
                          <ExternalLink size={14} />
                        </motion.div>

                        <div className="flex items-start justify-between gap-2 mb-2 pr-6">
                          <h4 className="font-bold text-sm leading-snug transition-colors" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>{item.title}</h4>
                          <span className="text-xs shrink-0 px-2 py-0.5 rounded-md transition-colors" style={{ backgroundColor: isHovered ? item.color : "var(--tag-bg)", color: isHovered ? "#fff" : "var(--text-secondary)", fontFamily: "var(--font-jetbrains)" }}>{item.year}</span>
                        </div>
                        <p className="text-xs font-semibold mb-3 transition-colors" style={{ color: isHovered ? item.color : "var(--text-muted)" }}>{item.org}</p>
                        <p className="text-sm leading-relaxed transition-colors" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                      </motion.div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}