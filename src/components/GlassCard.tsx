import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
}

export default function GlassCard({ children, className, dark = false, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        dark ? "glass-card-dark" : "glass-card",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
