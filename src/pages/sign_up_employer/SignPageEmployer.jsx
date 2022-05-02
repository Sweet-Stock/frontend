import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import InputMask from "react-input-mask";
import ProgressBar from "../components/progress_bar/ProgressBar";
import Eye from "../images/Eye.svg";
import SignBg from "../images/Supermarket workers-pana 1.svg";
import PasswordHealth from "../components/password_health/PasswordHealth";
import api from "../../services/api";
import "./SignPageEmployer.css";

export default () => {
  const [signProgress, setSignProgress] = useState(0);
  const [password, setPassword] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState("red");

  const [inputName, setInputName] = useState(null);
  const [inputCompanyName, setCompanyInputName] = useState(null);
  const [inputPhone, setInputPhone] = useState(null);
  const [inputEmail, setInputEmail] = useState(null);
  const [inputPassword, setInputPassword] = useState(null);
  const [inputConfirmPassword, setInputConfirmPassword] = useState(null);

  const strengthTest = (password) => {
    if (
      password.match(
        "^(?=(.*[a-z]){3,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{12,}$"
      )
    ) {
      setPasswordStrength("green");
    } else if (
      password.match(
        "^(?=(.*[a-z]){3,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,}).{8,}$"
      )
    ) {
      setPasswordStrength("yellow");
      setPassword(password);
    } else {
      setPasswordStrength("red");
      setPassword(password);
    }
  };

  const passwordEye = () => {
    password ? setPassword(false) : setPassword(true);
  };

  const inputValidation = (condicion, inputId, titleId, divId) => {
    if (condicion) {
      document.getElementById(inputId).animate(
        [
          {
            borderColor: "var(--neultral-color)",
            borderBottomWidth: "1px",
          },
          { borderColor: "red", borderBottomWidth: "2px" },
          {
            borderColor: "var(--neultral-color)",
            borderBottomWidth: "1px",
          },
          { borderColor: "red", borderBottomWidth: "2px" },
          {
            borderColor: "var(--neultral-color)",
            borderBottomWidth: "1px",
          },
          { borderColor: "red", borderBottomWidth: "2px" },
          {
            borderColor: "var(--neultral-color)",
            borderBottomWidth: "1px",
          },
          { borderColor: "red", borderBottomWidth: "2px" },
        ],
        {
          duration: 300,
        }
      );
      document.getElementById(titleId).animate(
        [
          {
            transform: "translateX(5px)",
            color: "red",
          },
          { transform: "translateX(-5px)" },
          {
            transform: "translateX(0)",
          },
          {
            transform: "translateX(5px)",
          },
          { transform: "translateX(-5px)" },
          {
            transform: "translateX(0)",
          },
        ],
        {
          duration: 300,
        }
      );
      document.getElementById(inputId).style.borderColor = "red";
      document.getElementById(titleId).style.color = "red";
      document.getElementById(divId).style.color = "red";
      document.getElementById(divId).style.display = "block";
    } else {
      document.getElementById(inputId).style.borderColor =
        "var(--neultral-color)";
      document.getElementById(titleId).style.color = "var(--neultral-color)";
      document.getElementById(divId).style.color = "var(--neultral-color)";
      document.getElementById(divId).style.display = "none";
    }
  };

  const progressValidation = () => {
    switch (signProgress) {
      case 0:
        if (inputName === null || inputName.length < 3) {
          inputValidation(
            true,
            "name_input_id",
            "name_title_id",
            "name_div_id"
          );
          break;
        }
        if (inputCompanyName === null || inputCompanyName.length < 3) {
          inputValidation(
            true,
            "company_input_id",
            "company_title_id",
            "company_div_id"
          );
          break;
        }
        if (
          inputPhone === null ||
          !inputPhone.match("^[1-9]{2} [9]{0,1}[0-9]{1}[0-9]{3}-[0-9]{4}$")
        ) {
          inputValidation(
            true,
            "phone_input_id",
            "phone_title_id",
            "phone_div_id"
          );
          break;
        }
        setSignProgress(signProgress + 1);
        break;
      case 1:
        if (
          inputEmail === null ||
          !inputEmail.match("^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$")
        ) {
          inputValidation(
            true,
            "email_input_id",
            "email_title_id",
            "email_div_id"
          );
          break;
        }
        if (
          inputPassword === null ||
          inputPassword !== inputConfirmPassword ||
          passwordStrength === "red"
        ) {
          inputValidation(
            true,
            "password_input_id",
            "password_title_id",
            "password_div_id"
          );
          inputValidation(
            true,
            "confirmPassword_input_id",
            "confirmPassword_title_id",
            "confirmPassword_div_id"
          );
          break;
        }
        inputValidation(
          false,
          "password_input_id",
          "password_title_id",
          "password_div_id"
        );
        inputValidation(
          false,
          "confirmPassword_input_id",
          "confirmPassword_title_id",
          "confirmPassword_div_id"
        );

        const signApi = () => {
          api
            .post("/employes")
            .then((response) => {
              console.log(response);
              console.log(response.status);
              sessionStorage.setItem("data", JSON.stringify(response.data));
              login(response.status);
            })
            .catch((err) => {
              console.error(err);
              console.log(err.response.status);
              sessionStorage.setItem(
                "status",
                JSON.stringify(err.response.status)
              );
              login(err.response.status);
            });
        };

        signApi();

        break;
      default:
        break;
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    let dataStorage = sessionStorage.getItem("data");

    if (dataStorage != undefined)
      if (dataStorage != "null") navigate("/dashboard");
  }, []);

  const login = (statusCode) => {
    switch (statusCode) {
      case 201:
        navigate("/dashboard");
        break;
      case 401:
        alert("Email já cadastrado");
        break;
      default:
        navigate(`/error/${sessionStorage.getItem("status")}`);
        break;
    }
  };
  return (
    <section className="sign-root">
      <div className="sign">
        <span className="sign-aligner">
          <label className="sign-title">CADASTRE-SE</label>
          <span></span>
        </span>
        <div className="sign-container">
          <ProgressBar progressBar="short" img={signProgress} />
          <div className={signProgress === 0 ? "" : "display-none"}>
            <h1 id="name_title_id">NOME</h1>
            <InputMask
              id="name_input_id"
              onBlur={(text) => {
                setInputName(text.target.value);
                inputValidation(
                  text.target.value.length < 3,
                  "name_input_id",
                  "name_title_id",
                  "name_div_id"
                );
              }}
            />
            <p id="name_div_id" className="message-alert">
              Nome inválido
            </p>
          </div>
          <div className={signProgress === 0 ? "" : "display-none"}>
            <h1 id="company_title_id">Empresa</h1>
            <InputMask
              id="company_input_id"
              placeholder="Insira o código fornecido pela empresa"
              onBlur={(text) => {
                setCompanyInputName(text.target.value);
                inputValidation(
                  text.target.value.length < 3,
                  "company_input_id",
                  "company_title_id",
                  "company_div_id"
                );
              }}
            />
            <p id="company_div_id" className="message-alert">
              Código Invalido
            </p>
          </div>
          <div className={signProgress === 0 ? "" : "display-none"}>
            <h1 id="phone_title_id">TELEFONE CELULAR</h1>
            <InputMask
              id="phone_input_id"
              mask="99 99999-9999"
              alwaysShowMask={true}
              onBlur={(text) => {
                setInputPhone(text.target.value);
                inputValidation(
                  !text.target.value.match(
                    "^[1-9]{2} [9]{0,1}[0-9]{1}[0-9]{3}-[0-9]{4}$"
                  ),
                  "phone_input_id",
                  "phone_title_id",
                  "phone_div_id"
                );
              }}
            />
            <p id="phone_div_id" className="message-alert">
              Número de celular inválido
            </p>
          </div>
          <div className={signProgress === 1 ? "" : "display-none"}>
            <h1 id="email_title_id">E-MAIL</h1>
            <InputMask
              id="email_input_id"
              onBlur={(text) => {
                setInputEmail(text.target.value.toLowerCase());
                inputValidation(
                  !text.target.value
                    .toLowerCase()
                    .match("^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$"),
                  "email_input_id",
                  "email_title_id",
                  "email_div_id"
                );
              }}
            />
            <p id="email_div_id" className="message-alert">
              Email inválido
            </p>
          </div>
          <div className={signProgress === 1 ? "" : "display-none"}>
            <h1 id="password_title_id">SENHA</h1>
            <InputMask
              id="password_input_id"
              type={password ? "password" : "text"}
              onChange={(text) => {
                setInputPassword(text.target.value);
                strengthTest(text.target.value);
              }}
            />
            <img
              className="password-eye"
              src={Eye}
              alt=""
              onClick={() => {
                passwordEye();
              }}
            />
            <p id="password_div_id" className="password-text">
              A senha deve conter 8 caracteres, contendo letras maiusculas ,
              minusculas e números
            </p>
          </div>
          <div className={signProgress === 1 ? "" : "display-none"}>
            <h1 id="confirmPassword_title_id">CONFIRMAR SENHA</h1>
            <InputMask
              id="confirmPassword_input_id"
              type={password ? "password" : "text"}
              onBlur={(text) => {
                setInputConfirmPassword(text.target.value);
              }}
            />
            <img
              className="password-eye"
              src={Eye}
              alt=""
              onClick={() => {
                passwordEye();
              }}
            />
            <p id="confirmPassword_div_id" className="password-text">
              A senha deve conter 8 caracteres, contendo letras maiusculas ,
              minusculas e números
            </p>
          </div>
          <PasswordHealth
            class={signProgress === 1 ? "bar-meter" : "display-none"}
            sinal={passwordStrength}
          />
          <div
            className={
              signProgress === 0 ? "sign-btn-align" : "sign-btn-aligner"
            }
          >
            <div
              className={signProgress === 0 ? "display-none" : ""}
              onClick={() => {
                setSignProgress(signProgress - 1);
              }}
            >
              <Button content="Voltar" />
            </div>
            <div onClick={progressValidation}>
              <Button content={signProgress === 1 ? "Cadastrar" : "Próximo"} />
            </div>
          </div>
        </div>
        <div className="sign-aligner">
          <label className="have-login">
            Já tem uma conta? Faça{" "}
            <a
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </a>
          </label>
        </div>
      </div>
      <div className="sign-bg">
        <img src={SignBg} alt="" />
      </div>
    </section>
  );
};
