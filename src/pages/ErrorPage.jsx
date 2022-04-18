import React from "react";
import "./ErrorPage.css"
import Error404 from "./images/404Error.svg";
import Error401 from "./images/401Error.svg";
import Error500 from "./images/500Error.svg";
import Error504 from "./images/504Error.svg";
import Arrow from "./images/icon_arrow_error.svg"
import { Link } from "react-router-dom";

export default (props) => {
  switch (props.status) {
    case "404":
      return (
        <div className="error-page">
          <img src={Error404} alt="" />
          <Link className="arrow"><img src={Arrow} alt="" /></Link>
        </div>
      );
      case "500":
        return (
          <div className="error-page">
            <img src={Error500} alt="" />
            <Link className="arrow"><img src={Arrow} alt="" /></Link>
          </div>
        );
        case "504":
          return (
            <div className="error-page">
              <img src={Error504} alt="" />
              <Link className="arrow"><img src={Arrow} alt="" /></Link>
            </div>
          );
          case "401":
            return (
              <div className="error-page">
                <img src={Error401} alt="" />
                <Link className="arrow"><img src={Arrow} alt="" /></Link>
              </div>
            );
    default:
      break;
  }

};
