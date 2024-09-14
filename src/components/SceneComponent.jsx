import React, { useEffect, useState } from "react";
import { LightComponent } from "./LightComponent";
import { EarthComponent } from "./EarthComponent";
import { WeatherComponent } from "./WeatherComponent";
import { getCityWeather } from "../utils/weatherApi";
import { cities } from "../utils/cities";
import { Bounds } from "@react-three/drei";
import { FocusWeatherComponent } from "./FocusWeatherComponent";

export const SceneComponent = () => {
  const [content, setContent] = useState([]);

  const getCurrentWeather = async () => {
    try {
      const promises = cities.map((city) => getCityWeather(city));
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
    //console.log("도시정보:", content);
  }, [content]);

  return (
    <>
      <LightComponent />
      <EarthComponent />
      {/* 반응형을 위한 observe 설정 */}
      <Bounds fit clip observe margin={1}>
        <FocusWeatherComponent>
          {content.map((data, index) => {
            const angle = (index / (content.length - 1)) * Math.PI;
            const radius = 2;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return (
              <WeatherComponent
                key={index}
                position={[x, y - 1.5, 0]}
                rotation-y={index + 1}
                cityName={data.city}
                weather={data.weatherData?.weather[0]?.main?.toLowerCase()}
              />
            );
          })}
        </FocusWeatherComponent>
      </Bounds>
    </>
  );
};
