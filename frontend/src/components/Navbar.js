import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "../store/actions/auth";
import { authTokenSelector } from "../store/selectors/auth";

import "./Navbar.css";

const Navbar = props => {
  return (
    <nav className="navbar">
      <ul className="navbar__nav">
        {!props.token && (
          <>
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
          </>
        )}
        {props.token && (
          <>
            <li className="navbar__nav__nav-item">
              <NavLink activeClassName="active" to="/notes/">
                Notes
              </NavLink>
            </li>
            <li className="navbar__nav__nav-item">
              <NavLink to="/" onClick={props.logout}>
                Logout
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    token: authTokenSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
