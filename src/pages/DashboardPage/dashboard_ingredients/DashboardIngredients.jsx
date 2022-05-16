import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Close from '../../images/Close.svg'
import Edit from '../../images/edit.svg'
import Delete from '../../images/delete.svg'
import { propTypes } from 'react-bootstrap/esm/Image'
import NoIngredients from '../../images/no_ingridient.png'
import { CardIngredients } from '../../components/Ingredient_modal_card/CardIngredients'
import { TextElement } from '../../components/ingredients_text_element/IngredientsTextElement'

export function DashboardIngredients({
  nameIngredient,
  valDate,
  buyDate,
  metric,
  brand,
  provider,
  storageType,
  stockAmount,
  image
}) {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <CardIngredients
        nameIngredient="Leite"
        valDate="11/12/2023"
        brand="Nestle"
        stockAmount="22"
        onClick={openModal}
      />

      <div className="absolute h-[100vh] w-[100vw]">
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
                      <div className="w-6/12 flex items-center justify-center">
                        <img
                          className="w-[40vw] rounded-xl"
                          src={image ? image : NoIngredients}
                          alt=""
                        />
                      </div>
                      <div className="w-auto flex flex-col items-start justify-center">
                        <Dialog.Title
                          as="h3"
                          className="text-4xl font-bold leading-6 text-slate-800 flex justify-start items-start flex-col mt-4 mb-8"
                        >
                          {nameIngredient}
                        </Dialog.Title>
                        <div className="flex flex-col gap-1">
                          <TextElement text="Marca:" content={brand} />
                          <TextElement
                            text="Quantidade em estoque:"
                            content={stockAmount}
                          />
                          <TextElement
                            text="Unidade de medida:"
                            content={metric}
                          />
                          <TextElement
                            text="Armazenamento:"
                            content={storageType}
                          />
                          <TextElement
                            text="Data de compra:"
                            content={buyDate}
                          />
                          <TextElement
                            text="Data de Validade:"
                            content={valDate}
                          />
                          <TextElement text="Fornecedor:" content={provider} />

                          <div className="flex flex-row mt-4">
                            <button className="w-11 h-11 mr-4">
                              <img src={Delete} alt="" />
                            </button>
                            <button className="w-11 h-11 ">
                              <img src={Edit} alt="" />
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
