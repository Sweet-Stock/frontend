import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import BusinessDecisions from "../images/Business decisions-pana 1.svg";
import "./ChooseSignPage.css";

export default () => {
  sessionStorage.setItem("lastLocation", "/cadastro");
  const navigate = useNavigate();

  useEffect(() => {
    let dataStorage = sessionStorage.getItem("data");

    if (dataStorage != undefined)
      if (dataStorage != "null") navigate("/dashboard");
  }, []);

  return (
    <section className="choose-sign-root">
      <div className="choose-sign">
        <span className="choose-sign-aligner">
          <label className="choose-sign-title">COMO DESEJA SE CADASTRAR?</label>
        </span>
        <div className="choose-sign-aligner">
          <label className="have-choose-sign">
            Já tem uma conta? Faça {""}
            <a onClick={() => navigate("/choose-sign")}>login</a>
          </label>
        </div>
        <div className="choose-sign-container">
          <div className="choose-sign-btn-align">
            <div onClick={() => navigate("/cadastro/empresa")}>
              <Button content="Empresa" />
            </div>
          </div>
        </div>
        <div className="choose-sign-container">
          <div className="choose-sign-btn-align">
            <div onClick={() => navigate("/cadastro/funcionario")}>
              <Button content="Funcionario" />
            </div>
          </div>
        </div>
      </div>
      <div className="choose-sign-bg">
        <img src={BusinessDecisions} alt="" />
      </div>
    </section>
  );
};
