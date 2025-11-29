"use client";

import { motion } from "framer-motion";
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen px-6 flex flex-col items-center justify-center text-center"
    >
      {/* Greeting */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm <span className="text-cyan-400">Ronit Shah</span>.
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-gray-300 text-lg md:text-xl max-w-2xl mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I engineer intelligent software and hardware — building modern web apps,
        AI-driven systems, and BLE-powered embedded solutions.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition"
        >
          View My Work 🚀
        </a>

        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
        >
          Resume
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 text-3xl text-gray-400 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a
          href="https://github.com/YOUR_GITHUB_USERNAME"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <RiGithubFill />
        </a>

        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <RiLinkedinBoxFill />
        </a>

        <a
          href="mailto:YOUR_EMAIL@gmail.com"
          className="hover:text-cyan-400 transition"
        >
          <RiMailLine />
        </a>
      </motion.div>
    </section>
  );
}
