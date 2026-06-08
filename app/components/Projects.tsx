"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Brain, Shield, ScanFace, ExternalLink } from "lucide-react";

// --- Custom SVG Icon ---
const GithubIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
// -----------------------

const projects = [
  {
    title: "TurtleBot3 Enhanced Navigation",
    subtitle: "Autonomous A* Pathfinding",
    description: "Engineered an advanced navigation system in ROS Noetic utilizing A* algorithms with real-time dynamic obstacle detection in cluttered environments.",
    icon: Bot,
    github: "https://github.com/Usama-Saif01/turtlebot3_enhanced_nav",
    color: "#10b981" // Emerald Green (Robotics)
  },
  {
    title: "AI-Powered Lungs Disease Diagnosis",
    subtitle: "Neural Network for Medical Imaging",
    description: "Developed a CNN capable of identifying pulmonary conditions from medical imaging data. Built the full pipeline from data preprocessing to inference.",
    icon: Brain,
    github: "https://github.com/Usama-Saifullah/AI-Lungs-Diagnosis-CS007",
    color: "#0ea5e9" // Ocean Blue (Medical AI)
  },
  {
    title: "Secure System Provisioning",
    subtitle: "Linux Hardening & Network Config",
    description: "Executed bare-metal installations and hardened environments for Kali Linux and Windows Server. Automated DNS, DHCP, and FTP protocol management.",
    icon: Shield,
    github: "https://github.com/Usama-Saif01",
    color: "#8b5cf6" // Violet (Cybersecurity)
  },
  {
    title: "Face Emotion Recognition CNN",
    subtitle: "Real-Time Expression Classification",
    description: "Deep learning project classifying facial expressions into 7 emotions using a custom CNN and TensorFlow. Includes real-time webcam detection via OpenCV.",
    icon: ScanFace,
    github: "https://github.com/Usama-Saif01/Face-Emotion-Recognition",
    color: "#f43f5e" // Rose Pink (Vision AI)
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
          Featured Work
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center py-10 min-h-[500px]">
        {projects.map((project, i) => {
          const Icon = project.icon;
          const isHovered = hoveredIndex === i;
          
          let xOffset = 0;
          if (hoveredIndex !== null) {
            if (i < hoveredIndex) xOffset = -50;
            if (i > hoveredIndex) xOffset = 50;
          }

          const defaultRotate = (i - 1.5) * 6; 

          return (
            <motion.article
              key={project.title}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                scale: isHovered ? 1.08 : 1,
                rotate: isHovered ? 0 : defaultRotate,
                x: isHovered ? 0 : xOffset,
                zIndex: isHovered ? 20 : i,
                borderColor: isHovered ? project.color : "var(--card-border)", 
                boxShadow: isHovered ? `0 20px 40px -10px ${project.color}66` : "0 4px 6px -1px rgba(0, 0, 0, 0.1)", 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              /* 👇 The Fix: bg-[var(--card-bg)] added to className, style prop removed */
              className="relative w-80 h-[420px] rounded-2xl border flex flex-col p-6 cursor-pointer lg:-ml-20 first:ml-0 mt-6 lg:mt-0 transition-colors bg-[var(--card-bg)]"
            >
              <div className="flex items-center justify-between mb-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: isHovered ? project.color : "var(--card-hover)", 
                    color: isHovered ? "#fff" : project.color 
                  }}
                >
                  <Icon size={28} />
                </div>
                <span className="text-4xl font-extrabold opacity-10 transition-colors" style={{ color: "var(--text-primary)" }}>
                  0{i + 1}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 leading-snug transition-colors" style={{ color: "var(--text-primary)" }}>
                  {project.title}
                </h3>
                <p className="text-sm font-medium mb-4 transition-colors" style={{ color: project.color }}>
                  {project.subtitle}
                </p>
                <p className="text-sm leading-relaxed transition-colors" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-auto border-t transition-colors" style={{ borderColor: "var(--card-border)" }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70" style={{ color: "var(--text-secondary)" }}>
                  <GithubIcon size={16} /> Source
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70" style={{ color: "var(--text-secondary)" }}>
                  <ExternalLink size={16} /> Open
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}