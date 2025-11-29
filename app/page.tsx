"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen px-6 flex flex-col items-center justify-center text-center pt-24 md:pt-32"
      >
        {/* Greeting */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(0,255,255,0.35)]">
            Ronit Shah
          </span>
          .
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          I engineer intelligent software and hardware — building modern web
          apps, AI-driven systems, and BLE-powered embedded solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition hover:shadow-cyan-400/40"
          >
            View My Work 🚀
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 text-3xl text-gray-400 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="https://github.com/RonitS07"
            target="_blank"
            className="hover:text-cyan-400 transition hover:scale-110"
          >
            <RiGithubFill />
          </a>

          <a
            href="https://linkedin.com/in/ronit-shah-14b8642b0"
            target="_blank"
            className="hover:text-cyan-400 transition hover:scale-110"
          >
            <RiLinkedinBoxFill />
          </a>

          <a
            href="mailto:ronitshah0099@gmail.com"
            className="hover:text-cyan-400 transition hover:scale-110"
          >
            <RiMailLine />
          </a>
        </motion.div>
      </section>

      {/* OTHER SECTIONS */}
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
