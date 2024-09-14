import { useBounds } from "@react-three/drei";
import React from "react";

export const FocusWeatherComponent = ({ children }) => {
  const bounds = useBounds();

  const handleClick = (e) => {
    console.log(e.object);
    e.stopPropagation();
    bounds.refresh(e.object).clip().fit();
  };
  return (
    <group
      onClick={handleClick}
      onPointerMissed={(e) => e.button === 0 && bounds.refresh().fit()}
    >
      {children}
    </group>
  );
};
