"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingHeart() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const heartShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.bezierCurveTo(0, 0, -0.5, 0.5, -1.5, 0.5);
    s.bezierCurveTo(-3, 0.5, -3, -2, -3, -2);
    s.bezierCurveTo(-3, -3.5, -1, -5.5, 0, -7);
    s.bezierCurveTo(1, -5.5, 3, -3.5, 3, -2);
    s.bezierCurveTo(3, -2, 3, 0.5, 1.5, 0.5);
    s.bezierCurveTo(0.5, 0.5, 0, 0, 0, 0);
    return s;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.4;
    meshRef.current.position.y = Math.sin(t * 0.8) * 0.2;
    const pulse = 1 + Math.sin(t * 1.5) * 0.03;
    meshRef.current.scale.set(0.18 * pulse, 0.18 * pulse, 0.18 * pulse);
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI, 0, 0]}>
      <extrudeGeometry args={[heartShape, { depth: 0.6, bevelEnabled: true, bevelSize: 0.2, bevelThickness: 0.2 }]} />
      <meshPhysicalMaterial color="#c06070" metalness={0.7} roughness={0.2} emissive="#8b1a2e" emissiveIntensity={0.4} clearcoat={1} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} color="#ff8899" intensity={60} />
        <pointLight position={[-5, -5, -5]} color="#8899ff" intensity={30} />
        <FloatingHeart />
      </Canvas>
    </div>
  );
}