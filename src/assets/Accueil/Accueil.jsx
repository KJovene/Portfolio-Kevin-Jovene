import React, { use, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';
import Bouton from '../Bouton/Bouton';
import { useLocation } from 'react-router-dom';

const Accueil = () => {
  useEffect(() => {
    const handleScroll = () => {
      const titleText = document.querySelector('.titleText');
      const rect = titleText.getBoundingClientRect();
      if (window.innerHeight && rect.bottom >= 0) {
        titleText.classList.add('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="ecran">
        <div className="carte">
          <img src="/Img/Photo_CV-removebg-preview.png" className="pP" alt="Photo de profil" />
          <h2>Kévin Jovené</h2>
          <p>Développeur Web Fullstack</p>
          <div className="reseau">
            <a href="https://fr.linkedin.com/" className="logoCard"><img src="./Img/logo-linkedin-noir.webp" alt="LinkedIn" /></a>
            <a href="https://github.com/" className="logoCard"><img src="./Img/Octicons-mark-github.svg" alt="GitHub" /></a>
          </div>
          <div className="container_bouton">
            <Bouton text="Contactez moi" mail="jovene.kevin@gmail.com" />
          </div>
        </div>
      </div>
      <div className="title">
        <div className="titleText">Mes projets</div>
      </div>
      <div id='projets' className="containerCartes">
        <section className="projets">
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="../../../Img/ImageRpg/RPG texttuel.jpg" alt="Image RPG Textuel" />
              </div>
              <div className="projet-back">
                <h3>RPG Textuel</h3>
                <p>Projet réalisé en python dans le but de créer un jeu textuel</p>
                <Link to="/RPGTextuel">
                  <Bouton text="Cliquer pour voir plus" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="./Img/Projet IA.jpg" alt="Image Projet IA" />
              </div>
              <div className="projet-back">
                <h3>Projet IA</h3>
                <p>Familiarisation avec l'utilisation d'IA génératives</p>
                <Link to="/ProjetIA">
                  <Bouton text="Cliquer pour voir plus" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="./Img/MIsM49FjVcgxQ7HIijRQ--1--1o2sx.jpg" alt="Image FireDoom" />
              </div>
              <div className="projet-back">
                <h3>Projet Unity</h3>
                <p>Création d'un jeu vidéo</p>
                <Link to="/ProjetUnity">
                  <Bouton text="Cliquer pour voir plus" />               </Link>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="./Img/Projet SQL.jpg" alt="Image Projet SQL" />
              </div>
              <div className="projet-back">
                <h3>Projet SQL</h3>
                <p>Création d'une base de données SQL</p>
                <Link to="/ProjetSQL">
                  <Bouton text="Cliquer pour voir plus" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="./Img/NbfVvWjy57ogHBYBaCqg--0--clyef.jpg" alt="Image Design system" />
              </div>
              <div className="projet-back">
                <h3>Design System</h3>
                <p>Création d'un design system pour le site Reddit</p>
                <Link to="/DesignSystem">
                  <Bouton text="Cliquer pour voir plus" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="./Img/Image Web 2000.1.jpg" alt="Image React2k" />
              </div>
              <div className="projet-back">
                <h3>Projet Web Vintage</h3>
                <p>Création d'un site Web des années 2000</p>
                <Link to="/VintageWeb">
                  <Bouton text="Cliquer pour voir plus" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="./Img/Image Web 2000.1.jpg" alt="Image React2k" />
              </div>
              <div className="projet-back">
                <h3>Projet Alternance</h3>
                <p>Création d'un stockage pour la recherche d'alternance</p>
                <Link to="/Alternance">
                  <Bouton text="Cliquer pour voir plus" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="./Img/Image Web 2000.1.jpg" alt="Image React2k" />
              </div>
              <div className="projet-back">
                <h3>Projet WeTransfer</h3>
                <p>Création d'une application similaire à WeTransfer'</p>
                <Link to="/WeTransfer">
                  <Bouton text="Cliquer pour voir plus" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr />
    </div>
  );
}

export default Accueil;