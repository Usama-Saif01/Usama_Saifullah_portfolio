import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usama Sethar — IT Support & Cybersecurity",
  description:
    "Portfolio of Usama Sethar — IT Technical Support specialist and Cybersecurity enthusiast specializing in Linux administration, network security, and AI/ML systems.",
  keywords: [
    "IT Support",
    "Cybersecurity",
    "Linux",
    "Kali",
    "Machine Learning",
    "Network Administration",
  ],
  authors: [{ name: "Usama Sethar" }],
  openGraph: {
    title: "Usama Sethar — IT Support & Cybersecurity",
    description:
      "Portfolio of Usama Sethar — IT Technical Support specialist and Cybersecurity enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts — loaded in head for zero-FOUT */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased noise-overlay">
        {children}
      </body>
    </html>
  );
}
