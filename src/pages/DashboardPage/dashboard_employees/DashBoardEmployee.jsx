import React, { useState } from "react";
import Button from "../../components/button/Button";
import InputMask from "react-input-mask";
import { Dialog } from "@headlessui/react";
import { EmployeeListHead, EmployeeList } from "./employee_list/EmployeeList";
import PlusBtn from "../../images/plusbtn.svg";
import PlusPeople from "../../images/pluspeople.svg";

export default (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputEmail, setInputEmail] = useState(null);

  const inputValidation = (condicion, inputId) => {
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

      document.getElementById(inputId).style.borderColor = "red";
    } else {
      document.getElementById(inputId).style.borderColor =
        "var(--neultral-color)";
    }
  };

  return (
    <section
      className={
        props.grow % 2 === 0
          ? "relative w-[100%] h-[100vh] pl-48 transition-all ease-in-out duration-500 flex flex-col items-center"
          : "relative w-[100%] h-[100vh] pl-80 transition-all ease-in-out duration-500 flex flex-col items-center"
      }
    >
      <div className="w-[100%] flex flex-row gap-2 items-center justify-between pt-20">
        <h1 className="text-secondary-500 font-bold font-[Rubik] text-5xl ">
          Funcionários
        </h1>
        <span className="flex flex-row gap-6 pr-24">
          <img
            className="cursor-pointer h-16"
            onClick={() => setIsOpen(true)}
            src={PlusPeople}
            alt=""
          />
          <img className="cursor-pointer h-16" src={PlusBtn} alt="" />
        </span>
      </div>
      <EmployeeListHead classProperty={isOpen} />
      <span
        className={
          isOpen
            ? "invisible"
            : "w-fit overflow-y-auto overflow-x-hidden mb-12 font-[Rubik] font-thin text-sm"
        }
      >
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
        <EmployeeList />
      </span>
      <Dialog
        className="absolute top-[25%] left-[25%] right-[25%] aspect-[2/1] rounded-3xl bg-main-500 w-1/2 flex justify-around items-center shadow-md shadow-black"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel className="flex justify-center gap-4 items-center h-full flex-col">
          <Dialog.Title
            className="text-3xl font-[Rubik] text-bg_neutral-500"
            id="email_title_id"
          >
            Email
          </Dialog.Title>

          <InputMask
            className=" mr-0 h-8 w-full font-[Rubik] font-light text-2xl border-b-[1px] border-solid border-bg_neutral-500 rounded-none"
            placeholder="email@email.com"
            id="email_input_id"
            onBlur={(text) => {
              setInputEmail(text.target.value.toLowerCase());
              inputValidation(
                !text.target.value
                  .toLowerCase()
                  .match("^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$"),
                "email_input_id"
              );
            }}
          />
          <Dialog.Description
            id="email_div_id"
            className="font-[Rubik] text-xl text-bg_neutral-500 font-light"
          >
            O funcionario receberá o código de acesso neste email!
          </Dialog.Description>

          <div className="flex gap-4">
            <Button content="Voltar" onClick={() => setIsOpen(false)} />
            <Button content="Enviar" onClick={() => setIsOpen(false)} />
          </div>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
};
