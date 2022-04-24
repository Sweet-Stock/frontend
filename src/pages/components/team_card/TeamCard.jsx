import React from "react";
import InstagramIcon from "../../images/icon_instagram_white.svg";
import GitHubIcon from "../../images/icon_github_white.svg";
import LinkedinIcon from "../../images/icon_linkedin.svg";
import "./TeamCard.css";

export default (props) => {
  return (
    <div className="teamCard">
      <div className="teamCard-container">
        <img className="imgImportant" src={props.cardImg} alt="" />
        <h1>{props.cardName}</h1>
        <h2>{props.cardRole}</h2>
        <div>
          <a rel="noreferrer" target="_blank" href={props.instagram}>
            <img className="imgImportant" src={InstagramIcon} alt="" />
          </a>
          <a rel="noreferrer" target="_blank" href={props.github}>
            <img className="imgImportant" src={GitHubIcon} alt="" />
          </a>
          <a rel="noreferrer" target="_blank" href={props.linkedin}>
            <img className="imgImportant" src={LinkedinIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
