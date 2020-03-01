import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getNotes } from "../../store/actions/notes";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Note from "../../components/Note";
import {
  notesListSelector,
  noteLoadingSelector
} from "../../store/selectors/notes";

import "./List.css";

class NotesList extends Component {
  componentDidMount = () => {
    this.props.onGetNotes();
  };

  render = () => {
    const { loading, result } = this.props;
    return (
      <Layout>
        <div className="notes list">
          <div className="add">
            <Link className="btn" to="/notes/create/">
              New note
            </Link>
          </div>
          {loading && <Loading />}
          {!loading &&
            (result || []).map(note => {
              return (
                <Note key={note.id} date={note.created_at}>
                  {note.text}
                </Note>
              );
            })}
          {result && result.length === 0 && !loading && (
            <p className="empty">You don't have notes to be displayed</p>
          )}
        </div>
      </Layout>
    );
  };
}

const mapStateToProps = state => {
  return {
    loading: noteLoadingSelector(state),
    result: notesListSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetNotes: () => dispatch(getNotes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
