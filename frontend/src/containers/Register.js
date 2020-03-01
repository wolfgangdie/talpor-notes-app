import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "./Form";
import Layout from "../components/Layout";
import { register } from "../store/actions/auth";
import RedirectAuthed from "./RedirectAuthed";

class Register extends Component {
  handleSubmit = (user, email, pass, passRepeat) => {
    this.props.onRegister(user, email, pass, passRepeat);
  };

  render = () => {
    const { from } = this.props.location.state || {};

    return (
      <RedirectAuthed from={from}>
        <Layout>
          <Form login={false} handleSubmit={this.handleSubmit} />
        </Layout>
      </RedirectAuthed>
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
