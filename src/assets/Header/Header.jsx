import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Bouton from "../Bouton/Bouton";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projets');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
    motions={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="headerContainer">
      <header className="header">
        <div className="headerContent">
          <img src="../Img/Logo Blue.svg" className="logoHeader" alt="Logo"/>
          <div className="navigation">
            <Link to="/Accueil">
              <Bouton text="Accueil" />
            </Link>
            {(location.pathname === '/Accueil' || location.pathname === '/') && (
              <Bouton text="Projets" onClick={scrollToProjects}/>
            )}
            <Link to='/CV'>
              <Bouton text="CV" />
            </Link>
          </div>
        </div>
      </header>
    </motion.div>
  );
}

export default Header;