import React, { useEffect } from 'react'
import EditIcon from '../../images/edit_profile_user_icon_148629.svg'
import LittleArrowRight from '../../images/littlearrow.svg'
import LittleArrowLeft from '../../images/littlearrowleft.svg'
import DashIcon from '../../images/dashicon.svg'
import CarIcon from '../../images/carIcon.svg'
import PeopleIcon from '../../images/People.svg'
import BaskIcon from '../../images/Bagage.svg'
import ProductIcon from '../../images/Confectionery.svg'
import FileIcon from '../../images/Documents Folder.svg'
import ProfilePhoto from '../../images/profilephoto.jpg'
import Icon from '../../components/icon/Icon'
import LogoutIcon from '../../images/iconlogout.svg'
import './SideBar.css'
import { useNavigate } from 'react-router-dom'

export default props => {
  const [verify, setVerify] = React.useState(true)
  const [grow, setGrow] = React.useState(0)

  const navigate = useNavigate()

  let dataStorage = sessionStorage.getItem('data')

  useEffect(() => {
    if (dataStorage == undefined || dataStorage == 'null') {
      navigate('/login')
    }
  }, [verify])

  const logoff = () => {
    sessionStorage.setItem('data', 'null')
    setVerify(false)
  }

  const data = [
    {
      icon: DashIcon,
      content: 'Dashboard',
      classShort: 'sidebar-icon-short',
      classLong: 'sidebar-icon-long',
      dashPage: 0
    },
    {
      icon: CarIcon,
      content: 'Fornecedores',
      classShort: 'sidebar-icon-short',
      classLong: 'sidebar-icon-long',
      dashPage: 1
    },
    {
      icon: PeopleIcon,
      content: 'Funcionários',
      classShort: 'sidebar-icon-short',
      classLong: 'sidebar-icon-long',
      dashPage: 2
    },
    {
      icon: BaskIcon,
      content: 'Ingredientes',
      classShort: 'sidebar-icon-short',
      classLong: 'sidebar-icon-long',
      dashPage: 3
    },
    {
      icon: ProductIcon,
      content: 'Produtos',
      classShort: 'sidebar-icon-short',
      classLong: 'sidebar-icon-long',
      dashPage: 4
    },
    {
      icon: FileIcon,
      content: 'Relatórios',
      classShort: 'sidebar-icon-short',
      classLong: 'sidebar-icon-long',
      dashPage: 5
    }
  ]
  return (
    <section className="sidebar">
      <div
        className={
          grow % 2 === 0 ? 'sidebar-container-short' : 'sidebar-container-long'
        }
      >
        <div className="sidebar-photo-box">
          <span className="relative">
            <img
              className={
                grow % 2 === 0 ? 'sidebar-photo-short' : 'sidebar-photo-long'
              }
              src={dataStorage.image ? dataStorage?.image : ProfilePhoto}
              alt=""
            />
            <label
              className={
                grow % 2 === 0
                  ? 'absolute cursor-pointer h-[4rem !important] w-[4rem !important] sidebar-photo-short top-0 hover:bg-zinc-800 hover:opacity-50 flex items-center justify-center group'
                  : 'absolute cursor-pointer h-[6rem !important] w-[6rem !important] sidebar-photo-long top-0 hover:bg-zinc-800 hover:opacity-50 flex items-center justify-center group'
              }
            >
              <img className="invisible z-30 group-hover:visible w-8" src={EditIcon} />
              <input className="invisible absolute" type="file" />
            </label>
          </span>
          <h1 className="sidebar-name">{grow % 2 === 0 ? '' : props.name}</h1>
        </div>
        <div className="sidebar-box">
          {data.map(value => (
            <div
              className="sidebar-outer-icon"
              key={Math.random()}
              onClick={() => {
                props.setPage(value.dashPage)
              }}
            >
              <Icon
                icon={value.icon}
                content={grow % 2 === 0 ? '' : value.content}
                class={grow % 2 === 0 ? value.classShort : value.classLong}
              />
            </div>
          ))}
        </div>
        <img
          onClick={logoff}
          className={
            grow % 2 === 0 ? 'sidebar-logout-short' : 'sidebar-logout-long'
          }
          src={LogoutIcon}
          alt=""
        />
      </div>
      <img
        onClick={() => {
          setGrow(grow + 1)
          props.setGrow(grow + 1)
        }}
        src={grow % 2 === 0 ? LittleArrowRight : LittleArrowLeft}
        className="sidebar-grow-btn"
        alt=""
      />
    </section>
  )
}
/*  <Icon
            icon={DashIcon}
            content={grow % 2 == 0 ? "" : "Dashboard"}
            class={grow % 2 == 0 ? "sidebar-icon-short" : "sidebar-icon-long"}
          />
          <Icon
            icon={DashIcon}
            content={grow % 2 == 0 ? "" : "Funcionarios"}
            class={grow % 2 == 0 ? "sidebar-icon-short" : "sidebar-icon-long"}
          />
          <Icon
            icon={DashIcon}
            content={grow % 2 == 0 ? "" : "Dashboard"}
            class={grow % 2 == 0 ? "sidebar-icon-short" : "sidebar-icon-long"}
          />
          <Icon
            icon={DashIcon}
            content={grow % 2 == 0 ? "" : "Dashboard"}
            class={grow % 2 == 0 ? "sidebar-icon-short" : "sidebar-icon-long"}
          />
          <Icon
            icon={DashIcon}
            content={grow % 2 == 0 ? "" : "Dashboard"}
            class={grow % 2 == 0 ? "sidebar-icon-short" : "sidebar-icon-long"}
          />
          <Icon
            icon={DashIcon}
            content={grow % 2 == 0 ? "" : "Dashboard"}
            class={grow % 2 == 0 ? "sidebar-icon-short" : "sidebar-icon-long"}
          />*/
