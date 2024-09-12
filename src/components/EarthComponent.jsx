import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const EarthComponent = (props) => {
  const earthGlb = useLoader(GLTFLoader, "/models/earth.glb");
  //console.log("지구 모델링", earthGlb);

  return (
    <mesh {...props}>
      <primitive object={earthGlb.scene} />
    </mesh>
  );
};
