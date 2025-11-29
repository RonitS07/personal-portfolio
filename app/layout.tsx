import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import BackgroundBlobs from "@/components/BackgroundBlogs";
import Noise from "@/components/Noise";
import { Toaster } from "react-hot-toast";
import ScrollProgress from "@/components/ScrollProgress";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ------- SEO -------
export const metadata: Metadata = {
  metadataBase: new URL("https://ronitshah.vercel.app"),
  title: "Ronit Shah — AI & Software Engineer",
  description:
    "Engineering intelligent intelligent systems — BLE hardware, AI automation, and intelligent software.",
  icons: { icon: "/favicon-neww.ico" },

  openGraph: {
    title: "Ronit Shah — AI & Software Engineer",
    description: "AI • Software • Embedded Systems ⚡",
    images: "/og-image.png",
    url: "https://ronitshah.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#00eaff" />
        <link rel="canonical" href="https://ronitshah.vercel.app" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} text-white relative overflow-x-hidden bg-[#02040A]`}
      >
        {/* ---- Futuristic Background ---- */}

        {/* Deep Gradient */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#02040A] via-[#03101B] to-[#000000]" />

        {/* Soft Cyan Glow */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(0,255,255,0.10),transparent_70%)] pointer-events-none animate-pulseSlow" />

        {/* Hex Grid Pattern */}
        <div className="fixed inset-0 -z-10 opacity-[0.06] bg-[url('/hex-grid.svg')] bg-cover pointer-events-none" />

        {/* Vignette */}
        <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle,_transparent_60%,#000_100%)] pointer-events-none" />

        {/* Effects */}
        <BackgroundBlobs />
        <Noise />
        <ScrollProgress />

        {/* Page Content */}
        {children}

        {/* System */}
        <Toaster position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
