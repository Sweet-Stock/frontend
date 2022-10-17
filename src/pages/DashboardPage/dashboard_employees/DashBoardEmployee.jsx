import React, { useState } from 'react'
import EmployeeHome from './employee_home/EmployeeHome'
import EmployeeSignList from './employee_sign_list/EmployeeSignList'

export default ({ grow }) => {
  const [page, setPage] = useState(true)

  switch (page) {
    case true:
      return <EmployeeHome grow={grow} setPage={setPage} />

    case false:
      return <EmployeeSignList grow={grow} setPage={setPage} />

    default:
      break
  }
}
