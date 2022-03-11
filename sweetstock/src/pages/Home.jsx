import React from "react";
import BackGround from "./images/backGroundHome.svg";
import HomeImage from "./images/homeImage.svg";
import "./Home.css";
import Button from "./components/Button";

export default () => {
  return (
    <section className="home">
      <img className="bg-home" src={BackGround} />
      <div className="home-container">
        <div className="home-aligner">
          <div className="home-text-box">
            <h1 className="home-title">Os seus doces</h1>
            <h1 className="home-title">dentro de controle</h1>
            <p className="home-paragraph">Sua doceria com controle de estoque e</p>
            <p className="home-paragraph">ingredientes, a evolução do seu negócio</p>
            <p className="home-paragraph">em nossas mãos</p>
          </div>
          <Button content="SAIBA MAIS" />
        </div>
        <img src={HomeImage} />
      </div>
    </section>
  );
};
