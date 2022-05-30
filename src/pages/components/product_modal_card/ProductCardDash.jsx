import { Dialog, Transition } from '@headlessui/react'
import Input from '../../components/input/Input'
import { Fragment, useState } from 'react'
import Close from '../../images/Close.svg'
import MarketKart from '../../images/marketKart.svg'
import OkBtn from '../../images/okbtn.svg'
import Delete from '../../images/delete.svg'
import NoIngredients from '../../images/no_ingridient.png'
import { CardProducts } from './CardProducts'
import { TextElement } from '../ingredients_text_element/IngredientsTextElement'
import api from '../../../services/api'

export function DashboardProductsModal({
  uuid,
  name,
  saleValue,
  expirationDate,
  dateInsert,
  productedBy,
  dateUpdate,
  isRefigerated,
  total,
  unitMeasurement,
  category,
  picture,
  refresh,
  setRefresh,
  setUpdate
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMarketOpen, setIsMarketOpen] = useState(false)
  const [amountUsed, setAmountUsed] = useState()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const config = {
    headers: {
      Authorization:
        'Bearer ' + JSON.parse(sessionStorage.getItem('data')).token
    }
  }

  const handleDeleteProduct = async () => {
    await api
      .delete('/products/' + uuid, config)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
    setIsOpen(false)
    setRefresh(!refresh)
  }
  const handleAmountUsed = async () => {
    await api
      .put(`/products/${amountUsed}/${uuid}`, config)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
    setIsOpen(false)
    setRefresh(!refresh)
  }

  return (
    <>
      <CardProducts
        nameIngredient={name}
        madeDate={dateInsert}
        value={saleValue}
        stockAmount={total}
        image={picture}
        onClick={openModal}
      />

      <div className="fixed h-[100vh] w-[100vw]">
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
                  <Dialog.Panel className="h-[75vh] items-center justify-around aspect-[4/3] transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all flex flex-col relative">
                    <button
                      className="absolute top-4 right-4"
                      onClick={closeModal}
                    >
                      <img className="w-[2vw] " src={Close} alt="" />
                    </button>
                    <div className="flex flex-row gap-16 ">
                      <div className="w-6/12 aspect-square flex items-center justify-center">
                        <img
                          className="h-full w-auto rounded-xl"
                          src={picture ? picture : NoIngredients}
                          alt=""
                        />
                      </div>
                      <div className="w-auto flex flex-col items-start justify-center">
                        <Dialog.Title
                          as="h3"
                          className="text-4xl font-bold leading-6 text-slate-800 flex justify-start items-start flex-col mt-4 mb-8"
                        >
                          {name}
                        </Dialog.Title>
                        <div className="flex flex-col gap-1">
                          <TextElement
                            text="Quantidade em estoque: "
                            content={total}
                          />
                          <TextElement
                            text="Armazenamento: "
                            content={
                              isRefigerated ? 'Refrigerado' : 'Não Refrigerado'
                            }
                          />
                          <TextElement
                            text="Data de fabricação: "
                            content={productedBy}
                          />
                          <TextElement
                            text="Valor: "
                            content={'R$' + saleValue?.toFixed(2)}
                          />
                          <div className="flex flex-row my-4">
                            <button
                              className="w-11 h-11 mr-4"
                              onClick={handleDeleteProduct}
                            >
                              <img src={Delete} alt="" />
                            </button>
                            <button
                              className="w-11 h-11 "
                              onClick={() => setIsMarketOpen(!isMarketOpen)}
                            >
                              <img src={MarketKart} alt="" />
                            </button>
                          </div>
                          <div
                            className={
                              isMarketOpen
                                ? "'visible flex items-center justify-between'"
                                : 'invisible'
                            }
                          >
                            <input
                              className="bg-zinc-50 border-b-2 text-main-500 border-solid border-main-500 focus:invalid:text-red-500 invalid:border-red-500 invalid:animate-shake"
                              placeholder="Quantidade usada"
                              type="number"
                              max={`${total}`}
                              min="0"
                              onChange={e => setAmountUsed(e.target.value)}
                            />
                            <button
                              className="w-11 h-11 mr-4"
                              onClick={() =>
                                amountUsed !== null
                                  ? handleAmountUsed()
                                  : alert('por favor insira uma quantidade')
                              }
                            >
                              <img src={OkBtn} alt="" />
                            </button>
                          </div>
                        </div>
                      </div>
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
