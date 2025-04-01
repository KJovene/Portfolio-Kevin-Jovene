import React, { use, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';
import Bouton from '../Bouton/Bouton';
import { motion } from 'framer-motion';

const Accueil = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.titleText, .flip-container, .projet-front, .projet-back, .cartes, .projets');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <motion.div 
      motions={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ecran">
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
      </motion.div>
      <div className="title">
        <div className="titleText">Mes projets</div>
      </div>
      <div id='projets' className="containerCartes">
        <section className="projets">
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
                <img src="../../../Img/Alternance-accueil.avif" alt="Image React2k" />
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
                <img src="../../../Img/ImageRpg/RPG texttuel.jpg" alt="Image RPG Textuel" />
              </div>
              <div className="projet-back">
                <h3>RPG Textuel</h3>
                <p>Projet réalisé en python dans le but de créer un RPG textuel</p>
                <Link to="/RPGTextuel">
                  <Bouton text="Cliquer pour voir plus" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="../../../Img/Transfer-accueil.avif" alt="Image React2k" />
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
          <div className="flip-container">
            <div className="cartes">
              <div className="projet-front">
                <img src="../../../Img/ImageSQL/arriere-plan-technologie-du-gradient_23-2151895841.avif" alt="Image Projet SQL" />
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
        </section>
      </div>
      <hr />
    </div>
  );
}

export default Accueil;