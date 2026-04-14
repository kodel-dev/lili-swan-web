"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import { liliProfile, usernameStory, liliQuotes, funFacts } from "@/lib/stories";
import { getZodiacSign } from "@/lib/dates";

export default function AboutLiliPage() {
  const zodiac = getZodiacSign(liliProfile.birthday);

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
            About Lili
          </h1>
          <p className="text-xl text-primary-pink font-light">
            {liliProfile.username}
          </p>
        </motion.div>

        {/* Profile Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="glass-effect p-8 rounded-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-display text-white mb-6">Profil</h2>
            <div className="space-y-4">
              <div>
                <p className="text-white/50 text-sm">Nama Lengkap</p>
                <p className="text-white text-lg">{liliProfile.fullName}</p>
              </div>
              <div>
                <p className="text-white/50 text-sm">Panggilan</p>
                <p className="text-white text-lg">{liliProfile.nickname}</p>
              </div>
              <div>
                <p className="text-white/50 text-sm">Ulang Tahun</p>
                <p className="text-white text-lg">21 Juni 2003</p>
              </div>
              <div>
                <p className="text-white/50 text-sm">Zodiak</p>
                <p className="text-white text-lg">
                  <span className="text-2xl">{zodiac.symbol}</span> {zodiac.sign}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-effect p-8 rounded-3xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-display text-white mb-6">Fun Facts</h2>
            <div className="space-y-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{fact.icon}</span>
                  <p className="text-white/80">{fact.fact}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Username Story */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-display text-white text-center mb-8">
            {usernameStory.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dulu */}
            <div className="glass-effect p-8 rounded-3xl border-l-4 border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🐦</span>
                <div>
                  <p className="text-white/50 text-sm">Dulu</p>
                  <h3 className="text-xl font-display text-white">Angsaburukrupa</h3>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                {usernameStory.story[0].description}
              </p>
            </div>

            {/* Sekarang */}
            <div className="glass-effect p-8 rounded-3xl border-l-4 border-primary-pink">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🦢</span>
                <div>
                  <p className="text-white/50 text-sm">Sekarang</p>
                  <h3 className="text-xl font-display text-primary-pink">Angsaputiihh</h3>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                {usernameStory.story[1].description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-display text-white text-center mb-8">
            Kata-kata Lili
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liliQuotes.map((quote, index) => (
              <div
                key={index}
                className="glass-effect-pink p-6 rounded-2xl relative"
              >
                <div className="text-4xl text-primary-pink/30 mb-4">"</div>
                <p className="text-white/90 italic mb-4">{quote.text}</p>
                <p className="text-white/40 text-sm">— {quote.context}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}