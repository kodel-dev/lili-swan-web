"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import { SwanModel } from "./SwanModel";
import { FloatingParticles } from "./FloatingParticles";

export default function SwanScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <color attach="background" args={["#050508"]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ffb3c6" />
      
      {/* Environment */}
      <Environment preset="night" />
      
      <Suspense fallback={null}>
        <SwanModel />
        <FloatingParticles count={80} color="#ffb3c6" size={0.08} speed={0.3} />
      </Suspense>
      
      {/* Shadows */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.3}
        scale={20}
        blur={2}
        far={4}
      />
      
      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3}
        maxDistance={10}
        autoRotate={false}
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}