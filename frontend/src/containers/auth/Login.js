import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "./Form";
import Layout from "../../components/Layout";
import { login } from "../../store/actions/auth";
import RedirectAuthed from "./RedirectAuthed";

class Login extends Component {
  handleSubmit = (user, pass) => {
    this.props.onLogin(user, pass);
  };

  render = () => {
    const { from } = this.props.location.state || {};

    return (
      <RedirectAuthed from={from}>
        <Layout>
          <Form login={true} handleSubmit={this.handleSubmit} />
        </Layout>
      </RedirectAuthed>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (user, pass) => dispatch(login(user, pass))
  };
};

export default connect(null, mapDispatchToProps)(Login);
