import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Memuat font untuk digunakan di seluruh aplikasi
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Untuk Lili (Kaelen Neriah Zephyr)",
  description: "The Swan's Library - A Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* Menghapus Navbar dan Footer dari layout global.
        Reset margin, padding, dan memastikan background dasar gelap
        agar efek Bloom dan Vignette dari Scene 3D terlihat sempurna.
      */}
      <body className={`${inter.variable} ${playfair.variable} font-sans m-0 p-0 bg-[#050508] text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}