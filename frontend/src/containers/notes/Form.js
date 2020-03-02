import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import {
  noteErrorSelector,
  noteLoadingSelector
} from "../../store/selectors/notes";

import "../Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.handleSubmit(this.state.text);
  };

  render = () => {
    const { add, loading } = this.props;
    return (
      <div className={classNames("form", { add: add, register: !add })}>
        <h1>{add ? `Add a note` : `Edit note`}</h1>
        <form onSubmit={this.handleSubmit}>
          <textarea
            name="text"
            required={true}
            disabled={loading}
            placeholder={`Note's text`}
            onChange={this.handleChange("text")}
            value={this.state.text}
            maxLength={1000}
            cols="30"
            rows="10"
          />
          <input
            type="submit"
            className="btn"
            value={loading ? `Loading ...` : add ? `Add note` : `Edit note`}
            disabled={loading}
          />
        </form>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    error: noteErrorSelector(state),
    loading: noteLoadingSelector(state)
  };
};

export default connect(mapStateToProps)(Form);
