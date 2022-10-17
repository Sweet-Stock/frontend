import React, { useState, useEffect } from 'react'
import IconMock from '../../../../images/profilephoto.jpg'

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
          <td className="w-96 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            Email
          </td>
          <td className="w-52 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            Telefone
          </td>
        </tr>
      </thead>
    </table>
  )
}

export const EmployeeList = ({ icon, name, email, phoneNumber }) => {
  return (
    <table>
      <tbody>
        <tr className="flex flex-row">
          <td className="w-32 flex items-center justify-center p-3 text-2xl text-se border-b-2 border-solid border-gray-300">
            <img
              src={icon ? icon : IconMock}
              alt=""
              className="h-12 rounded-full"
            />
          </td>
          <td className="w-80 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            {name}
          </td>
          <td className="w-96 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            {email}
          </td>
          <td className="w-52 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            {phoneNumber}
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
          <td className="w-96 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            Email
          </td>
          <td className="w-52 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
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
  icon,
  name,
  email,
  phoneNumber,
  isSelect,
  isHeadSelect,
  setIsHeadSelect,
  userUUIDs,
  uuid
}) => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(
    () => (isChecked ? handleAddUuid(uuid) : handleRemoveUuid(uuid)),
    [isChecked]
  )

  const handleAddUuid = uuid => userUUIDs.push(uuid)

  const handleRemoveUuid = uuid =>
    userUUIDs.forEach(
      (element, index) => element == uuid && delete userUUIDs[index]
    )

  useEffect(() => setIsChecked(isHeadSelect), [isHeadSelect])

  return (
    <table>
      <tbody>
        <tr className="flex flex-row">
          <td className="w-32 flex items-center justify-center p-3 text-2xl text-se border-b-2 border-solid border-gray-300">
            <img
              src={icon ? icon : IconMock}
              alt=""
              className="h-12 rounded-full"
            />
          </td>
          <td className="w-80 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            {name}
          </td>
          <td className="w-96 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            {email}
          </td>
          <td className="w-52 flex items-center justify-start p-3 text-2xl border-b-2 border-solid border-gray-300">
            {phoneNumber}
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
