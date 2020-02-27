import { tokenExpiration } from "../store/utils/helpers";
import { refreshToken, logout } from "../store/actions/auth";

const FIVE_SECONDS_IN_MILLISECONDS = 5000;

export const authMiddleware = ({ dispatch, getState }) => {
  return next => async action => {
    if (typeof action === "function") {
      if (getState().auth.token && getState().auth.refresh) {
        const { token, refresh, loading } = getState().auth;
        const tokenExpired =
          tokenExpiration(token).getTime() - FIVE_SECONDS_IN_MILLISECONDS <=
          new Date().getTime();
        const refreshExpired =
          tokenExpiration(refresh).getTime() - FIVE_SECONDS_IN_MILLISECONDS <=
          new Date().getTime();

        if (tokenExpired && !refreshExpired) {
          if (!loading) {
            await refreshToken(refresh, dispatch);
          }
        }

        if (refreshExpired) {
          dispatch(logout());
        }
      }
    }
    return next(action);
  };
};
