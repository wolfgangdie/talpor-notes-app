import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "./Form";
import Layout from "../components/Layout";
import { login } from "../store/actions/auth";

class Login extends Component {
  handleSubmit = (user, pass) => {
    this.props.onLogin(user, pass);
  };

  render = () => {
    return (
      <Layout>
        <Form login={true} handleSubmit={this.handleSubmit} />
      </Layout>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (user, pass) => dispatch(login(user, pass))
  };
};

export default connect(null, mapDispatchToProps)(Login);
