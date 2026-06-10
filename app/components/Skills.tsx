"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Brain, Bot, Code } from "lucide-react";

const skillCategories = [
  { title: "Cybersecurity & Systems", subtitle: "OS Hardening & Networks", icon: Shield, description: "Securing infrastructure and managing advanced server environments.", skills: ["Kali Linux", "Windows Server", "Network Security", "DNS / DHCP / FTP", "Vulnerability Management", "IT Audit Frameworks"], color: "#8b5cf6" },
  { title: "AI & Deep Learning", subtitle: "Neural Networks & Vision", icon: Brain, description: "Designing and training models for complex image recognition tasks.", skills: ["Python", "TensorFlow & Keras", "Convolutional Neural Networks (CNN)", "Medical AI Imaging", "OpenCV", "Data Preprocessing"], color: "#0ea5e9" },
  { title: "Robotics & Autonomous", subtitle: "ROS & Pathfinding", icon: Bot, description: "Engineering navigation systems for autonomous robots in complex environments.", skills: ["ROS Noetic", "A* Algorithm", "TurtleBot3", "LiDAR & Odometry", "Dynamic Obstacle Avoidance", "Gazebo Simulation"], color: "#10b981" },
  { title: "Web & Development", subtitle: "Modern Frontend Stack", icon: Code, description: "Building responsive, high-performance portfolios and web applications.", skills: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Git & GitHub"], color: "#f59e0b" }
];

export default function Skills() {
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
    <section id="skills" className="py-28 px-6 max-w-7xl mx-auto overflow-hidden w-full">
      <div className="mb-16 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase block" style={{ color: "var(--accent)" }}>
            02 / Expertise
          </span>
          <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "var(--text-secondary)", opacity: 0.3 }} />
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
          Technical Skills
        </h2>
      </div>

      <div className="relative flex flex-col lg:flex-row justify-center items-center py-20 min-h-[650px] w-full">
        {skillCategories.map((category, i) => {
          const Icon = category.icon;
          const isHovered = hoveredIndex === i;
          
          const offset = i - 1.5;
          const defaultRotate = offset * 6; 
          const defaultX = offset * 300;    
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
              if (i < hoveredIndex) targetX = defaultX - 100;
              if (i > hoveredIndex) targetX = defaultX + 100;
            }
          }

          return (
            <motion.article
              key={category.title}
              onMouseEnter={() => isDesktop && setHoveredIndex(i)}
              onMouseLeave={() => isDesktop && setHoveredIndex(null)}
              animate={
                mounted ? {
                  scale: targetScale,
                  rotate: targetRotate,
                  x: targetX,
                  y: targetY,
                  zIndex: targetZ,
                  // 👇 Bug fixed right here!
                  backgroundColor: isHovered && isDesktop ? "var(--bg-card)" : "rgba(0, 0, 0, 0)",
                  borderColor: isHovered ? category.color : "var(--border)",
                  boxShadow: isHovered ? `0 25px 50px -12px ${category.color}40` : "0 4px 6px -1px rgba(0, 0, 0, 0)",
                } : {}
              }
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="w-full max-w-sm mx-auto lg:w-[320px] min-h-[500px] rounded-[2rem] border flex flex-col justify-between p-8 cursor-pointer transition-colors shadow-2xl lg:absolute relative mb-8 lg:mb-0 bg-transparent backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors" style={{ backgroundColor: isHovered && isDesktop ? category.color : "var(--tag-bg)", color: isHovered && isDesktop ? "#fff" : category.color }}>
                    <Icon size={28} />
                  </div>
                  <span className="text-5xl font-black opacity-[0.04] transition-colors" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>
                    0{i + 1}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3 leading-snug transition-colors" style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}>{category.title}</h3>
                  <p className="text-sm font-medium mb-4 transition-colors" style={{ color: category.color }}>{category.subtitle}</p>
                  <p className="text-sm leading-relaxed transition-colors" style={{ color: "var(--text-secondary)" }}>{category.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 mt-auto border-t transition-colors" style={{ borderColor: "var(--border)" }}>
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-[11px] font-mono font-bold transition-colors"
                    style={{ 
                      backgroundColor: isHovered && isDesktop ? category.color : "var(--tag-bg)", 
                      color: isHovered && isDesktop ? "#fff" : "var(--text-secondary)",
                      border: isHovered && isDesktop ? "1px solid transparent" : "1px solid var(--border)"
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