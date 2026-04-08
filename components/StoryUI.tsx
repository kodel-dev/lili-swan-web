"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link dari Next.js

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

  // --- ANIMASI & STYLING ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const textStyle = { color: "#e0e0e0", fontSize: "1.2rem", marginBottom: "2rem", lineHeight: "1.8", textShadow: "0px 2px 4px rgba(0,0,0,0.8)" };
  const emphasisStyle = { color: "#ffb3c6", fontWeight: "bold", textShadow: "0px 0px 8px rgba(255, 179, 198, 0.5)" };

  return (
    <div style={{
      position: "absolute", top: 0, right: 0, width: "100%", maxWidth: "600px", height: "100%",
      padding: "10vh 5%", overflowY: "auto", pointerEvents: "all", zIndex: 10,
      fontFamily: "'Courier New', Courier, monospace",
      background: "linear-gradient(to right, rgba(10,10,10,0), rgba(5,5,8,0.7) 20%, rgba(5,5,8,0.95) 100%)",
    }}>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={fadeInUp}>
        <h1 style={{ color: "#ffb3c6", fontSize: "3rem", marginBottom: "2rem", letterSpacing: "2px" }}>History Angsa Putih</h1>
        <p style={textStyle}>
          Dulu, hiburan satu-satunya Lili hanyalah buku. Suatu hari, ia membaca cerita tentang <span style={emphasisStyle}>&quot;Mr. Bebek Kwek Kwek&quot;</span> yang cerewet.
        </p>
        <p style={textStyle}>
          Lili merasa tersindir, &quot;wkwk... karena aku cerewet, kayak Mr Kwek Kwek,&quot; pikirnya.
        </p>
      </motion.div>

      <div style={{ height: "40vh" }}></div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={fadeInUp}>
        <p style={textStyle}>
          Saat harus membuat akun ML, Lili teringat dongeng lain tentang seekor angsa yang cantik, namun terlihat kotor karena debu.
        </p>
        <p style={textStyle}>
          &quot;<span style={emphasisStyle}>Itu bentuk insecurity aku dulu...</span>&quot;
        </p>
        <p style={textStyle}>
          Dari situlah lahir username pertama: <span style={emphasisStyle}>&quot;angsaburukrupa&quot;</span>.
        </p>
      </motion.div>

      <div style={{ height: "40vh" }}></div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={fadeInUp}>
        <p style={textStyle}>
          Namun waktu berlalu. <span style={emphasisStyle}>Insecurity itu perlahan sembuh</span>. Lili belajar untuk percaya diri dan bersyukur.
        </p>
        <p style={textStyle}>
          Angsa yang buruk rupa itu pun bertransformasi...
        </p>
        <h2 style={{ ...emphasisStyle, fontSize: "2.5rem", marginTop: "2rem", marginBottom: "1rem" }}>
          ...menjadi seekor Angsa Putih.
        </h2>
        <p style={{...textStyle, fontSize: "1rem", color: "#aaaaaa"}}>
          Kini ia dikenal sebagai <span style={{color: "white", fontWeight: "bold"}}>angsaputiihh</span>.
        </p>
      </motion.div>

      <div style={{ height: "30vh" }}></div>

      {/* --- KOTAK MEMORI & LIVE TRACKER --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } }} 
        viewport={{ once: false }}
        style={{
          padding: "2.5rem",
          border: "1px solid rgba(255, 179, 198, 0.4)",
          borderRadius: "16px",
          background: "linear-gradient(135deg, rgba(255,179,198,0.1), rgba(0,0,0,0.5))",
          backdropFilter: "blur(10px)",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(255, 179, 198, 0.1)"
        }}
      >
        <h3 style={{ color: "white", fontSize: "1.8rem", marginBottom: "2rem", letterSpacing: "3px", fontFamily: "sans-serif" }}>
          LILI &amp; US
        </h3>
        
        <div style={{ marginBottom: "1.5rem" }}>
          <span style={{ display: "block", fontSize: "0.85rem", color: "#888", letterSpacing: "2px", marginBottom: "0.3rem" }}>HARI LAHIR</span>
          <span style={{ fontSize: "1.3rem", color: "#ffb3c6", fontWeight: "bold" }}>🎂 21 Juni 2003</span>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <span style={{ display: "block", fontSize: "0.85rem", color: "#888", letterSpacing: "2px", marginBottom: "0.3rem" }}>ZODIAK</span>
          <span style={{ fontSize: "1.3rem", color: "#ffb3c6", fontWeight: "bold" }}>♋ Cancer</span>
        </div>

        <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <span style={{ display: "block", fontSize: "0.85rem", color: "#ffb3c6", letterSpacing: "2px", marginBottom: "0.5rem" }}>OUR BEGINNING</span>
          <span style={{ fontSize: "1.5rem", color: "white", fontWeight: "bold", letterSpacing: "1px" }}>🤍 08 / 04 / 2026</span>
          
          <div style={{ marginTop: "1rem", fontSize: "1rem", color: "#e0e0e0", fontFamily: "sans-serif", background: "rgba(0,0,0,0.3)", padding: "10px", borderRadius: "8px" }}>
            <span style={{ fontSize: "0.8rem", color: "#888", display: "block", marginBottom: "5px" }}>WAKTU BERLALU</span>
            {timeElapsed}
          </div>
        </div>

        {/* --- TOMBOL MENUJU HALAMAN CHAT HISTORY --- */}
        <div style={{ marginTop: "3rem" }}>
          <Link href="/our-story" style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "rgba(255, 179, 198, 0.1)",
            border: "1px solid #ffb3c6",
            color: "#ffb3c6",
            textDecoration: "none",
            borderRadius: "30px",
            fontFamily: "sans-serif",
            fontSize: "0.9rem",
            letterSpacing: "1px",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#ffb3c6";
            e.currentTarget.style.color = "#000";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "rgba(255, 179, 198, 0.1)";
            e.currentTarget.style.color = "#ffb3c6";
          }}
          >
            📖 Baca Kisah Awal Kita
          </Link>
        </div>

      </motion.div>
      
      <div style={{ height: "15vh" }}></div>
    </div>
  );
}