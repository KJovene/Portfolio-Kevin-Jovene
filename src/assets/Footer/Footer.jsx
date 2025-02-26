import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className='footer'>
        <a href="mailto:jovene.kevin@gmail.com">Me contacter</a>
        <button className='footerButton'>Voir mon CV</button>
      </div>
    </div>
  );
}

export default Footer;