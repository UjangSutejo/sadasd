"use client";

import { motion } from "motion/react";

interface NavTextHoverProps {
  label: string;
  className?: string;
}

export default function NavTextHover({
  label,
  className = "",
}: NavTextHoverProps) {
  return (
    <motion.span
      className={`relative inline-flex overflow-hidden ${className}`}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Invisible spacer */}
      <span className="invisible whitespace-nowrap">{label}</span>

      {/* Teks pertama */}
      <motion.span
        className="absolute inset-0 whitespace-nowrap"
        variants={{
          rest: { y: "0%" },
          hover: { y: "-100%" },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {label}
      </motion.span>

      {/* Teks kedua */}
      <motion.span
        className="absolute inset-0 whitespace-nowrap"
        variants={{
          rest: { y: "100%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {label}
      </motion.span>
    </motion.span>
  );
}