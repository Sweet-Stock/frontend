import { useState } from "react";
import api from "../../../../services/api";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import InputFile from "../../../components/input_file/InputFile";
import ProgressBar from "../../../components/progress_bar/ProgressBar";
import Select from "../../../components/select/Select";

export default ({ grow, setPage }) => {
  const [isRequired, setIsRequired] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const isRefigerated = [
    {
      name: true,
      text: "Refrigerado",
    },
    {
      name: false,
      text: "Não refrigerado",
    },
  ];
  const unitMetrics = [
    {
      name: "LITRO",
      text: "Litros (L)",
    },
    {
      name: "MILILITRO",
      text: "Mililitros (ML)",
    },
    {
      name: "QUILO",
      text: "Quilos (KG)",
    },
    {
      name: "MILIGRAMA",
      text: "Miligramas (MG)",
    },
    {
      name: "UNIDADE",
      text: "Unidades (UN)",
    },
    {
      name: "GRAMA",
      text: "Gramas (GM)",
    },
  ];

  const config = {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("data")).token,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsRequired(true);
    setIsLoading(true);
    setIsDisabled(true);

    await api.post("", config);

    setIsLoading(false);
    setIsDisabled(false);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <section
      className={
        grow % 2 === 0
          ? "relative w-[100%] h-[100vh] pl-48 transition-all ease-in-out duration-500 flex flex-col items-center"
          : "relative w-[100%] h-[100vh] pl-80 transition-all ease-in-out duration-500 flex flex-col items-center"
      }
    >
      <div className="w-[100%] flex flex-row gap-2 items-center justify-between pt-20 pr-10">
        <h1 className="text-secondary-500 font-bold font-[Rubik] text-5xl ">
          Cadastro Ingrediente
        </h1>
        <div className="flex gap-2"></div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="h-[75vh] aspect-[4/3] rounded-2xl bg-main-500 flex justify-center items-center flex-col gap-1"
        >
          <span className="w-2/5">
            <ProgressBar progressBar="short" img={1} />
          </span>
          <Input
            isNotVisible={true}
            label="Nome"
            message="Por favor insira um nome"
            onChange
            required={isRequired}
          />
          <Input
            isNotVisible={true}
            label="Marca"
            message="Por favor insira uma marca"
            onChange
            required={isRequired}
          />
          <Input
            isNotVisible={true}
            label="Fornecedor"
            message="Por favor insira um fornecedor"
            onChange
            required={isRequired}
          />
          <Input
            isNotVisible={true}
            label="Data de compra"
            message="Por favor insira uma data"
            onChange
            required={isRequired}
            type="date"
          />
          <Input
            isNotVisible={true}
            label="Data de validade"
            message="Por favor insira uma data"
            onChange
            required={isRequired}
            type="date"
          />
          <Select
            isNotVisible={false}
            label="Armazenamento"
            onChange
            required={isRequired}
            options={isRefigerated}
          />
          <Select
            isNotVisible={false}
            label="Unidade de medida"
            onChange
            required={isRequired}
            options={unitMetrics}
          />
          <Input
            label="Quantidade em estoque"
            pattern="^[0-9]*$"
            message="Por favor insira apenas números"
            onChange
            required={isRequired}
            placeholder="99999"
          />
          <Input
            label="Valor"
            pattern="^[0-9]*$"
            message="Por favor insira apenas números"
            onChange
            required={isRequired}
            placeholder="99,99"
          />
          <InputFile
            isNotVisible={false}
            label="Imagem"
            message="Por favor insira uma Imagem"
            onChange={async () => {
              const file = document.querySelector("#input_file_id").files[0];
              const fileInBase64 = await toBase64(file);
            }}
            required={isRequired}
          />

          <div className="flex w-1/2 justify-between items-center">
            <Button
              isDisabled={isDisabled}
              onClick={() => setPage(true)}
              content="Voltar"
            />
            <Button isLoading={isLoading} type="submit" content="Cadastrar" />
          </div>
        </form>
      </div>
    </section>
  );
};
