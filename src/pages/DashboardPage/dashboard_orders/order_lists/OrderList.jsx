import { useState } from 'react'
import apiNova from '../../../../services/api-nova'
import api from '../../../../services/api-nova'

export const OrderListHead = () => {
  return (
    <table className="mt-12">
      <thead>
        <tr className="flex flex-row">
          <td className="w-80 flex items-center justify-start p-5 text-2xl text-se border-b-2 border-solid border-gray-300">
            Cliente
          </td>
          <td className="w-80 flex items-center justify-start  p-5 text-2xl border-b-2 border-solid border-gray-300">
            Data do pedido
          </td>
          <td className="w-80 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            Endereço
          </td>
          <td className="w-44 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            Itens
          </td>
          <td className="w-60 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            Status
          </td>
        </tr>
      </thead>
    </table>
  )
}

export const OrderList = ({
  uuid,
  name,
  orderDate,
  address,
  status,
  itens
}) => {
  const [statusOrder, setStatusOrder] = useState('')
  const handleSubmitPatchOrder = uuidOrder => {
    apiNova.patch(`${uuidOrder}/${statusOrder}`)
  }
  return (
    <table>
      <tbody>
        <tr className="flex flex-row">
          <td className="w-80 flex items-center justify-start p-5 text-2xl text-se border-b-2 border-solid border-gray-300">
            {name}
          </td>
          <td className="w-80 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            {orderDate}
          </td>
          <td className="w-80 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            {address}
          </td>
          <td className="w-44 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            {itens}
          </td>
          <td className="w-80 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            <select className="rounded-none border-0" id="">
              <option className="bg-main-500" selected value={null} disabled>
                {status}
              </option>
              <option value="Pronto para preparação">
                Pronto para preparação
              </option>
              <option value="Em andamento">Em andamento</option>
              <option value="A caminho">A caminho</option>
              <option value="Finalizado">Finalizado</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
