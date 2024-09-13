import React from "react";
import { Canvas } from "@react-three/fiber";
import { SceneComponent } from "../components/SceneComponent";

export const HomePage = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 1, 4] }}>
        <color attach="background" args={["rgb(67,127,340)100%"]} />
        <SceneComponent />
      </Canvas>
    </>
  );
};
