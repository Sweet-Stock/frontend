import React, { useEffect } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import InputMask from "react-input-mask";
import ProgressBar from "./components/ProgressBar";
import api from "../services/api";
import axios from "axios";
import "./SignPage.css";

export default () => {
  const [signProgress, setSignProgress] = React.useState(0);
  const [person, setPerson] = React.useState(true);

  const [viaCep, setViaCep] = React.useState();

  return (
    <section className="sign">
      <span className="sign-aligner">
        <label className="sign-title">CADASTRE-SE</label>
        <span></span>
      </span>
      <div className="sign-container">
        <ProgressBar img={signProgress} />
        <div className={signProgress === 0 ? "" : "display-none"}>
          <h1>NOME</h1>
          <InputMask />
        </div>
        <div className={signProgress === 0 ? "" : "display-none"}>
          <h1>NOME FANTASIA</h1>
          <InputMask />
        </div>
        <div className={signProgress === 0 ? "" : "display-none"}>
          <h1>TELEFONE</h1>
          <InputMask mask="(99) 99999-9999" alwaysShowMask={true} />
        </div>
        <div className={signProgress === 1 ? "" : "display-none"}>
          <h1>TIPO DE PESSOA</h1>
          <select
            name="personName"
            id="personId"
            onChange={(value) => {
              setPerson(value.target.value);
            }}
          >
            <option value="pf">Pessoa Fisica</option>
            <option value="pj">Pessoa Jurídica</option>
          </select>
        </div>
        <div className={signProgress === 1 ? "" : "display-none"}>
          <h1>CEO</h1>
          <InputMask />
        </div>
        <div className={signProgress === 1 ? "" : "display-none"}>
          <h1>{person === "pj" ? "CNJP" : "CPF"}</h1>
          <InputMask
            mask={person === "pj" ? "99.999.9999/9999-99" : "999.999.999-99"}
            alwaysShowMask={true}
          />
        </div>
        <div className={signProgress === 2 ? "" : "display-none"}>
          <h1>CEP</h1>
          <InputMask
            onChange={async (value) => {
              let cep = value.target.value;
              if (cep.match("[0-9]{5}-[0-9]{3}")) {
                const options = {
                  method: "GET",
                  url: "https://viacep.com.br/ws/"+cep+"/json/",
                };

                axios
                  .request(options)
                  .then(function (response) {
                    setViaCep(response.data)
                    console.log(response.data);
                  })
                  .catch(function (error) {
                    console.error(error);
                  });
              }
            }}
            mask="99999-999"
            alwaysShowMask={true}
          />
        </div>
        <div className={signProgress === 2 ? "" : "display-none"}>
          <h1>RUA</h1>
          <InputMask value={viaCep?.logradouro}/>
        </div>
        <div className="adress-aligner">
          <div className={signProgress === 2 ? "" : "display-none"}>
            <h1>NÚMERO</h1>
            <InputMask />
          </div>
          <div className={signProgress === 2 ? "" : "display-none"}>
            <h1>COMPLEMENTO</h1>
            <InputMask/>
          </div>
        </div>
        <div className={signProgress === 3 ? "" : "display-none"}>
          <h1>E-MAIL</h1>
          <InputMask />
        </div>
        <div className={signProgress === 3 ? "" : "display-none"}>
          <h1>SENHA</h1>
          <InputMask type="password" />
        </div>
        <div className={signProgress === 3 ? "" : "display-none"}>
          <h1>CONFIRMAR SENHA</h1>
          <InputMask type="password" />
        </div>
        <div
          className={signProgress === 0 ? "sign-btn-align" : "sign-btn-aligner"}
        >
          <div
            className={signProgress === 0 ? "display-none" : ""}
            onClick={() => {
              setSignProgress(signProgress - 1);
            }}
          >
            <Button content="Voltar" />
          </div>
          <div
            onClick={() => {
              setSignProgress(signProgress + 1);
            }}
          >
            <Button content={signProgress === 3 ? "Cadastrar" : "Próximo"} />
          </div>
        </div>
      </div>
      <div className="sign-aligner">
        <label className="have-login">
          Já tem uma conta? Faça <a>Login</a>
        </label>
        <span></span>
      </div>
    </section>
  );
};
