'use client';

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Pastikan file bgm.mp3 ada di folder public/
    audioRef.current = new Audio("/bgm.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
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
      className={`fixed bottom-8 left-8 z-[100] flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md border transition-all duration-500 shadow-lg ${
        isPlaying 
          ? "bg-rose-50/80 border-rose-200 text-rose-700 shadow-rose-200/50" 
          : "bg-white/50 border-zinc-200 text-zinc-500 hover:bg-white/80"
      }`}
    >
      <div className="relative flex items-center justify-center w-5 h-5">
        {isPlaying ? (
          <>
            <span className="absolute inline-flex w-full h-full rounded-full bg-rose-400 opacity-30 animate-ping"></span>
            <svg className="relative w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          </>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </div>
      <span className="font-medium text-sm font-sans tracking-wide">
        {isPlaying ? "Memutar Kenangan..." : "Putar Musik"}
      </span>
    </motion.button>
  );
}