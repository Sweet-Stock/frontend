import { useEffect, useState } from 'react'
import api from '../../../../services/api'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import InputFile from '../../../components/input_file/InputFile'
import { IngredientsListBody } from '../../../components/product_select/ProductSelect'
import ProgressBar from '../../../components/progress_bar/ProgressBar'
import Select from '../../../components/select/Select'

export default ({ grow, setPage }) => {
  const [isRequired, setIsRequired] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const [inputName, setInputName] = useState(null)
  const [inputMadeDate, setInputMadeDate] = useState(null)
  const [inputStorage, setInputStorage] = useState(null)
  const [inputStorageType, setInputStorageType] = useState(null)
  const [inputMetric, setInputMetric] = useState(null)
  const [inputValue, setInputValue] = useState(null)
  const [inputPicture, setInputPicture] = useState(null)

  const modal = {
    name: inputName,
    saleValue: inputValue,
    productedBy: inputMadeDate,
    isRefigerated: inputStorageType,
    total: inputStorage,
    unitMeasurement: inputMetric,
    picture: inputPicture
  }

  const [progress, setProgress] = useState(0)

  const isRefrigerated = [
    {
      key: true,
      value: 'Refrigerado'
    },
    {
      key: false,
      value: 'Não refrigerado'
    }
  ]
  const unitMetrics = [
    {
      key: 'LITRO',
      value: 'Litros (L)'
    },
    {
      key: 'MILILITRO',
      value: 'Mililitros (ML)'
    },
    {
      key: 'QUILO',
      value: 'Quilos (KG)'
    },
    {
      key: 'MILIGRAMA',
      value: 'Miligramas (MG)'
    },
    {
      key: 'UNIDADE',
      value: 'Unidades (UN)'
    },
    {
      key: 'GRAMA',
      value: 'Gramas (GM)'
    }
  ]
  const config = {
    headers: {
      Authorization:
        'Bearer ' + JSON.parse(sessionStorage.getItem('data'))?.token
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    switch (progress) {
      case 0:
        if (false) {
          setIsRequired(true)
        } else {
          setIsRequired(false)
          setProgress(progress + 1)
        }
        break
      case 1:
        if (false) {
          setIsRequired(true)
        } else {
          setIsRequired(false)
          setProgress(progress + 1)
        }
        break
      case 2:
        if (false) {
          setIsRequired(true)
        } else {
          setIsRequired(false)
          sendProduct()
        }
        break

      default:
        break
    }
  }

  const sendProduct = async () => {
    setIsDisabled(true)
    setIsLoading(true)
    await api
      .post('/products', modal, config)
      .then(() => setPage(true))
      .catch(err => console.error(err))
    setIsDisabled(false)
    setIsLoading(false)
  }

  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })

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
          Cadastro Produto
        </h1>
        <div className="flex gap-2"></div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <form className="h-[80vh] aspect-[4/3] rounded-2xl bg-main-500 flex justify-center items-center flex-col gap-2">
          <span className="w-2/5">
            <ProgressBar progressBar="medium" img={progress} />
          </span>
          <Input
            isNotVisible={progress !== 0}
            label="Nome"
            message="Por favor insira um nome"
            onChange={e => setInputName(e.target.value)}
            required={isRequired}
          />

          <Select
            isNotVisible={progress !== 0}
            label="Armazenamento"
            onChange={e => setInputStorageType(e.target.value)}
            required={isRequired}
            options={isRefrigerated}
          />
          <Select
            isNotVisible={progress !== 0}
            label="Unidade de medida"
            onChange={e => setInputMetric(e.target.value)}
            required={isRequired}
            options={unitMetrics}
          />
          <Input
            isNotVisible={progress !== 1}
            label="Data de fabricação"
            message="Por favor insira uma data"
            onChange={e => setInputMadeDate(e.target.value)}
            required={isRequired}
            type="date"
          />
          <Input
            isNotVisible={progress !== 1}
            label="Quantidade em estoque"
            pattern="^[0-9]*$"
            message="Por favor insira apenas números"
            onChange={e => setInputStorage(e.target.value)}
            required={isRequired}
            placeholder="99999"
          />
          <InputFile
            isNotVisible={progress !== 1}
            label="Imagem"
            message="Por favor insira uma Imagem"
            onChange={async () => {
              const file = document.querySelector('#input_file_id').files[0]
              const fileInBase64 = await toBase64(file)

              fileInBase64.startsWith('data:image/') &&
                setInputPicture(fileInBase64)
            }}
          />
          <Input
            isNotVisible={progress !== 1}
            label="Valor"
            pattern="^-?(?:0|[1-9][0-9]*)\.?[0-9]+$"
            message="Por favor insira apenas números"
            onChange={e => setInputValue(e.target.value)}
            required={isRequired}
            placeholder="99,99"
          />
          <IngredientsListBody isVisible={progress === 2} />
          <div className="flex w-1/2 justify-between items-center">
            <Button
              isDisabled={isDisabled}
              onClick={() => {
                progress === 0 ? setPage(true) : setProgress(progress - 1)
              }}
              content="Voltar"
            />
            <Button
              isLoading={isLoading}
              content={progress === 2 ? 'Cadastrar' : 'Continuar'}
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}
