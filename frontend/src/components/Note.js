import React from "react";

import "./Note.css";

const Note = props => {
  return (
    <div className="note">
      <p>{props.children || ""}</p>
      <span>{props.date}</span>
    </div>
  );
};

export default Note;
