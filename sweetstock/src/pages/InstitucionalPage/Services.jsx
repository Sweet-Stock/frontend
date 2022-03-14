import React from "react";
import Logo from "../images/logo.svg";
import ServiceImage from "../images/img_service.svg";
import ServiceTitle from "../images/serviceImage.svg";
import "./Services.css";
import Button from "../components/Button";

export default () => {
  return (
    <section className="service">
      <div className="service-container">
        <img src={ServiceTitle}  alt="Serviços"/>
        <div>
          <img src={ServiceImage}  alt=""/>
          <div>
            <img src={Logo}  alt=""/>
            <div>
              <h2>O controle do seu estoque com a facilidade</h2>
              <h2>que seu negocio precisa</h2>
            </div>
            <Button content="ADQUIRIR" />
          </div>
        </div>
      </div>
    </section>
  );
};
