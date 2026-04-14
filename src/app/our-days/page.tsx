"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import { DaysTogetherCounter, BirthdayCountdown } from "@/components/ui/CountdownTimer";
import { wishes } from "@/lib/stories";
import { useState, useEffect } from "react";

export default function OurDaysPage() {
  const [currentWish, setCurrentWish] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWish((prev) => (prev + 1) % wishes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition className="min-h-screen pt-20 pb-20 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16 pt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display text-white mb-6">
            Our Days
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Setiap detik bersamamu adalah anugerah
          </p>
        </motion.div>

        {/* Days Together Counter */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DaysTogetherCounter />
        </motion.div>

        {/* Countdowns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Birthday Countdown */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <BirthdayCountdown />
          </motion.div>

          {/* Next Anniversary */}
          <motion.div
            className="flex flex-col items-center justify-center p-8 glass-effect rounded-3xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-6xl mb-4">💕</div>
            <h3 className="text-lg md:text-xl font-display text-white/80 mb-2">
              Hari Jadian Berikutnya
            </h3>
            <motion.div
              key="anniversary"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-5xl md:text-6xl font-display font-bold text-primary-pink"
            >
              08.04.27
            </motion.div>
            <p className="text-white/50 mt-2">Setiap hari adalah perayaan</p>
          </motion.div>
        </div>

        {/* Wish Board */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl font-display text-white mb-8">
            Wish Board
          </h2>
          
          <div className="relative max-w-2xl mx-auto h-32">
            {wishes.map((wish, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: index === currentWish ? 1 : 0,
                  y: index === currentWish ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white/80 text-lg md:text-xl font-light italic">
                  "{wish}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {wishes.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentWish ? "bg-primary-pink" : "bg-white/20"
                }`}
                animate={{
                  scale: index === currentWish ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-white/40 text-sm">
            Dibuat dengan ❤️ untuk Lili
          </p>
          <p className="text-white/30 text-xs mt-2">
            08.04.2026 — selamanya
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}