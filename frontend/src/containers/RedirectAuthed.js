import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { authTokenSelector } from "../store/selectors/auth";

class RedirectAuthed extends Component {
  render = () => {
    const { pathname } = this.props.from || {};

    return (
      <>
        {this.props.token ? (
          pathname ? (
            <Redirect to={pathname} />
          ) : (
            <Redirect to="/notes/" />
          )
        ) : (
          this.props.children
        )}
      </>
    );
  };
}

const mapStateToProps = state => {
  return {
    token: authTokenSelector(state)
  };
};

export default connect(mapStateToProps)(RedirectAuthed);
