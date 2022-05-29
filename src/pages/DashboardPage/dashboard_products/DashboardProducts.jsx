import { useState } from 'react'
import DashboardProductForm from './dashboard_products_form/DashboardProductForm'
import DashboardProductsPage from './dashboard_products_page/DashboardProductsPage'

export default ({ grow }) => {
  const [page, setPage] = useState(true)
  switch (page) {
    case true:
      return <DashboardProductsPage grow={grow} setPage={setPage} />
    case false:
      return <DashboardProductForm grow={grow} setPage={setPage} />

    default:
      break
  }
}
