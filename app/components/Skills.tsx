"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Brain, Bot, Code } from "lucide-react"; // Removed Terminal as it wasn't used

const skillCategories = [
  {
    title: "Cybersecurity & Systems",
    subtitle: "OS Hardening & Networks",
    icon: Shield,
    description: "Securing infrastructure and managing advanced server environments.",
    skills: [
      "Kali Linux",
      "Windows Server",
      "Network Security",
      "DNS / DHCP / FTP",
      "Vulnerability Management",
      "IT Audit Frameworks"
    ],
    color: "#8b5cf6" // Violet
  },
  {
    title: "AI & Deep Learning",
    subtitle: "Neural Networks & Vision",
    icon: Brain,
    description: "Designing and training models for complex image recognition tasks.",
    skills: [
      "Python",
      "TensorFlow & Keras",
      "Convolutional Neural Networks (CNN)",
      "Medical AI Imaging",
      "OpenCV",
      "Data Preprocessing"
    ],
    color: "#0ea5e9" // Ocean Blue
  },
  {
    title: "Robotics & Autonomous",
    subtitle: "ROS & Pathfinding",
    icon: Bot,
    description: "Engineering navigation systems for autonomous robots in complex environments.",
    skills: [
      "ROS Noetic",
      "A* Algorithm",
      "TurtleBot3",
      "LiDAR & Odometry",
      "Dynamic Obstacle Avoidance",
      "Gazebo Simulation"
    ],
    color: "#10b981" // Emerald Green
  },
  {
    title: "Web & Development",
    subtitle: "Modern Frontend Stack",
    icon: Code,
    description: "Building responsive, high-performance portfolios and web applications.",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Git & GitHub"
    ],
    color: "#f59e0b" // Amber/Yellow
  }
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-28 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            02 / Expertise
          </span>
          <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "var(--text-secondary)", opacity: 0.3 }} />
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
          Technical Skills
        </h2>
      </div>

      {/* Stacked Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center py-10 min-h-[500px]">
        {skillCategories.map((category, i) => {
          const Icon = category.icon;
          const isHovered = hoveredIndex === i;
          
          // Calculate sliding offset for adjacent cards to push them out of the way
          let xOffset = 0;
          if (hoveredIndex !== null) {
            if (i < hoveredIndex) xOffset = -60;
            if (i > hoveredIndex) xOffset = 60;
          }

          // Initial tilted fan arrangement
          const defaultRotate = (i - 1.5) * 6; 

          return (
            <motion.article
              key={category.title}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                scale: isHovered ? 1.08 : 1,
                rotate: isHovered ? 0 : defaultRotate,
                x: isHovered ? 0 : xOffset,
                zIndex: isHovered ? 20 : i,
                borderColor: isHovered ? category.color : "var(--card-border)", // Uses dynamic color
                boxShadow: isHovered ? `0 20px 40px -10px ${category.color}66` : "0 4px 6px -1px rgba(0, 0, 0, 0.1)", // Dynamic shadow
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-80 h-[460px] rounded-2xl border flex flex-col p-6 cursor-pointer lg:-ml-20 first:ml-0 mt-6 lg:mt-0 transition-colors"
              style={{ backgroundColor: "var(--card-bg)" }} // Updated for themes
            >
              {/* Icon & Category Number */}
              <div className="flex items-center justify-between mb-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: isHovered ? category.color : "var(--card-hover)", 
                    color: isHovered ? "#fff" : category.color // Dynamic icon color
                  }}
                >
                  <Icon size={28} />
                </div>
                <span className="text-4xl font-extrabold opacity-10 transition-colors" style={{ color: "var(--text-primary)" }}>
                  0{i + 1}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 leading-snug transition-colors" style={{ color: "var(--text-primary)" }}>
                  {category.title}
                </h3>
                {/* Dynamic Subtitle Color */}
                <p className="text-sm font-medium mb-3 transition-colors" style={{ color: category.color }}>
                  {category.subtitle}
                </p>
                <p className="text-sm leading-relaxed transition-colors" style={{ color: "var(--text-secondary)" }}>
                  {category.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-[11px] font-mono font-medium transition-colors"
                    style={{ 
                      backgroundColor: isHovered ? category.color : "var(--card-hover)",  // Dynamic tag hover
                      color: isHovered ? "#fff" : "var(--text-secondary)",
                      border: isHovered ? "1px solid transparent" : "1px solid var(--card-border)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}