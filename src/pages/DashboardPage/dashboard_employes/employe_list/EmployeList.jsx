import React from "react";

export const EmployeListHead = (props) => {
  return (
    <thead className="mt-12">
      <tr >
        <td className="pr-20 p-3 text-2xl text-se border-b-2 border-solid border-gray-300">Foto</td>
        <td className="pr-80 p-3 text-2xl border-b-2 border-solid border-gray-300">Nome</td>
        <td className="pr-80 p-3 text-2xl border-b-2 border-solid border-gray-300">Email</td>
        <td className="pr-60 p-3 text-2xl border-b-2 border-solid border-gray-300">Telefone</td>
      </tr>
    </thead>
  );
};
export const EmployeList = (props) => {
  return (
    <table className="mt-12">
      <tr >
        <td className="pr-20 p-3 text-2xl text-se border-b-2 border-solid border-gray-300">Foto</td>
        <td className="pr-80 p-3 text-2xl border-b-2 border-solid border-gray-300">Nome</td>
        <td className="pr-80 p-3 text-2xl border-b-2 border-solid border-gray-300">Email</td>
        <td className="pr-60 p-3 text-2xl border-b-2 border-solid border-gray-300">Telefone</td>
      </tr>
    </table>
  );
};
