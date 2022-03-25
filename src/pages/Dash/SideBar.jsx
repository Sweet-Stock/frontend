import React, {useState}from "react";
import LittleArrowRight from "../images/littlearrow.svg";
import LittleArrowLeft from "../images/littlearrowleft.svg";
import DashIcon from "../images/dashicon.svg";
import ProfilePhoto from "../images/profilephoto.jpg";
import Icon from "../components/Icon.jsx";
import LogoutIcon from "../images/iconlogout.svg";
import "./SideBar.css";

export default () => {
    const [grow, setGrow] = React.useState(0)
  return (
    <section className="sidebar">
      <div className="sidebar-container">
        <img className="sidebar-photo" src={ProfilePhoto} alt="" />
        <div>
          <Icon icon={DashIcon} class={grow % 2 == 0 ? "sidebar-icon-short" : "sidebar-icon-long"}/>
          <Icon icon={DashIcon} />
          <Icon icon={DashIcon} />
          <Icon icon={DashIcon} />
          <Icon icon={DashIcon} />
          <Icon icon={DashIcon} />
        </div>
        <img className="sidebar-logout" src={LogoutIcon} alt="" />
      </div>
      <img onClick={()=>{
          setGrow(grow + 1)
      }} src={grow % 2 == 0 ? LittleArrowRight : LittleArrowLeft} alt="" />
    </section>
  );
};
