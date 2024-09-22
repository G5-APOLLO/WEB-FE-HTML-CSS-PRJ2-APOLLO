import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import PLP from "../pages/plp";
import ComingSoon from "../pages/ComingSoon";

export const router = createBrowserRouter(
  [
    {
      path: ``,
      element: <Home />,
    },
    {
      path: `/plp`,
      element: <PLP />,
    },
    {
      path: `/pdp`,
      element: <ComingSoon />, // Placeholder 
    },
    {
      path: `/cart`,
      element: <ComingSoon />, // Placeholder 
    },
  ],
  {
    basename: "/WEB-FE-HTML-CSS-PRJ2-APOLLO", 
  }
);