"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import TimelineSection from "@/components/sections/TimelineSection";

export default function OurStoryPage() {
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
            Our Story
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Dari teman menjadi lebih — perjalanan cinta yang dimulai dari keterbukaan dan saling pengertian.
          </p>
        </motion.div>

        {/* Timeline */}
        <TimelineSection />
      </div>
    </PageTransition>
  );
}