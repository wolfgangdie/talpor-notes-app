import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Layout from "../../components/Layout";
import { addNote } from "../../store/actions/notes";
import Form from "./Form";

class NoteCreate extends Component {
  handleSubmit = text => {
    this.props.onAddNote(text, this.props.history);
  };

  render = () => {
    return (
      <Layout>
        <div className="notes create">
          <Form add={true} handleSubmit={this.handleSubmit} />
        </div>
      </Layout>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddNote: (text, history) => dispatch(addNote(text, history))
  };
};

export default connect(null, mapDispatchToProps)(withRouter(NoteCreate));
