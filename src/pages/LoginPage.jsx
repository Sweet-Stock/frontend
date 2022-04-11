import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "./components/Button";
import InputMask from "react-input-mask";
import Eye from "./images/Eye.svg";
import LoginBg from "./images/loginBgImage.svg";
import api from "../services/api";
import "./LoginPage.css";

export default () => {
  const [password, setPassword] = React.useState(true);
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");

  const modal = {
    email: inputEmail,
    password: inputPassword,
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

  /* 
  const signApi = () => {
    api
      .post(
        "https://6250e7e5e3e5d24b34282a74.mockapi.io/sweet-stock/v1/teste",
        modal
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        sessionStorage.setItem("data", JSON.stringify(response.data));
        sessionStorage.setItem("status", JSON.stringify(response.status));
        login(Number(sessionStorage.getItem("status")));
      })
      .catch((err) => {
        console.error(err);
        sessionStorage.setItem("status", JSON.stringify(err.response.status));
        login(Number(sessionStorage.getItem("status")));
        console.log(err.response.status);
      });
  };

  signApi();
  */

  const navigate = useNavigate();

  const login = (statusCode) => {
    console.log(statusCode);
    switch (statusCode) {
      case 201:
        navigate("/dashboard");
        break;

      default:
        navigate(`/error/${statusCode}`);
        break;
    }
  };
  return (
    <section className="login-root">
      <div className="login">
        <label className="login-title">Login</label>
        <span className="login-aligner">
          <label className="sign-login">
            Não tem uma conta?
            <Link to="/cadastro">
              <a> Cadastra-se</a>
            </Link>
          </label>
        </span>

        <div className="login-container">
          <div>
            <h1 id="email_title_id">E-MAIL</h1>
            <InputMask
              id="email_input_id"
              onBlur={(text) => {
                setInputEmail(text.target.value.toLowerCase());
                inputValidation(
                  true,
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
              onChange={(text) => {}}
            />
            <img
              className="password-eye"
              src={Eye}
              alt=""
              onClick={() => {
                passwordEye();
              }}
            />
            <p id="password_div_login_id" className="message-alert">
              Senha incorreta
            </p>
          </div>

          <div className="login-btn-align">
            <div>
              <Button content="Login" />
            </div>
          </div>
          <div className="login-aligner">
            <label className="have-login">
              <Link to="/">
                <a href="" className="forgot-password">
                  Esqueci minha senha
                </a>
              </Link>
            </label>
          </div>
        </div>

      </div>
      <div className="login-bg">
          <img src={LoginBg} alt="" />
        </div>
    </section>
  );
};
