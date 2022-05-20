import { useState } from "react"
import Button from "../../components/button/Button"
import PlusBtn from "../../images/plusbtn.svg";

export default ({ grow }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <section
      className={
        grow % 2 === 0
          ? 'relative w-[100%] h-[100vh] pl-48 transition-all ease-in-out duration-500 flex flex-col items-center'
          : 'relative w-[100%] h-[100vh] pl-80 transition-all ease-in-out duration-500 flex flex-col items-center'
      }
    >
      <div className="w-[100%] flex flex-row gap-2 items-center justify-between pt-20 pr-10">
        <h1 className="text-secondary-500 font-bold font-[Rubik] text-5xl ">
          Fornecedores
        </h1>
        <div className="flex gap-2">
        <img
            className="cursor-pointer h-16"
            src={PlusBtn}
            alt=""
          />
        </div>
      </div>

      <span className="w-fit overflow-y-auto overflow-x-hidden mb-12 font-[Rubik] font-thin text-sm"></span>
    </section>
  )
}
