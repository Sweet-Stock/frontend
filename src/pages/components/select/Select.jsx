export default ({
  label,
  message,
  mask,
  alwaysShowMask,
  pattern,
  onChange,
  required,
  type,
  isNotVisible,
  placeholder,
  options,
  defaultValue,
}) => {
  return (
    <div
      className={
        isNotVisible
          ? "invisible absolute -z-50"
          : "w-1/2 h-min bg-main-500 flex gap-3 items-start flex-col "
      }
    >
      <select
        defaultValue={defaultValue ?? null}
        id="input_id"
        className="peer border-0 bg-main-500 focus:invalid:text-red-600 invalid:border-red-500 invalid:animate-shake pl-2 pb-1 mr-0 h-8 w-full font-[Rubik] font-light text-2xl border-b-[1px] border-solid border-bg_neutral-500 rounded-none order-2 transition-colors text-white"
        mask={mask ? mask : null}
        pattern={pattern ? pattern : null}
        required={required ? required : null}
        alwaysShowMask={alwaysShowMask ? alwaysShowMask : null}
        onChange={onChange}
        placeholder={placeholder}
        type={type ? type : "input"}
      >
        <option className="bg-main-500" selected value={null} disabled>
          Selecione uma opção
        </option>
        {options.map(({ key, value }) => (
          <option className="bg-main-500" key={key} value={key}>
            {value}
          </option>
        ))}
      </select>

      <h1 className="peer-invalid:text-red-600 peer-invalid:animate-shake text-2xl font-[Rubik] text-bg_neutral-500 order-1 transition-colors">
        {label}
      </h1>
      <p
        id="text_div_id"
        className="peer-invalid:text-red-600 peer-invalid:animate-shake peer-invalid:visible invisible transition-colors font-[Rubik] text-xl text-bg_neutral-500 font-light order-3 "
      >
        {message}
      </p>
    </div>
  );
};
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
