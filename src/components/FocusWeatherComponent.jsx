import { useBounds } from "@react-three/drei";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const FocusWeatherComponent = ({ children }) => {
  const bounds = useBounds();
  const location = useLocation();

  const handleClick = (e) => {
    console.log(e.object);
    e.stopPropagation();
    bounds.refresh(e.object).clip().fit();
  };
  useEffect(() => {
    if (location.pathname == "/") {
      bounds.refresh().fit();
    }
  }, [location]);

  return (
    <group
      onClick={handleClick}
      onPointerMissed={(e) => e.button === 0 && bounds.refresh().fit()}
    >
      {children}
    </group>
  );
};
