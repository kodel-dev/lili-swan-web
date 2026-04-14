"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Calendar, 
  Star, 
  Heart, 
  Feather, 
  BookOpen, 
  Gamepad2,
  Sparkles 
} from "lucide-react";
import { liliProfile, usernameStory, liliQuotes, funFacts } from "@/lib/stories";
import { getZodiacSign, formatDate } from "@/lib/dates";

export default function AboutLiliPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const zodiac = getZodiacSign(liliProfile.birthday);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-dark-secondary to-bg-dark relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary-pink rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-primary-pink-light rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-primary-pink rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-10 right-1/3 w-2 h-2 bg-primary-pink-light rounded-full animate-pulse opacity-60"></div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-primary-pink opacity-20 text-4xl"
        >
          💕
        </motion.div>
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 text-primary-pink opacity-20 text-3xl"
        >
          💖
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display text-gradient mb-4">
            Kaelen Neriah Zephyr
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-light tracking-wide">
            angsaputiihh 🤍
          </p>
          <div className="mt-6 flex items-center justify-center gap-8 text-text-muted">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(liliProfile.birthday)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>{zodiac.sign} {zodiac.symbol}</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>{liliProfile.age} tahun</span>
            </div>
          </div>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {/* Username Story */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass-effect-pink rounded-2xl p-8 md:p-12"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <Feather className="w-8 h-8 text-primary-pink" />
              <h2 className="text-3xl md:text-4xl font-display text-primary-pink">
                {usernameStory.title}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-primary-pink rounded-full"></div>
                  <span className="text-primary-pink font-semibold">Dulu</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {usernameStory.story[0].title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {usernameStory.story[0].description}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-primary-pink rounded-full"></div>
                  <span className="text-primary-pink font-semibold">Sekarang</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {usernameStory.story[1].title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {usernameStory.story[1].description}
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Profile Info */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass-effect rounded-2xl p-8 md:p-12"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <Sparkles className="w-8 h-8 text-primary-pink" />
              <h2 className="text-3xl md:text-4xl font-display text-text-primary">
                Tentang Lili
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div variants={itemVariants} className="text-center p-6 glass-effect rounded-xl">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-semibold text-text-primary mb-2">Hobi</h3>
                <p className="text-text-secondary">Baca buku (karena dulu nggak boleh main HP)</p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center p-6 glass-effect rounded-xl">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="font-semibold text-text-primary mb-2">Gaming</h3>
                <p className="text-text-secondary">Pernah jago ML dengan username legendaris</p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center p-6 glass-effect rounded-xl">
                <div className="text-4xl mb-4">🦢</div>
                <h3 className="font-semibold text-text-primary mb-2">Identitas</h3>
                <p className="text-text-secondary">Identik dengan angsa — dari kotor jadi putih</p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center p-6 glass-effect rounded-xl">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-semibold text-text-primary mb-2">Kepribadian</h3>
                <p className="text-text-secondary">Cerewet tapi baik hati — seperti Mr. Bebek Kwek Kwek</p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center p-6 glass-effect rounded-xl">
                <div className="text-4xl mb-4">🌙</div>
                <h3 className="font-semibold text-text-primary mb-2">Zodiak</h3>
                <p className="text-text-secondary">Cancer — sensitif, peduli, dan sangat setia</p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center p-6 glass-effect rounded-xl">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-semibold text-text-primary mb-2">Pertumbuhan</h3>
                <p className="text-text-secondary">Sudah belajar menerima diri sendiri dan tumbuh lebih kuat</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Quotes */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass-effect rounded-2xl p-8 md:p-12"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-primary-pink" />
              <h2 className="text-3xl md:text-4xl font-display text-text-primary">
                Kata-Kata Lili
              </h2>
            </motion.div>

            <div className="space-y-6">
              {liliQuotes.map((quote, index) => (
                <motion.blockquote
                  key={index}
                  variants={itemVariants}
                  className="border-l-4 border-primary-pink pl-6 py-4 glass-effect rounded-lg"
                >
                  <p className="text-lg text-text-primary italic mb-2">"{quote.text}"</p>
                  <cite className="text-text-muted text-sm font-medium">— {quote.context}</cite>
                </motion.blockquote>
              ))}
            </div>
          </motion.section>

          {/* Fun Facts */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass-effect rounded-2xl p-8 md:p-12"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <Gamepad2 className="w-8 h-8 text-primary-pink" />
              <h2 className="text-3xl md:text-4xl font-display text-text-primary">
                Fun Facts
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-6 glass-effect rounded-xl hover:bg-primary-pink/5 transition-all duration-300"
                >
                  <span className="text-3xl">{fact.icon}</span>
                  <span className="text-text-secondary">{fact.fact}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}