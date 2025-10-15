import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const Test = lazy(() => import("@/views/test"));
const NotFound = lazy(() => import("@/views/not-found"));

const router: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/test" />
  },
  {
    path: "/test",
    element: <Test />
  },
  {
    path: "*",
    element: <NotFound />
  }
];

export default router;
