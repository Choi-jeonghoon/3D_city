import { Canvas } from "@react-three/fiber";
import React from "react";
import { LightComponent } from "./LightComponent";
import { EarthComponent } from "./EarthComponent";

export const SceneComponent = () => {
  return (
    <Canvas camera={{ position: [0, 1, 3] }}>
      <color attach="background" args={["rgb(67,127,340)100%"]} />
      <LightComponent />
      <EarthComponent position={(0, -2, 0)} />
    </Canvas>
  );
};
