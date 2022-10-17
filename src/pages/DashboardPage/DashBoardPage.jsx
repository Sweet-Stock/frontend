import React, { useState, useEffect } from 'react'
import SideBar from './sidebar/SideBar'
import DashBoardHome from './dashboard_home/DashBoardHome'
import DashBoardEmployee from './dashboard_employees/DashBoardEmployee'
import DashIngredients from './dashboard_ingredients/DashIngredients'
import DashBoardProvider from './dashboard_provider/DashBoardProvider'
import DashboardProducts from './dashboard_products/DashboardProducts'
export default props => {
  const [page, setPage] = useState(0)
  const [grow, setGrow] = useState(0)

  useEffect(() => {
    console.log(page)
  }, [page])

  let dataStorage = JSON.parse(sessionStorage.getItem('data'))

  switch (page) {
    case 0:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ''}
            setPage={setPage}
            setGrow={setGrow}
          />
          <DashBoardHome grow={grow} />
        </>
      )
    case 1:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ''}
            setPage={setPage}
            setGrow={setGrow}
          />
          <DashBoardProvider grow={grow} />
        </>
      )
    case 2:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ''}
            setPage={setPage}
            setGrow={setGrow}
          />
          <DashBoardEmployee grow={grow} />
        </>
      )
    case 3:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ''}
            setPage={setPage}
            setGrow={setGrow}
          />
          <DashIngredients grow={grow} />
        </>
      )
    case 4:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ''}
            setPage={setPage}
            setGrow={setGrow}
          />
          <DashboardProducts grow={grow} />
        </>
      )
    case 5:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ''}
            setPage={setPage}
            setGrow={setGrow}
          />
        </>
      )
    default:
      return (
        <>
          <SideBar
            name={dataStorage ? dataStorage.username : ''}
            setPage={setPage}
            setGrow={setGrow}
          />
        </>
      )
  }
}
