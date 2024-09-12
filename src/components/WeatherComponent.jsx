import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const WeatherComponent = (props) => {
  const { position, weather } = props;
  const weatherGlb = useLoader(GLTFLoader, "/models/weather.glb");
  //console.log("날씨 모델링", weatherGlb.nodes);

  //모델링 된 데이터와 다른 것이 있다면 흐름으로 처리하기
  let weatherModel;
  if (weatherGlb.nodes[weather]) {
    weatherModel = weatherGlb.nodes[weather].clone();
  } else {
    weatherModel = weatherGlb.nodes.cloud.clone();
  }

  return (
    <mesh position={position}>
      <primitive object={weatherModel} />
    </mesh>
  );
};
