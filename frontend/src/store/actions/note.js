import * as actionTypes from "./actionTypes";

// ---------------------------------------------------
// Notes list actions
// ---------------------------------------------------

export const notesListRequest = () => {
  return {
    type: actionTypes.NOTES_LIST_REQUEST
  };
};

export const notesListSuccess = result => {
  return {
    type: actionTypes.NOTES_LIST_SUCCESS,
    result: result
  };
};

export const notesListFail = error => {
  return {
    type: actionTypes.NOTES_LIST_FAIL,
    error: error
  };
};

// ---------------------------------------------------
// Note add actions
// ---------------------------------------------------

export const noteAddRequest = () => {
  return {
    type: actionTypes.NOTE_ADD_REQUEST
  };
};

export const noteAddSuccess = result => {
  return {
    type: actionTypes.NOTE_ADD_SUCCESS,
    result: result
  };
};

export const noteAddFail = error => {
  return {
    type: actionTypes.NOTE_ADD_FAIL,
    error: error
  };
};

// ---------------------------------------------------
// Notes main actions
// ---------------------------------------------------

export const getNotes = () => {
  return async dispatch => {
    dispatch(notesListRequest());
    dispatch(notesListFail());
  };
};
