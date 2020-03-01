import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { Redirect } from "react-router";

import { authTokenSelector } from "../../store/selectors/auth";

class Protected extends Component {
  render = () => {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          this.props.token ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login/",
                state: { from: this.props.location }
              }}
            />
          )
        }
      />
    );
  };
}

const mapStateToProps = state => {
  return {
    token: authTokenSelector(state)
  };
};

export default withRouter(connect(mapStateToProps)(Protected));
