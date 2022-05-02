import React from "react";
import { EmployeList } from "./employe_list/EmployeList";
import PlusBtn from "../../images/plusbtn.svg";
import PlusPeople from "../../images/pluspeople.svg";

export default (props) => {
  return (
    <section
      className={
        props.grow % 2 === 0
          ? "w-[100%] h-[100vh] pl-48 transition-all ease-in-out duration-500 flex flex-col items-center"
          : "w-[100%] h-[100vh] pl-80 transition-all ease-in-out duration-500 flex flex-col items-center"
      }
    >
      <div className="w-[100%] flex flex-row gap-2 items-center justify-between pt-20">
        <h1 className="text-secondary-500 font-bold font-[Rubik] text-5xl ">
          Funcionários
        </h1>
        <span className="flex flex-row gap-4 pr-24">
          <img className="cursor-pointer h-16" src={PlusPeople} alt="" />
          <img className="cursor-pointer h-16" src={PlusBtn} alt="" />
        </span>
      </div>

      <EmployeList/>
    </section>
  );
};
