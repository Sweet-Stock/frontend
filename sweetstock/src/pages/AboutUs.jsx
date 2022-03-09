import React from "react";
import AboutUsImage from "./images/sobreNosImg.svg";
import AboutUsImage2 from "./images/sobreNosImg2.svg";
import "./AboutUs.css";

export default () => {
  return (
    <section className="about-us" id="teste">
      <div className="about-container">
        <img src={AboutUsImage} />
        <div className="about-aligner">
          <div className="about-text-box">
            <p>Somos uma empresa que propôe</p>
            <p>soluções técnológicas para</p>
            <p>docerias e confeitarias, visando</p>
            <p>melhorar o processo de produção á</p>
            <p>venda dos produtos fabricados.</p>
          </div>
          <img src={AboutUsImage2} />
        </div>
      </div>
    </section>
  );
};
