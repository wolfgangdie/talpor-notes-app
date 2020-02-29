import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "./Form";
import Layout from "../components/Layout";
import { register } from "../store/actions/auth";

class Register extends Component {
  handleSubmit = (user, email, pass, passRepeat) => {
    this.props.onRegister(user, email, pass, passRepeat);
  };

  render = () => {
    return (
      <Layout>
        <Form login={false} handleSubmit={this.handleSubmit} />
      </Layout>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (user, email, pass, passRepeat) =>
      dispatch(register(user, email, pass, passRepeat))
  };
};

export default connect(null, mapDispatchToProps)(Register);
