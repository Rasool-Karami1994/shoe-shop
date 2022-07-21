import React from "react";
import HomePage from "./pages/home-page/HomePage";
import Cart from "./pages/cart/Cart";
import CheckoutPage from "./pages/checkout/CheckoutPage";
const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <CheckoutPage /> },
];
export default routes;
