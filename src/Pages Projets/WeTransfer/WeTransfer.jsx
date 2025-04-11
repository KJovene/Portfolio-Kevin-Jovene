import React, { useEffect } from 'react';
import Menu from '../../assets/Menu/Menu';
import { motion } from 'framer-motion';
import './WeTransfer.css';

const WeTransfer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.objectifTransfer, .technologiesTransfer, .fonctionnementTransfer, .conclusionTransfer, .imageTransfer, .image2Transfer, .resumeTransfer');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="BodyPage">
      <motion.div
        motions={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        >
        <Menu />
      </motion.div>
      <motion.div 
      motions={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="TitreTransfer">
        <div className="containerTitre">
          <h1>Application de gestion de dossier</h1>
        </div>
      </motion.div>
      <div className="BodyTransfer">
        <div className='resumeTransfer'>
          <h2>Résumé du projet</h2>
          <p>
            Ce projet nous a permis de développer une application web complète avec un système d’inscription, 
            de connexion, de téléchargement, de partage et de suppression des fichiers. Pour cela, nous avons utilisé PHP en backend 
            et avons hébergé notre projet sur un serveur local avec XAMPP.
          </p>
        </div>
        <div className="imageTransfer">
          <img src="../../../Img/ImageTransfer/Transfer.jpg" alt="Image Transfer" />
        </div>
        <div className="objectifTransfer">
          <h2>Objectifs du projet</h2>
          <p>L’objectif principal était de créer une plateforme permettant de :</p>
          <ul>
            <li>Uploader des fichiers et les stocker temporairement</li>
            <li>Partager les fichiers via un lien unique</li>
            <li>Supprimer les fichiers sur demande</li>
            <li>Gérer un système d’inscription et d’authentification pour sécuriser l’accès</li>
            <li>Héberger et exécuter le projet avec XAMPP pour simuler un environnement serveur</li>
          </ul>
        </div>
        <div className="technologiesTransfer">
          <h2>Technologies et outils utilisés</h2>
          <ul>
            <li>Backend : PHP pour la gestion des fichiers et des utilisateurs</li>
            <li>Langages : JavaScript, HTML, CSS</li>
            <li>Serveur local : XAMPP pour héberger et tester l’application en local</li>
          </ul>
        </div>
        <div className="fonctionnementTransfer">
          <h2>Développement de l'application et fonctionnalités</h2>
          <h3>1 - Système d’inscription et de connexion</h3>
          <ul>
            <li>Formulaires sécurisés pour créer un compte et se connecter</li>
            <li>Hachage des mots de passe avec bcrypt pour renforcer la sécurité</li>
            <li>Gestion des sessions utilisateurs pour une expérience fluide</li>
          </ul>
          <h3>2 - Hébergement et gestion du projet avec XAMPP</h3>
          <ul>
            <li>Utilisation de Apache (serveur web) et MySQL (base de données) via XAMPP</li>
            <li>Configuration de phpMyAdmin pour gérer la base de données</li>
          </ul>
        </div>
        <div className="image2Transfer">
          <img src="../../../Img/ImageTransfer/concept-controle-qualite-standard-m_23-2150041854.avif" alt="Image Transfer" />
        </div>
      </div>
      <div className="LienTransfer">
        <a href="https://github.com/KJovene/Projet_Helico_Pat">
          Accédez au GitHub
        </a>
      </div>
      <div className="conclusionTransfer">
        <h2>Conclusion</h2>
        <p>
          Ce projet nous a permis d’approfondir le développement backend avec PHP, d’implémenter une gestion sécurisée des fichiers 
          et des utilisateurs, et de manipuler un serveur web local avec XAMPP. Inspiré de WeTransfer, notre système offre une solution 
          simple et efficace pour transférer et partager des fichiers en toute sécurité. Un projet alliant pratique et utilité, parfait 
          pour gérer le partage de fichiers en ligne !
        </p>
      </div>
    </div>
  );
};

export default WeTransfer;