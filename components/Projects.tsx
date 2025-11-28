"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "TrackLit — BLE Tracker",
    desc: "A smart BLE-powered tracking system paired with ESP32 hardware and a custom Flutter app to locate personal items in real time.",
    tech: ["Flutter", "Firebase", "ESP32", "BLE"],
    link: "https://github.com/RonitS07/TrackLit_New",
  },
  {
    title: "ML Digit Recognition (0–9)",
    desc: "A machine learning model that identifies handwritten digits using neural networks and training datasets (MNIST style).",
    tech: ["Python", "NumPy", "Matplotlib"],
    link: "https://github.com/RonitS07/ML-Digit-Recognition",
  },
  {
    title: "AI Call Assistant",
    desc: "An AI-powered assistant designed to handle basic conversation patterns and respond dynamically — currently under development.",
    tech: ["OpenAI", "Dart", "Flutter"],
    status: "In Development",
    link: "https://github.com/RonitS07/AI-Call-Assistant",
  },
  {
    title: "Portfolio Website",
    desc: "The website you're currently viewing — fully custom, animated, responsive and deployed with Next.js + TailwindCSS.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    link: " http://192.168.0.104:3000",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center text-cyan-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects 🚀
      </motion.h2>

      {/* Section Subtitle */}
      <p className="text-gray-300 text-center mt-4 max-w-xl mx-auto">
        A curated selection of my most meaningful work — blending software,
        hardware, AI and clean UI.
      </p>

      {/* Grid */}
      <div className="grid mt-14 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur p-6 hover:shadow-xl hover:shadow-cyan-400/20 transition group relative w-full max-w-[340px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            {/* Title + Badge */}
            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition flex gap-2 items-center">
              {project.title}
              {project.status === "In Development" && (
                <span className="text-[10px] px-2 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-300/30 rounded-full">
                  🚧 In Development
                </span>
              )}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mt-3 text-sm">{project.desc}</p>

            {/* Tech Stack */}
            <div className="flex gap-2 flex-wrap mt-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs py-1 px-3 rounded-full bg-white/10 text-cyan-300 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={project.link}
              className="inline-block mt-6 text-sm text-cyan-400 hover:underline hover:tracking-wide transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
