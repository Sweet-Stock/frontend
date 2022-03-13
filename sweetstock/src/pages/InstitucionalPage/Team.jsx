import React from "react";
import TeamCard from "../components/TeamCard";
import TeamTitle from "../images/title_equipe.svg"
import AbnerImg from "../images/img_abner.png";
import FernandoImg from "../images/img_fernando.png";
import GiovannaImg from "../images/img_giovanna.png";
import RafaelImg from "../images/img_rafael.png";
import RicardoImg from "../images/img_ricardo.png";
import "./Team.css";

export default () => {
  return (
    <section className="team">
      <div className="team-container">
        <img src={TeamTitle} alt="Equipe" />
        <div className="team-aligner">
          <TeamCard cardImg={AbnerImg} cardName="ABNER LUCAS" />
          <TeamCard cardImg={FernandoImg} cardName="FERNANDO MARQUES" />
          <TeamCard cardImg={GiovannaImg} cardName="GIOVANNA VALENTIN" />
        </div>
        <div className="team-aligner">
          <TeamCard cardImg={RafaelImg} cardName="RAFAEL COELHO" />
          <TeamCard cardImg={RicardoImg} cardName="RICARDO GALDINO" />
        </div>
      </div>
    </section>
  );
};
