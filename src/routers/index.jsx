import React from "react";
import HomePage from "../pages/HomePage";
import CityPage from "../pages/CityPage";
import { getCityWeather } from "../utils/weatherApi";

export const routerInfo = [
  {
    path: "/",
    element: <HomePage />,
    errElement: <div className="layout-detail">Error</div>,
    children: [
      {
        path: ":city", // 동적 경로 설정
        element: <CityPage />,
        loader: async ({ params }) => {
          // URL에서 city 파라미터 추출하여 날씨 데이터 로드
          const city = params.city;
          return getCityWeather(city);
        },
      },
    ],
  },
];
