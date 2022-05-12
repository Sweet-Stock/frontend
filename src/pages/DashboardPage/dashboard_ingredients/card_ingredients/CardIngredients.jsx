import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export function CardIngredients({
  nomeIng,
  dataVal,
  dataCom,
  unidadeM,
  marca,
  fornecedor,
  armazenamento,
  qtdEstoque,
  img,
}) {
  return (
    <div className="h-[60vh] w-[22vw] bg-white m-7 rounded-lg border-y-secondary-500 border-gray-500 flex flex-col p-4 items-center">
      <div className=" h-[30vh] items-center w-[17vw] justify-center mt-5">
        <img
          className="h-[30vh] w-[17vw] "
          src={
            img
              ? img
              : "data:image/png;base64,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"
          }
          alt=""
        />
      </div>
      <div className="  h-[20vh] w-[17vw] items-start content-start flex  justify-start flex-col ">
        <div
          as="h3"
          className="text-3xl font-bold leading-6 text-slate-800 flex justify-start items-start flex-col mt-4 mb-8 "
        >
          Leite Integral
        </div>
        <p className="text-lg text-slate-800 mb-3 font-medium">
          <b className="text-lg">Marca:</b> {marca}
        </p>
        <p className="text-lg text-slate-800 mb-3 font-medium">
          <b className="text-lg">Quantidade em estoque:</b> {qtdEstoque}
        </p>
        <p className="text-lg text-slate-800 mb-3 font-medium">
          <b className="text-lg">Data de Validade:</b> {dataVal}
        </p>{" "}
      </div>
    </div>
  );
}
