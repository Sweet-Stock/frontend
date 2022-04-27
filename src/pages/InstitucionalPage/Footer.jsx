import React from "react";
import Logo from "../images/logo.svg";
import InstagramIcon from "../images/icon_instagram.svg"
import TwitterIcon from "../images/icon_twiter.svg"
import GitHubIcon from "../images/icon_github.svg"
import  "./Footer.css";

export default () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={Logo}  alt=""/>
        <div className="social-media">
            <a href="https://www.instagram.com/sweetstockbr/"><img src={InstagramIcon} alt="Instagram" /></a>
            <a href="https://twitter.com/SweetStockBR"><img src={TwitterIcon} alt="Twitter" /></a>
            <a href="https://github.com/Sweet-Stock"><img src={GitHubIcon} alt="GitHub" /></a>
        </div>
        <div className="address-cellNumber">
            <h1>Rua Hadock Lobo, 285 - Consolação</h1>
            <h1>(11) 1234-5678 / (11) 91234-5678</h1>
        </div>
      </div>
    </footer>
  );
};


