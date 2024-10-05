import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import PLP from "../pages/plp";
import CartPage from '../pages/Cart';
import ProductDetailPage from "../pages/ProductDetailPage";

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
      element: <ProductDetailPage/>,
    },
    {
      path: `/cart`,
      element: <CartPage />,
    },
  ],
);