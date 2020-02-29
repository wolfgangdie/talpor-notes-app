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
            Documentation:{" "}
            <a href="https://github.com/wolfgangdie/talpor-notes-app#readme">
              GitHub
            </a>
          </p>
          <NavLink activeClassName="active" className="btn" to="/notes/">
            Listado de notas
          </NavLink>
          <NavLink activeClassName="active" className="btn" to="/notes/add/">
            Agregar nota
          </NavLink>
        </div>
      </Layout>
    );
  };
}

export default Home;
