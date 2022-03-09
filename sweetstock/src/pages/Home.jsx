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
            <h1>Os seus doces</h1>
            <h1>dentro de controle</h1>
            <p>SUA DOCERIA COM CONTROLE DE ESTOQUE E</p>
            <p>INGREDIENTES, A EVOLUÇÃO DO SEU NÉGOCIO EM</p>
            <p>NOSSAS MÃOS</p>
          </div>
          <Button content="SAIBA MAIS" />
        </div>
        <img src={HomeImage} />
      </div>
    </section>
  );
};
