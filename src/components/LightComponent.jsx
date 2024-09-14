import { Environment } from "@react-three/drei";

export const LightComponent = () => {
  return (
    <>
      <directionalLight position={[1, 3, -1]} intensity={3} />
      <ambientLight intensity={1} color="white" />
      <Environment preset="forest" /> {/* 조명만 활용 */}
    </>
  );
};

/* (property) preset?: "apartment" | "city" | "dawn" | "forest" | "lobby" | "night" | "park" | "studio" | "sunset" | "warehouse" | undefined */
