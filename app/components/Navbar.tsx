"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

const NAV_LINKS = ["Projects", "Skills", "About", "Contact"];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 150);
  });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4 transition-colors duration-300"
        style={{
          backgroundColor: isScrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
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
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            className="font-extrabold text-xl tracking-tight origin-left" 
            style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}
            whileHover={{ scale: 1.05, color: "var(--accent)" }}
            whileTap={{ scale: 0.95 }}
          >
            Usama<span style={{ color: "var(--accent)" }}>.</span>
          </motion.a>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden sm:flex items-center gap-8 text-sm font-semibold" style={{ fontFamily: "var(--font-jetbrains)" }}>
            {NAV_LINKS.map((item) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                className="transition-colors relative group"
                style={{ color: "var(--text-secondary)" }}
                whileHover={{ y: -2, color: "var(--text-primary)" }}
                whileTap={{ y: 0, scale: 0.95 }}
              >
                {item}
                <motion.span 
                  className="absolute -bottom-2 left-1/2 w-1.5 h-1.5 rounded-full opacity-0 -translate-x-1/2 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </motion.button>
            ))}
          </div>

          {mounted && (
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border transition-colors flex items-center justify-center"
              style={{ borderColor: "var(--border)", color: "var(--text-primary)", backgroundColor: "var(--bg-card)" }}
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          )}

          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-lg" 
            style={{ color: "var(--text-primary)", backgroundColor: "var(--tag-bg)" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 sm:hidden"
            style={{
              backgroundColor: "var(--nav-bg)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                  className="text-left py-3 px-4 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-jetbrains)" }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ backgroundColor: "var(--tag-bg)", color: "var(--accent)" }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}