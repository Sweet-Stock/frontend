import { useState, useEffect } from 'react'
import api from '../../../../services/api'
import Button from '../../../components/button/Button'
import {
  EmployeeListHeadSign,
  EmployeeListSign
} from '../employee_home/employee_list/EmployeeList'

export default ({ grow, setPage }) => {
  const [isSelect, setIsSelect] = useState(false)
  const [isHeadSelect, setIsHeadSelect] = useState(false)
  const [data, setData] = useState([])
  const [sendUUIDs, setSendUUIDs] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const usersUUIDs = {
    uuids: []
  }

  const config = {
    headers: {
      Authorization:
        'Bearer ' + JSON.parse(sessionStorage.getItem('data')).token
    }
  }

  const handleApprovedSubmit = async () => {
    setIsLoading(true)
    setIsDisabled(true)
    await api
      .put('/employees', usersUUIDs, config)
      .then(res => {
        res.status === 204 && alert('Por favor selecione uma funcionário')
        console.log(res)
        setIsLoading(false)
        setIsDisabled(false)
        setSendUUIDs(sendUUIDs + 1)
      })
      .catch(err => {
        setIsLoading(false)
        setIsDisabled(false)
        console.log(err)
        setSendUUIDs(sendUUIDs + 1)
      })
  }
 
  useEffect(() => {
    api
      .get('/employees/not-approved', config)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [sendUUIDs])
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
          Funcionários para aprovação
        </h1>
        <div className="flex gap-2">
          <Button
            isDisabled={isDisabled}
            onClick={() => setPage(true)}
            content="Voltar"
          />
          <Button
            isLoading={isLoading}
            onClick={() => handleApprovedSubmit(usersUUIDs)}
            content="Aceitar"
          />
        </div>
      </div>

      <EmployeeListHeadSign
        isSelect={isSelect}
        setIsSelect={setIsSelect}
        isHeadSelect={isHeadSelect}
        setIsHeadSelect={setIsHeadSelect}
      />
      <span className="w-fit overflow-y-auto overflow-x-hidden mb-12 font-[Rubik] font-thin text-sm">
        {data.map(({ name, email, telephoneNumber, uuid }) => (
          <EmployeeListSign
            key={uuid}
            isHeadSelect={isHeadSelect}
            isSelect={isSelect}
            setIsHeadSelect={setIsHeadSelect}
            userUUIDs={usersUUIDs?.uuids}
            name={name}
            email={email}
            phoneNumber={telephoneNumber}
            uuid={uuid}
          />
        ))}
      </span>
    </section>
  )
}
