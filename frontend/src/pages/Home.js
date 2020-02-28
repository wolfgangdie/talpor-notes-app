import React, { Component } from "react";
import { connect } from "react-redux";

import Layout from "../components/Layout";
import { login } from "../store/actions/auth";
import { getNotes } from "../store/actions/note";

class Home extends Component {
  componentDidMount = () => {
    // this.props.onLogin("wolfrainx@gmail.com", "1234");
  };

  render = () => {
    return (
      <Layout>
        <div className="home">
          <input
            type="button"
            onClick={() => this.props.onGetNotes()}
            value="List"
          />
        </div>
      </Layout>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (user, password) => dispatch(login(user, password)),
    onGetNotes: () => dispatch(getNotes())
  };
};

export default connect(null, mapDispatchToProps)(Home);
