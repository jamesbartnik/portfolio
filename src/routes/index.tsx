import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "./Root.tsx";
import { Home } from "../features/Home.tsx";
import { About } from "../features/About.tsx";
import { Contact } from "../features/Contact.tsx";
import { Projects } from "../features/Projects.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/" replace={true} />,
  },
]);
