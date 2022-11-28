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
          <td className="w-60 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            Status
          </td>
          <td className="w-52 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            Itens
          </td>
        </tr>
      </thead>
    </table>
  )
}

export const OrderList = ({
  name,
  orderDate,
  address,
  status,
  itens
}) => {
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
          <td className="w-60 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            {status}
          </td>
          <td className="w-48 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            {itens}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
