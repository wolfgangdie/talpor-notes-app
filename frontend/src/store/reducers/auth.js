import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utils/helpers";

const initialState = {
  token: null,
  refresh: null,
  error: null,
  loading: false
};

// ---------------------------------------------------
// Authentication reducers
// ---------------------------------------------------

const authRequest = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    refresh: action.refresh,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const logout = (state, action) => {
  return updateObject(state, {
    token: null,
    refresh: null
  });
};

// ---------------------------------------------------
// Token refresh reducers
// ---------------------------------------------------

const tokenRefreshRequest = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const tokenRefreshSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false
  });
};

// ---------------------------------------------------
// Authentication swith reducers
// ---------------------------------------------------

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST:
      return authRequest(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return logout(state, action);
    case actionTypes.TOKEN_REFRESH_REQUEST:
      return tokenRefreshRequest(state, action);
    case actionTypes.TOKEN_REFRESH_SUCCESS:
      return tokenRefreshSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
