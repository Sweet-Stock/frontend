import React from "react";
import Logo from "../images/logo.svg";
import ServiceImage from "../images/img_service.svg";
import "./Services.css";
import Button from "../components/Button";

export default () => {
  return (
    <section id="service" className="service">
      <div className="service-container">
        <h1 className="service-title">SERVIÇOS</h1>
        <div>
          <img src={ServiceImage} alt="" />
          <div>
            <img className="imgImportant" src={Logo} alt="" />
            <div>
              <h2>O controle do seu estoque com a facilidade</h2>
              <h2>que seu negócio precisa.</h2>
            </div>
            <Button content="ADQUIRIR" />
          </div>
        </div>
      </div>
    </section>
  );
};
