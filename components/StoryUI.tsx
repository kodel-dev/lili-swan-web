"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function StoryUI() {
  // --- LOGIKA LIVE TIME TRACKER ---
  const [timeElapsed, setTimeElapsed] = useState("Menghitung waktu...");

  useEffect(() => {
    // Tanggal jadian: 8 April 2026
    const startDate = new Date("2026-04-08T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate;

      if (distance < 0) {
        setTimeElapsed("Menunggu momen spesial kita...");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeElapsed(`${days} Hari, ${hours} Jam, ${minutes} Menit, ${seconds} Detik`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 right-0 w-full md:w-1/2 lg:w-2/5 h-full overflow-y-auto z-20 pointer-events-none">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/60 pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative p-8 md:p-12 space-y-16 pointer-events-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-display text-primary-pink text-glow-strong mb-4 tracking-wide">
            History Angsa Putih
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-pink to-primary-pink-light rounded-full" />
        </motion.div>

        {/* Chapter 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl text-text-primary leading-relaxed font-light">
            Dulu, hiburan satu-satunya Lili hanyalah buku. Suatu hari, ia membaca cerita tentang{" "}
            <span className="text-primary-pink font-medium italic">"Mr. Bebek Kwek Kwek"</span> yang cerewet.
          </p>
          <p className="text-lg md:text-xl text-text-primary leading-relaxed font-light">
            Lili merasa tersindir, <span className="text-primary-pink font-medium">"wkwk... karena aku cerewet, kayak Mr Kwek Kwek,"</span> pikirnya.
          </p>
        </motion.div>

        {/* Chapter 2 */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl text-text-primary leading-relaxed font-light">
            Saat harus membuat akun ML, Lili teringat dongeng lain tentang seekor angsa yang cantik, namun terlihat kotor karena debu.
          </p>
          <p className="text-lg md:text-xl text-text-primary leading-relaxed font-light">
            <span className="text-primary-pink font-medium italic">"Itu bentuk insecurity aku dulu..."</span>
          </p>
          <p className="text-lg md:text-xl text-text-primary leading-relaxed font-light">
            Dari situlah lahir username pertama: <span className="text-primary-pink font-medium">"angsaburukrupa"</span>.
          </p>
        </motion.div>

        {/* Chapter 3 */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl text-text-primary leading-relaxed font-light">
            Namun waktu berlalu. <span className="text-primary-pink font-medium">Insecurity itu perlahan sembuh</span>. Lili belajar untuk percaya diri dan bersyukur.
          </p>
          <p className="text-lg md:text-xl text-text-primary leading-relaxed font-light">
            Angsa yang buruk rupa itu pun bertransformasi...
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-primary-pink text-glow mt-4 mb-2">
            ...menjadi seekor Angsa Putih.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light">
            Kini ia dikenal sebagai <span className="text-white font-medium">angsaputiihh</span>.
          </p>
        </motion.div>

        {/* Memory Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }} 
          whileInView={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }} 
          viewport={{ once: false }}
          className="glass-effect-pink rounded-2xl p-8 md:p-10 border border-primary-pink/20 shadow-xl"
        >
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-display text-white tracking-wide">
              LILI & US
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <span className="block text-xs text-text-secondary uppercase tracking-wider mb-2">Hari Lahir</span>
                <span className="text-lg md:text-xl text-primary-pink font-medium">🎂 21 Juni 2003</span>
              </div>
              <div className="text-center">
                <span className="block text-xs text-text-secondary uppercase tracking-wider mb-2">Zodiak</span>
                <span className="text-lg md:text-xl text-primary-pink font-medium">♋ Cancer</span>
              </div>
            </div>

            <div className="border-t border-primary-pink/20 pt-6">
              <span className="block text-sm text-primary-pink uppercase tracking-wider mb-3">Our Beginning</span>
              <span className="text-2xl md:text-3xl text-white font-medium tracking-wide">🤍 08 / 04 / 2026</span>
              
              <div className="mt-4 p-4 bg-black/30 rounded-lg border border-primary-pink/20">
                <span className="block text-xs text-text-secondary uppercase tracking-wider mb-2">Waktu Berlalu</span>
                <span className="text-lg md:text-xl text-white font-medium">{timeElapsed}</span>
              </div>
            </div>

            {/* Button */}
            <div className="mt-6">
              <Link 
                href="/our-story" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-pink/20 border border-primary-pink/40 text-primary-pink font-medium rounded-full hover:bg-primary-pink hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary-pink/30 transform hover:-translate-y-1"
              >
                <span>📖</span>
                <span>Baca Kisah Awal Kita</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }} 
          viewport={{ once: false }}
          className="text-center"
        >
          <p className="text-text-secondary text-sm font-light">
            Setiap babak dalam kisah ini adalah bagian dari perjalanan yang indah...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
