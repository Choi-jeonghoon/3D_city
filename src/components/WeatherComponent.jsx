import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const WeatherComponent = (props) => {
  const { position, weather } = props;
  const weatherGlb = useLoader(GLTFLoader, "/models/weather.glb");
  console.log("날씨 모델링", weatherGlb.nodes);

  return (
    <mesh position={position}>
      <primitive object={weatherGlb.nodes[weather]} />
    </mesh>
  );
};
