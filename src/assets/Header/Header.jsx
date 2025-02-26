import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projets');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header className="header">
        <img src="../Img/Logo Blue.svg" className="logo" alt="Logo"/>
        <h3>Portfolio de Kévin Jovené</h3>
      </header>
      <div className="navigation">
        <Link to="/Accueil">
          <button className="navigateur">Accueil</button>
        </Link>
        <button className="navigateur" onClick={scrollToProjects}>Projets</button>
        <Link to='/CV'>
          <button className="navigateur">CV</button>
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default Header;