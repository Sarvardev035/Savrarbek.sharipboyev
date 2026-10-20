import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ceo.ooou.uz · Sarvarbek Sharipboyev",
  description:
    "Sarvarbek Sharipboyev: founder of ooou.uz, full-stack, QA and AI engineer building Bahola (SmartQR) with Claude and Antigravity.",
  openGraph: {
    title: "Ceo.ooou.uz · Sarvarbek Sharipboyev",
    description: "Founder of ooou.uz. Full-stack, QA and AI engineer building Bahola (SmartQR).",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} noise font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
