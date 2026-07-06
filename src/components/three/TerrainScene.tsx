"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { MathUtils } from "three";
import type { Group, Mesh, PerspectiveCamera as ThreePerspectiveCamera } from "three";

function ScrollCamera() {
  const camera = useRef<ThreePerspectiveCamera>(null);
  const progress = useRef(0);

  useEffect(() => {
    const update = () => { progress.current = Math.min(window.scrollY / Math.max(window.innerHeight * 1.4, 1), 1); };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useFrame((_, delta) => {
    if (!camera.current) return;
    const p = progress.current;
    const ease = 1 - Math.exp(-delta * 4);
    camera.current.position.x = MathUtils.lerp(camera.current.position.x, p * .75, ease);
    camera.current.position.y = MathUtils.lerp(camera.current.position.y, 1.5 - p * .8, ease);
    camera.current.position.z = MathUtils.lerp(camera.current.position.z, 5 - p * 1.15, ease);
    camera.current.rotation.z = MathUtils.lerp(camera.current.rotation.z, p * -.025, ease);
  });
  return <PerspectiveCamera makeDefault ref={camera} position={[0, 1.5, 5]} fov={42} />;
}

function Terrain() {
  const mesh = useRef<Mesh>(null);
  useFrame(({ pointer }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = -1.2 + pointer.y * 0.025;
    mesh.current.rotation.z = pointer.x * 0.035;
  });
  return (
    <mesh ref={mesh} position={[0, -1.5, -1]} rotation={[-1.2, 0, 0]} scale={[7, 5, 1.2]}>
      <planeGeometry args={[2, 2, 30, 30]} />
      <MeshDistortMaterial color="#294a40" roughness={0.92} metalness={0.02} wireframe distort={0.38} speed={0.55} />
    </mesh>
  );
}

function Nodes() {
  const group = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * .12) * .06;
  });
  return (
    <group ref={group}>
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
    <Canvas dpr={1} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
      <fog attach="fog" args={["#1e3a34", 3.5, 10]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 4, 5]} intensity={2} color="#e7dcc8" />
      <ScrollCamera /><Terrain /><Nodes />
    </Canvas>
  );
}
