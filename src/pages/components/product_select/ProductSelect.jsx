import { useState, useEffect } from 'react'
import api from '../../../services/api'

export const IngredientsList = ({ name, amount, uuid }) => {
  const [inputValue, setInputValue] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const config = {
    headers: {
      Authorization:
        'Bearer ' + JSON.parse(sessionStorage.getItem('data')).token
    }
  }

  const handleRemoveIngredient = async uuid => {
    if (inputValue.length > 0) {
      await api.delete('/products/confection-queue/' + uuid, config)
    }
  }
  const handleAddIngredient = async (uuid, amountUsed) => {
    if (amountUsed <= amount) {
      let item = {
        uuidIngredient: uuid,
        amount: amountUsed
      }
      console.log(item)
      await api
        .post('/products/confection-queue', item, config)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    } else {
      alert('Insira uma quantidade valida')
    }
  }

  useEffect(() => {
    isChecked
      ? handleAddIngredient(uuid, inputValue)
      : handleRemoveIngredient(uuid)
  }, [isChecked])

  return (
    <div className="border-solid border-[3px] flex items-center justify-between my-4 border-secondary-500 h-[9vh] aspect-[6/1] rounded-2xl px-6">
      <div className="flex items-center">
        <input
          type="checkbox"
          disabled={inputValue.length === 0 ? true : false}
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked)
          }}
          className="aspect-square w-4"
        />
        <span className="ml-4">
          <h1 className="text-lg font-normal">{name}</h1>
          <span className="flex text-lg font-normal">
            <h2>Quantidade: </h2>
            <label>{amount}</label>
          </span>
        </span>
      </div>
      <div className="flex flex-col">
        <label className="text-lg font-normal">Quantidade Utilizada</label>
        <input
          type="number"
          max={`${amount}`}
          min="0"
          className="bg-bg_neutral-500 border-b-2 text-main-500 border-solid border-main-500 focus:invalid:text-red-500 invalid:border-red-500 invalid:animate-shake"
          onChange={e => setInputValue(e.target.value)}
        />
      </div>
    </div>
  )
}
export const IngredientsListBody = ({ isVisible, name, amount }) => {
  const [ingredients, setIngredients] = useState([])

  const config = {
    headers: {
      Authorization:
        'Bearer ' + JSON.parse(sessionStorage.getItem('data')).token
    }
  }

  useEffect(() => {
    api
      .get('/ingredients', config)
      .then(res => setIngredients(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      <div className="h-[50vh] aspect-[4/3] bg-bg_neutral-500 relative flex items-center justify-evenly rounded-2xl flex-col mb-5">
        <h1 className="text-2xl font-[Rubik] font-semibold text-secondary-500 m-14">
          Selecione os Ingredientes Utilizados
        </h1>
        <span className="overflow-y-auto overflow-x-hidden mb-10 font-[Rubik] font-thin text-sm pr-5">
          {ingredients.map(({ uuid, name, total }) => (
            <IngredientsList uuid={uuid} name={name} amount={total} />
          ))}
        </span>
      </div>
    </div>
  )
}
