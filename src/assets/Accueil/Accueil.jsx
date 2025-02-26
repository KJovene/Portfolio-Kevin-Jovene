import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';

const Accueil = () => {
  useEffect(() => {
    import('./Script.js').then((module) => {
      module.default();
    });
  }, []);

  return (
    <div>
      <div className="ecran">
        <div className="carte" data-tilt>
          <img src="./Img/Photo CV-fotor-202502201620.png" alt="Photo de profil" />
          <h2>Kévin Jovené</h2>
          <p>Développeur Web Fullstack</p>
          <div className="reseau">
            <a href="https://fr.linkedin.com/" className="logo"><img src="./Img/logo-linkedin-noir.webp" alt="LinkedIn" /></a>
            <a href="https://github.com/" className="logo"><img src="./Img/Octicons-mark-github.svg" alt="GitHub" /></a>
          </div>
          <div className="container_bouton">
            <a href="mailto:jovene.kevin@gmail.com" className="bouton">Contactez moi</a>
          </div>
        </div>
      </div>
      <div className="title">Mes projets</div>
      <hr />
      <div id='projets' className="containerCartes">
        <section className="projets">
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="./Img/RPG texttuel.jpg" alt="Image RPG Textuel" />
              </div>
              <div className="projet-back">
                <h3>RPG Textuel</h3>
                <p>Projet réalisé en python dans le but de créer un jeu textuel</p>
                <Link to="/rpg-textuel">
                  <button className="NavRPGTextuel">Cliquer pour voir plus</button>
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
                  <button>Cliquer pour voir plus</button>
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
                  <button>Cliquer pour voir plus</button>
                </Link>
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
                  <button>Cliquer pour voir plus</button>
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
                  <button>Cliquer pour voir plus</button>
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
                  <button>Cliquer pour voir plus</button>
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