import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import {
  authErrorSelector,
  authLoadingSelector
} from "../store/selectors/auth";

import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      pass: "",
      passRepeat: ""
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.props.login) {
      this.props.handleSubmit(this.state.user, this.state.pass);
    } else {
      this.props.handleSubmit(
        this.state.user,
        this.state.email,
        this.state.pass,
        this.state.passRepeat
      );
    }
  };

  render = () => {
    const { login, loading } = this.props;
    return (
      <div className={classNames("form", { login: login, register: !login })}>
        <h1>{login ? `Login` : `Register`}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="user"
            required={true}
            disabled={loading}
            placeholder={login ? `Username / Email` : `Username`}
            onChange={this.handleChange("user")}
            value={this.state.user}
          />
          {!login && (
            <input
              type="email"
              name="email"
              required={true}
              disabled={loading}
              placeholder="Email address"
              onChange={this.handleChange("email")}
              value={this.state.email}
            />
          )}
          <input
            type="password"
            name="pass"
            required={true}
            disabled={loading}
            placeholder="Password"
            onChange={this.handleChange("pass")}
            value={this.state.pass}
          />
          {!login && (
            <input
              type="password"
              name="passRepeat"
              required={true}
              disabled={loading}
              placeholder="Confirm password"
              onChange={this.handleChange("passRepeat")}
              value={this.state.passRepeat}
            />
          )}
          <input
            type="submit"
            className="btn"
            value={loading ? `Loading ...` : login ? `Sign in` : `Sign up`}
            disabled={loading}
          />
        </form>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    error: authErrorSelector(state),
    loading: authLoadingSelector(state)
  };
};

export default connect(mapStateToProps)(Form);
