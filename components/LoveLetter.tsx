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
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: 100,
          background: "linear-gradient(135deg, #ffb3c6, #ff8fab)",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "30px",
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(255, 179, 198, 0.5)",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        💌 Buka Aku, Lili
      </motion.button>

      {/* Pop-up Modal Surat Cinta */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(10px)",
              zIndex: 999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px"
            }}
          >
            <motion.div
              initial={{ y: 50, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.9 }}
              style={{
                background: "linear-gradient(to bottom, #1a1a24, #0a0a0f)",
                border: "1px solid rgba(255, 179, 198, 0.3)",
                borderRadius: "20px",
                padding: "3rem",
                maxWidth: "600px",
                width: "100%",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(255,179,198,0.1)",
                position: "relative",
                textAlign: "center"
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "20px",
                  background: "transparent",
                  border: "none",
                  color: "#888",
                  fontSize: "1.5rem",
                  cursor: "pointer"
                }}
              >
                ✕
              </button>

              <h2 style={{ color: "#ffb3c6", fontSize: "2.5rem", marginBottom: "1rem", fontFamily: "'Courier New', Courier, monospace" }}>
                Untuk Kaelen Neriah Zephyr
              </h2>
              
              <div style={{ width: "50px", height: "2px", background: "#ffb3c6", margin: "0 auto 2rem auto" }}></div>

              <p style={{ color: "#e0e0e0", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                Melihat perjalananmu dari seseorang yang merasa penuh debu, hingga kini menjadi angsa putih yang sangat anggun dan percaya diri, adalah hal yang paling membuatku bangga.
              </p>
              <p style={{ color: "#e0e0e0", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "2rem" }}>
                Terima kasih sudah bertahan, sembuh, dan akhirnya membiarkan aku menjadi bagian dari ceritamu. Kamu lebih dari sekadar cantik, Lili. Kamu sangat berharga.
              </p>
              
              <p style={{ color: "#ffb3c6", fontSize: "1.2rem", fontWeight: "bold", fontStyle: "italic" }}>
                I love you.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}