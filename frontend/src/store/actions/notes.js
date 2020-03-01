import * as actionTypes from "./actionTypes";
import * as api from "../utils/api";
import { handleErrorMessage } from "../utils/helpers";

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

    try {
      const response = await fetch(
        `${api.BASE_URL}/notes/`,
        api.settings(api.METHOD_GET)
      );

      const json = await response.json();

      if (!response.ok) {
        throw Error(JSON.stringify(json));
      }

      dispatch(notesListSuccess(json.results));
    } catch (error) {
      handleErrorMessage(error);
      dispatch(notesListFail(error));
    }
  };
};
