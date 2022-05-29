import { useState } from 'react'
import api from '../../../../../services/api'
import Button from '../../../../components/button/Button'
import Input from '../../../../components/input/Input'
import PlusBtn from '../../../../images/plusbtn.svg'
import {
  ProviderList,
  ProviderListHead
} from '../../dashboard_providers_list/ProvidersList'

export default ({ grow, setPage }) => {
  const [isRequired, setIsRequired] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [inputName, setInputName] = useState(null)
  const [inputCnpj, setInputCnpj] = useState(null)
  const [inputEmail, setInputEmail] = useState(null)
  const [inputTelefone, setInputTelefone] = useState(null)
  const [inputArrive, setInputArrive] = useState(null)

  const modal = {
    name: inputName,
    cnpj: inputCnpj,
    email: inputEmail,
    telephone: inputTelefone,
    averageTimeForDeliveryInDays: inputArrive
  }

  const config = {
    headers: {
      Authorization:
        'Bearer ' + JSON.parse(sessionStorage.getItem('data')).token
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    setIsRequired(true)
    setIsLoading(true)
    setIsDisabled(true)

    await api.post('/providers', modal, config)

    setIsLoading(false)
    setIsDisabled(false)
    setPage(true)
  }

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
          Cadastro Fornecedor
        </h1>
        <div className="flex gap-2"></div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="h-[75vh] aspect-[4/3] rounded-2xl bg-main-500 flex justify-center items-center flex-col gap-1"
        >
          <Input
            label="Nome"
            message="Por favor insira um nome"
            onChange={e => setInputName(e.target.value)}
            required={isRequired}
          />
          <Input
            label="CNPJ"
            mask="99.999.999/9999-99"
            pattern="(^[0-9]{2,3}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}$)"
            message="Por favor insira um CNPJ válido"
            onChange={e => setInputCnpj(e.target.value)}
            required={isRequired}
            placeholder="00.000.000/0000-00"
          />
          <Input
            label="Email"
            pattern="^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$"
            message="Por favor insira um email válido"
            onChange={e => setInputEmail(e.target.value)}
            required={isRequired}
            placeholder="email@email.com"
          />
          <Input
            label="Telefone"
            mask="99 99999-9999"
            pattern=""
            message="Por favor insira um número de telefone válido"
            onChange={e => setInputTelefone(e.target.value)}
            required={isRequired}
            placeholder="00 00000-0000"
          />
          <Input
            label="Dias p/ Entrega"
            pattern="[0-9]{1,2}"
            message="Por favor insira um número válido"
            onChange={e => setInputArrive(e.target.value)}
            required={isRequired}
            placeholder="99"
          />
          <div className="flex w-1/2 justify-between items-center">
            <Button
              isDisabled={isDisabled}
              onClick={() => setPage(true)}
              content="Voltar"
            />
            <Button isLoading={isLoading} type="submit" content="Cadastrar" />
          </div>
        </form>
      </div>
    </section>
  )
}
