import React from "react";
import InstagramIcon from "../images/icon_instagram_white.svg";
import GitHubIcon from "../images/icon_github_white.svg";
import LinkedinIcon from "../images/icon_linkedin.svg";
import "./TeamCard.css"

export default (props) => {
  return (
    <div className="teamCard">
      <div className="teamCard-container">
        <img src={props.cardImg} alt="" />
        <h1>{props.cardName}</h1>
        <div>
          <a href={props.instagram}><img src={InstagramIcon} alt="" /></a>
          <a href={props.github}><img src={GitHubIcon} alt="" /></a>
          <a href={props.linkedin}><img src={LinkedinIcon} alt="" /></a>
        </div>
      </div>
    </div>
  );
};