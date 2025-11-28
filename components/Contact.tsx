"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-28 flex flex-col items-center justify-center text-center"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-cyan-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact 💬
      </motion.h2>

      <motion.p
        className="text-gray-300 mt-3 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Have a project, idea, or opportunity?  
        Let’s connect — I’d love to hear from you.
      </motion.p>

      {/* Contact Card */}
      <motion.div
        className="mt-10 w-full max-w-lg bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg shadow-cyan-500/10"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-white/20 rounded-xl px-4 py-3 text-gray-200 focus:border-cyan-400 outline-none transition"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border border-white/20 rounded-xl px-4 py-3 text-gray-200 focus:border-cyan-400 outline-none transition"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="bg-transparent border border-white/20 rounded-xl px-4 py-3 text-gray-200 focus:border-cyan-400 outline-none transition resize-none"
          />

          <button
            type="submit"
            className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            Send Message 🚀
          </button>
        </form>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <a href="#" className="text-gray-300 text-2xl hover:text-cyan-400 transition">
          <FaGithub />
        </a>
        <a href="#" className="text-gray-300 text-2xl hover:text-cyan-400 transition">
          <FaLinkedin />
        </a>
        <a href="#" className="text-gray-300 text-2xl hover:text-cyan-400 transition">
          <FaTwitter />
        </a>
        <a href="mailto:your@email.com" className="text-gray-300 text-2xl hover:text-cyan-400 transition">
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
}
