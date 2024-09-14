import { Stars } from "@react-three/drei";
import React from "react";

export const Starts = () => {
  return (
    <Stars
      radius={40}
      depth={50}
      count={3000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
};
