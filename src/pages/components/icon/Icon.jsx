import React from "react";
import "./Icon.css";

export default (props) => {
  return (
    <div className={props.class}>
      <img src={props.icon} alt="" />
      <span>{props.content}</span>
    </div>
  );
};
