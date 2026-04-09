'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-rose-50/50 border-t border-rose-100 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-serif italic text-rose-800 mb-6">
          Kisah Kita Terus Berlanjut...
        </h3>
        
        <p className="text-zinc-600 text-sm max-w-lg mx-auto leading-relaxed mb-8">
          Sebuah ruang kecil di internet untuk mengabadikan momen, tawa, dan cerita yang kita rajut bersama. Dibuat dengan penuh cinta, untuk dilihat kembali di masa depan.
        </p>

        <div className="flex justify-center items-center gap-6 mb-12">
          <Link href="/our-story" className="text-sm font-medium text-zinc-500 hover:text-rose-600 transition-colors">Cerita Kita</Link>
          <span className="w-1.5 h-1.5 bg-rose-300 rounded-full"></span>
          <Link href="/gallery" className="text-sm font-medium text-zinc-500 hover:text-rose-600 transition-colors">Galeri Memori</Link>
          <span className="w-1.5 h-1.5 bg-rose-300 rounded-full"></span>
          <Link href="/" className="text-sm font-medium text-zinc-500 hover:text-rose-600 transition-colors">Beranda</Link>
        </div>

        <div className="pt-8 border-t border-rose-200/50 flex flex-col items-center justify-center gap-2">
          <p className="text-zinc-500 text-xs tracking-widest uppercase">
            Est. 8 April 2026
          </p>
          <p className="text-rose-900 text-sm font-serif flex items-center gap-1.5">
            Crafted with <svg className="w-4 h-4 text-rose-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> by Kodel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;