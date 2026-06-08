"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 200);
  });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4 transition-colors duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(var(--bg-rgb), 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--card-border)" : "1px solid transparent",
      }}
    >
      {/* ── LEFT: Logo & Flying Mini DP ── */}
      <div className="flex items-center">
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              layoutId="hero-dp-container"
              className="flex-shrink-0 flex items-center justify-center overflow-hidden cursor-pointer shadow-lg"
              style={{ 
                width: 36, height: 36, marginRight: 12, borderRadius: "50%",
                border: "2px solid var(--accent)", backgroundColor: "var(--accent)"
              }}
              whileHover={{ scale: 1.15, rotate: 5, borderRadius: "35%", boxShadow: "0 0 20px var(--accent)" }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              title="Back to top"
            >
              <motion.img
                layoutId="hero-dp-image"
                src="/dp.webp" 
                alt="Usama Saifullah"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a 
          layout 
          href="#" 
          className="font-extrabold text-xl tracking-tight origin-left" 
          style={{ color: "var(--text-primary)" }}
          whileHover={{ scale: 1.05, color: "var(--accent)" }}
          whileTap={{ scale: 0.95 }}
        >
          Usama<span style={{ color: "var(--accent)" }}>.</span>
        </motion.a>
      </div>

      {/* ── RIGHT: Navigation & Theme Toggle ── */}
      <div className="flex items-center gap-6 sm:gap-8">
        <div className="hidden sm:flex items-center gap-8 text-sm font-semibold">
          {["Projects", "Skills"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors relative"
              style={{ color: "var(--text-secondary)" }}
              whileHover={{ y: -2, color: "var(--text-primary)" }}
              whileTap={{ y: 0, scale: 0.95 }}
            >
              {item}
              <motion.span 
                className="absolute -bottom-2 left-1/2 w-1 h-1 rounded-full opacity-0 -translate-x-1/2"
                style={{ backgroundColor: "var(--accent)" }}
                whileHover={{ opacity: 1, scale: 1.5 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Theme Toggle Button */}
        {mounted && (
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border transition-colors flex items-center justify-center"
            style={{ borderColor: "var(--card-border)", color: "var(--text-primary)", backgroundColor: "var(--card-bg)" }}
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        )}

        {/* Mobile Menu Button */}
        <motion.button 
          className="sm:hidden p-2 rounded-lg" 
          style={{ color: "var(--text-primary)" }}
          whileHover={{ scale: 1.1, backgroundColor: "var(--card-hover)" }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </div>
    </motion.nav>
  );
}