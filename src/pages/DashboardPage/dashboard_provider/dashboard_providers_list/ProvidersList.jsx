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
          <td className="w-48 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            Dias p/ Entrega
          </td>
        </tr>
      </thead>
    </table>
  )
}

export const ProviderList = ({ cnpj, name, email, phoneNumber,dayArrive }) => {
  return (
    <table>
      <tbody>
        <tr className="flex flex-row">
          <td className="w-80 flex items-center justify-start p-5 text-2xl text-se border-b-2 border-solid border-gray-300">
            Arlene McCoy
          </td>
          <td className="w-80 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            72.761.860/0001-59
          </td>
          <td className="w-80 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            email@email.com.br
          </td>
          <td className="w-60 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            (70) 4555-0127
          </td>
          <td className="w-48 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            10
          </td>
        </tr>
      </tbody>
    </table>
  )
}
