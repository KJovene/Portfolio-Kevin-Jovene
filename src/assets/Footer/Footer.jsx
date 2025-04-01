import React from 'react';
import './Footer.css';
import Bouton from '../Bouton/Bouton';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="footerContainer">
        <div className='footer'>
          <div className="linkFooter">
            <a href="mailto:jovene.kevin@gmail.com">Me contacter</a>
          </div>
          <img src="../../../Img/Logo Blue.svg" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;