"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Bot, Brain, Shield } from "lucide-react";

const projects = [
  {
    id: 1,
    number: "01",
    title: "TurtleBot3 Enhanced Navigation",
    subtitle: "Autonomous A* Pathfinding & Dynamic Obstacle Avoidance",
    description:
      "Engineered an advanced navigation system for TurtleBot3 in ROS Noetic. Implemented A* pathfinding algorithms with real-time dynamic obstacle detection and avoidance. The system achieves robust autonomous navigation in complex, cluttered environments.",
    tags: ["ROS Noetic", "Python", "A* Algorithm", "Robotics", "Autonomous Nav"],
    github: "https://github.com/Usama-Saif01/turtlebot3_enhanced_nav",
    icon: Bot,
    accent: "var(--accent)",
    accentLight: "var(--accent-light)",
  },
  {
    id: 2,
    number: "02",
    title: "AI-Powered Lungs Disease Diagnosis",
    subtitle: "Neural Network for Pulmonary Condition Identification",
    description:
      "Developed a convolutional neural network (CNN) system capable of identifying pulmonary conditions from medical imaging data. Designed the full ML pipeline from data preprocessing and model architecture to training and inference evaluation.",
    tags: ["CNN", "Deep Learning", "Python", "Medical AI", "TensorFlow"],
    github: "https://github.com/Usama-Saifullah/AI-Lungs-Diagnosis-CS007",
    icon: Brain,
    accent: "var(--accent2)",
    accentLight: "var(--accent2-light)",
  },
  {
    id: 3,
    number: "03",
    title: "Secure System Provisioning",
    subtitle: "Linux Hardening & Network Configuration",
    description:
      "Executed bare-metal manual installations and hardened network configurations for Kali Linux and Windows Server environments. Automated DNS, DHCP, and FTP protocol management. Implemented security benchmarks and monitoring workflows.",
    tags: ["Kali Linux", "Windows Server", "DNS/DHCP", "Security", "Bash"],
    github: "https://github.com/Usama-Saif01",
    icon: Shield,
    accent: "#16a34a",
    accentLight: "rgba(22, 163, 74, 0.08)",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-28 px-6 max-w-6xl mx-auto"
      aria-label="Projects"
    >
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
            01 / Work
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
          Featured Projects
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              className="group relative flex flex-col p-6 rounded-2xl transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              whileHover={{
                y: -4,
                boxShadow: `0 20px 40px -12px rgba(0,0,0,0.15)`,
                borderColor: project.accent,
              }}
            >
              {/* Card Number + Icon */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: project.accentLight,
                    color: project.accent,
                  }}
                >
                  <Icon size={22} />
                </div>
                <span
                  className="text-3xl font-extrabold opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    color: project.accent,
                  }}
                >
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-lg font-bold mb-1 leading-snug"
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    color: "var(--text-primary)",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs font-medium mb-3"
                  style={{ color: project.accent }}
                >
                  {project.subtitle}
                </p>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                    style={{
                      backgroundColor: "var(--tag-bg)",
                      color: "var(--tag-text)",
                      fontFamily: "var(--font-jetbrains), monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  whileHover={{ color: project.accent }}
                  aria-label={`View ${project.title} on GitHub`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={14} />
                  View Code
                </motion.a>
                <span style={{ color: "var(--border)" }}>·</span>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  whileHover={{ color: project.accent }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={14} />
                  Open
                </motion.a>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* More on GitHub */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
        className="mt-12 text-center"
      >
        <motion.a
          href="https://github.com/Usama-Saif01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: "var(--text-muted)" }}
          whileHover={{ color: "var(--accent)" }}
        >
          <Github size={16} />
          See more on GitHub
          <ExternalLink size={12} />
        </motion.a>
      </motion.div>
    </section>
  );
}
