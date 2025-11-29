"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => sections.forEach(sec => observer.unobserve(sec));
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 items-center gap-6 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg">
        {navLinks.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`relative text-sm transition ${
              active === link.id
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {link.label}
            {active === link.id && (
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] h-[2px] w-3 bg-cyan-400 rounded-full" />
            )}
          </a>
        ))}

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-400 text-black font-semibold px-5 py-2 rounded-full text-sm shadow-md hover:scale-105 transition ml-auto"
        >
          📄 Resume
        </a>
      </header>

      {/* Mobile Navbar */}
      <header className="md:hidden fixed top-4 right-4 z-50">
        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(prev => !prev)}
          className="p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-lg"
        >
          {mobileOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute top-14 right-0 w-52 bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl p-5 shadow-lg space-y-4"
            >
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block text-gray-300 hover:text-cyan-400 text-lg transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                className="bg-cyan-400 text-black text-center block rounded-lg px-4 py-2 font-semibold hover:scale-105 transition"
                onClick={() => setMobileOpen(false)}
              >
                📄 Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
