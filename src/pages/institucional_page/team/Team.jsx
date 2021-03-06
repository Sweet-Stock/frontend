import React from "react";
import TeamCard from "../../components/team_card/TeamCard";
import AbnerImg from "../../images/img_abner.png";
import FernandoImg from "../../images/img_fernando.png";
import GiovannaImg from "../../images/img_giovanna.png";
import RafaelImg from "../../images/img_rafael.png";
import RicardoImg from "../../images/img_ricardo.png";
import "./Team.css";

export default () => {
  return (
    <section id="team" className="team">
      <div className="team-container">
        <h1 className="team-title">EQUIPE</h1>
        <div className="team-aligner">
          <TeamCard
            cardImg={AbnerImg}
            cardName="ABNER LUCAS"
            cardRole="Desenvolvedor Back-End"
            instagram="https://www.instagram.com/abner_lucss/"
            linkedin="https://www.linkedin.com/in/abner-lucass/"
            github="https://github.com/abnerlucss"
          />
          <TeamCard
            cardImg={FernandoImg}
            cardName="FERNANDO MARQUES"
            cardRole="Desenvolvedor Front-End"
            instagram="https://www.instagram.com/feslab950/"
            linkedin="https://www.linkedin.com/in/fernando-santos-25b20020b/"
            github="https://github.com/Fernandosantos1"
          />
          <TeamCard
            cardImg={GiovannaImg}
            cardName="GIOVANNA VALENTIN"
            cardRole="Product Owner"
            instagram="https://www.instagram.com/gigmelo/"
            linkedin="https://www.linkedin.com/in/giovanna-melo-249b59168/"
            github="https://github.com/GiovannaMelo"
          />
        </div>
        <div className="team-aligner">
          <TeamCard
            cardImg={RafaelImg}
            cardName="RAFAEL COELHO"
            cardRole="Desenvolvedor Back-End"
            instagram="https://www.instagram.com/_rafa_coelho/"
            linkedin="https://www.linkedin.com/in/rafael-coelho-68ab93167/"
            github="https://github.com/CoelhoRafael"
          />
          <TeamCard
            cardImg={RicardoImg}
            cardName="RICARDO GALDINO"
            cardRole="Desenvolvedor Back-End"
            instagram="https://www.instagram.com/thebestricmove/"
            linkedin="https://www.linkedin.com/in/ricardo-galdino-227796205/"
            github="https://github.com/Ricardobrito1"
          />
        </div>
      </div>
    </section>
  );
};
