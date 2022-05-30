import PlusBtn from "../../../images/plusbtn.svg";
import UploadBtn from "../../../images/Upload.svg";
import { Dialog } from "@headlessui/react";
import DashboardIngredientsUpdateForm from "../dashboard_ingredient_update_form/DashboardIngredientsUpdateForm";
import { DashboardIngredients } from "../../../components/Ingredient_modal_card/IngredientsCardDash";
import { useState, useEffect } from "react";
import api from "../../../../services/api";
import InputFile from "../../../components/input_file/InputFile";
import Button from "../../../components/button/Button";
import axios from "axios";

export default ({ grow, setPage }) => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [update, setUpdate] = useState(true);
  const [updateUuid, setUpdateUuid] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputEmail, setInputEmail] = useState(null);
  const config = {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("data")).token,
    },
  };

  useEffect(() => {
    api
      .get("/ingredients", config)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [refresh]);
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handleClick = async (event) => {
    event.preventDefault();
    setIsDisabled(true);
    setIsLoading(true);
    const config = {
      Authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("data")).token,
    };
    const options = {
      method: "POST",
      url: process.env.REACT_APP_API_KEY + "/ingredients/expired",
    };

    await axios
      .request(options)
      .then((res) => {
        setIsLoading(false);
        setIsDisabled(false);
        console.log(res.status);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsDisabled(false);
        console.error(error);
      });
  };
  switch (update) {
    case true:
      return (
        <section
          className={
            grow % 2 == 0
              ? "relative w-[100%] h-[100vh] pl-48 transition-all ease-in-out duration-500 flex flex-col items-center"
              : "relative w-[100%] h-[100vh] pl-80 transition-all ease-in-out duration-500 flex flex-col items-center"
          }
        >
          <div className="w-[100%] flex flex-row gap-2 items-center justify-between pt-20">
            <h1 className="text-secondary-500 font-bold font-[Rubik] text-5xl ">
              Ingredientes
            </h1>
            <div className="flex gap-2 pr-10">
              <img
                className="cursor-pointer h-16"
                src={PlusBtn}
                onClick={() => setPage("form")}
                alt=""
              />{" "}
              <img
                className="cursor-pointer h-16"
                src={UploadBtn}
                onClick={() => setIsOpen(true)}
                alt=""
              />{" "}
            </div>
          </div>

          <Dialog
            className="absolute top-[25%] left-[25%] right-[25%] aspect-[2/1] rounded-3xl bg-main-500 w-1/2 flex justify-around items-center shadow-md shadow-black"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Dialog.Panel className="flex justify-center gap-4 items-center h-full flex-col">
              <InputFile
                label="Arquivo .txt"
                message="Por favor insira um arquivo"
                onChange={async () => {
                  const file =
                    document.querySelector("#input_file_id").files[0];
                  const fileInBase64 = await toBase64(file);
                  //setInputPicture(fileInBase64)
                }}
              />
              <Dialog.Description
                id="email_div_id"
                className="font-[Rubik] text-xl text-bg_neutral-500 font-light"
              >
                Os ingredientes serão cadastrados
              </Dialog.Description>

              <div className="flex gap-4 z-10">
                <Button
                  content="Voltar"
                  type="button"
                  isDisabled={isDisabled}
                  onClick={() => setIsOpen(false)}
                />
                <Button
                  content="Enviar"
                  type="button"
                  onClick={handleClick}
                  isLoading={isLoading}
                />
              </div>
            </Dialog.Panel>
          </Dialog>

          <span
            className={
              isOpen
                ? "invisible"
                : "w-full flex flex-wrap flex-row overflow-y-auto overflow-x-hidden mt-5 mb-12 font-[Rubik] font-thin text-sm"
            }
          >
            {data.map(
              ({
                numberUnits,
                buyValue,
                dateInsert,
                dateUpdate,
                expirationDate,
                isRefigerated,
                name,
                provideCode,
                quantity,
                quantityUsed,
                storageTemperature,
                unitMeasurement,
                uuid,
                viewInReports,
                picture,
                brand,
                total,
              }) => (
                <DashboardIngredients
                  uuid={uuid}
                  key={uuid}
                  nameIngredient={name}
                  valDate={expirationDate}
                  buyDate={dateUpdate}
                  metric={unitMeasurement}
                  brand={brand}
                  provider={provideCode}
                  storageType={
                    isRefigerated ? "refrigerado" : "não refrigerado"
                  }
                  stockAmount={total}
                  image={picture}
                  refresh={refresh}
                  setRefresh={setRefresh}
                  setUpdate={setUpdate}
                  setUpdateUuid={setUpdateUuid}
                />
              )
            )}
          </span>
        </section>
      );
    case false:
      return (
        <DashboardIngredientsUpdateForm
          refresh={refresh}
          setRefresh={setRefresh}
          grow={grow}
          setUpdate={setUpdate}
          uuid={updateUuid}
        />
      );

    default:
      break;
  }
};
