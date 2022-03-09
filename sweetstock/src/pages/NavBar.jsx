import React from "react";
import Logo from "./images/logo.svg";
import "./NavBar.css";
import Button from "./components/Button"

const home = () => {
  return (
    <section className="nav-container">
      <div className="container">
        <div className="navBar">
          <img src={Logo} />
          <ul >
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">SOBRE NÓS</a>
            </li>
            <li>
              <a href="">EQUIPE</a>
            </li>
            <li>
              <a href="">SERVIÇOS</a>
            </li>
            <li>
              <a href="">CONTATO</a>
            </li>
          </ul>
          <Button content = "ENTRAR" />
        </div>
      </div>
    </section>
  );
};

export default home;
