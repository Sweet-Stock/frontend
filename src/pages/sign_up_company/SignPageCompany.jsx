import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/button/Button'
import InputMask from 'react-input-mask'
import ProgressBar from '../components/progress_bar/ProgressBar'
import Eye from '../images/Eye.svg'
import SignBg from '../images/Sign up-pana 1.svg'
import PasswordHealth from '../components/password_health/PasswordHealth'
import axios from 'axios'
import api from '../../services/api'
import './SignPageCompany.css'

export default () => {
  const [signProgress, setSignProgress] = useState(0)
  const [person, setPerson] = useState('FISICA')
  const [password, setPassword] = useState(true)
  const [passwordStrength, setPasswordStrength] = useState('red')
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const [inputName, setInputName] = useState(null)
  const [inputFantasyName, setFantasyInputName] = useState(null)
  const [inputPhone, setInputPhone] = useState(null)
  const [inputPhoto, setInputPhoto] = useState(null)
  const [inputCEO, setInputCEO] = useState(null)
  const [inputCPF, setInputCPF] = useState('')
  const [inputCNPJ, setInputCNPJ] = useState('')
  const [inputCEP, setInputCEP] = useState(null)
  const [inputStreet, setInputStreet] = useState('')
  const [inputNumber, setInputNumber] = useState(null)
  const [inputComplement, setInputComplement] = useState(null)
  const [inputCity, setInputCity] = useState(null)
  const [inputState, setInputState] = useState(null)
  const [inputNeighbor, setInputNeighbor] = useState('')
  const [inputEmail, setInputEmail] = useState(null)
  const [inputPassword, setInputPassword] = useState(null)
  const [inputConfirmPassword, setInputConfirmPassword] = useState(null)

  const modal = {
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
      neighborhood: inputNeighbor
    },
    email: inputEmail,
    password: inputPassword,
    picture: inputPhoto
  }

  const requestViaCep = cep => {
    if (cep.match('[0-9]{5}-[0-9]{3}')) {
      const options = {
        method: 'GET',
        url: 'https://viacep.com.br/ws/' + cep + '/json/'
      }

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data)
          setInputCity(response.data.localidade)
          setInputStreet(response.data.logradouro)
          setInputNeighbor(response.data.bairro)
          setInputState(response.data.uf)
          setInputCEP(response.data.cep)
          document.getElementById('street_input_id').value =
            response.data.logradouro === undefined
              ? ''
              : response.data.logradouro
          document.getElementById('neighbor_input_id').value =
            response.data.bairro === undefined ? '' : response.data.bairro
          response.data.erro === true
            ? inputValidation(
                true,
                'cep_input_id',
                'cep_title_id',
                'cep_div_id'
              )
            : inputValidation(
                false,
                'cep_input_id',
                'cep_title_id',
                'cep_div_id'
              )
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }

  const strengthTest = password => {
    if (
      password.match(
        '^(?=(.*[a-z]){3,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{12,}$'
      )
    ) {
      setPasswordStrength('green')
    } else if (
      password.match(
        '^(?=(.*[a-z]){3,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,}).{8,}$'
      )
    ) {
      setPasswordStrength('yellow')
      setPassword(password)
    } else {
      setPasswordStrength('red')
      setPassword(password)
    }
  }

  const passwordEye = () => {
    password ? setPassword(false) : setPassword(true)
  }

  const inputValidation = (condition, inputId, titleId, divId) => {
    if (condition) {
      document.getElementById(inputId).animate(
        [
          {
            borderColor: 'var(--neultral-color)',
            borderBottomWidth: '1px'
          },
          { borderColor: 'red', borderBottomWidth: '2px' },
          {
            borderColor: 'var(--neultral-color)',
            borderBottomWidth: '1px'
          },
          { borderColor: 'red', borderBottomWidth: '2px' },
          {
            borderColor: 'var(--neultral-color)',
            borderBottomWidth: '1px'
          },
          { borderColor: 'red', borderBottomWidth: '2px' },
          {
            borderColor: 'var(--neultral-color)',
            borderBottomWidth: '1px'
          },
          { borderColor: 'red', borderBottomWidth: '2px' }
        ],
        {
          duration: 300
        }
      )
      document.getElementById(titleId).animate(
        [
          {
            transform: 'translateX(5px)',
            color: 'red'
          },
          { transform: 'translateX(-5px)' },
          {
            transform: 'translateX(0)'
          },
          {
            transform: 'translateX(5px)'
          },
          { transform: 'translateX(-5px)' },
          {
            transform: 'translateX(0)'
          }
        ],
        {
          duration: 300
        }
      )
      document.getElementById(inputId).style.borderColor = 'red'
      document.getElementById(titleId).style.color = 'red'
      document.getElementById(divId).style.color = 'red'
      document.getElementById(divId).style.display = 'block'
    } else {
      document.getElementById(inputId).style.borderColor =
        'var(--neultral-color)'
      document.getElementById(titleId).style.color = 'var(--neultral-color)'
      document.getElementById(divId).style.color = 'var(--neultral-color)'
      document.getElementById(divId).style.display = 'none'
    }
  }

  const progressValidation = () => {
    switch (signProgress) {
      case 0:
        if (inputName === null || inputName.length < 3) {
          inputValidation(true, 'name_input_id', 'name_title_id', 'name_div_id')
          break
        }
        if (inputFantasyName === null || inputFantasyName.length < 3) {
          inputValidation(
            true,
            'fantasy_input_id',
            'fantasy_title_id',
            'fantasy_div_id'
          )
          break
        }
        if (
          inputPhone === null ||
          !inputPhone.match('^[1-9]{2} [9]{0,1}[0-9]{1}[0-9]{3}-[0-9]{4}$')
        ) {
          inputValidation(
            true,
            'phone_input_id',
            'phone_title_id',
            'phone_div_id'
          )
          break
        }
        setSignProgress(signProgress + 1)
        break
      case 1:
        if (inputCEO === null || inputCEO.length < 3) {
          inputValidation(true, 'ceo_input_id', 'ceo_title_id', 'ceo_div_id')
          break
        }
        if (
          person === 'FISICA'
            ? !inputCPF.match(
                '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})'
              )
            : !inputCNPJ.match(
                '(^[0-9]{2,3}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}$)'
              )
        ) {
          inputValidation(true, 'cpf_input_id', 'cpf_title_id', 'cpf_div_id')
          break
        }
        person === 'JURIDICA' ? setInputCPF(null) : setInputCNPJ(null)
        setSignProgress(signProgress + 1)
        break
      case 2:
        if (
          inputCEP === null ||
          inputCEP === undefined ||
          !inputCEP.match('[0-9]{5}-[0-9]{3}')
        ) {
          inputValidation(true, 'cep_input_id', 'cep_title_id', 'cep_div_id')
          inputValidation(
            true,
            'street_input_id',
            'street_title_id',
            'street_div_id'
          )
          inputValidation(
            true,
            'neighbor_input_id',
            'neighbor_title_id',
            'neighbor_div_id'
          )
          break
        }
        if (inputNumber === null || inputNumber === 0) {
          inputValidation(true, 'num_input_id', 'num_title_id', 'num_div_id')
          break
        }
        setSignProgress(signProgress + 1)

        break

      case 3:
        if (
          inputEmail === null ||
          !inputEmail.match('^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$')
        ) {
          inputValidation(
            true,
            'email_input_id',
            'email_title_id',
            'email_div_id'
          )
          break
        }
        if (
          inputPassword === null ||
          inputPassword !== inputConfirmPassword ||
          passwordStrength === 'red'
        ) {
          inputValidation(
            true,
            'password_input_id',
            'password_title_id',
            'password_div_id'
          )
          inputValidation(
            true,
            'confirmPassword_input_id',
            'confirmPassword_title_id',
            'confirmPassword_div_id'
          )
          break
        }
        inputValidation(
          false,
          'password_input_id',
          'password_title_id',
          'password_div_id'
        )
        inputValidation(
          false,
          'confirmPassword_input_id',
          'confirmPassword_title_id',
          'confirmPassword_div_id'
        )

        const signApi = async () => {
          setIsDisabled(true)
          setIsLoading(true)
          await api
            .post('/companies', modal)
            .then(response => {
              console.log(response)
              console.log(response.status)
              sessionStorage.setItem('data', JSON.stringify(response.data))
              login(response.status)
              setIsDisabled(false)
              setIsLoading(false)
            })
            .catch(err => {
              console.error(err)
              console.log(err.response.status)
              sessionStorage.setItem(
                'status',
                JSON.stringify(err.response.status)
              )
              login(err.response.status)
              setIsDisabled(false)
              setIsLoading(false)
            })
          setIsDisabled(false)
          setIsLoading(false)
        }

        signApi()

        break
      default:
        break
    }
  }

  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })

  const navigate = useNavigate()

  useEffect(() => {
    let dataStorage = sessionStorage.getItem('data')

    if (dataStorage != undefined)
      if (dataStorage != 'null') navigate('/dashboard')
  }, [])

  const login = statusCode => {
    switch (statusCode) {
      case 201:
        navigate('/dashboard')
        break
      case 401:
        alert('Email já cadastrado')
        break
      default:
        navigate(`/error/${sessionStorage.getItem('status')}`)
        break
    }
  }
  return (
    <section className="sign-root">
      <div className="sign">
        <span className="sign-aligner">
          <label className="sign-title">CADASTRE-SE</label>
          <span></span>
        </span>
        <div className="sign-container">
          <span className="w-[30rem]">
            <ProgressBar img={signProgress} />
          </span>
          <div className={signProgress === 0 ? '' : 'display-none'}>
            <h1 id="name_title_id">NOME DA EMPRESA</h1>
            <InputMask
              id="name_input_id"
              onBlur={text => {
                setInputName(text.target.value)
                inputValidation(
                  text.target.value.length < 3,
                  'name_input_id',
                  'name_title_id',
                  'name_div_id'
                )
              }}
            />
            <p id="name_div_id" className="message-alert">
              Nome inválido
            </p>
          </div>
          <div className={signProgress === 0 ? '' : 'display-none'}>
            <h1 id="fantasy_title_id">NOME FANTASIA</h1>
            <InputMask
              id="fantasy_input_id"
              onBlur={text => {
                setFantasyInputName(text.target.value)
                inputValidation(
                  text.target.value.length < 3,
                  'fantasy_input_id',
                  'fantasy_title_id',
                  'fantasy_div_id'
                )
              }}
            />
            <p id="fantasy_div_id" className="message-alert">
              Nome fantasia inválido
            </p>
          </div>
          <div className={signProgress === 0 ? '' : 'display-none'}>
            <h1 id="phone_title_id">TELEFONE CELULAR</h1>
            <InputMask
              id="phone_input_id"
              mask="99 99999-9999"
              alwaysShowMask={true}
              onBlur={text => {
                setInputPhone(text.target.value)
                inputValidation(
                  !text.target.value.match(
                    '^[1-9]{2} [9]{0,1}[0-9]{1}[0-9]{3}-[0-9]{4}$'
                  ),
                  'phone_input_id',
                  'phone_title_id',
                  'phone_div_id'
                )
              }}
            />
            <p id="phone_div_id" className="message-alert">
              Número de celular inválido
            </p>
          </div>
          <div className={signProgress === 0 ? '' : 'display-none'}>
            <h1 id="photo_title_id">FOTO DE PERFIL</h1>
            <input
              type="file"
              id="photo_input_id"
              onChange={async () => {
                const file = document.querySelector('#photo_input_id').files[0]
                const fileInBase64 = await toBase64(file)

                setInputPhoto(fileInBase64)
                console.log(fileInBase64)

                inputValidation(
                  !fileInBase64.startsWith('data:image/'),
                  'photo_input_id',
                  'photo_title_id',
                  'photo_div_id'
                )
              }}
            />
            <p id="photo_div_id" className="message-alert">
              Formato de imagem invalido
            </p>
          </div>
          <div className={signProgress === 1 ? '' : 'display-none'}>
            <h1>TIPO DE PESSOA</h1>
            <select
              name="personName"
              id="personId"
              onChange={value => {
                setPerson(value.target.value)
              }}
            >
              <option value="FISICA">Pessoa Física</option>
              <option value="JURIDICA">Pessoa Jurídica</option>
            </select>
          </div>
          <div className={signProgress === 1 ? '' : 'display-none'}>
            <h1 id="ceo_title_id">CEO</h1>
            <InputMask
              id="ceo_input_id"
              onBlur={text => {
                setInputCEO(text.target.value)
                inputValidation(
                  text.target.value.length < 3,
                  'ceo_input_id',
                  'ceo_title_id',
                  'ceo_div_id'
                )
              }}
            />
            <p id="ceo_div_id" className="message-alert">
              Nome do CEO inválido
            </p>
          </div>
          <div className={signProgress === 1 ? '' : 'display-none'}>
            <h1 id="cpf_title_id">{person === 'JURIDICA' ? 'CNPJ' : 'CPF'}</h1>
            <InputMask
              mask={
                person === 'JURIDICA' ? '99.999.999/9999-99' : '999.999.999-99'
              }
              alwaysShowMask={true}
              id="cpf_input_id"
              onBlur={text => {
                person === 'JURIDICA'
                  ? setInputCNPJ(text.target.value)
                  : setInputCPF(text.target.value)
                person === 'JURIDICA' ? setInputCPF('') : setInputCNPJ('')
                inputValidation(
                  person === 'JURIDICA'
                    ? !text.target.value.match(
                        '(^[0-9]{2,3}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}$)'
                      )
                    : !text.target.value.match(
                        '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})'
                      ),
                  'cpf_input_id',
                  'cpf_title_id',
                  'cpf_div_id'
                )
              }}
            />
            <p id="cpf_div_id" className="message-alert">
              {person === 'JURIDICA' ? 'CNPJ' : 'CPF'} inválido
            </p>
          </div>

          {/* <div className={signProgress === 1 ? "" : "display-none"}>
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
          </div> */}
          <div className={signProgress === 2 ? '' : 'display-none'}>
            <h1 id="cep_title_id">CEP</h1>
            <InputMask
              mask="99999-999"
              alwaysShowMask={true}
              id="cep_input_id"
              onBlur={text => {
                requestViaCep(text.target.value)
                inputValidation(
                  !text.target.value.match('[0-9]{5}-[0-9]{3}'),
                  'cep_input_id',
                  'cep_title_id',
                  'cep_div_id'
                )
                inputValidation(
                  !text.target.value.match('[0-9]{5}-[0-9]{3}'),
                  'street_input_id',
                  'street_title_id',
                  'street_div_id'
                )
              }}
            />
            <p id="cep_div_id" className="message-alert">
              CEP inválido
            </p>
          </div>
          <div className={signProgress === 2 ? '' : 'display-none'}>
            <h1 id="street_title_id">RUA</h1>
            <InputMask
              id="street_input_id"
              onBlur={text => {
                setInputStreet(text.target.value)
                inputValidation(
                  text.target.value < 3,
                  'street_input_id',
                  'street_title_id',
                  'street_div_id'
                )
              }}
            />
            <p id="street_div_id" className="message-alert">
              Nome da rua invalido
            </p>
          </div>
          <div className={signProgress === 2 ? '' : 'display-none'}>
            <h1 id="neighbor_title_id">BAIRRO</h1>
            <InputMask
              id="neighbor_input_id"
              onBlur={text => {
                setInputNeighbor(text.target.value)
                inputValidation(
                  text.target.value < 3,
                  'neighbor_input_id',
                  'neighbor_title_id',
                  'neighbor_div_id'
                )
              }}
            />
            <p id="neighbor_div_id" className="message-alert">
              Nome da Bairro invalido
            </p>
          </div>
          <div className="adress-aligner">
            <div className={signProgress === 2 ? '' : 'display-none'}>
              <h1 id="num_title_id">NÚMERO</h1>
              <InputMask
                id="num_input_id"
                onBlur={text => {
                  setInputNumber(text.target.value)
                  inputValidation(
                    text.target.value === null || text.target.value === '0',
                    'num_input_id',
                    'num_title_id',
                    'num_div_id'
                  )
                }}
              />
              <p id="num_div_id" className="message-alert">
                Numero inválido
              </p>
            </div>
            <div className={signProgress === 2 ? '' : 'display-none'}>
              <h1>COMPLEMENTO</h1>
              <InputMask
                onChange={text => {
                  setInputComplement(text.target.value)
                }}
              />
            </div>
          </div>
          <div className={signProgress === 3 ? '' : 'display-none'}>
            <h1 id="email_title_id">E-MAIL</h1>
            <InputMask
              id="email_input_id"
              onBlur={text => {
                setInputEmail(text.target.value.toLowerCase())
                inputValidation(
                  !text.target.value
                    .toLowerCase()
                    .match('^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$'),
                  'email_input_id',
                  'email_title_id',
                  'email_div_id'
                )
              }}
            />
            <p id="email_div_id" className="message-alert">
              Email inválido
            </p>
          </div>
          <div className={signProgress === 3 ? '' : 'display-none'}>
            <h1 id="password_title_id">SENHA</h1>
            <InputMask
              id="password_input_id"
              type={password ? 'password' : 'text'}
              onChange={text => {
                setInputPassword(text.target.value)
                strengthTest(text.target.value)
              }}
            />
            <img
              className="password-eye"
              src={Eye}
              alt=""
              onClick={() => {
                passwordEye()
              }}
            />
            <p id="password_div_id" className="password-text">
              A senha deve conter 8 caracteres, contendo letras maiúsculas ,
              minusculas e números
            </p>
          </div>
          <div className={signProgress === 3 ? '' : 'display-none'}>
            <h1 id="confirmPassword_title_id">CONFIRMAR SENHA</h1>
            <InputMask
              id="confirmPassword_input_id"
              type={password ? 'password' : 'text'}
              onBlur={text => {
                setInputConfirmPassword(text.target.value)
              }}
            />
            <img
              className="password-eye"
              src={Eye}
              alt=""
              onClick={() => {
                passwordEye()
              }}
            />
            <p id="confirmPassword_div_id" className="password-text">
              A senha deve conter 8 caracteres, contendo letras maiúsculas ,
              minusculas e números
            </p>
          </div>
          <PasswordHealth
            class={signProgress === 3 ? 'bar-meter' : 'display-none'}
            sinal={passwordStrength}
          />
          <div
            className={
              signProgress === 0 ? 'sign-btn-align' : 'sign-btn-aligner'
            }
          >
            <div className={signProgress === 0 ? 'display-none' : ''}>
              <Button
                onClick={() => {
                  setSignProgress(signProgress - 1)
                }}
                isDisabled={isDisabled}
                content="Voltar"
              />
            </div>
            <div>
              <Button
                isLoading={isLoading}
                onClick={progressValidation}
                content={signProgress === 3 ? 'Cadastrar' : 'Próximo'}
              />
            </div>
          </div>
        </div>
        <div className="sign-aligner">
          <label className="have-login">
            Já tem uma conta? Faça{' '}
            <a
              onClick={() => {
                navigate('/login')
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
  )
}
