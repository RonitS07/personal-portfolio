import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";


import BackgroundBlobs from "@/components/BackgroundBlogs";
import Noise from "@/components/Noise";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ronit Shah | Portfolio",
  description: "Personal portfolio showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#030712] text-white relative overflow-x-hidden`}
      >
        {/* Background Base Gradient */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0a0f1f] via-[#071629] to-[#001b2e]" />

        {/* Soft Center Glow */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.12),_transparent_60%)]" />

        {/* Visual Effects */}
        <BackgroundBlobs />
        <Noise />
        {children}
        <Analytics />
        <Toaster position="top-center" reverseOrder={false} />

      </body>
    </html>
  );
}
