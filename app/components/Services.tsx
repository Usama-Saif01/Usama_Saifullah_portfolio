"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Server, Code2, Cpu } from "lucide-react";

const services = [
  {
    title: "System Admin & Security",
    icon: Server,
    color: "#8b5cf6", // Violet
    description: "Remote infrastructure management, Linux/Windows server configuration, network protocol hardening, and vulnerability assessments.",
    features: ["Server Setup & Hardening", "DNS / DHCP Configuration", "Security Auditing", "Remote Troubleshooting"]
  },
  {
    title: "Full-Stack Web Engineering",
    icon: Code2,
    color: "#f59e0b", // Amber
    description: "End-to-end development of lightning-fast, responsive web applications and technical portfolios optimized for SEO and performance.",
    features: ["Next.js & React Apps", "Tailwind CSS Styling", "Framer Motion Animation", "API Integration"]
  },
  {
    title: "AI & Python Automation",
    icon: Cpu,
    color: "#0ea5e9", // Ocean Blue
    description: "Custom scripting to automate repetitive tasks, data preprocessing, and integration of specialized machine learning models.",
    features: ["Python Automation Scripts", "Data Pipeline Engineering", "ML Model Integration", "Task Scheduling"]
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section id="services" className="py-28 px-6 max-w-7xl mx-auto w-full relative z-10">
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase block text-[var(--accent)]">
            Freelance & Remote
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-[var(--font-syne)] text-[var(--text-primary)]">
          What I Can Build For You
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isHovered = hoveredIndex === i;

          return (
            <motion.div
              key={service.title}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              animate={mounted ? {
                y: isHovered ? -10 : 0,
                backgroundColor: isHovered ? "var(--bg-card)" : "rgba(0, 0, 0, 0)",
                borderColor: isHovered ? service.color : "var(--border)",
                boxShadow: isHovered ? `0 25px 50px -12px ${service.color}30` : "0 4px 6px -1px rgba(0, 0, 0, 0)",
              } : {}}
              className="p-8 rounded-[2rem] border transition-colors flex flex-col h-full bg-transparent backdrop-blur-md cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors" 
                   style={{ backgroundColor: isHovered ? service.color : "var(--tag-bg)", color: isHovered ? "#fff" : service.color }}>
                <Icon size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-4 font-[var(--font-syne)] text-[var(--text-primary)]">
                {service.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-8 flex-1">
                {service.description}
              </p>

              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] font-[var(--font-jetbrains)] mb-4">
                  Deliverables
                </p>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full transition-colors" style={{ backgroundColor: isHovered ? service.color : "var(--text-muted)" }} />
                    <span className="text-sm text-[var(--text-secondary)] font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}