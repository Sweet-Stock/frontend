import React from "react";
import BackGround from "../images/backGroundHome.svg";
import HomeImage from "../images/homeImage.svg";
import Arrow from "../images/icon_arrow.svg";
import "./Home.css";
import Button from "../components/Button";

export default () => {
  return (
    <section id="home" className="home">
      <img className="bg-home" src={BackGround} />
      <div className="home-container">
        <div className="home-aligner">
          <div className="home-text-box">
            <div className="home-title-box">
              <h1 className="home-title">Os seus doces</h1>
              <h1 className="home-title">dentro de controle</h1>
            </div>
            <p className="home-paragraph">
              Sua doceria com controle de estoque e
            </p>
            <p className="home-paragraph">
              ingredientes, a evolução do seu negócio
            </p>
            <p className="home-paragraph">em nossas mãos.</p>
          </div>
          <a href="#service">
            <Button content="SAIBA MAIS" />
          </a>
        </div>
        <img src={HomeImage} />
        <a className="arrow" href="#aboutUs">
          <img src={Arrow} alt="Sinal de Barra de Rolagem" />
        </a>
      </div>
    </section>
  );
};
