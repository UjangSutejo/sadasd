"use client";

import { motion } from "motion/react";

interface ButtonTextHoverProps {
  label: string;
  className?: string;
}

export default function ButtonTextHover({
  label,
  className = "",
}: ButtonTextHoverProps) {
  return (
    <motion.span
      className={`absolute inset-0 flex items-center justify-center ${className}`}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Text container — only as wide as the text, with overflow clipping */}
      <span className="relative inline-flex overflow-hidden w-fit">
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
      </span>
    </motion.span>
  );
}
