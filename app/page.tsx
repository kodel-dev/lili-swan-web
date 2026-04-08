"use client";

import Scene from "@/components/Scene";
import StoryUI from "@/components/StoryUI";
import AudioPlayer from "@/components/AudioPlayer";
import LoveLetter from "@/components/LoveLetter";

export default function Home() {
  return (
    <main style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Komponen Audio di pojok kanan atas */}
      <AudioPlayer />
      
      {/* Komponen 3D Canvas di background */}
      <Scene />

      {/* Komponen UI Cerita dengan Framer Motion di sisi kanan */}
      <StoryUI />

      {/* Komponen Surat Cinta Rahasia di pojok kanan bawah */}
      <LoveLetter />
      
      {/* Teks Petunjuk Global */}
      <div style={{ position: "absolute", bottom: "30px", left: "30px", fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif", zIndex: 20, letterSpacing: "1px" }}>
        Scroll slowly &rarr;
      </div>
    </main>
  );
}