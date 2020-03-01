import React, { Component } from "react";

import Layout from "../../components/Layout";

class NotesList extends Component {
  render = () => {
    return (
      <Layout>
        <div className="notes list">Notes list</div>
      </Layout>
    );
  };
}

export default NotesList;
