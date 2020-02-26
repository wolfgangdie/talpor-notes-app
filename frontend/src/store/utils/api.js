export const BASE_URL = `${process.env.REACT_APP_API_DOMAIN}`;

export const METHOD_GET = "GET";
export const METHOD_POST = "POST";
export const METHOD_PUT = "PUT";
export const METHOD_DELETE = "DELETE";

/**
 * Set all the common settings for an API request.
 *
 * The data parameter can be an Object or FormData instance
 * in case of multipart/form-data Content-Type is needed.
 * @param {string} method
 * @param {Object|FormData} data
 * @param {boolean} multipart
 */
export const settings = (method, data, multipart = false) => {
  const request = {
    method: method,
    headers: {
      Accept: "application/json"
    }
  };

  if (!multipart) {
    request.headers["Content-Type"] = "application/json";
  }

  if (method !== METHOD_GET) {
    multipart
      ? (request["body"] = data)
      : (request["body"] = JSON.stringify(data));
  }

  if (localStorage.getItem("token")) {
    request.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "token"
    )}`;
  }

  return request;
};
