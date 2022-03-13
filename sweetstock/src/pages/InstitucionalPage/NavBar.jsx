import React, { useEffect, useState }  from "react";
import Logo from "../images/logo.svg";
import Button from "../components/Button"
import  "./NavBar.css";

export default () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);

      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="id_navbar" className="nav">
      <div className="nav-container">
        <div className={offset <= 60 ? "navBar":"navBg"}>
          <img className={offset <= 60 ? "nav-img":"nav-img-small"} src={Logo} />
          <ul >
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">SOBRE NÓS</a>
            </li>
            <li>
              <a href="">EQUIPE</a>
            </li>
            <li>
              <a href="">SERVIÇOS</a>
            </li>
            <li>
              <a href="">CONTATO</a>
            </li>
          </ul>
          <Button content = "ENTRAR" />
        </div>
      </div>
    </header>
  );
};


