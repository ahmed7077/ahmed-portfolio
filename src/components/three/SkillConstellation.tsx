"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

const nodes: [number, number, number][] = [
  [-2.8, 1.2, -.3], [-1.9, -.6, .5], [-.8, 1.5, -.5], [.1, .2, .8],
  [1.2, 1.35, .1], [2.5, .5, -.7], [2.1, -1.1, .4], [.7, -1.45, -.2],
  [-.7, -1, .7], [-2.6, -.9, -.4], [0, 1.8, -.8], [2.9, -1.4, -.5],
];
const links = [[0, 1], [0, 2], [1, 3], [1, 8], [2, 3], [2, 10], [3, 4], [3, 7], [4, 5], [4, 10], [5, 6], [6, 7], [6, 11], [7, 8], [8, 9], [1, 9]] as const;

function Network({ activeSeed }: { activeSeed: number }) {
  const group = useRef<Group>(null);
  useFrame(({ pointer, clock }, delta) => {
    if (!group.current) return;
    const ease = 1 - Math.exp(-delta * 2.7);
    group.current.rotation.y += (pointer.x * .16 - group.current.rotation.y) * ease;
    group.current.rotation.x += (-pointer.y * .1 - group.current.rotation.x) * ease;
    group.current.position.y = Math.sin(clock.elapsedTime * .35) * .08;
  });
  return (
    <group ref={group}>
      {links.map(([from, to], index) => <Line key={index} points={[nodes[from], nodes[to]]} color={index % 4 === activeSeed % 4 ? "#c49a57" : "#7b9278"} transparent opacity={.24} lineWidth={.6} />)}
      {nodes.map((position, index) => (
        <mesh key={index} position={position} scale={index % 4 === activeSeed % 4 ? 1.45 : 1}>
          <sphereGeometry args={[.055 + (index % 3) * .012, 12, 12]} />
          <meshStandardMaterial color={index % 4 === activeSeed % 4 ? "#c49a57" : "#e7dcc8"} emissive={index % 4 === activeSeed % 4 ? "#b86b4b" : "#1e3a34"} emissiveIntensity={.65} />
        </mesh>
      ))}
      <Sparkles count={26} scale={[7, 4, 2]} size={1.4} speed={.18} color="#c49a57" opacity={.3} />
    </group>
  );
}

export default function SkillConstellation({ activeSeed }: { activeSeed: number }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 44 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.1} />
      <pointLight position={[2, 2, 4]} intensity={12} color="#c49a57" />
      <Network activeSeed={activeSeed} />
    </Canvas>
  );
}
