"use client";

import { Float, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function SingleBook({ position, color, rotation }: any) {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Box args={[0.5, 0.7, 0.1]} position={position} rotation={rotation}>
        <meshStandardMaterial color={color} roughness={0.3} />
      </Box>
    </Float>
  );
}

export default function FloatingBooks() {
  return (
    <group>
      <SingleBook position={[-3, 2, -2]} color="#4a4e69" rotation={[0.5, 0.5, 0]} />
      <SingleBook position={[3, -1, -3]} color="#9a8c98" rotation={[0.2, -0.5, 0.4]} />
      <SingleBook position={[-4, -2, -1]} color="#ffb3c6" rotation={[0.8, 0.2, -0.2]} />
      <SingleBook position={[4, 3, -4]} color="#22223b" rotation={[-0.3, 0.1, 0.5]} />
    </group>
  );
}