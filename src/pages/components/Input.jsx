import React from "react";
import InputMask from "react-input-mask";
import "./Input.css";

export default (props) => {
  return (
    <div>
      <h1>{props.label}</h1>
      <InputMask mask={props.mask} alwaysShowMask = {true} />
    </div>
  );
};
