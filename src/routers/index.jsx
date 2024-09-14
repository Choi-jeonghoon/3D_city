import React from "react";
import HomePage from "../pages/HomePage";

export const routerInfo = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "seoul",
        element:<div className="layout-detail">서울</div>,
      },
    ],
  },
];
