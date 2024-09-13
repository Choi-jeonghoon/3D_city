import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const EarthComponent = () => {
  const earthGlb = useLoader(GLTFLoader, "/models/earth.glb");
  //console.log("지구 모델링", earthGlb);
  const ref = useRef(null);

  //프레임마다 계속 오른쪽으로 돌리기
  useFrame((_, delta) => {
    //console.log("지구모델:", ref.current);
    ref.current.rotation.y += delta * 0.1;
  });

  return (
    <mesh
      scale={1.3}
      rotation-x={-Math.PI / 2}
      ref={ref}
      position={[0, -1.5, 0]}
    >
      <primitive object={earthGlb.scene} />
    </mesh>
  );
};
