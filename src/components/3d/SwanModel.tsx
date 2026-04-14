"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export function SwanModel() {
  const { scene } = useGLTF("/models/swan.glb");
  const swanRef = useRef<THREE.Group>(null);
  const { pointer, clock } = useThree();

  useFrame(() => {
    if (swanRef.current) {
      // Gentle rotation
      swanRef.current.rotation.y += 0.003;

      // Mouse parallax
      const mouseX = (pointer.x * Math.PI) / 8;
      const mouseY = (pointer.y * Math.PI) / 8;
      swanRef.current.rotation.x = THREE.MathUtils.lerp(
        swanRef.current.rotation.x,
        mouseY * 0.15,
        0.05
      );
      swanRef.current.rotation.y = THREE.MathUtils.lerp(
        swanRef.current.rotation.y,
        swanRef.current.rotation.y + mouseX * 0.05,
        0.05
      );

      // Floating effect
      swanRef.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.15 - 0.3;
    }
  });

  // Clone scene to avoid modifying original
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <group ref={swanRef} scale={2} position={[0, -0.3, 0]}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload("/models/swan.glb");