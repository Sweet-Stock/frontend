import React from "react";
import "./OverviewCardDash.css";
import { Dialog, Transition } from "@headlessui/react";

export default (props) => {
  return (
    <>
      <div className="overview-card-dash-body" onClick={props.onClick}>
        <div className="overview-card-dash-icon-box">
          <img className="overview-card-dash-icon" src={props.imgSrc} alt="" />
        </div>
        <div className="overview-card-dash-inner-body">
          <h1 className="overview-card-dash-title">{props.title}</h1>
          <span className="overview-card-dash-content">{props.amount}</span>
          <h2 className="overview-card-dash-sub-title">{props.subTitle}</h2>
        </div>
      </div>
    </>
  );
};
