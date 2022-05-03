import React from "react";
import "./Button.css";

export default (props) => {
  return (
    <input
      className="input-button"
      type="submit"
      value={props.content}
      onClick={() => props.onClick}
      onSubmit={() => props.onSubmit}
    />
  );
};
