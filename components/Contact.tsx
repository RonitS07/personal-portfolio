"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;

    // Show loading toast
    const loading = toast.loading("Sending...");

    try {
      await fetch("https://formsubmit.co/ronitshah0099@gmail.com", {
        method: "POST",
        body: new FormData(form),
      });

      toast.success("Message sent successfully! 🚀");
      setFormData({ name: "", email: "", message: "" });

    } catch {
      toast.error("Something went wrong. Try again ❗");
    }

    toast.dismiss(loading);
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-20 text-center">
      <motion.h2
        className="text-4xl font-bold text-cyan-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact 📩
      </motion.h2>

      <motion.p className="text-gray-300 mt-3">
        Let’s build something awesome — feel free to reach out!
      </motion.p>

      {/* Contact Card */}
      <motion.div
        className="mt-10 w-full max-w-lg mx-auto bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg shadow-cyan-500/10 transition hover:shadow-cyan-500/20"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/15 rounded-xl px-4 py-3 text-gray-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/15 rounded-xl px-4 py-3 text-gray-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/15 rounded-xl px-4 py-3 text-gray-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 outline-none transition resize-none"
          />

          <button
            type="submit"
            className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-cyan-400/50 transition text-lg"
          >
            Send Message 🚀
          </button>
        </form>
      </motion.div>
    </section>
  );
}
