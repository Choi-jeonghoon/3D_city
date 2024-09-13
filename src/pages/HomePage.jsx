import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { SceneComponent } from "../components/SceneComponent";
import CustomLoader from "../\bcommon/Loader";

function HomePage() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={["rgb(67, 127, 240)"]} />
        <Suspense fallback={<CustomLoader />}>
          <SceneComponent />
        </Suspense>
      </Canvas>
    </>
  );
}

export default HomePage;
