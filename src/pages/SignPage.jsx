import React from "react";
import Button from "./components/Button";
import InputMask from "react-input-mask";
import ProgressBar from "./components/ProgressBar";
import Eye from "./images/Eye.svg";
import SignBg from "./images/Sign up-pana 1.svg";
import PasswordHealth from "./components/PasswordHealth";
import axios from "axios";
import "./SignPage.css";

export default () => {
  const [signProgress, setSignProgress] = React.useState(0);
  const [person, setPerson] = React.useState("FISICA");
  const [password, setPassword] = React.useState(true);
  const [passwordStrength, setPasswordStrength] = React.useState("red");

  const [viaCep, setViaCep] = React.useState({});
  const [inputName, setInputName] = React.useState(null);
  const [inputFantasyName, setFantasyInputName] = React.useState(null);
  const [inputPhone, setInputPhone] = React.useState(null);
  const [inputCEO, setInputCEO] = React.useState(null);
  const [inputCPF, setInputCPF] = React.useState(null);
  const [inputCNPJ, setInputCNPJ] = React.useState(null);
  const [inputUrlLogo, setInputUrlLogo] = React.useState(null);
  const [inputStreet, setInputStreet] = React.useState(null);
  const [inputNumber, setInputNumber] = React.useState(null);
  const [inputComplement, setInputComplement] = React.useState(null);
  const [inputCity, setInputCity] = React.useState(null);
  const [inputState, setInputState] = React.useState(null);
  const [inputNeighbor, setInputNeighbor] = React.useState(null);
  const [inputEmail, setInputEmail] = React.useState(null);
  const [inputPassword, setInputPassword] = React.useState(null);

  const modal = [
    {
      name: inputName,
      fantasyName: inputFantasyName,
      telephoneNumber: inputPhone,
      peopleType: person,
      ceo: inputCEO,
      cpf: inputCPF,
      cnpj: inputCNPJ,
      addressRequest: {
        street: inputStreet,
        number: inputNumber,
        complement: inputComplement,
        city: inputCity,
        state: inputState,
        neighborhood: inputNeighbor,
      },
      email: inputEmail,
      password: inputPassword,
    },
  ];

  const requestViaCep = (cep) => {
    if (cep.match("[0-9]{5}-[0-9]{3}")) {
      const options = {
        method: "GET",
        url: "https://viacep.com.br/ws/" + cep + "/json/",
      };

      axios
        .request(options)
        .then(function (response) {
          setViaCep(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  const strengthTest = (password) => {
    {
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
        if (inputName < 3 || inputName === null) {
          inputValidation(
            true,
            "name_input_id",
            "name_title_id",
            "name_div_id"
          );
          break;
        }
        if (inputFantasyName < 3 || inputFantasyName === null) {
          inputValidation(
            true,
            "fantasy_input_id",
            "fantasy_title_id",
            "fantasy_div_id"
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
        if (inputCEO< 3 || inputCEO === null) {
          inputValidation(
            true,
            "ceo_input_id",
            "ceo_title_id",
            "ceo_div_id"
          );
          break;
        }

        
        setSignProgress(signProgress + 1);
        break;
      default:
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
          <ProgressBar img={signProgress} />
          <div className={signProgress === 0 ? "" : "display-none"}>
            <h1 id="name_title_id">NOME E SOBRENOME</h1>
            <InputMask
              id="name_input_id"
              onBlur={(text) => {
                setInputName(text.target.value);
                inputValidation(
                  text.target.value.length <= 3,
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
            <h1 id="fantasy_title_id">NOME FANTASIA</h1>
            <InputMask
              id="fantasy_input_id"
              onBlur={(text) => {
                setFantasyInputName(text.target.value);
                inputValidation(
                  text.target.value.length <= 3,
                  "fantasy_input_id",
                  "fantasy_title_id",
                  "fantasy_div_id"
                );
              }}
            />
            <p id="fantasy_div_id" className="message-alert">
              Nome fantasia inválido
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
            <h1>TIPO DE PESSOA</h1>
            <select
              name="personName"
              id="personId"
              onChange={(value) => {
                setPerson(value.target.value);
              }}
            >
              <option value="FISICA">Pessoa Fisica</option>
              <option value="JURIDICA">Pessoa Jurídica</option>
            </select>
          </div>
          <div className={signProgress === 1 ? "" : "display-none"}>
            <h1 id="ceo_title_id">CEO</h1>
            <InputMask
              id="ceo_input_id"
              onBlur={(text) => {
                setInputCEO(text.target.value);
                inputValidation(
                  text.target.value.length <= 3,
                  "ceo_input_id",
                  "ceo_title_id",
                  "ceo_div_id"
                );
              }}
            />
            <p id="ceo_div_id" className="message-alert">
              Nome do CEO inválido
            </p>
          </div>
          <div className={signProgress === 1 ? "" : "display-none"}>
            <h1 id="cpf_title_id">{person === "JURIDICA" ? "CNJP" : "CPF"}</h1>
            <InputMask
              mask={
                person === "JURIDICA" ? "99.999.999/9999-99" : "999.999.999-99"
              }
              alwaysShowMask={true}
              id="cpf_input_id"
              onBlur={(text) => {
                person === "JURIDICA"
                  ? setInputCNPJ(text.target.value)
                  : setInputCPF(text.target.value);
                person === "JURIDICA" ? setInputCPF(null) : setInputCNPJ(null);
                inputValidation(
                  person === "JURIDICA"
                    ? !text.target.value.match(
                        "(^[0-9]{2,3}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}$)"
                      )
                    : !text.target.value.match(
                        "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"
                      ),
                  "cpf_input_id",
                  "cpf_title_id",
                  "cpf_div_id"
                );
                console.log(modal);
              }}
            />
            <p id="cpf_div_id" className="message-alert">
              {person === "JURIDICA" ? "CNPJ" : "CPF"} inválido
            </p>
          </div>

          <div className={signProgress === 1 ? "" : "display-none"}>
            <h1 id="logo_title_id">Logo</h1>
            <InputMask
              id="logo_input_id"
              placeholder="URL Logotipo"
              onBlur={(text) => {
                setInputUrlLogo(text.target.value);
                inputValidation(
                  text.target.value.length < 5,
                  "logo_input_id",
                  "logo_title_id",
                  "logo_div_id"
                );
              }}
            />
            <p id="logo_div_id" className="message-alert">
              URL da logo inválido
            </p>
          </div>
          <div className={signProgress === 2 ? "" : "display-none"}>
            <h1 id="cep_title_id">CEP</h1>
            <InputMask
              mask="99999-999"
              alwaysShowMask={true}
              id="cep_input_id"
              onBlur={(text) => {
                requestViaCep(text.target.value);
                inputValidation(
                  !text.target.value.match("[0-9]{5}-[0-9]{3}"),
                  "cep_input_id",
                  "cep_title_id",
                  "cep_div_id"
                );
                inputValidation(
                  !text.target.value.match("[0-9]{5}-[0-9]{3}"),
                  "street_input_id",
                  "street_title_id",
                  "street_div_id"
                );
              }}
            />
            <p id="cep_div_id" className="message-alert">
              CEP inválido
            </p>
          </div>
          <div className={signProgress === 2 ? "" : "display-none"}>
            <h1 id="street_title_id">RUA</h1>
            <InputMask
              value={viaCep?.logradouro}
              id="street_input_id"
              onBlur={(text) => {
                requestViaCep(text.target.value);
                inputValidation(
                  text.target.value <= 4,
                  "street_input_id",
                  "street_title_id",
                  "street_div_id"
                );
              }}
            />
            <p id="street_div_id" className="message-alert">
              Nome da rua invalido
            </p>
          </div>
          <div className="adress-aligner">
            <div className={signProgress === 2 ? "" : "display-none"}>
              <h1 id="num_title_id">NÚMERO</h1>
              <InputMask
                id="num_input_id"
                onBlur={(text) => {
                  setInputNumber(text.target.value);
                  inputValidation(
                    text.target.value < 5,
                    "num_input_id",
                    "num_title_id",
                    "num_div_id"
                  );
                }}
              />
              <p id="num_div_id" className="message-alert">
                Numero inválido
              </p>
            </div>
            <div className={signProgress === 2 ? "" : "display-none"}>
              <h1>COMPLEMENTO</h1>
              <InputMask
                onChange={(text) => {
                  setInputNumber(text.target.value);
                }}
              />
            </div>
          </div>
          <div className={signProgress === 3 ? "" : "display-none"}>
            <h1 id="email_title_id">E-MAIL</h1>
            <InputMask
              id="email_input_id"
              onBlur={(text) => {
                setInputNumber(text.target.value);
                inputValidation(
                  !text.target.value.match(
                    "^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$"
                  ),
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
          <div className={signProgress === 3 ? "" : "display-none"}>
            <h1>SENHA</h1>
            <InputMask
              type={password ? "password" : "text"}
              onChange={(text) => {
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
            <p className="password-text">
              A senha deve conter 8 caracteres, contendo letras maiusculas ,
              minusculas e números
            </p>
          </div>
          <div className={signProgress === 3 ? "" : "display-none"}>
            <h1>CONFIRMAR SENHA</h1>
            <InputMask type={password ? "password" : "text"} />
            <img
              className="password-eye"
              src={Eye}
              alt=""
              onClick={() => {
                passwordEye();
              }}
            />
            <p className="password-text">
              A senha deve conter 8 caracteres, contendo letras maiusculas ,
              minusculas e números
            </p>
          </div>
          <PasswordHealth
            class={signProgress === 3 ? "bar-meter" : "display-none"}
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
              <Button content={signProgress === 3 ? "Cadastrar" : "Próximo"} />
            </div>
          </div>
        </div>
        <div className="sign-aligner">
          <label className="have-login">
            Já tem uma conta? Faça <a>Login</a>
          </label>
        </div>
      </div>
      <div className="sign-bg">
        <img src={SignBg} alt="" />
      </div>
    </section>
  );
};