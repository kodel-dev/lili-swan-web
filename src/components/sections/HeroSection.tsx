"use client";

import { motion } from "framer-motion";
import { TypewriterText } from "@/components/ui/TypewriterText";
import SwanScene from "@/components/3d/SwanScene";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
} as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <SwanScene />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <TypewriterText
            text="Kaelen Neriah Zephyr"
            speed={100}
            className="text-5xl md:text-7xl font-display font-bold text-white text-glow-strong"
          />
        </motion.div>

        {/* Username */}
        <motion.div variants={itemVariants} className="mb-8">
          <TypewriterText
            text="angsaputiihh 🤍"
            speed={80}
            className="text-2xl md:text-3xl font-light text-primary-pink tracking-wide"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
            Dari angsaburukrupa menjadi angsaputiihh — perjalanan cinta yang dimulai dari keterbukaan dan saling pengertian.
          </p>
        </motion.div>

        {/* Enter Button */}
        <motion.div variants={itemVariants}>
          <a
            href="/our-story"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary-pink/30 text-primary-pink font-light tracking-wide hover:bg-primary-pink/10 transition-all duration-300 group"
          >
            <span>Enter Our World</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="group-hover:translate-x-2 transition-transform"
            >
              →
            </motion.span>
          </a>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-10 -left-10 text-6xl opacity-20"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🦢
        </motion.div>
        
        <motion.div
          className="absolute -bottom-10 -right-10 text-6xl opacity-20"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          💕
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2 text-white/50 text-sm">
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}