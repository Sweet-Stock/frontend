import { useEffect, useState } from "react";
import api from "../../../../services/api";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import InputFile from "../../../components/input_file/InputFile";
import ProgressBar from "../../../components/progress_bar/ProgressBar";
import Select from "../../../components/select/Select";

export default ({ grow, setUpdate, uuid, refresh, setRefresh }) => {
  const [ingredientToUpdate, setIngredientToUpdate] = useState({});
  //variável que está os dados do ingrediente

  const [isRequired, setIsRequired] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [inputName, setInputName] = useState(ingredientToUpdate?.name);
  const [inputBrand, setInputBrand] = useState(ingredientToUpdate?.brand);
  const [inputProvider, setInputProvider] = useState(
    ingredientToUpdate?.provideCode
  );
  const [inputBuyDate, setInputBuyDate] = useState(null);
  const [inputValDate, setInputValDate] = useState(
    ingredientToUpdate?.expirationDate
  );
  const [inputStorage, setInputStorage] = useState(
    ingredientToUpdate?.numberUnits
  );
  const [inputStorageType, setInputStorageType] = useState(
    ingredientToUpdate?.isRefigerated
  );
  const [inputMetric, setInputMetric] = useState(
    ingredientToUpdate?.unitMeasurement
  );
  const [inputPicture, setInputPicture] = useState(ingredientToUpdate?.picture);
  const [inputQuantityPerUnit, setQuantityPerUnit] = useState(
    ingredientToUpdate?.quantityPerUnit
  );
  const [inputBuyValue, setInputBuyValue] = useState(
    ingredientToUpdate?.buyValue
  );
  const [inputStorageTemperature, setInputStorageTemperature] = useState(
    ingredientToUpdate?.storageTemperature
  );
  const [inputLotNumber, setInputLotNumber] = useState(
    ingredientToUpdate?.numberLot
  );

  useEffect(() => {
    //função que chama o ingrediente
    api
      .get(`ingredients/ingredient-by-uuid/${uuid}`, config)
      .then((res) => setIngredientToUpdate(res.data))
      .catch((err) => console.error(err));
  }, []);

  let modal = {
    name: inputName,
    unitMeasurement: inputMetric,
    numberUnits: inputStorage,
    quantityPerUnit: inputQuantityPerUnit,
    expirationDate: inputValDate,
    storageTemperature: inputStorageTemperature,
    isRefigerated: inputStorageType,
    buyValue: inputBuyValue,
    provideCode: inputProvider,
    numberLot: inputLotNumber,
    brand: inputBrand,
    picture: inputPicture,
    //  buyDate: inputBuyDate,
  };

  const [progress, setProgress] = useState(0);

  const [providers, setProviders] = useState([]);

  const isRefrigerated = [
    {
      key: true,
      value: "Refrigerado",
    },
    {
      key: false,
      value: "Não refrigerado",
    },
  ];
  const unitMetrics = [
    {
      key: "LITRO",
      value: "Litros (L)",
    },
    {
      key: "MILILITRO",
      value: "Mililitros (ML)",
    },
    {
      key: "QUILO",
      value: "Quilos (KG)",
    },
    {
      key: "MILIGRAMA",
      value: "Miligramas (MG)",
    },
    {
      key: "UNIDADE",
      value: "Unidades (UN)",
    },
    {
      key: "GRAMA",
      value: "Gramas (GM)",
    },
  ];
  const config = {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("data")).token,
    },
  };

  useEffect(() => {
    api
      .get("/providers/providers-uuid", config)
      .then((res) => {
        setProviders(res.data);
        setRefresh(!refresh);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    switch (progress) {
      case 0:
        if (false) {
          setIsRequired(true);
        } else {
          setIsRequired(false);
          setProgress(progress + 1);
        }
        break;
      case 1:
        if (false) {
          setIsRequired(true);
        } else {
          setIsRequired(false);
          setProgress(progress + 1);
        }
        break;
      case 2:
        if (false) {
          setIsRequired(true);
        } else {
          setIsRequired(false);
          setProgress(progress + 1);
        }
        break;
      case 3:
        if (false) {
          setIsRequired(true);
        } else {
          setIsRequired(false);
          sendIngredient();
        }
        break;

      default:
        break;
    }
  };

  const sendIngredient = async () => {
    setIsDisabled(true);
    setIsLoading(true);
    await api
      .put("/ingredients/" + uuid, modal, config)
      .then(() => setUpdate(true))
      .catch((err) => console.error(err));
    setIsDisabled(false);
    setIsLoading(false);
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
          Atualizar Ingrediente
        </h1>
        <div className="flex gap-2"></div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <form className="h-[80vh] aspect-[4/3] rounded-2xl bg-main-500 flex justify-center items-center flex-col gap-2">
          <span className="w-2/5">
            <ProgressBar img={progress} />
          </span>
          <Input
            defaultValue={ingredientToUpdate?.name}
            isNotVisible={progress !== 0}
            label="Nome"
            message="Por favor insira um nome"
            onChange={(e) => setInputName(e.target.value)}
            required={isRequired}
          />
          <Input
            defaultValue={ingredientToUpdate?.brand}
            isNotVisible={progress !== 0}
            label="Marca"
            message="Por favor insira uma marca"
            onChange={(e) => setInputBrand(e.target.value)}
            required={isRequired}
          />

          <Select
            defaultValue={ingredientToUpdate?.provideCode}
            isNotVisible={progress !== 0}
            label="Fornecedor"
            onChange={(e) => setInputProvider(e.target.value)}
            required={isRequired}
            options={providers}
          />
          <Input
            defaultValue={ingredientToUpdate?.numberUnits}
            isNotVisible={progress !== 0}
            label="Quantidade em estoque"
            pattern="^[0-9]*$"
            message="Por favor insira apenas números"
            onChange={(e) => setInputStorage(e.target.value)}
            required={isRequired}
            placeholder="99999"
          />
          <Input
            //    defaultValue={ingredientToUpdate?.buyDate}
            isNotVisible={progress !== 1}
            label="Data de compra"
            message="Por favor insira uma data"
            onChange={(e) => setInputBuyDate(e.target.value)}
            required={isRequired}
            type="date"
          />
          <Input
            defaultValue={ingredientToUpdate?.expirationDate}
            isNotVisible={progress !== 1}
            label="Data de validade"
            message="Por favor insira uma data"
            onChange={(e) => setInputValDate(e.target.value)}
            required={isRequired}
            type="date"
          />
          <Select
            defaultValue={ingredientToUpdate?.isRefigerated}
            isNotVisible={progress !== 1}
            label="Armazenamento"
            onChange={(e) => setInputStorageType(e.target.value)}
            required={isRequired}
            options={isRefrigerated}
          />
          <Select
            isNotVisible={progress !== 2}
            label="Unidade de medida"
            onChange={(e) => setInputMetric(e.target.value)}
            required={isRequired}
            options={unitMetrics}
          />
          <Input
            defaultValue={ingredientToUpdate?.buyValue}
            isNotVisible={progress !== 2}
            label="Valor por unidade"
            pattern="^-?(?:0|[1-9][0-9]*)\.?[0-9]+$"
            message="Por favor insira apenas números"
            onChange={(e) => setInputBuyValue(e.target.value)}
            required={isRequired}
            placeholder="99,99"
          />

          <InputFile
            isNotVisible={progress !== 2}
            label="Imagem"
            message="Por favor insira uma Imagem"
            onChange={async () => {
              const file = document.querySelector("#input_file_id").files[0];
              const fileInBase64 = await toBase64(file);

              fileInBase64.startsWith("data:image/") &&
                setInputPicture(fileInBase64);
            }}
          />
          <Input
            defaultValue={ingredientToUpdate?.quantityPerUnit}
            isNotVisible={progress !== 3}
            label="Quantidade por unidade"
            pattern="^[0-9]*$"
            message="Por favor insira apenas números"
            onChange={(e) => setQuantityPerUnit(e.target.value)}
            required={isRequired}
            placeholder="99,99"
          />
          <Input
            defaultValue={ingredientToUpdate?.numberLot}
            isNotVisible={progress !== 3}
            label="Numero de Lote"
            message="Por favor insira um número de lote"
            onChange={(e) => setInputLotNumber(e.target.value)}
            required={isRequired}
            placeholder="99"
          />

          <Input
            defaultValue={ingredientToUpdate?.storageTemperature}
            isNotVisible={progress !== 3}
            label="Temperatura de armazenamento"
            message="Por favor insira uma temperatura"
            onChange={(e) => setInputStorageTemperature(e.target.value)}
            required={isRequired}
            placeholder="99,99"
          />

          <div className="flex w-1/2 justify-between items-center">
            <Button
              isDisabled={isDisabled}
              onClick={() => {
                progress === 0 ? setUpdate(true) : setProgress(progress - 1);
              }}
              content="Voltar"
            />
            <Button
              isLoading={isLoading}
              content={progress === 3 ? "Atualizar" : "Continuar"}
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </section>
  );
};
