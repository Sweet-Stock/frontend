import NoIngredients from '../../images/no_ingridient.png'
import { TextElement } from '../ingredients_text_element/IngredientsTextElement'

export function CardProducts({
  nameIngredient,
  madeDate,
  value,
  stockAmount,
  image,
  onClick
}) {
  return (
    <div
      onClick={onClick}
      className="h-96 aspect-[9/10] z-10 bg-white m-7 rounded-lg border-y-secondary-500 border-gray-500 flex flex-col p-4 items-center justify-evenly"
    >
      <div className=" w-3/6 mz-auto flex aspect-square items-center justify-center">
        <img className="h-full" src={image ? image : NoIngredients} alt="" />
      </div>
      <div className="  w-full px-5 gap-3 items-start content-start flex  justify-start flex-col ">
        <div className="text-xl font-bold leading-6 text-slate-800 flex justify-start items-start flex-col  ">
          {nameIngredient}
        </div>
        <div className="flex gap-1 flex-col">
          <TextElement text="Quantidade em estoque:" content={stockAmount} />
          <TextElement text="Data de fabricação:" content={madeDate} />
          <TextElement text="Valor:" content={value} />
        </div>
      </div>
    </div>
  )
}
