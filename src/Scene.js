import * as THREE from "three";
import { Center, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import { useEmojiStore } from "./store";
import gsap from "gsap";

// THREE.ColorManagement.legacyMode = false

export default function Scene() {
  const meshRef = useRef();
//   const { emoji, changeEmoji } = useEmojiStore();
// //   console.log(emoji, "11");

//   useEffect(() => {
//     if (emoji === "victory") {
//       gsap.to(meshRef.current.position, {
//         y: 2,
//         duration: 2,
//       });
//     }

//     if (emoji === "thumbs_up") {
//       gsap.to(meshRef.current.position, {
//         y: -2,
//         duration: 2,
//       });
//     }

//     if (emoji === "rock") {
//         gsap.to(meshRef.current.position, {
//           y: 0,
//           duration: 2,
//         });
//       }

//   }, [emoji]);

  return (
    <>
      <Canvas style={{ position: "absolute" }}>
        <OrbitControls makeDefault />
        <Environment preset="forest" blur={0.8} />

        <mesh ref={meshRef}>
          <boxGeometry args={[1, 1, 1]} position={[2, 0, 0]} />
          <meshBasicMaterial color={"aqua"} />
        </mesh>

      </Canvas>
    </>
  );
}


