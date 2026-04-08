"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import Swan from "./Swan";
import Environment from "./Environment";
import FloatingBooks from "./FloatingBooks";
import Particles from "./Particles";

export default function Scene() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
      <Canvas camera={{ position: [0, 1, 6], fov: 45 }}>
        <Suspense fallback={null}>
          
          {/* Particles bisa di luar karena dia tidak pakai useScroll */}
          <Particles count={150} />
          
          {/* Semua yang bereaksi terhadap scroll HARUS ada di dalam ScrollControls */}
          <ScrollControls pages={4} damping={0.1}>
            <Environment /> {/* <--- Dipindahkan ke sini */}
            <Swan modelPath="/swan.glb" />
            <FloatingBooks />
          </ScrollControls>

          <EffectComposer>
            <Bloom luminanceThreshold={1} mipmapBlur intensity={1.2} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.5} />
      </Canvas>
    </div>
  );
}