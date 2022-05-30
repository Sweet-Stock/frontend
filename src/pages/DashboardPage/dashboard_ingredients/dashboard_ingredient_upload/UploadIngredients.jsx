import React, { useState, useEffect } from 'react'
import Button from '../../../components/button/Button'
import { Dialog } from '@headlessui/react'
import PlusBtn from '../../../images/plusbtn.svg'
import PlusPeople from '../../../images/pluspeople.svg'
import axios from 'axios'
import InputFile from '../../../components/input_file/InputFile'
import api from '../../../../services/api'

export default ({ grow, setPage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [inputEmail, setInputEmail] = useState(null)
  const [data, setData] = useState([])

  const config = {
    headers: {
      Authorization:
        'Bearer ' + JSON.parse(sessionStorage.getItem('data')).token
    }
  }

  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })

  const handleClick = async event => {
    event.preventDefault()
    setIsDisabled(true)
    setIsLoading(true)

    const options = {
      method: 'POST',
      url: process.env.REACT_APP_API_KEY + '/ingredients/expired',
      params: { email: inputEmail },
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(sessionStorage.getItem('data')).token
      }
    }

    await axios
      .request(options)
      .then(res => {
        setIsLoading(false)
        setIsDisabled(false)
        console.log(res.status)
      })
      .catch(error => {
        setIsLoading(false)
        setIsDisabled(false)
        console.error(error)
      })
  }

  const inputValidation = (condition, inputId) => {
    if (condition) {
      document.getElementById(inputId).animate(
        [
          {
            borderColor: 'var(--neultral-color)',
            borderBottomWidth: '1px'
          },
          { borderColor: 'red', borderBottomWidth: '2px' },
          {
            borderColor: 'var(--neultral-color)',
            borderBottomWidth: '1px'
          },
          { borderColor: 'red', borderBottomWidth: '2px' },
          {
            borderColor: 'var(--neultral-color)',
            borderBottomWidth: '1px'
          },
          { borderColor: 'red', borderBottomWidth: '2px' },
          {
            borderColor: 'var(--neultral-color)',
            borderBottomWidth: '1px'
          },
          { borderColor: 'red', borderBottomWidth: '2px' }
        ],
        {
          duration: 300
        }
      )

      document.getElementById(inputId).style.borderColor = 'red'
    } else {
      document.getElementById(inputId).style.borderColor =
        'var(--neultral-color)'
    }
  }

  return (
    <section
      className={
        grow % 2 === 0
          ? 'relative w-[100%] h-[100vh] pl-48 transition-all ease-in-out duration-500 flex flex-col items-center'
          : 'relative w-[100%] h-[100vh] pl-80 transition-all ease-in-out duration-500 flex flex-col items-center'
      }
    >
      <div className="w-[100%] flex flex-row gap-2 items-center justify-between pt-20">
        <h1 className="text-secondary-500 font-bold font-[Rubik] text-5xl ">
          Funcionários
        </h1>
        <span className="flex flex-row gap-6 pr-24">
          <img
            className="cursor-pointer h-16"
            src={PlusPeople}
            alt=""
            onClick={() => setPage('page')}
          />
          <img
            className="cursor-pointer h-16"
            src={PlusBtn}
            alt=""
            onClick={() => setIsOpen(true)}
          />
        </span>
      </div>
      <span
        className={
          isOpen
            ? 'invisible'
            : 'w-fit overflow-y-auto overflow-x-hidden mb-12 font-[Rubik] font-thin text-sm'
        }
      >
       
      </span>
      <Dialog
        className="absolute top-[25%] left-[25%] right-[25%] aspect-[2/1] rounded-3xl bg-main-500 w-1/2 flex justify-around items-center shadow-md shadow-black"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel className="flex justify-center gap-4 items-center h-full flex-col">
          <Dialog.Title
            className="text-3xl font-[Rubik] text-bg_neutral-500"
            id="email_title_id"
          >
            Email
          </Dialog.Title>

          <InputFile
            label="Arquivo .txt"
            message="Por favor insira um arquivo"
            onChange={async () => {
              const file = document.querySelector('#input_file_id').files[0]
              const fileInBase64 = await toBase64(file)
              //setInputPicture(fileInBase64)
            }}
          />
          <Dialog.Description
            id="email_div_id"
            className="font-[Rubik] text-xl text-bg_neutral-500 font-light"
          >
            Os ingredientes serão cadastrados
          </Dialog.Description>

          <div className="flex gap-4 z-10">
            <Button
              content="Voltar"
              type="button"
              isDisabled={isDisabled}
              onClick={() => setIsOpen(false)}
            />
            <Button
              content="Enviar"
              type="button"
              onClick={handleClick}
              isLoading={isLoading}
            />
          </div>
        </Dialog.Panel>
      </Dialog>
    </section>
  )
}
