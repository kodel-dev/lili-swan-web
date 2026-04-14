"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { timelineEvents } from "@/lib/stories";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function TimelineSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            Our Story
          </h2>
          <p className="text-white/60 text-lg">
            Perjalanan cinta yang dimulai dari keterbukaan dan saling pengertian
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary-pink/30 to-transparent transform md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:ml-16 md:mr-auto" : "md:mr-16 md:ml-auto md:-translate-x-full"
              }`}
              variants={itemVariants}
              custom={index}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-auto md:right-6 top-0 w-4 h-4 bg-primary-pink rounded-full border-4 border-bg-dark shadow-lg z-10" />

              {/* Content Card */}
              <div
                className={`glass-effect-pink p-6 rounded-2xl backdrop-blur-sm border border-primary-pink/20 ${
                  event.isHighlight ? "ring-2 ring-primary-pink/40" : ""
                } ${event.isClimax ? "ring-4 ring-primary-pink/60 shadow-2xl" : ""}`}
              >
                {/* Date */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary-pink font-mono text-sm tracking-wider">
                    {event.date.toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                  {event.isClimax && (
                    <span className="px-2 py-1 bg-primary-pink/20 text-primary-pink text-xs rounded-full font-light">
                      Special
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-display text-white mb-3">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}