import React from 'react'
import InputMask from 'react-input-mask'

export default ({
  label,
  mask,
  alwaysShowMask,
  pattern,
  message,
  onChange,
  required
}) => {
  return (
    <div className="w-4/12 h-auto bg-main-500 flex gap-7 items-start flex-col ">
      <InputMask
        className="peer focus:invalid:text-red-600 invalid:border-red-500 invalid:animate-shake pl-2 mr-0 h-8 w-full font-[Rubik] font-light text-2xl border-b-[1px] border-solid border-bg_neutral-500 rounded-none order-2 transition-colors"
        mask={mask}
        pattern={pattern}
        required={required ? required : false}
        alwaysShowMask={alwaysShowMask ? alwaysShowMask : true}
        onChange={onChange}
      />

      <h1 className="peer-invalid:text-red-600 peer-invalid:animate-shake text-3xl font-[Rubik] text-bg_neutral-500 order-1 transition-colors">
        {label}
      </h1>

      <p
        id="text_div_id"
        className="peer-invalid:text-red-600 peer-invalid:animate-shake peer-invalid:visible invisible transition-colors font-[Rubik] text-xl text-bg_neutral-500 font-light order-3 "
      >
        {message}
      </p>
    </div>
  )
}
/*
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
*/
