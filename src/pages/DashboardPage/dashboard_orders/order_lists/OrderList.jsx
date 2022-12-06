import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Close from '../../../images/Close.svg'
import Edit from '../../../images/edit.svg'
import Delete from '../../../images/delete.svg'
import apiNova from '../../../../services/api-nova'
import { useEffect } from 'react'

export const OrderListHead = () => {
  return (
    <table className="mt-12">
      <thead>
        <tr className="flex flex-row">
          <td className="w-60 flex items-center justify-start p-5 text-2xl text-se border-b-2 border-solid border-gray-300">
            Cliente
          </td>
          <td className="w-60 flex items-center justify-start  p-5 text-2xl border-b-2 border-solid border-gray-300">
            Data do pedido
          </td>
          <td className="w-[28rem] flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            Endereço
          </td>
          <td className="w-44 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
            Itens
          </td>
          <td className="w-80 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
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
  itens,
  setUpdate
}) => {
  let statusOrder = ''
  const handleSubmitPatchOrder = (uuidOrder, status) =>
    apiNova
      .patch(`/order/${uuidOrder}/${status}`)
      .then(res => console.log(res.data))

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [itensList, setItensList] = useState([])

  useEffect(() => {
    apiNova
      .get('/order-item/get-order-itens/' + uuid)
      .then(res => (res.data ? setItensList(res.data) : console.warn(res.data)))
  }, [])

  return (
    <>
      <table>
        <tbody>
          <tr className="flex flex-row">
            <td className="w-60 flex items-center justify-start p-5 text-2xl text-se border-b-2 border-solid border-gray-300">
              {name}
            </td>
            <td className="w-60 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
              {orderDate}
            </td>
            <td className="w-[28rem] flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
              {address}
            </td>
            <td
              onClick={openModal}
              className="w-44 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300"
            >
              {itens}
            </td>
            <td className="w-80 flex items-center justify-start p-5 text-2xl border-b-2 border-solid border-gray-300">
              <select
                className="rounded-none border-0"
                id=""
                onChange={async e => {
                  statusOrder = e.target.value
                  console.log(e.target.value)
                  handleSubmitPatchOrder(uuid, statusOrder)
                }}
              >
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
      <div className="fixed h-[100vh] w-[100vw] -z-10">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-2 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="h-[75vh] items-center justify-start aspect-[4/3] transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all flex flex-col relative">
                    <button
                      className="absolute top-4 right-4"
                      onClick={closeModal}
                    >
                      <img className="w-[2vw] " src={Close} alt="" />
                    </button>
                    <Dialog.Title
                      as="h3"
                      className="text-5xl font-bold leading-6 text-secondary-500 flex justify-start items-start flex-col mt-4 mb-8"
                    >
                      Itens do Pedido
                    </Dialog.Title>
                    <table className="mt-12">
                      <thead>
                        <tr className="flex flex-row">
                          <td className="w-96 flex items-center justify-start p-5 text-2xl text-se border-b-2 border-solid border-gray-300">
                            Produto
                          </td>
                          <td className="w-96 flex items-center justify-start  p-5 text-2xl border-b-2 border-solid border-gray-300">
                            Quantidade
                          </td>
                        </tr>
                      </thead>
                    </table>
                    <div className="overflow-y-auto">
                      <table className="mt-5">
                        <thead>
                          {itensList.map(itens=>(
                            <tr className="flex flex-row">
                            <td className="w-96 flex items-center justify-start p-5 text-2xl text-se border-b-2 border-solid border-gray-300">
                              {itens.name}
                            </td>
                            <td className="w-96 flex items-center justify-start  p-5 text-2xl border-b-2 border-solid border-gray-300">
                            {itens.total}
                            </td>
                          </tr>
                          ))}
                          
                        </thead>
                      </table>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  )
}
