import React, { useState } from 'react'
import { useEffect } from 'react'
import api from '../../../services/api'
import { OrderList, OrderListHead } from './order_lists/OrderList'
import RestartIco from '../../images/Restart.svg'
import apiNova from '../../../services/api-nova'

const handleFetchCompanyName = async () => {
  const config = {
    headers: {
      Authorization:
        'Bearer ' + JSON.parse(sessionStorage.getItem('data')).token
    }
  }
  const apiResult = (await api.get('/companies/get-name-company-jwt', config))
    .data
  return apiResult
}

export default function OrderPage({ grow, setPage }) {
  const [refreshPage, setRefreshPage] = useState(1)
  const [orders, setOrders] = useState([])

  useEffect(async () => {
    apiNova
      .get(
        `/order/get-users-orders-by-company/${await handleFetchCompanyName()}`
      )
      .then(res => {
        console.log(res.data)
        res.data ? setOrders(res.data) : setOrders([])
      })
  }, [refreshPage])

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
          Pedidos
        </h1>
        <div className="flex gap-2 pr-10">
          <img
            className="cursor-pointer h-16"
            src={RestartIco}
            onClick={() => setRefreshPage(refreshPage + 1)}
            alt=""
          />
        </div>
      </div>
      <OrderListHead />
      {orders.map(order => (
        <OrderList
          orderDate={
            new Date(order.dateOrder).getDay() +
            '/' +
            new Date(order.dateOrder).getMonth() +
            '/' +
            new Date(order.dateOrder).getFullYear()
          }
          status={order.statusOrder}
          address={`${order.address.street}, ${order.address.number}`}
          key={order.idOrder}
          itens={order.quantityItems}
          name={order.nameUser}
          uuid={order.idOrder}
        />
      ))}
      <span className="w-fit overflow-y-auto overflow-x-hidden mb-12 font-[Rubik] font-thin text-sm"></span>
    </section>
  )
}
