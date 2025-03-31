import React from 'react';
import './Footer.css';
import Bouton from '../Bouton/Bouton';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className='footer'>
        <div className="linkFooter">
          <a href="mailto:jovene.kevin@gmail.com">Me contacter</a>
        </div>
        <Link to='/CV'>
          <Bouton text="Voir mon CV" />
        </Link>
        <img src="../../../Img/Logo Blue.svg" alt="Logo" />
      </div>
    </div>
  );
}

export default Footer;