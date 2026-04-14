"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import { moments } from "@/lib/stories";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function MomentsPage() {
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
            Moments
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Kenangan-kenangan spesial yang akan selalu diingat
          </p>
        </motion.div>

        {/* Moments Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {moments.map((moment, index) => (
            <motion.div
              key={moment.id}
              variants={itemVariants}
              className="group relative glass-effect p-8 rounded-3xl overflow-hidden cursor-pointer"
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 20px 40px rgba(255, 179, 198, 0.15)"
              }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/0 to-primary-pink/5 group-hover:from-primary-pink/5 group-hover:to-primary-pink/10 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {moment.icon}
                </div>

                {/* Date */}
                <span className="text-primary-pink font-mono text-sm tracking-wider">
                  {moment.date}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-display text-white mt-2 mb-4 group-hover:text-primary-pink transition-colors">
                  {moment.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed">
                  {moment.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary-pink to-transparent transition-all duration-500" />
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 text-white/10 text-4xl group-hover:text-white/20 transition-colors">
                ✦
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-white/50 text-lg italic">
            "Setiap momen bersamamu adalah hadiah yang tak ternilai"
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}