import * as actionTypes from "./actionTypes";
import * as api from "../utils/api";

// ---------------------------------------------------
// Authentication actions
// ---------------------------------------------------

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

// ---------------------------------------------------
// Token refresh actions
// ---------------------------------------------------

export const tokenRefreshRequest = () => {
  return {
    type: actionTypes.TOKEN_REFRESH_REQUEST
  };
};

export const tokenRefreshSuccess = token => {
  return {
    type: actionTypes.TOKEN_REFRESH_SUCCESS,
    token: token
  };
};

// ---------------------------------------------------
// Authentication main actions
// ---------------------------------------------------

export const login = (user, pass) => {
  return async dispatch => {
    dispatch(authRequest());

    try {
      const data = {
        username: user,
        password: pass
      };

      const response = await fetch(
        `${api.BASE_URL}/token/`,
        api.settings(api.METHOD_POST, data)
      );

      const json = await response.json();

      if (!response.ok) {
        throw Error(JSON.stringify(json));
      }

      const { access, refresh } = json;

      localStorage.setItem("token", access);

      dispatch(authSuccess(access, refresh));
    } catch (error) {
      dispatch(authFail(error));
    }
  };
};

export const register = (user, email, pass, passRepeat) => {
  return async dispatch => {
    dispatch(authRequest());

    try {
      const data = {
        username: user,
        email: email,
        password: pass,
        passwordr: passRepeat
      };

      const response = await fetch(
        `${api.BASE_URL}/users/register/`,
        api.settings(api.METHOD_POST, data)
      );

      const json = await response.json();

      if (!response.ok) {
        throw Error(JSON.stringify(json));
      }

      const { access, refresh } = json;

      localStorage.setItem("token", access);

      dispatch(authSuccess(access, refresh));
    } catch (error) {
      dispatch(authFail(error));
    }
  };
};

export const refreshToken = async (refresh, dispatch) => {
  dispatch(tokenRefreshRequest());

  try {
    const data = {
      refresh: refresh
    };

    const response = await fetch(
      `${api.BASE_URL}/token/refresh/`,
      api.settings(api.METHOD_POST, data)
    );

    const json = await response.json();

    if (!response.ok) {
      throw Error(JSON.stringify(json));
    }

    const { access } = json;

    localStorage.setItem("token", access);

    dispatch(tokenRefreshSuccess(access));
  } catch (error) {
    dispatch(logout());
  }
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
