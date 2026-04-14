"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
}

export function FloatingParticles({ 
  count = 50, 
  color = "#ffb3c6", 
  size = 0.05, 
  speed = 0.5 
}: FloatingParticlesProps) {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ],
        velocity: Math.random() * 0.02 + 0.01,
        size: Math.random() * size + size * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    return temp;
  }, [count, size]);

  useFrame((state) => {
    particles.forEach((particle, index) => {
      // Move particles up
      particle.position[1] += particle.velocity * speed;
      
      // Reset if too high
      if (particle.position[1] > 5) {
        particle.position[1] = -5;
        particle.position[0] = (Math.random() - 0.5) * 20;
        particle.position[2] = (Math.random() - 0.5) * 10;
      }
    });
  });

  return (
    <group>
      {particles.map((particle, index) => (
        <mesh
          key={index}
          position={particle.position as [number, number, number]}
        >
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial 
            color={color} 
            transparent 
            opacity={particle.opacity}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}