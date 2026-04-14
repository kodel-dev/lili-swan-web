"use client";
import { useState } from "react";
import Scene from "../components/Scene";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const photos = [
    "https://cdn.discordapp.com/attachments/1492224568687988767/1493652977125163168/IMG-20260413-WA0010.jpg?ex=69dfc03c&is=69de6ebc&hm=7bc108d8aeb0548547b4294ef292265c2e7284501b5375c241d408c0d7792187&",
    "https://cdn.discordapp.com/attachments/1492224568687988767/1493652977834266694/IMG-20260407-WA0024.jpg?ex=69dfc03c&is=69de6ebc&hm=05de2a4d079a20e82d80cdf653dd8f7e532462ad91dc15ccf015180a5e4db080&",
    "https://cdn.discordapp.com/attachments/1492224568687988767/1493652984272388096/IMG-20260406-WA0015.jpg?ex=69dfc03e&is=69de6ebe&hm=56c785f0fbf068fc842cdf5b4a943b266c908e1b4a5565d2248ebde978463093&",
    "https://cdn.discordapp.com/attachments/1492224568687988767/1493652984721051869/IMG-20260407-WA0049.jpg?ex=69dfc03e&is=69de6ebe&hm=2a7ae080cf9457ff4deccdee4d0b1dcea045ca8892a92276d1f6ca6d77d5044e&"
  ];

  return (
    <main className="grain min-h-screen relative selection:bg-[#e8a0a0]/30">
      <Scene />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-10 py-8 backdrop-blur-sm border-b border-white/5">
        <div className="font-serif text-2xl tracking-[0.2em]">LILI<span className="text-[#e8a0a0]">✦</span></div>
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] text-white/40">
          {["home", "story", "gallery", "message"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item)}
              className={`hover:text-white transition-all relative py-2 ${activeSection === item ? "text-white" : ""}`}
            >
              {item}
              {activeSection === item && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#e8a0a0] animate-in slide-in-from-left duration-500" />}
            </button>
          ))}
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {activeSection === "home" && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#e8a0a0] mb-8 block">— sebuah ruang kecil untukmu —</span>
            <h1 className="font-serif text-6xl md:text-8xl italic leading-tight mb-6">
              Haii, <br /> <span className="text-[#e8a0a0]">Lilipot.</span>
            </h1>
            <p className="text-white/30 text-sm tracking-widest max-w-sm mx-auto mb-10">Jelajahi setiap sudut yang aku buat khusus untukmu.</p>
            <button onClick={() => setActiveSection("story")} className="px-10 py-4 border border-white/10 rounded-full text-[10px] tracking-[0.3em] uppercase">Mulai →</button>
          </div>
        )}

        {activeSection === "story" && (
          <div className="max-w-xl glass-card p-10 md:p-16 animate-in zoom-in-95 duration-700">
            <h2 className="font-serif text-4xl md:text-5xl italic mb-8">Dua Dunia, <span className="text-[#e8a0a0]">Satu Pilihan.</span></h2>
            <div className="w-10 h-[1px] bg-[#e8a0a0]/50 mx-auto mb-8" />
            <p className="text-white/50 text-sm leading-relaxed mb-6">Mungkin banyak perbedaan di antara kita — dari agama sampai rutinitas. Tapi bagiku, itu bukan alasan untuk pergi.</p>
            <p className="text-white/50 text-sm leading-relaxed mb-10">Kamu adalah orang yang aku pilih untuk aku temani. Apa adanya.</p>
            <div className="p-6 border-l-2 border-[#e8a0a0] bg-[#e8a0a0]/5 rounded-r-xl text-left italic font-serif text-lg">
              "Kita saling melengkapi, bukan saling menghakimi."
            </div>
          </div>
        )}

        {activeSection === "gallery" && (
          <div className="max-w-4xl w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photos.map((src, i) => (
                <div key={i} className={`group relative overflow-hidden rounded-2xl border border-white/5 transition-all hover:border-[#e8a0a0]/40 ${i === 1 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                  <img src={src} alt="Memories" className="w-full h-full object-cover aspect-square md:aspect-auto group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "message" && (activeSection === "message" && (
          <div className="max-w-lg glass-card p-10 md:p-16 animate-in zoom-in-95 duration-700">
            <h2 className="font-serif text-4xl italic mb-8">Untukmu, <br /><span className="text-[#e8a0a0]">yang sedang berproses.</span></h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">Aku nggak peduli kamu merasa 'toxic' atau 'problematik'. Di mataku, kamu cuma manusia yang lagi berproses — dan aku mau nemenin kamu sampai kamu selesai sama diri kamu sendiri.</p>
            <div className="flex items-center gap-4 justify-center">
              <span className="text-2xl animate-pulse">♡</span>
              <div className="h-[1px] w-20 bg-gradient-to-r from-[#e8a0a0] to-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Nav Overlay */}
      <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex gap-6 px-8 py-4 glass-card rounded-full border-white/10">
         <button onClick={() => setActiveSection("home")} className={`text-lg ${activeSection === "home" ? "text-[#e8a0a0]" : "opacity-30"}`}>⌂</button>
         <button onClick={() => setActiveSection("story")} className={`text-lg ${activeSection === "story" ? "text-[#e8a0a0]" : "opacity-30"}`}>✦</button>
         <button onClick={() => setActiveSection("gallery")} className={`text-lg ${activeSection === "gallery" ? "text-[#e8a0a0]" : "opacity-30"}`}>◈</button>
         <button onClick={() => setActiveSection("message")} className={`text-lg ${activeSection === "message" ? "text-[#e8a0a0]" : "opacity-30"}`}>♡</button>
      </div>
    </main>
  );
}