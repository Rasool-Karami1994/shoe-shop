import React from "react";
import HomePage from "./pages/home-page/HomePage";
import Cart from "./pages/cart/Cart";
const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/cart", element: <Cart /> },
];
export default routes;
