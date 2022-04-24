import React from "react";
import AboutUsImage2 from "../../images/sobreNosImg2.svg";
import "./AboutUs.css";

export default () => {
  return (
    <section className="about-us" id="aboutUs">
      <div className="about-container">
        <div className="about-aligner">
          <div className="about-text-box">
            <h1 className="about-title">SOBRE NÓS</h1>
            <p className="about-paragraph">Somos uma empresa que propõe</p>
            <p className="about-paragraph">soluções técnológicas para</p>
            <p className="about-paragraph">docerias e confeitarias, visando</p>
            <p className="about-paragraph">melhorar o processo de produção á</p>
            <p className="about-paragraph">venda dos produtos fabricados.</p>
          </div>
          <img src={AboutUsImage2} alt="" />
        </div>
      </div>
    </section>
  );
};
