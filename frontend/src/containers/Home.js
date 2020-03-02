import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Layout from "../components/Layout";

import "./Home.css";

class Home extends Component {
  render = () => {
    return (
      <Layout>
        <div className="home">
          <p>
            Talpor notes app for interview process based on React (frontend) /
            Django (backend).
          </p>
          <p>
            <a
              href="https://github.com/wolfgangdie/talpor-notes-app#readme"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Docs
            </a>
          </p>
          <NavLink activeClassName="active" className="btn" to="/notes/">
            My notes
          </NavLink>
        </div>
      </Layout>
    );
  };
}

export default Home;
