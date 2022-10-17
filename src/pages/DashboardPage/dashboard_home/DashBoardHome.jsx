import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import NearExpireItemsList from './near_expire_items_list/NearExpireItemsList'
import MoneyChart from './money_chart/MoneyChart'
import NearEndIngredients from './near_end_ingredients/NearEndIngredients'
import OverviewCards from './overview_cards/OverviewCards'
import ImportantIcon from '../../images/Box Important.svg'
import api from '../../../services/api'
import './DashBoardHome.css'

export default props => {
  const [hasData, setHasData] = React.useState(null)
  const [data, setData] = React.useState({})

  let config = null

  let dataStorage = sessionStorage.getItem('data')

  const navigate = useNavigate()

  useEffect(() => {
    if (dataStorage == undefined || dataStorage == 'null') return
    config = {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(sessionStorage.getItem('data')).token
      }
    }
    api
      .get('dashboards', config)
      .then(res => {
        console.log(res.data)
        setData(res.data)
        res.data.chart.length !== 0 ? setHasData(true) : setHasData(false)
      })
      .catch(err => {
        err.response.status === 401 ? navigate('/login') : console.error(err)
        console.error(err)
      })
  }, [])

  switch (hasData) {
    case false:
      return (
        <section
          className={
            props.grow % 2 === 0
              ? 'dash-board-home-body-short w-[100vw !important] '
              : 'dash-board-home-body-grow w-[100vw !important] '
          }
        >
          <span
            className={
              props.grow % 2 === 0
                ? ' pl-48 absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center'
                : ' pl-80 absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center'
            }
          >
            <div className=" w-2/3 top-0 left-0 right-0 bottom-0 aspect-video bg-[#E0E0E0] font-[Rubik] text-5xl rounded-2xl flex items-center justify-evenly flex-col font-medium leading-10 text-[#2F2E41]">
              <img className="w-40" src={ImportantIcon} alt="" />
              <h1>Insira dados, para que gerar seus relatórios</h1>
            </div>
          </span>
        </section>
      )

    case true:
      return (
        <section
          className={
            props.grow % 2 === 0
              ? 'dash-board-home-body-short'
              : 'dash-board-home-body-grow'
          }
        >
          <div className="overview-card-dash">
            <OverviewCards
              nearEndIngredients={data?.cards?.nearEndIngredients}
              productsSoldMonth={data?.cards?.productsSoldMonth}
              expiredIngredients={data?.cards?.expiredIngredients}
              monthExpenses={data?.cards?.monthExpenses}
            />
          </div>
          <div className="near-expire-items-list-dash">
            <NearExpireItemsList dashData={data?.nearExpireIngredients} />
          </div>
          <div className="money-chart-dash">
            <MoneyChart dashData={data?.chart} />
          </div>
          <div className="near-end-itens-dash">
            <NearEndIngredients dashData={data?.nearEndIngredients} />
          </div>
        </section>
      )
    default:
      return (
        <section
          className={
            props.grow % 2 === 0
              ? 'dash-board-home-body-short'
              : 'dash-board-home-body-grow'
          }
        ></section>
      )
  }
}
