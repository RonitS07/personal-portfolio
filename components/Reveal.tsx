"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref as any}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
