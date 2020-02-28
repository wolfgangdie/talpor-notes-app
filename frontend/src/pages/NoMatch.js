import React, { Component } from "react";

import Layout from "../components/Layout";

import "./NoMatch.css";

class NoMatch extends Component {
  render = () => {
    return (
      <Layout>
        <div className="no-match">
          <h1>404</h1>
          <p>Sorry, page not found</p>
          <span role="img" aria-label="sad">
            🙁
          </span>
        </div>
      </Layout>
    );
  };
}

export default NoMatch;
