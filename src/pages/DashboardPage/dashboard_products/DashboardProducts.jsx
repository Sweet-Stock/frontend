import { useState } from 'react'
import DashboardProductForm from './dashboard_products_form/DashboardProductForm'

export default ({ grow }) => {
  const [page, setPage] = useState(true)
  switch (page) {
    case true:
      return <DashboardProductForm grow={grow} setPage={setPage} />
    case false:
      return <h1></h1>

    default:
      break
  }
}
