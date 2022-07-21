import React from "react";
import HomePage from "./pages/home-page/HomePage";
import Cart from "./pages/cart/Cart";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
];
export default routes;
