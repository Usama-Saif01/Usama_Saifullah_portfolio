"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Terminal,
  Network,
  ShieldCheck,
  Award,
  Brain,
  Code2,
  Server,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Cpu,
  Database,
  FileCode,
  BrainCircuit,
  ScanSearch,
} from "lucide-react";

const skillCategories = [
  {
    id: "sysadmin",
    label: "01",
    title: "System Admin & Security",
    description:
      "Hardening systems, managing infrastructure, and securing networks.",
    color: "var(--accent)",
    colorLight: "var(--accent-light)",
    icon: ShieldCheck,
    certification: {
      label: "Google Cybersecurity Professional",
      icon: Award,
    },
    skills: [
      { name: "Kali Linux", icon: Terminal },
      { name: "Windows Server", icon: Server },
      { name: "Network Protocols (DNS, DHCP, FTP)", icon: Network },
      { name: "Firewall & IDS/IPS", icon: Lock },
      { name: "Vulnerability Assessment", icon: ScanSearch },
      { name: "Bash Scripting", icon: FileCode },
    ],
  },
  {
    id: "ai",
    label: "02",
    title: "AI / Machine Learning",
    description:
      "Building and deploying neural networks for real-world applications.",
    color: "var(--accent2)",
    colorLight: "var(--accent2-light)",
    icon: BrainCircuit,
    certification: null,
    skills: [
      { name: "Convolutional Neural Networks", icon: Brain },
      { name: "Python & NumPy/Pandas", icon: Code2 },
      { name: "TensorFlow / Keras", icon: Cpu },
      { name: "ML Pipelines & Data Preprocessing", icon: Database },
      { name: "Transformer Models", icon: Layers },
      { name: "ROS Noetic (Robotics)", icon: BrainCircuit },
    ],
  },
  {
    id: "web",
    label: "03",
    title: "Web Development",
    description: "Shipping modern, performant web applications end-to-end.",
    color: "#16a34a",
    colorLight: "rgba(22, 163, 74, 0.08)",
    icon: Globe,
    certification: null,
    skills: [
      { name: "React & Next.js", icon: Globe },
      { name: "TypeScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Layers },
      { name: "REST API Integration", icon: Network },
      { name: "Git & Version Control", icon: GitBranch },
      { name: "Node.js (Basics)", icon: Server },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-28 px-6"
      style={{ backgroundColor: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      aria-label="Skills"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
              02 / Expertise
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
            Technical Skills
          </h2>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: "easeOut",
                }}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: "var(--bg)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: cat.colorLight,
                      color: cat.color,
                    }}
                  >
                    <CatIcon size={20} />
                  </div>
                  <div>
                    <span
                      className="text-xs font-medium block mb-0.5"
                      style={{
                        color: cat.color,
                        fontFamily: "var(--font-jetbrains), monospace",
                      }}
                    >
                      {cat.label}
                    </span>
                    <h3
                      className="font-bold text-base leading-snug"
                      style={{
                        fontFamily: "var(--font-syne), sans-serif",
                        color: "var(--text-primary)",
                      }}
                    >
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cat.description}
                </p>

                {/* Skills List */}
                <ul className="space-y-2.5">
                  {cat.skills.map((skill, j) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.li
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: i * 0.12 + j * 0.06 + 0.3,
                          duration: 0.4,
                        }}
                        className="flex items-center gap-3"
                      >
                        <span
                          className="shrink-0"
                          style={{ color: cat.color }}
                        >
                          <SkillIcon size={14} />
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {skill.name}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Certification Badge */}
                {cat.certification && (
                  <div
                    className="mt-6 pt-5 border-t flex items-center gap-2"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <Award
                      size={14}
                      style={{ color: cat.color, flexShrink: 0 }}
                    />
                    <span
                      className="text-xs font-semibold"
                      style={{
                        color: cat.color,
                        fontFamily: "var(--font-jetbrains), monospace",
                      }}
                    >
                      ✓ {cat.certification.label}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
