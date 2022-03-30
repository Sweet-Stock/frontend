import React from "react";

export default (props) => {
  const teste = <div>ahhhhhhhhhhhhhhhhhhhhh</div>;

  const barMeter = ({}) => {
    switch (props.sinal) {
      case "green":
        return (
          <div>
            <div className="bar-meter-container">
              <span className="bar-meter-green"></span>
              <p></p>
            </div>
            <div>
              <span className="bar-meter-green"></span>
              <p></p>
            </div>
            <div>
              <span className="bar-meter-green"></span>
              <p>Forte</p>
            </div>
          </div>
        );
        break;
      case "yellow":
        break;
      case "red":
        break;
      default:
    }
  };

  return { barMeter };
};
