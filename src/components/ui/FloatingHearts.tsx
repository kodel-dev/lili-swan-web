"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

interface FloatingHeartsProps {
  count?: number;
  speed?: number;
}

export function FloatingHearts({ count = 20, speed = 1 }: FloatingHeartsProps) {
  const hearts = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ],
        velocity: Math.random() * 0.02 + 0.01,
        size: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.3,
        rotation: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    hearts.forEach((heart, index) => {
      // Move hearts up
      heart.position[1] += heart.velocity * speed;
      
      // Rotate hearts
      heart.rotation += 0.01;
      
      // Reset if too high
      if (heart.position[1] > 8) {
        heart.position[1] = -8;
        heart.position[0] = (Math.random() - 0.5) * 20;
        heart.position[2] = (Math.random() - 0.5) * 10;
      }
    });
  });

  return (
    <group>
      {hearts.map((heart, index) => (
        <mesh
          key={index}
          position={heart.position as [number, number, number]}
          rotation={[0, 0, heart.rotation]}
        >
          <boxGeometry args={[heart.size, heart.size * 0.8, 0.1]} />
          <meshBasicMaterial 
            color="#ffb3c6" 
            transparent 
            opacity={heart.opacity}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
