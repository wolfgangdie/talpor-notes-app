import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import BaseRouter from "./routes";
import { checkTokenExpiration } from "./store/actions/auth";

import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

class App extends Component {
  componentDidMount = () => {
    this.props.onCheckTokenExpiration();
  };

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

const mapDispatchToProps = dispatch => {
  return {
    onCheckTokenExpiration: () => dispatch(checkTokenExpiration())
  };
};

export default connect(null, mapDispatchToProps)(App);
