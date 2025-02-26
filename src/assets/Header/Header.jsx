import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src="../Img/Logo Blue.svg" className="logo" alt="Logo"/>
        <h3>Portfolio de Kévin Jovené</h3>
      </header>
      <div className="navigation">
        <button className="navigateur">Accueil</button>
        <button className="navigateur">Projets</button>
        <button className="navigateur">CV</button>
      </div>
      <hr />
    </div>
  );
}

export default Header;