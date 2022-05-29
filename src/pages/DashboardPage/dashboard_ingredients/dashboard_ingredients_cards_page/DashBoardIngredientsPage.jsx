import PlusBtn from '../../../images/plusbtn.svg'

import { DashboardIngredients } from '../../../components/Ingredient_modal_card/IngredientsCardDash'
import { useState, useEffect } from 'react'
import api from '../../../../services/api'

export default ({ grow, setPage }) => {
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(true)

  const config = {
    headers: {
      Authorization:
        'Bearer ' + JSON.parse(sessionStorage.getItem('data')).token
    }
  }

  useEffect(() => {
    api
      .get('/ingredients', config)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [refresh])

  return (
    <section
      className={
        grow % 2 == 0
          ? 'relative w-[100%] h-[100vh] pl-48 transition-all ease-in-out duration-500 flex flex-col items-center'
          : 'relative w-[100%] h-[100vh] pl-80 transition-all ease-in-out duration-500 flex flex-col items-center'
      }
    >
      <div className="w-[100%] flex flex-row gap-2 items-center justify-between pt-20">
        <h1 className="text-secondary-500 font-bold font-[Rubik] text-5xl ">
          Ingredientes
        </h1>
        <div className="flex gap-2 pr-10">
          <img
            className="cursor-pointer h-16"
            src={PlusBtn}
            onClick={() => setPage(false)}
            alt=""
          />
        </div>
      </div>

      <span className="w-full flex flex-wrap flex-row overflow-y-auto overflow-x-hidden mt-5 mb-12 font-[Rubik] font-thin text-sm">
        {data.map(
          ({
            numberUnits,
            buyValue,
            dateInsert,
            dateUpdate,
            expirationDate,
            isRefigerated,
            name,
            provideCode,
            quantity,
            quantityUsed,
            storageTemperature,
            unitMeasurement,
            uuid,
            viewInReports,
            picture,
            brand
          }) => (
            <DashboardIngredients
              uuid={uuid}
              key={uuid}
              nameIngredient={name}
              valDate={expirationDate}
              buyDate={dateUpdate}
              metric={unitMeasurement}
              brand={brand}
              provider={provideCode}
              storageType={isRefigerated ? 'refrigerado' : 'não refrigerado'}
              stockAmount={numberUnits}
              image={picture}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          )
        )}
      </span>
    </section>
  )
}
