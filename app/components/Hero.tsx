"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, FileText } from "lucide-react";

function useTypewriter(phrases: string[]) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      setText((prev) => 
        isDeleting 
          ? fullText.substring(0, prev.length - 1) 
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases]);

  return text;
}

export default function Hero() {
  const phrases = [
    "IT & Cybersecurity Professional",
    "Aspiring IT Auditor",
    "Google Cybersecurity Certified"
  ];
  
  const typedText = useTypewriter(phrases);

  return (
    <section 
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16"
      style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden z-0">
         <span 
           className="text-[18vw] font-black tracking-widest text-transparent whitespace-nowrap" 
           style={{ WebkitTextStroke: "2px var(--text-primary)" }}
         >
            CYBERSEC
         </span>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-mono font-semibold tracking-[0.18em] uppercase mb-6"
          style={{ color: "var(--accent)" }}
        >
          Available for opportunities
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.9] tracking-tight mb-8"
        >
          Usama
          <br className="sm:hidden" /> Saifullah.
        </motion.h1>

        {/* ── THE HERO DP (Tied to Navbar via layoutId) ── */}
        <motion.div
          layoutId="hero-dp-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
          className="relative w-48 h-64 sm:w-64 sm:h-80 md:w-[300px] md:h-[400px] rounded-[100px] sm:rounded-[150px] overflow-hidden mb-10 border-[6px] shadow-2xl z-20"
          style={{ 
            borderColor: "var(--bg)", 
            backgroundColor: "var(--accent)",
            boxShadow: "0 20px 50px -10px var(--accent)"
          }}
        >
          <motion.img 
            layoutId="hero-dp-image"
            src="/dp.webp" 
            alt="Usama Saifullah" 
            className="w-full h-full object-cover object-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="h-8 flex items-center justify-center mb-6"
        >
          <span className="text-lg sm:text-xl font-mono font-bold" style={{ color: "var(--accent)" }}>
            {typedText}
            <span className="inline-block ml-1 w-2 h-5 align-middle animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          Building secure systems, configuring networks, and leveraging AI to solve complex technical challenges. Based in Shikarpur, Sindh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-transform hover:scale-105"
            style={{ backgroundColor: "var(--text-primary)", color: "var(--bg)" }}
          >
            View Projects <ChevronRight size={18} />
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm border transition-colors hover:bg-white/5"
            style={{ borderColor: "var(--text-secondary)", color: "var(--text-primary)" }}
          >
            <FileText size={18} /> Download CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}