import React from "react";
import HomePage from "../pages/HomePage";
import SeoulPage from "../pages/SeoulPage";
import { getCityWeather } from "../utils/weatherApi";

export const routerInfo = [
  {
    path: "/",
    element: <HomePage />,
    errElement: <div className="layout-detail">Error</div>,
    children: [
      {
        path: "seoul",
        element: <SeoulPage />,
        loader: async () => {
          return getCityWeather("Seoul");
        },
      },
    ],
  },
];
