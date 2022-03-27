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
    },
    {
      icon: DashIcon,
      content: "Dashboard",
      classShort: "sidebar-icon-short",
      classLong: "sidebar-icon-long",
    },
    {
      icon: DashIcon,
      content: "Dashboard",
      classShort: "sidebar-icon-short",
      classLong: "sidebar-icon-long",
    },
    {
      icon: DashIcon,
      content: "Dashboard",
      classShort: "sidebar-icon-short",
      classLong: "sidebar-icon-long",
    },
    {
      icon: DashIcon,
      content: "Dashboard",
      classShort: "sidebar-icon-short",
      classLong: "sidebar-icon-long",
    },
    {
      icon: DashIcon,
      content: "Dashboard",
      classShort: "sidebar-icon-short",
      classLong: "sidebar-icon-long",
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
            <Icon
              key={Math.random()}
              icon={value.icon}
              content={grow % 2 === 0 ? "" : value.content}
              class={grow % 2 === 0 ? value.classShort : value.classLong}
            />
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
