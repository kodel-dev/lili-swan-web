"use client";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

export default function Environment() {
  const scroll = useScroll();
  const [color, setColor] = useState(new THREE.Color("#050508"));

  useFrame(() => {
    // Pengaman: Jika scroll context tidak ditemukan, hentikan animasi frame ini
    if (!scroll) return;

    // Transisi warna latar dari hitam/gelap ke ungu/pink pucat saat scroll
    const r = THREE.MathUtils.lerp(0.02, 0.15, scroll.offset);
    const g = THREE.MathUtils.lerp(0.02, 0.1, scroll.offset);
    const b = THREE.MathUtils.lerp(0.03, 0.12, scroll.offset);
    
    setColor(new THREE.Color(r, g, b));
  });

  return (
    <>
      <color attach="background" args={[color]} />
      <fog attach="fog" args={[color, 5, 15]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffb3c6" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
    </>
  );
}