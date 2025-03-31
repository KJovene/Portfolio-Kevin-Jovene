import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Bouton from "../Bouton/Bouton";

const Header = () => {
  const location = useLocation();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projets');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="headerContainer">
      <header className="header">
        <div className="headerContent">
          <img src="../Img/Logo Blue.svg" className="logoHeader" alt="Logo"/>
          <div className="navigation">
            <Link to="/Accueil">
              <Bouton text="Accueil" />
            </Link>
            {location.pathname === '/Accueil' && (
              <Bouton text="Projets" onClick={scrollToProjects}/>
            )}
            <Link to='/CV'>
              <Bouton text="CV" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;