import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "./Root";
import { Home } from "../pages/Home";
import { ProjectDetails } from "../components/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/" replace={true} />,
  },
]);
