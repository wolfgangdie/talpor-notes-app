import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import BaseRouter from "./routes";

import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

class App extends Component {
  render = () => {
    return (
      <div className="app">
        <Router>
          <BaseRouter />
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar
          newestOnTop
          closeButton={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable
          pauseOnHover
        />
      </div>
    );
  };
}

export default App;
