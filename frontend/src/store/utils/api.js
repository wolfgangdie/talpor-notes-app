export const BASE_URL = `${process.env.REACT_APP_API_DOMAIN}/api`;

export const METHOD_GET = "GET";
export const METHOD_POST = "POST";
export const METHOD_PUT = "PUT";
export const METHOD_DELETE = "DELETE";

/**
 * Set all the common settings for an API request.
 *
 * @param {string} method
 * @param {Object} data
 */
export const settings = (method, data) => {
  const request = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  if (method !== METHOD_GET) {
    request["body"] = JSON.stringify(data);
  }

  if (localStorage.getItem("token")) {
    request.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "token"
    )}`;
  }

  return request;
};
