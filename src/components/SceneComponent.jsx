import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { LightComponent } from "./LightComponent";
import { EarthComponent } from "./EarthComponent";
import { WeatherComponent } from "./WeatherComponent";
import { getCityWeather } from "../utils/weatherApi";
import { cities } from "../utils/cities";

const KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const SceneComponent = () => {
  //console.log(import.meta.env.VITE_WEATHER_API_KEY);
  const [content, setContent] = useState();

  const getCurrentWeather = async () => {
    try {
      const promises = cities.map((city) => getCityWeather(city, KEY));
      const weatherDataArray = await Promise.all(promises);
      setContent(weatherDataArray);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getCurrentWeather();
  }, []);
  useEffect(() => {
    console.log("도시정보:", content);
  }, [content]);

  return (
    <Canvas camera={{ position: [0, 1, 4] }}>
      <color attach="background" args={["rgb(67,127,340)100%"]} />
      <LightComponent />
      <EarthComponent position={[0, -2, 0]} />
      <WeatherComponent position={[-2, 0, 0]} weather={"clear"} />
      <WeatherComponent position={[0, 0, 0]} weather={"cloud"} />
      <WeatherComponent position={[1, 0, 0]} weather={"mist"} />
      <WeatherComponent position={[2, 0, 0]} weather={"rain"} />
      <WeatherComponent position={[0, 1, 0]} weather={"rain2"} />
      <WeatherComponent position={[0, 2, 0]} weather={"snow"} />
    </Canvas>
  );
};
