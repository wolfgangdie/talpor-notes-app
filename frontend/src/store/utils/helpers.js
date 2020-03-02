import { toast } from "react-toastify";

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

export const handleSuccessMessage = message => {
  if (message) {
    toast.success(message);
  }
};

export const handleErrorMessage = error => {
  if (error) {
    if (error instanceof TypeError) {
      error = Error(JSON.stringify({ error_conn: [`${error.message}.`] }));
    }

    let messages = "";
    const json = JSON.parse(error.message);

    if (json.detail) {
      messages = json.detail;
    } else {
      Object.keys(json).map(key => {
        return json[key].map(message => {
          return (messages = messages + message + ` `);
        });
      });
    }

    toast.error(messages);
  }
};
