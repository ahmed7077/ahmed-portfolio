"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Terrain() {
  const mesh = useRef<Mesh>(null);
  useFrame(({ pointer }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = -1.2 + pointer.y * 0.025;
    mesh.current.rotation.z = pointer.x * 0.035;
  });
  return (
    <mesh ref={mesh} position={[0, -1.5, -1]} rotation={[-1.2, 0, 0]} scale={[7, 5, 1.2]}>
      <planeGeometry args={[2, 2, 42, 42]} />
      <MeshDistortMaterial color="#294a40" roughness={0.92} metalness={0.02} wireframe distort={0.38} speed={0.55} />
    </mesh>
  );
}

function Nodes() {
  return (
    <group>
      {[[-2.4, .3, 0], [1.8, .8, -.5], [.2, 1.5, -1], [3, -.2, -1.5]].map((position, i) => (
        <Float key={i} speed={.7 + i * .1} floatIntensity={.25}>
          <mesh position={position as [number, number, number]}>
            <sphereGeometry args={[.035 + i * .008, 12, 12]} />
            <meshStandardMaterial color={i % 2 ? "#c49a57" : "#b86b4b"} emissiveIntensity={.3} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function TerrainScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.5, 5], fov: 42 }} gl={{ antialias: true, alpha: true }}>
      <fog attach="fog" args={["#1e3a34", 3.5, 10]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 4, 5]} intensity={2} color="#e7dcc8" />
      <Terrain /><Nodes />
    </Canvas>
  );
}
