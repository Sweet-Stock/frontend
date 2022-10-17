export const ProviderListHead = ({ classProperty }) => {
  return (
    <table className={classProperty ? 'invisible' : 'mt-12'}>
      <thead>
        <tr className="flex flex-row">
          <td className="w-80 flex items-center justify-start p-5 text-2xl text-se border-b-2 border-solid border-gray-300">
            Nome
          </td>
          <td className="w-80 flex items-center justify-start  p-5 text-2xl border-b-2 border-solid border-gray-300">
            CNPJ
          </td>
          <td className="w-80 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            Email
          </td>
          <td className="w-60 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            Telefone
          </td>
          <td className="w-52 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            Dias p/ Entrega
          </td>
        </tr>
      </thead>
    </table>
  )
}

export const ProviderList = ({
  name,
  cnpj,
  email,
  telephone,
  averageTimeForDeliveryInDays
}) => {
  return (
    <table>
      <tbody>
        <tr className="flex flex-row">
          <td className="w-80 flex items-center justify-start p-5 text-2xl text-se border-b-2 border-solid border-gray-300">
            {name}
          </td>
          <td className="w-80 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            {cnpj}
          </td>
          <td className="w-80 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            {email}
          </td>
          <td className="w-60 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            {telephone}
          </td>
          <td className="w-48 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            {averageTimeForDeliveryInDays}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
