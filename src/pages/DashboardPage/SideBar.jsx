import React from "react";
import LittleArrowRight from "../images/littlearrow.svg";
import LittleArrowLeft from "../images/littlearrowleft.svg";
import DashIcon from "../images/dashicon.svg";
import ProfilePhoto from "../images/profilephoto.jpg";
import Icon from "../components/Icon.jsx";
import LogoutIcon from "../images/iconlogout.svg";
import "./SideBar.css";

export default (props) => {
  const [grow, setGrow] = React.useState(0);

  const data = [
    {
      icon: DashIcon,
      content: "Dashboard",
      classShort: "sidebar-icon-short",
      classLong: "sidebar-icon-long",
      dashPage: 0,
    },
    {
      icon: DashIcon,
      content: "Dashboard",
      classShort: "sidebar-icon-short",
      classLong: "sidebar-icon-long",
      dashPage: 1,
    },
    {
      icon: DashIcon,
      content: "Dashboard",
      classShort: "sidebar-icon-short",
      classLong: "sidebar-icon-long",
      dashPage: 2,
    },
    {
      icon: DashIcon,
      content: "Dashboard",
      classShort: "sidebar-icon-short",
      classLong: "sidebar-icon-long",
      dashPage: 3,
    },
    {
      icon: DashIcon,
      content: "Dashboard",
      classShort: "sidebar-icon-short",
      classLong: "sidebar-icon-long",
      dashPage: 4,
    },
    {
      icon: DashIcon,
      content: "Dashboard",
      classShort: "sidebar-icon-short",
      classLong: "sidebar-icon-long",
      dashPage: 5,
    },
  ];
  return (
    <section className="sidebar">
      <div
        className={
          grow % 2 === 0 ? "sidebar-container-short" : "sidebar-container-long"
        }
      >
        <div className="sidebar-photo-box">
          <img
            className={
              grow % 2 === 0 ? "sidebar-photo-short" : "sidebar-photo-long"
            }
            src={ProfilePhoto}
            alt=""
          />
          <h1 className="sidebar-name">{grow % 2 === 0 ? "" : props.name}</h1>
        </div>
        <div className="sidebar-box">
          {data.map((value) => (
            <div
              key={Math.random()}
              onClick={() => {
                props.setPage(value.dashPage);
              }}
            >
              <Icon
                icon={value.icon}
                content={grow % 2 === 0 ? "" : value.content}
                class={grow % 2 === 0 ? value.classShort : value.classLong}
              />
            </div>
          ))}
        </div>
        <img
          className={
            grow % 2 === 0 ? "sidebar-logout-short" : "sidebar-logout-long"
          }
          src={LogoutIcon}
          alt=""
        />
      </div>
      <img
        onClick={() => {
          setGrow(grow + 1);
        }}
        src={grow % 2 === 0 ? LittleArrowRight : LittleArrowLeft}
        className="sidebar-grow-btn"
        alt=""
      />
    </section>
  );
};
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
