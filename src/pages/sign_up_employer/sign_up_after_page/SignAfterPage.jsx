import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignAfterPageBg from "../../images/Work in progress-pana 1.svg";
import MainIcon from "../../images/Important Mail.svg";
import "./SignAfterPage.css";

export default (props) => {
  sessionStorage.setItem("lastLocation", "/cadastro/espera");

  const navigate = useNavigate();

  // useEffect(() => {
  //   let dataStorage = sessionStorage.getItem("data");

  //   if (dataStorage != undefined)
  //     if (dataStorage != "null") navigate("/dashboard");
  // }, []);

  return (
    <section className="sing-after-page-body">
      <div className="sing-after-page-mensage">
        <img src={MainIcon} alt="" />
        <h1>IMPORTANTE</h1>
        <span>
          <h2>O seu acesso só será liberado após a validação do</h2>
          <h2>administrador, enviaremos um e-mail quando o acesso</h2>
          <h2>for liberado</h2>
        </span>
      </div>
      <img className="sing-after-page-image" src={SignAfterPageBg} alt="" />
    </section>
  );
};
