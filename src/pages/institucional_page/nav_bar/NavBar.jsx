import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import Button from "../../components/button/Button";
import "./NavBar.css";

export default () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="id_navbar" className="nav">
      <div className="nav-container">
        <div className={offset <= 60 ? "navBar" : "navBg"}>
          <img
            className={
              offset <= 60
                ? "nav-img imgImportant"
                : "nav-img-small imgImportant"
            }
            src={Logo}
          />
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#aboutUs">SOBRE NÓS</a>
            </li>
            <li>
              <a href="#team">EQUIPE</a>
            </li>
            <li>
              <a href="#service">SERVIÇOS</a>
            </li>
            <li>
              <a href="#contact">CONTATO</a>
            </li>
          </ul>
          <Link to="/login">
            <Button content="ENTRAR" />
          </Link>
        </div>
      </div>
    </header>
  );
};
