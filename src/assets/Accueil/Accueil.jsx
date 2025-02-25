import React, { useEffect } from 'react';
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
      <div className="containerCartes">
        <section className="projets">
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="./Img/RPG texttuel.jpg" alt="Image RPG Textuel" />
              </div>
              <div className="projet-back">
                <h3>RPG Textuel</h3>
                <p>Projet réalisé en python dans le but de créer un jeu textuel</p>
                <button>Cliquer pour voir plus</button>
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
                <button>Cliquer pour voir plus</button>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="./Img/Image React2k.jpg" alt="Image React2k" />
              </div>
              <div className="projet-back">
                <h3>Projet Web Vintage</h3>
                <p>Création d'un site Web des années 2000</p>
                <button>Cliquer pour voir plus</button>
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
                <button>Cliquer pour voir plus</button>
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
                <button>Cliquer pour voir plus</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Accueil;