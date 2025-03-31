import React from 'react';
import './Menu.css';
import Bouton from '../Bouton/Bouton';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="Menu">
      <nav className="navBouton">
        <Link to="/RPGTextuel">
          <Bouton text="RPG Textuel" />
        </Link>
        <Link to="/ProjetIA">
          <Bouton text="Projet IA" />
        </Link>
        <Link to="/ProjetUnity">
          <Bouton text="Projet Unity" />
        </Link>
        <Link to="/ProjetSQL">
          <Bouton text="Projet SQL" />
        </Link>
        <Link to="/DesignSystem">
          <Bouton text="Design System" />
        </Link>
        <Link to="/VintageWeb">
          <Bouton text="Projet Vintage Web" />
        </Link>
        <Link to="/Alternance">
          <Bouton text="Projet Alternance" />
        </Link>
        <Link to="/WeTransfer">
          <Bouton text="Projet WeTransfer" />
        </Link>
      </nav>
    </div>
  );
}


export default Menu;