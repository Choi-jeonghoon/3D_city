import { Html } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const EarthComponent = () => {
  const earthGlb = useLoader(GLTFLoader, "/models/earth.glb");
  //console.log("지구 모델링", earthGlb);
  const ref = useRef(null);
  const [ishover, setIshover] = useState(false);

  //프레임마다 계속 오른쪽으로 돌리기
  useFrame((_, delta) => {
    //console.log("지구모델:", ref.current);
    ref.current.rotation.y += delta * 0.1;
  });

  return (
    <group position={[0, -1.5, 0]}>
      <mesh
        onPointerEnter={() => setIshover(true)}
        onPointerLeave={() => setIshover(false)}
        scale={ishover ? 1.5 : 1.3}
        rotation-x={-Math.PI / 2}
        ref={ref}
      >
        <primitive object={earthGlb.scene} />
      </mesh>
      {ishover && (
        <Html center>
          <span className="icon">
            <img src="/icons/icon.png" alt="icon" />
          </span>
        </Html>
      )}
    </group>
  );
};

/*mesh 에서 사용할수있는 이벤트
    onClick={(e) => console.log("클릭")}
    onContextMenu={(e) => console.log("콘텍스트 메뉴, 오른쪽 마우스 클릭")}
    onDoubleClick={(e) => console.log("더블 클릭")}
    onWheel={(e) => console.log("마우스 휠")}
    onPointerUp={(e) => console.log("마우스에서 손 뗐을 때(위로)")}
    onPointerDown={(e) => console.log("마우스 버튼을 눌렀을 때(아래로)")}
    onPointerOver={(e) => console.log("포인터가 객체 위에 올라감")}
    onPointerOut={(e) => console.log("포인터가 객체를 벗어남")}
    onPointerEnter={(e) => console.log("포인터가 객체 내로 들어가는 타이밍")}
    onPointerLeave={(e) => console.log("포인터가 객체에서 벗어나는 타이밍")}
    onPointerMove={(e) => console.log("포인터가 객체내에서 이동 중")}
    onPointerMissed={() => console.log("포인터가 객체내에서 잃어버림")}
    onUpdate={(self) => console.log("프로퍼티가 업데이트됨")}
  */
