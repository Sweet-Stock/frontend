import { useState, useEffect } from 'react'
import api from '../../../../services/api'
import Button from '../../../components/button/Button'
import {
  EmployeeListHeadSign,
  EmployeeListSign
} from '../employee_home/employee_list/EmployeeList'

export default ({ grow }) => {
  const [isSelect, setIsSelect] = useState(false)
  const [isHeadSelect, setIsHeadSelect] = useState(false)
  let usersUUIDs = []

  const config = {
    headers: {
      Authorization:
        'Bearer ' + JSON.parse(sessionStorage.getItem('data')).token
    }
  }

  const handleApprovedSubmit = () => {
    api
      .put('/employees', usersUUIDs, config)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    api
      .get('/employees/not-aproved', config)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <section
      className={
        grow % 2 === 0
          ? 'relative w-[100%] h-[100vh] pl-48 transition-all ease-in-out duration-500 flex flex-col items-center'
          : 'relative w-[100%] h-[100vh] pl-80 transition-all ease-in-out duration-500 flex flex-col items-center'
      }
    >
      <div className="w-[100%] flex flex-row gap-2 items-center justify-around pt-20">
        <h1 className="text-secondary-500 font-bold font-[Rubik] text-5xl ">
          Funcionários para aprovação
        </h1>
        <Button onClick={handleApprovedSubmit} content="Aceitar" />
      </div>

      <EmployeeListHeadSign
        isSelect={isSelect}
        setIsSelect={setIsSelect}
        isHeadSelect={isHeadSelect}
        setIsHeadSelect={setIsHeadSelect}
      />
      <span className="w-fit overflow-y-auto overflow-x-hidden mb-12 font-[Rubik] font-thin text-sm">
        <EmployeeListSign
          isSelect={isSelect}
          setIsHeadSelect={setIsHeadSelect}
          userUUIDs={usersUUIDs}
        />
        <EmployeeListSign
          isSelect={isSelect}
          setIsHeadSelect={setIsHeadSelect}
          userUUIDs={usersUUIDs}
        />
        <EmployeeListSign
          isSelect={isSelect}
          setIsHeadSelect={setIsHeadSelect}
          userUUIDs={usersUUIDs}
        />
      </span>
    </section>
  )
}
