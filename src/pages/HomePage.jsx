import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { SceneComponent } from "../components/SceneComponent";
import CustomLoader from "../common/Loader";
import { OrbitControls } from "@react-three/drei";

function HomePage() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* <color attach="background" args={["rgb(67, 127, 240)"]} /> */}
        <Suspense fallback={<CustomLoader />}>
          <SceneComponent />
        </Suspense>
        <OrbitControls
          makeDefault // 이 컨트롤러를 기본 카메라 컨트롤로 설정
          enablePan={false} // Pan(이동) 기능을 비활성화 (카메라의 평행 이동 금지)
          minAzimuthAngle={-Math.PI / 4} // 카메라가 회전할 수 있는 최소 방위각 (-45도)
          maxAzimuthAngle={Math.PI / 4} // 카메라가 회전할 수 있는 최대 방위각 (45도)
          minPolarAngle={Math.PI / 6} // 카메라의 최소 극각 (위로 볼 수 있는 각도 제한, 30도)
          maxPolarAngle={Math.PI - Math.PI / 6} // 카메라의 최대 극각 (아래로 볼 수 있는 각도 제한, 150도)
          maxDistance={15} // 카메라가 이동할 수 있는 최대 거리
          minDistance={2} // 카메라가 이동할 수 있는 최소 거리
        />
      </Canvas>
    </>
  );
}

export default HomePage;
