"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download, Smartphone, Cpu, CheckCircle2 } from "lucide-react";

const GithubIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);
import Link from "next/link";
import Image from "next/image"; // Added Next.js Image component

export default function HealthTrackCaseStudy() {
  return (
    <main className="min-h-screen py-24 px-6" style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}>
      <div className="max-w-3xl mx-auto w-full">

        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 mb-12 text-sm font-medium transition-opacity hover:opacity-70" style={{ color: "var(--text-secondary)" }}>
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6" style={{ fontFamily: "var(--font-syne)" }}>
            Health Track App
          </h1>

          {/* The Pitch */}
          <div className="p-6 mb-10 rounded-2xl border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
            <p className="text-lg leading-relaxed font-medium" style={{ color: "var(--text-primary)" }}>
              <strong style={{ color: "var(--accent)" }}>The Pitch:</strong> A native Android health tracking application built via Trusted Web Activities, deployed on edge infrastructure.
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-12">
          <h2 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}>
            <Cpu size={20} style={{ color: "var(--accent)" }} /> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "PWABuilder", "Bubblewrap CLI", "Trusted Web Activities", "Vercel", "Supabase"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg text-sm font-medium border" style={{ backgroundColor: "var(--accent-muted)", borderColor: "var(--accent-bdr)", color: "var(--accent)" }}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Architecture & Process */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-12">
          <h2 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}>
            <Smartphone size={20} style={{ color: "var(--accent)" }} /> The Architecture
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <p>
              To deliver a high-performance mobile experience without managing dual codebases, this application leverages a web-first architecture transformed into a native Android APK.
            </p>
            <p>
              Bypassing automated cloud builders, I manually compiled and signed the APK locally using Google's <strong>Bubblewrap CLI</strong>. This granted granular control over the build process, package signatures, and manifest configurations.
            </p>
            <p>
              To achieve a seamless, full-screen native experience free of browser UI elements, I implemented <strong>cryptographic Digital Asset Links</strong>, securely verifying ownership between the deployed Next.js web infrastructure and the Android package.
            </p>
          </div>
        </motion.div>

        {/* The Result */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-16 p-8 rounded-2xl border relative overflow-hidden" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
          <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: "var(--accent)" }}></div>
          <h2 className="text-xl font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}>
            <CheckCircle2 size={20} style={{ color: "var(--accent)" }} /> The Result
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A fast, installable, standalone Android application that updates dynamically via the web layer, resulting in zero user-facing app store update delays and a drastically reduced deployment cycle.
          </p>
        </motion.div>

        {/* Artifacts & Screenshots */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="/Health_Track.apk" download className="flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-opacity hover:opacity-80" style={{ backgroundColor: "var(--accent)", color: "#07111D", fontFamily: "var(--font-jetbrains)" }}>
              <Download size={18} /> Download APK
            </a>
            <a href="https://github.com/Usama-Saif01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm border transition-colors hover:bg-white/5" style={{ borderColor: "var(--border)", color: "var(--text-primary)", fontFamily: "var(--font-jetbrains)" }}>
              <GithubIcon size={18} /> View Repository
            </a>
          </div>

          {/* Screenshots Grid using next/image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Screenshot 1 */}
            <div className="aspect-[9/19] relative rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
              <Image
                src="/Screenshot-1.jpeg"
                alt="Health Track App Screen 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Screenshot 2 */}
            <div className="aspect-[9/19] relative rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
              <Image
                src="/Screenshot-2.jpeg"
                alt="Health Track App Screen 2"
                fill
                className="object-cover"
              />
            </div>

            {/* Screenshot 3 */}
            <div className="aspect-[9/19] relative rounded-2xl overflow-hidden border hidden lg:block" style={{ borderColor: "var(--border)" }}>
              <Image
                src="/Screenshot-3.jpeg"
                alt="Health Track App Screen 3"
                fill
                className="object-cover"
              />
            </div>
            {/*
            Screenshot 4 
            <div className="aspect-[9/19] relative rounded-2xl overflow-hidden border hidden lg:block" style={{ borderColor: "var(--border)" }}>
              <Image
                src="/screenshot-4.jpeg"
                alt="Health Track App Screen 4"
                fill
                className="object-cover"
              />
            </div>

            Screenshot 5
            <div className="aspect-[9/19] relative rounded-2xl overflow-hidden border hidden lg:block" style={{ borderColor: "var(--border)" }}>
              <Image
                src="/screenshot-5.jpeg"
                alt="Health Track App Screen 5"
                fill
                className="object-cover"
              />
            </div>
            */}

          </div>

        </motion.div>
      </div>
    </main>
  );
}