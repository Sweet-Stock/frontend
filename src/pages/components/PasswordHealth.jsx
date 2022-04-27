import React from "react";
import "./PasswordHealth.css";

const barMeter = (props) => {
  let bar;
  switch (props.sinal) {
    case "green":
      bar = (
        <div className={props.class}>
          <div className="bar-meter-container">
            <span className="bar-meter-green"></span>
            <p> </p>
          </div>
          <div className="bar-meter-container">
            <span className="bar-meter-green"></span>
            <p></p>
          </div>
          <div className="bar-meter-container">
            <span className="bar-meter-green"></span>
            <p>Forte</p>
          </div>
        </div>
      );
      return bar;
    case "yellow":
      bar = (
        <div className={props.class}>
          <div className="bar-meter-container">
            <span className="bar-meter-yellow"></span>
            <p></p>
          </div>
          <div className="bar-meter-container">
            <span className="bar-meter-yellow"></span>
            <p>Boa</p>
          </div>
          <div className="bar-meter-container">
            <span className="bar-meter-yellow bar-meter-colorless"></span>
            <p></p>
          </div>
        </div>
      );
      return bar;

    case "red":
      bar = (
        <div className={props.class}>
          <div className="bar-meter-container">
            <span className="bar-meter-red"></span>
            <p>Fraca</p>
          </div>
          <div className="bar-meter-container">
            <span className="bar-meter-red bar-meter-colorless"></span>
            <p></p>
          </div>
          <div className="bar-meter-container">
            <span className="bar-meter-red bar-meter-colorless"></span>
            <p></p>
          </div>
        </div>
      );
      return bar;
    default:
  }
};

export default barMeter;
