import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../../assets/img/logo.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const Navigation = () => {
  return (
    <nav>
      <img className="logo" alt="logo" src={logo}></img>
      <ul>
        <li>
          <NavLink
            to="/"
            // className={(navData) => (navData.isActive ? "activeLink" : "")}
          ></NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <span>
              <FaShoppingCart />
            </span>
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/cart">
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
