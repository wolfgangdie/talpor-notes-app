export const authTokenSelector = state => state.auth.token !== null;
export const authRefreshSelector = state => state.auth.refresh !== null;

export const authLoadingSelector = state => state.auth.loading;
export const authErrorSelector = state => state.auth.error;
