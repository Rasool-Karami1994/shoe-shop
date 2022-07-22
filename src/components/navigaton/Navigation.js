import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../../assets/img/logo.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useCartContext } from "../../context/CartProvider";
const Navigation = () => {
  const { cart } = useCartContext();
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
              <FiLogIn />
            </span>
          </NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
