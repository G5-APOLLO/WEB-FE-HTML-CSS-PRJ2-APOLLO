import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import PLP from "../pages/plp";

export const router = createBrowserRouter([
  {
    path: "/WEB-FE-HTML-CSS-PRJ2-APOLLO",
    element: <Home />,
  },
  {
    path: "/WEB-FE-HTML-CSS-PRJ2-APOLLO/plp",
    element: <PLP />,
  }
]);