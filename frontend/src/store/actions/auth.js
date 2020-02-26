import * as actionTypes from "./actionTypes";

export const authRequest = () => {
  return {
    type: actionTypes.AUTH_REQUEST
  };
};

export const authSuccess = (token, refresh) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    refresh: refresh
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const login = (user, password) => {
  return async dispatch => {
    dispatch(authRequest());
    dispatch(authFail());
  };
};

export const register = (user, email, pass, passRepeat) => {
  return async dispatch => {
    dispatch(authRequest());
    dispatch(authFail());
  };
};

export const checkTokenExpiration = exp => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, exp);
  };
};

export const handleError = error => {
  if (error) {
    if (error instanceof TypeError) {
      error = Error(JSON.stringify({ error_conn: [`${error.message}.`] }));
    }

    let messages;
    const json = JSON.parse(error.message);

    Object.keys(json).map(key => {
      return json[key].map(message => {
        return (messages = `${messages || ""}${message} `);
      });
    });

    return messages;
  }
};
