"use client";

import { motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

interface StaggerTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  wordDelay?: number;
  wordDuration?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  sessionKey?: string;
}

export function StaggerText({
  text,
  className,
  style,
  wordDelay = 0.04,
  wordDuration = 0.5,
  tag: Tag = "h1",
  sessionKey = "hero-animated",
}: StaggerTextProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem(sessionKey);
    if (!seen) {
      setShouldAnimate(true);
    }
  }, [sessionKey]);

  const words = text.split(" ");

  const onAnimationComplete = () => {
    sessionStorage.setItem(sessionKey, "true");
  };

  if (!mounted) {
    return <Tag className={className} style={style}>{text}</Tag>;
  }

  if (!shouldAnimate) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Tag className={className} style={style}>{text}</Tag>
      </motion.div>
    );
  }

  return (
    <Tag className={className} style={style}>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: wordDelay }}
        onAnimationComplete={onAnimationComplete}
        style={{ display: "inline" }}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            transition={{
              duration: wordDuration,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: "inline-block", marginRight: "0.3em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
