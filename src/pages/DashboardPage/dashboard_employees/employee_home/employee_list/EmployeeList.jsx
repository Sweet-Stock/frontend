import React, { useState, useEffect } from 'react'
import IconTeste from '../../../../images/icon_twiter.svg'

export const EmployeeListHead = ({ classProperty }) => {
  return (
    <table className={classProperty ? 'invisible' : 'mt-12'}>
      <thead>
        <tr className="flex flex-row">
          <td className="w-32 flex items-center justify-center p-3 text-2xl text-se border-b-2 border-solid border-gray-300">
            Foto
          </td>
          <td className="w-80 flex items-center justify-start  p-3 text-2xl border-b-2 border-solid border-gray-300">
            Nome
          </td>
          <td className="w-80 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            Email
          </td>
          <td className="w-80 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            Telefone
          </td>
        </tr>
      </thead>
    </table>
  )
}

export const EmployeeList = props => {
  return (
    <table>
      <tbody>
        <tr className="flex flex-row">
          <td className="w-32 flex items-center justify-center p-3 text-2xl text-se border-b-2 border-solid border-gray-300">
            <img src={IconTeste} alt="" className="h-fit rounded-full" />
          </td>
          <td className="w-80 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            Cleber
          </td>
          <td className="w-80 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            cleber@teste.teste
          </td>
          <td className="w-80 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            (11) 99453-8251
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export const EmployeeListHeadSign = ({
  setIsSelect,
  isSelect,
  setIsHeadSelect,
  isHeadSelect
}) => {
  return (
    <table className="mt-12">
      <thead>
        <tr className="flex flex-row">
          <td className="w-32 flex items-center justify-center p-3 text-2xl text-se border-b-2 border-solid border-gray-300">
            Foto
          </td>
          <td className="w-80 flex items-center justify-start  p-3 text-2xl border-b-2 border-solid border-gray-300">
            Nome
          </td>
          <td className="w-80 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            Email
          </td>
          <td className="w-80 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            Telefone
          </td>
          <td className="w-32 flex items-center justify-center p-3 text-2xl border-b-2 border-solid border-gray-300">
            <input
              type="checkbox"
              checked={isHeadSelect}
              onChange={() => {
                setIsHeadSelect(!isSelect)
                setIsSelect(!isSelect)
              }}
            />
          </td>
        </tr>
      </thead>
    </table>
  )
}

export const EmployeeListSign = ({
  isSelect,
  setIsHeadSelect,
  userUUIDs
}) => {
  const [isChecked, setIsChecked] = useState(isSelect)

  useEffect(() =>  setIsChecked(isSelect), [isSelect])



  return (
    <table>
      <tbody>
        <tr className="flex flex-row">
          <td className="w-32 flex items-center justify-center p-3 text-2xl text-se border-b-2 border-solid border-gray-300">
            <img src={IconTeste} alt="" className="h-fit rounded-full" />
          </td>
          <td className="w-80 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            Cléber
          </td>
          <td className="w-80 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            cleber@teste.teste
          </td>
          <td className="w-80 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            (11) 99453-8251
          </td>
          <td className="w-32 flex items-center justify-center p-3 text-2xl border-b-2 border-solid border-gray-300">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => {
                setIsChecked(!isChecked)
                isSelect && setIsHeadSelect(false)
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
