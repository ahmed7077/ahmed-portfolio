import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Muhammad Ahmed | AI Engineer & LLM Researcher",
  description:
    "Portfolio of Muhammad Ahmed, an AI Engineer and Information Science student building LLM, Computer Vision, Edge AI, and IoT projects.",
  metadataBase: new URL("https://ahmed-portfolio.vercel.app"),
  openGraph: {
    title: "Muhammad Ahmed | AI Engineer & LLM Researcher",
    description: "Building intelligent systems across LLMs, computer vision, and edge AI.",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Muhammad Ahmed | AI Engineer & LLM Researcher" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
