"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, FileText, ArrowDown } from "lucide-react";

// Custom SVG Icons
const GithubIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

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
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const phrases = [
    "IT & Cybersecurity Professional",
    "Aspiring IT Auditor",
    "Google Cybersecurity Certified"
  ];
  const typedText = useTypewriter(phrases);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 w-full">
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
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Usama
          <br className="sm:hidden" /> Saifullah.
        </motion.h1>

        <div className="h-[320px] w-64 md:w-80 flex items-center justify-center mb-10">
          <AnimatePresence>
            {!scrolled && (
              <motion.div
                layoutId="hero-dp-container"
                className="w-full h-full overflow-hidden z-20 cursor-pointer border-[6px]"
                style={{ borderRadius: "8rem", borderColor: "var(--bg)", backgroundColor: "var(--accent)", boxShadow: "0 20px 50px -10px var(--accent)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <motion.div layoutId="hero-dp-image" className="w-full h-full relative">
                  <Image
                    src="/dp.webp" 
                    alt="Usama Saifullah"
                    className="w-full h-full object-cover object-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                    width={500}
                    height={500}
                    priority={true}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="h-8 flex items-center justify-center mb-6">
          <span className="text-lg sm:text-xl font-mono font-bold" style={{ color: "var(--accent)" }}>
            {mounted ? typedText : "\u00A0"}
            <span className="inline-block ml-1 w-2 h-5 align-middle animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
          </span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-base sm:text-lg leading-relaxed max-w-2xl mb-10" style={{ color: "var(--text-secondary)" }}>
          Building secure systems, configuring networks, and leveraging AI to solve complex technical challenges. Based in Shikarpur, Sindh.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-4 mb-14">
          <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-transform hover:scale-105" style={{ backgroundColor: "var(--text-primary)", color: "var(--bg)", fontFamily: "var(--font-syne)" }}>
            View Projects <ChevronRight size={18} />
          </a>
          <a href="/Usama Saifullah — Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm border transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ borderColor: "var(--text-secondary)", color: "var(--text-primary)", fontFamily: "var(--font-syne)" }}>
            <FileText size={18} /> Download CV
          </a>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains), monospace" }}
          >
            Find me on
          </span>
          <div className="h-px w-[40px]" style={{ backgroundColor: "var(--border)" }} />
          <div className="flex gap-3">
            <motion.a
              href="https://github.com/Usama-Saif01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-colors border"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)", color: "var(--text-secondary)" }}
              whileHover={{ scale: 1.1, color: "var(--text-primary)" }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/usama-saifullah-sethar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-colors border"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)", color: "var(--text-secondary)" }}
              whileHover={{ scale: 1.1, color: "#0a66c2" }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </motion.a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}