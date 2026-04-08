"use client";

import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
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
    <button
      onClick={togglePlay}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 100,
        background: "rgba(255, 179, 198, 0.1)",
        border: "1px solid rgba(255, 179, 198, 0.3)",
        color: "#ffb3c6",
        padding: "10px 15px",
        borderRadius: "20px",
        cursor: "pointer",
        backdropFilter: "blur(5px)",
        fontFamily: "sans-serif",
        fontSize: "0.9rem",
        transition: "all 0.3s ease"
      }}
      onMouseOver={(e) => e.currentTarget.style.background = "rgba(255, 179, 198, 0.2)"}
      onMouseOut={(e) => e.currentTarget.style.background = "rgba(255, 179, 198, 0.1)"}
    >
      {isPlaying ? "🎶 Pause Music" : "🎵 Play Music"}
    </button>
  );
}