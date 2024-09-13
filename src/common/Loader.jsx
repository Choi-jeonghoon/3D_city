import React from "react";
import { Html, useProgress } from "@react-three/drei";

function CustomLoader() {
  const { active, progress } = useProgress();
  return active ? (
    <Html center>
      <div style={{ color: "white", fontSize: "24px" }}>
        {progress.toFixed(1)}% loaded
      </div>
    </Html>
  ) : null;
}

export default CustomLoader;
