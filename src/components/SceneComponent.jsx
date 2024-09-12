import { Canvas } from "@react-three/fiber";
import React from "react";
import { LightComponent } from "./LightComponent";
import { EarthComponent } from "./EarthComponent";
import { WeatherComponent } from "./WeatherComponent";

export const SceneComponent = () => {
  return (
    <Canvas camera={{ position: [0, 1, 4] }}>
      <color attach="background" args={["rgb(67,127,340)100%"]} />
      <LightComponent />
      <EarthComponent position={[0, -2, 0]} />
      <WeatherComponent position={[-2, 0, 0]} weather={"clear"} />
      <WeatherComponent position={[0, 0, 0]} weather={"cloud"} />
      <WeatherComponent position={[1, 0, 0]} weather={"mist"} />
      <WeatherComponent position={[2, 0, 0]} weather={"rain"} />
      <WeatherComponent position={[0, 1, 0]} weather={"rain2"} />
      <WeatherComponent position={[0, 2, 0]} weather={"snow"} />
    </Canvas>
  );
};
