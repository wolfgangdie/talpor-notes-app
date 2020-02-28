import React from "react";

import Logo from "./Logo";
import Navbar from "./Navbar";

import "./Layout.css";

const Layout = props => {
  return (
    <>
      <div className="background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="white" points="0,100 0,0 100,100 0,100" />
        </svg>
      </div>
      <div className="layout">
        <header>
          <Logo />
          <Navbar />
        </header>
        <section>
          <div className="container">{props.children}</div>
        </section>
        <footer>
          <span>Wolfgang Dielingen</span>
        </footer>
      </div>
    </>
  );
};

export default Layout;
