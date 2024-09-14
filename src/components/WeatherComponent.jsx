import { useFrame, useLoader } from "@react-three/fiber";
import React, { useMemo, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { motion } from "framer-motion-3d";
import { CityNameComponent } from "./CityNameComponent";

export const WeatherComponent = (props) => {
  const { position, weather, rotation, cityName } = props;
  const weatherGlb = useLoader(GLTFLoader, "/models/weather.glb");
  //console.log("날씨 모델링", weatherGlb.nodes);
  const ref = useRef(null);
  const [isHover, setHover] = useState(false);

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
    <group position={position} rotation={rotation}>
      {/* framer-motion-3d 활용한 호버 속성 */}
      <motion.mesh
        onPointerEnter={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        whileHover={{ scale: 1.5, transition: { duration: 0.5 } }}
        ref={ref}
      >
        <primitive object={weatherModel} />
      </motion.mesh>
      {isHover && <CityNameComponent name={cityName} />}
    </group>

    // <mesh ref={ref} rotation-y={rotationY} position={position}>
    //   <primitive object={weatherModel} />
    // </mesh>
  );
};
