"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Brain, Shield, ScanFace, ExternalLink, Smartphone } from "lucide-react";
import Link from "next/link";

// --- Custom SVG Icon ---
const GithubIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const projects = [
  {
    title: "Health Track App",
    subtitle: "Native Android Health Tracker",
    description: "A native Android health tracking application built via Trusted Web Activities, deployed on edge infrastructure.",
    icon: Smartphone,
    github: "https://github.com/Usama-Saif01",
    color: "#eab308",
    caseStudy: "/projects/health-track"
  },
  {
    title: "TurtleBot3 Enhanced Navigation",
    subtitle: "Autonomous A* Pathfinding",
    description: "Engineered an advanced navigation system in ROS Noetic utilizing A* algorithms with real-time dynamic obstacle detection in cluttered environments.",
    icon: Bot,
    github: "https://github.com/Usama-Saif01/turtlebot3_enhanced_nav",
    color: "#10b981"
  },
  {
    title: "AI-Powered Lungs Disease Diagnosis",
    subtitle: "Neural Network for Medical Imaging",
    description: "Developed a CNN capable of identifying pulmonary conditions from medical imaging data. Built the full pipeline from data preprocessing to inference.",
    icon: Brain,
    github: "https://github.com/Usama-Saifullah/AI-Lungs-Diagnosis-CS007",
    color: "#0ea5e9"
  },
  {
    title: "Secure System Provisioning",
    subtitle: "Linux Hardening & Network Config",
    description: "Executed bare-metal installations and hardened environments for Kali Linux and Windows Server. Automated DNS, DHCP, and FTP protocol management.",
    icon: Shield,
    github: "https://github.com/Usama-Saif01",
    color: "#8b5cf6"
  },
  {
    title: "Face Emotion Recognition CNN",
    subtitle: "Real-Time Expression Classification",
    description: "Deep learning project classifying facial expressions into 7 emotions using a custom CNN and TensorFlow. Includes real-time webcam detection via OpenCV.",
    icon: ScanFace,
    github: "https://github.com/Usama-Saif01/Face-Emotion-Recognition",
    color: "#f43f5e"
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkViewport = () => setIsDesktop(window.innerWidth >= 1024);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <section id="projects" className="py-28 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16 text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
          Featured Work
        </h2>
      </div>

      <div className="relative flex flex-col lg:flex-row justify-center items-center py-20 min-h-[650px] w-full">
        {projects.map((project, i) => {
          const Icon = project.icon;
          const isHovered = hoveredIndex === i;

          const offset = i - (projects.length - 1) / 2;
          const defaultRotate = offset * 6;
          const defaultX = offset * 260;
          const defaultY = Math.abs(offset) * 16;

          let targetX = isDesktop ? defaultX : 0;
          let targetY = isDesktop ? defaultY : 0;
          let targetRotate = isDesktop ? defaultRotate : 0;
          let targetScale = 1;
          let targetZ = i;

          if (isDesktop && hoveredIndex !== null) {
            if (isHovered) {
              targetY = defaultY - 30;
              targetRotate = 0;
              targetScale = 1.05;
              targetZ = 50;
            } else {
              if (i < hoveredIndex) targetX = defaultX - 60;
              if (i > hoveredIndex) targetX = defaultX + 60;
            }
          }

          return (
            <motion.article
              key={project.title}
              onMouseEnter={() => isDesktop && setHoveredIndex(i)}
              onMouseLeave={() => isDesktop && setHoveredIndex(null)}
              animate={
                mounted ? {
                  scale: targetScale,
                  rotate: targetRotate,
                  x: targetX,
                  y: targetY,
                  zIndex: targetZ,
                  backgroundColor: isHovered && isDesktop ? "var(--bg-card)" : "rgba(0, 0, 0, 0)",
                  borderColor: isHovered ? project.color : "var(--border)",
                  boxShadow: isHovered ? `0 25px 50px -12px ${project.color}40` : "0 4px 6px -1px rgba(0, 0, 0, 0)",
                } : {}
              }
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="w-full max-w-sm mx-auto lg:w-[320px] h-[480px] rounded-[2rem] border flex flex-col p-8 cursor-pointer transition-colors shadow-2xl lg:absolute relative mb-8 lg:mb-0 bg-transparent backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors" style={{ backgroundColor: isHovered && isDesktop ? project.color : "var(--tag-bg)", color: isHovered && isDesktop ? "#fff" : project.color }}>
                  <Icon size={28} />
                </div>
                <span className="text-5xl font-black opacity-[0.04] transition-colors" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
                  0{i + 1}
                </span>
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-3 leading-snug transition-colors" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>{project.title}</h3>
                <p className="text-sm font-medium mb-4 transition-colors" style={{ color: project.color }}>{project.subtitle}</p>
                <p className="text-sm leading-relaxed transition-colors" style={{ color: "var(--text-secondary)" }}>{project.description}</p>
              </div>

              <div className="mt-auto border-t pt-6 flex items-center justify-between gap-2 transition-colors" style={{ borderColor: "var(--border)" }}>
                <a href={project.github} className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70 shrink-0" style={{ color: "var(--text-secondary)" }}>
                  <GithubIcon size={18} /> Source
                </a>
                {project.caseStudy ? (
                  <Link
                    href={project.caseStudy}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-opacity hover:opacity-80"
                    style={{ backgroundColor: "var(--accent)", color: "#07111D", fontFamily: "var(--font-jetbrains)" }}
                  >
                    Read Case Study
                  </Link>
                ) : (
                  <a href={project.github} className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70 shrink-0" style={{ color: "var(--text-secondary)" }}>
                    <ExternalLink size={18} /> Open
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}