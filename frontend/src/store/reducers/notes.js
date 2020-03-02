import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utils/helpers";

const initialState = {
  list: null,
  add: null,
  error: null,
  loading: false
};

// ---------------------------------------------------
// Notes list reducers
// ---------------------------------------------------

const notesListRequest = (state, action) => {
  return updateObject(state, {
    list: null,
    error: null,
    loading: true
  });
};

const notesListSuccess = (state, action) => {
  return updateObject(state, {
    list: action.result,
    error: null,
    loading: false
  });
};

const notesListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

// ---------------------------------------------------
// Note add reducers
// ---------------------------------------------------

const noteAddRequest = (state, action) => {
  return updateObject(state, {
    add: null,
    error: null,
    loading: true
  });
};

const noteAddSuccess = (state, action) => {
  return updateObject(state, {
    add: action.result,
    error: null,
    loading: false
  });
};

const noteAddFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

// ---------------------------------------------------
// Notes swith reducers
// ---------------------------------------------------

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NOTES_LIST_REQUEST:
      return notesListRequest(state, action);
    case actionTypes.NOTES_LIST_SUCCESS:
      return notesListSuccess(state, action);
    case actionTypes.NOTES_LIST_FAIL:
      return notesListFail(state, action);
    case actionTypes.NOTE_ADD_REQUEST:
      return noteAddRequest(state, action);
    case actionTypes.NOTE_ADD_SUCCESS:
      return noteAddSuccess(state, action);
    case actionTypes.NOTE_ADD_FAIL:
      return noteAddFail(state, action);
    default:
      return state;
  }
};

export default reducer;
