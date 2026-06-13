import type { Metadata, Viewport } from "next";
import { Syne, JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { Analytics } from "@vercel/analytics/next";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://usamasaifullah.cloud"),
  title: "Usama Saifullah | IT & Cybersecurity Professional",
  description: "Portfolio of Usama Saifullah — IT Technical Support specialist, Cybersecurity enthusiast, and aspiring IT Auditor specializing in Linux Administration, Network Security, and AI.",
  keywords: ["IT Support", "Linux Administration", "Network Security", "AI", "Cybersecurity", "Usama Saifullah", "Portfolio", "Sindh", "Pakistan"],
  authors: [{ name: "Usama Saifullah" }],
  openGraph: {
    title: "Usama Saifullah | IT & Cybersecurity",
    description: "Building secure systems, configuring networks, and leveraging AI to solve complex technical challenges.",
    url: "https://usamasaifullah.cloud",
    siteName: "Usama Saifullah Portfolio",
    images: [{ url: "/dp.webp", width: 800, height: 800, alt: "Usama Saifullah" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usama Saifullah | IT & Cybersecurity",
    description: "IT Technical Support Officer specializing in Linux Administration, Network Security, and AI/ML systems.",
    images: ["/dp.webp"],
  },
  //icons: { icon: "/icon_dark.png", apple: "/icon_dark.png" },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon-light.png',
        href: '/icon-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon-dark.png',
        href: '/icon-dark.png',
      },
    ],
    // It is great that you added the Apple touch icon! 
    // Apple devices usually prefer a single static icon, so leaving it tied to the dark one is a smart move.
    apple: "/icon_dark.png", 
  },
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
        
        {/* 👇 FIX: Actually injecting the Analytics component into the page! */}
        <Analytics />
        
      </body>
    </html>
  );
}