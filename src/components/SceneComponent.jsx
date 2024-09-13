import React, { useEffect, useState } from "react";
import { LightComponent } from "./LightComponent";
import { EarthComponent } from "./EarthComponent";
import { WeatherComponent } from "./WeatherComponent";
import { getCityWeather } from "../utils/weatherApi";
import { cities } from "../utils/cities";

const KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const SceneComponent = () => {
  const [content, setContent] = useState([]);

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
    <>
      <LightComponent />
      <EarthComponent position={[0, -2, 0]} />
      {content?.map((key, index) => {
        return (
          <WeatherComponent
            key={index + "KEY"}
            position={[-1 + index * 0.5, 0, 0]}
            weather={key.weatherData?.weather[0]?.main?.toLowerCase()}
          />
        );
      })}
    </>
  );
};
