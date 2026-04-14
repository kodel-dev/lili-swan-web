"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dramatic loading for effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-bg-dark">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg-dark"
          >
            {/* Animated Swan Icon */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-primary-pink/20 blur-xl animate-pulse" />
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="text-6xl relative z-10"
              >
                🦢
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 text-3xl md:text-4xl font-display text-primary-pink text-glow text-center tracking-wide"
            >
              Untuk Lili
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-4 text-text-secondary text-sm md:text-base font-light tracking-widest uppercase"
            >
              A Journey of Love
            </motion.p>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 1 }}
              transition={{ delay: 1, duration: 1.2 }}
              className="mt-8 h-0.5 bg-gradient-to-r from-transparent via-primary-pink to-transparent rounded-full"
            />

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-4 text-text-muted text-xs tracking-widest uppercase"
            >
              Memuat Kenangan...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="relative w-full min-h-screen"
      >
        <HeroSection />
      </motion.div>

      {/* Decorative Corner Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="fixed top-8 left-8 z-20"
      >
        <div className="text-text-muted text-xs font-light tracking-widest uppercase">
          Untuk Lili
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="fixed top-8 right-8 z-20"
      >
        <div className="text-text-muted text-xs font-light tracking-widest uppercase">
          Est. 08.04.2026
        </div>
      </motion.div>
    </main>
  );
}