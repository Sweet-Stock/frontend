import React from "react";
import "./ErrorPage.css";
import Error404 from "./images/404Error.svg";
import Error500 from "./images/500Error.svg";
import Arrow from "./images/arrow-error.svg";
import { useNavigate } from "react-router-dom";

export default (props) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  switch (props.status) {
    case "404":
      return (
        <div className="error-page">
          <img src={Error404} alt="" />
          <div className="back-error-btn" onClick={goHome}>
            <img src={Arrow} alt="" />
          </div>
        </div>
      );
    case "500":
      return (
        <div className="error-page">
          <img src={Error500} alt="" />
          <div className="back-error-btn" onClick={goHome}>
            <img src={Arrow} alt="" />
          </div>
        </div>
      );
    default:
      break;
  }
};
