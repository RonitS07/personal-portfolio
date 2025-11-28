"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-28 flex items-center justify-center"
    >
      <motion.div
        className="max-w-3xl text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-cyan-400">About Me 👨‍💻</h2>

        {/* Short Intro */}
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a developer passionate about building modern, meaningful, and
          interactive digital solutions — from AI-powered applications to custom
          hardware projects.
        </p>

        {/* Highlight Card */}
        <motion.div
          className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg shadow-cyan-500/10 space-y-4"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-gray-300 leading-relaxed">
            I enjoy working across frontend development, AI integration, and
            embedded system design. My workflow blends creativity, clean code,
            and smooth user experience — whether it's building elegant UI with
            React & Tailwind or tinkering with ESP32 Bluetooth systems.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Outside of coding, I love exploring new technologies, experimenting
            with machine learning models, and improving products through
            iterative development and real-world testing.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            "Next.js",
            "Tailwind",
            "Flutter",
            "Firebase",
            "TensorFlow",
            "ESP32",
            "OpenAI",
            "Python",
            "TypeScript",
            "Framer Motion",
          ].map((skill, i) => (
            <span
              key={i}
              className="text-sm bg-white/10 border border-white/10 text-cyan-300 py-2 px-4 rounded-full shadow-sm hover:bg-white/20 transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Resume Action Row */}
        <motion.div
          className="flex items-center gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
        </motion.div>
      </motion.div>
    </section>
  );
}
