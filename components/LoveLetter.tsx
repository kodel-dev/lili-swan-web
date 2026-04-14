"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tombol Surat yang berdetak */}
      <motion.button
        onClick={() => setIsOpen(true)}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="fixed bottom-8 right-8 z-50 px-6 py-3 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white font-medium rounded-full shadow-xl hover:shadow-primary-pink/40 transform hover:-translate-y-1 transition-all duration-300 border border-primary-pink/30"
      >
        <span className="flex items-center gap-2">
          <span className="text-lg">💌</span>
          <span className="text-sm tracking-wide">Buka Aku, Lili</span>
        </span>
      </motion.button>

      {/* Pop-up Modal Surat Cinta */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 30, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 30, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass-effect rounded-2xl p-8 md:p-10 border border-primary-pink/30 shadow-2xl max-w-2xl w-full relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-pink to-transparent opacity-50" />
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary-pink/10 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary-pink/10 rounded-full blur-lg" />

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/20 border border-primary-pink/30 rounded-full flex items-center justify-center text-text-secondary hover:text-primary-pink transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative z-10 text-center space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-display text-primary-pink text-glow-strong">
                    Untuk Kaelen Neriah Zephyr
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary-pink to-primary-pink-light mx-auto rounded-full" />
                </div>

                <div className="space-y-4 text-text-primary leading-relaxed">
                  <p className="text-lg md:text-xl font-light">
                    Melihat perjalananmu dari seseorang yang merasa penuh debu, hingga kini menjadi angsa putih yang sangat anggun dan percaya diri, adalah hal yang paling membuatku bangga.
                  </p>
                  <p className="text-lg md:text-xl font-light">
                    Terima kasih sudah bertahan, sembuh, dan akhirnya membiarkan aku menjadi bagian dari ceritamu. Kamu lebih dari sekadar cantik, Lili. Kamu sangat berharga.
                  </p>
                </div>

                <div className="pt-4 border-t border-primary-pink/20">
                  <p className="text-xl md:text-2xl font-display text-primary-pink italic tracking-wide">
                    I love you.
                  </p>
                  <p className="text-sm text-text-secondary mt-2 font-light">
                    Dengan cinta yang tak pernah pudar
                  </p>
                </div>

                <div className="flex justify-center gap-4 pt-4">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-primary-pink/20 border border-primary-pink/40 text-primary-pink font-medium rounded-full hover:bg-primary-pink hover:text-white transition-all duration-300 shadow-lg"
                  >
                    Tutup
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
