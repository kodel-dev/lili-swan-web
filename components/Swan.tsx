"use client";

import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function Swan({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  const swanRef = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame((state) => {
    if (swanRef.current) {
      // 1. Animasi Putaran Halus
      swanRef.current.rotation.y += 0.002;

      // 2. Parallax: Angsa bergerak sedikit mengikuti mouse
      const mouseX = (state.pointer.x * Math.PI) / 10;
      const mouseY = (state.pointer.y * Math.PI) / 10;
      swanRef.current.rotation.x = THREE.MathUtils.lerp(swanRef.current.rotation.x, mouseY * 0.2, 0.1);
      swanRef.current.rotation.y = THREE.MathUtils.lerp(swanRef.current.rotation.y, swanRef.current.rotation.y + mouseX * 0.1, 0.1);

      // 3. Efek Mengambang
      swanRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 - 0.5;

      // 4. Transformasi Cahaya (Bloom) berdasarkan Scroll
      const scrollOffset = scroll.offset; 
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (!object.material.emissive) {
             object.material = new THREE.MeshStandardMaterial({
               map: object.material.map, 
               color: object.material.color,
               emissive: new THREE.Color("#ffffff"), 
               emissiveIntensity: 0 
             });
          }
          // Intensitas cahaya ditingkatkan (sampai 3) agar efek Bloom bekerja maksimal
          object.material.emissiveIntensity = scrollOffset * 3; 
        }
      });
    }
  });

  return (
    <group ref={swanRef} scale={1.8} position={[0, -0.5, 0]}>
      <primitive object={scene} />
    </group>
  );
}