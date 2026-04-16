"use client";

import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function AnimateOnScroll({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
}: AnimateOnScrollProps) {
  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  const offset = directionMap[direction];

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
