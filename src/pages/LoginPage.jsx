import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import InputMask from "react-input-mask";
import Eye from "./images/Eye.svg";
import LoginBg from "./images/login-bg.svg";
import api from "../services/api";
import "./LoginPage.css";

export default () => {
  const [password, setPassword] = React.useState(true);

  const [inputEmail, setInputEmail] = React.useState(null);
  const [inputPassword, setInputPassword] = React.useState(null);

  const passwordEye = () => {
    password ? setPassword(false) : setPassword(true);
  };

  const modal = {
      login : inputEmail,
      password : inputPassword
  }

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

  const loginApi = () => {
    api
      .post("/login",modal)
      .then((response) => {
        console.log(response);
        console.log(response.status);
        sessionStorage.setItem("data", JSON.stringify(response.data));
        login(response.status);
      })
      .catch((err) => {
        console.error(err);
        console.log(err.response.status);
        sessionStorage.setItem("status", JSON.stringify(err.response.status));
        login(err.response.status);
      });
  };

  const navigate = useNavigate();

  const login = (statusCode) => {
    switch (statusCode) {
      case 200:
        navigate("/dashboard");
        break;
      case 401:
        alert("Email ou senha incorretos");
        break;
      default:
        navigate(`/error/${sessionStorage.getItem("status")}`);
        break;
    }
  };
  return (
    <section className="login-root">
      <div className="login">
        <span className="login-aligner">
          <label className="login-title">Login</label>
          <span></span>
        </span>
        <div className="login-container">
          <div>
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
          <div>
            <h1 id="password_title_id">SENHA</h1>
            <InputMask
              id="password_input_id"
              type={password ? "password" : "text"}
              onChange={(text) => {
                setInputPassword(text.target.value);
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

          <div className="login-btn-align">
            <div onClick={loginApi}>
              <Button content="Login" />
            </div>
          </div>
        </div>
        <div className="login-aligner">
          <label className="have-login">
            Não tem uma conta? {""}
            <a
              onClick={() => {
                navigate("/cadastro");
              }}
            >
              cadastre-se
            </a>
          </label>
        </div>
      </div>
      <div className="login-bg">
        <img src={LoginBg} alt="" />
      </div>
    </section>
  );
};
