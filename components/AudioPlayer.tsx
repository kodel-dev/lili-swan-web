'use client';

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Cek apakah file bgm.mp3 ada di folder public/
    const audio = new Audio("/bgm.mp3");
    audio.oncanplaythrough = () => {
      audioRef.current = audio;
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    };
    audio.onerror = () => {
      // Jika file tidak ada, nonaktifkan fitur audio
      console.warn("File bgm.mp3 tidak ditemukan, fitur audio dinonaktifkan");
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.button
      onClick={togglePlay}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 left-8 z-50 flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md border transition-all duration-500 shadow-lg"
    >
      <div className={`relative flex items-center justify-center w-6 h-6 rounded-full transition-all duration-500 ${
        isPlaying 
          ? "bg-primary-pink/30 shadow-[0_0_15px_rgba(255,179,198,0.5)]" 
          : "bg-white/10"
      }`}>
        {isPlaying && (
          <span className="absolute inline-flex w-full h-full rounded-full bg-primary-pink opacity-30 animate-ping" />
        )}
        {isPlaying ? (
          <svg className="relative w-4 h-4 text-primary-pink" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        ) : (
          <svg className="relative w-4 h-4 text-text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </div>
      <span className={`font-medium text-sm font-sans tracking-wide transition-colors duration-300 ${
        isPlaying ? "text-primary-pink" : "text-text-primary"
      }`}>
        {isPlaying ? "Memutar Kenangan..." : "Putar Musik"}
      </span>
    </motion.button>
  );
}
