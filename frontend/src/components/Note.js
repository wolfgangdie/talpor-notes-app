import React from "react";

import "./Note.css";

const Note = props => {
  return (
    <div key={props.key || ""} className="note">
      <p>{props.children || ""}</p>
      <span>{props.date}</span>
    </div>
  );
};

export default Note;
