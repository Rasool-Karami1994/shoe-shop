import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../../assets/img/logo.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useCartContext } from "../../context/CartProvider";
import { useAuthContext } from "../../context/AuthProvider";
import { FiLogOut } from "react-icons/fi";
const Navigation = () => {
  const user = useAuthContext();
  const { cart } = useCartContext();
  console.log(user);
  const logoutHandler = () => {
    console.log("hello");
    localStorage.setItem("auth", JSON.stringify(false));
  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <nav>
      <img className="logo" alt="logo" src={logo}></img>
      <ul>
        <li>
          <NavLink to="/cart">
            <span>
              <FaShoppingCart />
            </span>
            <span className="cart-qnt">{cart.length}</span>
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/signup">
            <span>
              {user ? (
                <button onClick={() => logoutHandler()}>
                  <FiLogOut />
                </button>
              ) : (
                <FiLogIn />
              )}
            </span>
          </NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
