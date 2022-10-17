import { useEffect, useState } from 'react'
import api from '../../../../../services/api'
import Button from '../../../../components/button/Button'
import PlusBtn from '../../../../images/plusbtn.svg'
import {
  ProviderList,
  ProviderListHead
} from '../../dashboard_providers_list/ProvidersList'

export default ({ grow, setPage }) => {
  const [data, setData] = useState([])

  const config = {
    headers: {
      Authorization:
        'Bearer ' + JSON.parse(sessionStorage.getItem('data')).token
    }
  }

  useEffect(() => {
    api
      .get('/providers', config)
      .then(res => (res.data ? setData(res.data) : console.log(res.data)))
      .catch(err => console.error(err))
  }, [])

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
            onClick={() => setPage(false)}
            src={PlusBtn}
            alt=""
          />
        </div>
      </div>
      <ProviderListHead />
      <span className="w-fit overflow-y-auto overflow-x-hidden mb-12 font-[Rubik] font-thin text-sm">
        {data.map(
          ({
            uuid,
            name,
            cnpj,
            email,
            telephone,
            averageTimeForDeliveryInDays
          }) => (
            <ProviderList
              key={uuid}
              name={name}
              cnpj={cnpj}
              email={email}
              telephone={telephone}
              averageTimeForDeliveryInDays={averageTimeForDeliveryInDays}
            />
          )
        )}
      </span>
    </section>
  )
}
