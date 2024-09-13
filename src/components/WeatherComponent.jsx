import { useFrame, useLoader } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { motion } from "framer-motion-3d";

export const WeatherComponent = (props) => {
  const { position, weather, rotationY } = props;
  const weatherGlb = useLoader(GLTFLoader, "/models/weather.glb");
  //console.log("날씨 모델링", weatherGlb.nodes);

  const ref = useRef(null);

  //프레임마다 계속 오른쪽으로 돌리기
  useFrame((_, delta) => {
    //console.log("날씨모델:", ref.current);
    ref.current.rotation.y += delta;
  });

  // //모델링 된 데이터와 다른 것이 있다면 흐림으로 처리하기
  const weatherModel = useMemo(() => {
    const clonedModel = weatherGlb.nodes[weather] || weatherGlb.nodes.cloud;
    return clonedModel.clone();
  }, [weather]);

  return (
    /*
    framer-motion-3d 활용한 호버 속성
    */
    <motion.mesh
      whileHover={{ scale: 1.5, transition: 0.5 }}
      ref={ref}
      rotation-y={rotationY}
      position={position}
    >
      <primitive object={weatherModel} />
    </motion.mesh>
    // <mesh ref={ref} rotation-y={rotationY} position={position}>
    //   <primitive object={weatherModel} />
    // </mesh>
  );
};
