import React from "react";
import "./Icon.css"

export default props => {
  return (
    <div type="button" className="sidebar-icon-short">
      <img src={props.icon} alt="" />
    </div>
  );
};
