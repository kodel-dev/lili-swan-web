"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import { TypewriterText } from "@/components/ui/TypewriterText";

export default function LoveLetterPage() {
  const [isOpen, setIsOpen] = useState(false);

  const letterContent = `Untuk Lili yang tersayang,

Aku nggak akan bohong — hari-hari awal kita kenal itu nggak mudah. Waktu kamu lagi di titik terendah, waktu kamu merasa dunia terlalu berat buat dipikul sendirian, kamu memilih untuk mundur. Untuk melindungi dirimu, untuk melindungi orang-orang di sekitarmu. Dan aku mengerti.

Tapi yang bikin aku tetap di sini, tetap nunggu, adalah karena aku tahu siapa kamu sebenarnya. Kamu bukan cuma "angsaburukrupa" yang dulu kamu kira. Kamu adalah angsaputiihh — cantik, kuat, dan berharga.

Aku bersyukur kamu nggak nyerah. Aku bersyukur kamu akhirnya percaya sama aku, buka hati, dan cerita semuanya. Dari situ aku belajar bahwa mental illness nggak bikin kamu kurang berharga. Nggak bikin kamu "rusak". Kamu cuma butuh waktu, butuh seseorang yang mau dengerin tanpa nge-judge.

Dan aku janji, aku bakal terus jadi orang itu. Orang yang ada buat kamu di saat-saat sulit. Orang yang ingetin kamu bahwa kamu nggak sendirian. Orang yang percaya sama kamu, bahkan waktu kamu sendiri ragu.

Terima kasih sudah jadi Lili. Terima kasih sudah percaya. Terima kasih sudah memilih aku.

Aku sayang kamu.

— Untuk selamanya 🤍`;

  return (
    <PageTransition className="min-h-screen pt-20 pb-20 bg-bg-dark flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4">
        {!isOpen ? (
          /* Envelope / Closed State */
          <motion.div
            className="flex flex-col items-center justify-center min-h-[60vh]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Envelope Icon */}
            <motion.div
              className="text-8xl mb-8 cursor-pointer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
            >
              💌
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-display text-white mb-4 text-center">
              Sebuah Surat Untukmu
            </h2>
            <p className="text-white/60 text-lg mb-8 text-center">
              Klik amplop untuk membuka
            </p>

            <motion.button
              className="px-8 py-4 bg-primary-pink/10 border border-primary-pink/30 text-primary-pink font-light tracking-wide hover:bg-primary-pink/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
            >
              Buka Surat
            </motion.button>
          </motion.div>
        ) : (
          /* Open Letter State */
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Candle Animation */}
            <motion.div
              className="absolute -top-16 right-0 text-4xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🕯️
            </motion.div>

            {/* Letter Container */}
            <div className="glass-effect p-8 md:p-12 rounded-3xl relative overflow-hidden">
              {/* Paper Texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              {/* Letter Content */}
              <div className="relative z-10">
                {/* Header */}
                <motion.div
                  className="mb-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <p className="text-primary-pink font-script text-2xl md:text-3xl">
                    Untuk Lili ❤️
                  </p>
                </motion.div>

                {/* Letter Body */}
                <motion.div
                  className="prose prose-invert max-w-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div className="text-white/90 leading-loose whitespace-pre-line font-light">
                    {letterContent.split('\n').map((line, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                        className={line === '' ? 'h-4' : ''}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                  className="mt-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 0.8 }}
                >
                  <p className="text-primary-pink font-script text-xl">
                    — Untuk selamanya 🤍
                  </p>
                  <p className="text-white/30 text-sm mt-4">
                    08.04.2026
                  </p>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -bottom-8 -left-8 text-6xl opacity-20"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🦢
              </motion.div>
            </div>

            {/* Close Button */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.8 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white/80 transition-colors text-sm"
              >
                Tutup surat
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}