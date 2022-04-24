import React from "react";
import ContactImg from "../../images/img_contato.svg";
import Button from "../../components/button/Button";
import "./Contact.css";

export default () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h1 className="contact-title">FALE CONOSCO</h1>
        <div className="contact-aligner">
          <div>
            <div>
              <h1>Nome</h1>
              <input type="" />
              <h1>E-mail</h1>
              <input type="text" />
              <h1>Assunto</h1>
              <select>
                <option value="elogio">Elogio</option>
                <option value="critica">Crítica</option>
                <option value="duvida">Dúvida</option>
                <option value="sugestao">Sugestão</option>
              </select>
              <h1>Descrição</h1>
              <textarea type="text" className="describe" />
            </div>
            <Button content="ENVIAR" />
          </div>
          <img src={ContactImg} alt="" />
        </div>
      </div>
    </section>
  );
};
