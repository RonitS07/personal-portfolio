"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`text-sm transition ${
            active === link.id
              ? "text-cyan-400 font-semibold"
              : "text-gray-300 hover:text-white"
          }`}
        >
          {link.label}
        </a>
      ))}

    
    </header>
  );
}
