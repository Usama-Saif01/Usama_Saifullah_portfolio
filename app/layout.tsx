import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers"; // <-- Add this import

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Usama Saifullah | Portfolio",
  description: "Portfolio of Usama Saifullah — IT Technical Support Officer and Cybersecurity Professional specializing in Linux Administration, Network Security, and AI/ML systems.",
  keywords: ["IT Support", "Linux Administration", "Network Security", "AI/ML", "Cybersecurity", "Usama Saifullah"],
  authors: [{ name: "Usama Saifullah" }],
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}>
        {/* Wrap children in the Provider */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}