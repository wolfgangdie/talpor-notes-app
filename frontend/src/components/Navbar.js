import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = props => {
  return (
    <nav className="navbar">
      <ul className="navbar__nav">
        <li className="navbar__nav__nav-item">
          <NavLink activeClassName="active" to="/login/">
            Login
          </NavLink>
        </li>
        <li className="navbar__nav__nav-item">
          <NavLink activeClassName="active" to="/register/">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
