import type { Metadata, Viewport } from "next";
import { Syne, JetBrains_Mono, DM_Sans } from "next/font/google"; // 1. Ensure these imports are present
import "./globals.css";
import { Providers } from "./Providers";

// 2. DEFINE CONSTANTS AT THE TOP LEVEL (OUTSIDE OF RootLayout)
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "Usama Saifullah | Portfolio",
  description: "Portfolio of Usama Saifullah — IT Technical Support specialist and Cybersecurity enthusiast.",
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html 
      lang="en" 
      /* 3. Now these variables are defined and accessible */
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} scroll-smooth`} 
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) document.documentElement.classList.add('dark');
                  else if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased noise-overlay font-body min-h-screen flex flex-col" style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}>
        <Providers>
          <div className="safe-overflow flex-1">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}