export const FIVE_MINUTES_IN_MILLISECONDS = 300 * 1000;
export const ONE_DAY_IN_MILLISECONDS = 24 * 3600 * 1000;

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const urlEncodeObject = object => {
  const url = Object.keys(object)
    .map(key => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]);
    })
    .join("&");
  return url;
};

export const parseJWT = token => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export const tokenExpiration = token => {
  return new Date(parseJWT(token).exp * 1000);
};
