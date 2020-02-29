import React from "react";
import { NavLink } from "react-router-dom";

import "./Logo.css";

const Logo = props => {
  return (
    <div className="logo">
      <NavLink to="/">
        <h1>Talpor Notes App</h1>
      </NavLink>
    </div>
  );
};

export default Logo;
