import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import BaseRouter from "./routes";

import "./App.css";

class App extends Component {
  render = () => {
    return (
      <div className="app">
        <Router>
          <BaseRouter />
        </Router>
      </div>
    );
  };
}

export default App;
