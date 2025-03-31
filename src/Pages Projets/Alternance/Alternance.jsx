import React, { useEffect } from 'react'
import './Alternance.css';
import Menu from '../../assets/Menu/Menu';
import { motion } from 'framer-motion';

const Alternance = () => {
  useEffect(() => {
      const handleScroll = () => {
        const elements = document.querySelectorAll('.objectifAlter, .technologiesAlter, .fonctionnementAlter, .conclusionAlter, .imageAlter, .fonctionnement2Alter');
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
      className="TitreAlter">
        <div className="containerTitre">
          <h1>Application de gestion de candidature</h1>
        </div>
      </motion.div>
      <div className="BodyAlter">
        <div className='ResumeAlter'>
          <h2>
            Résumé du projet
          </h2>
          <p>Nous avons développé une application web collaborative permettant de centraliser et suivre nos candidatures, avec une fonctionnalité de relance automatique. Ce projet nous a permis de combiner Node.js, React et MongoDB pour concevoir une plateforme efficace.</p>
        </div>
        <div className='imageAlter'>
          <img src="../../../Img/ImageAlter/nature-morte-pile-documents_23-2151088774.avif" alt="Image Alternance" />
        </div>
        <div className="objectifAlter">
          <h2>Objectifs du projet</h2>
          <p>L’objectif principal était de créer un outil de gestion des candidatures, nous permettant de :</p>
          <ul>
            <li>Créer des fiches détaillées pour chaque entreprise contactée</li>
            <li>Planifier des relances automatiques pour ne jamais manquer une opportunité</li>
            <li>Centraliser toutes nos recherches en un seul endroit pour un suivi optimal</li>
            <li>Utiliser une base de données dynamique pour stocker et gérer les informations</li>
          </ul>
        </div>
        <div className="technologiesAlter">
          <h2>Technologies utilisées</h2>
          <ul>
            <li>Frontend : React.js pour une interface utilisateur interactive</li>
            <li>Backend : Node.js avec Express pour la gestion des données et des requêtes</li>
            <li>Base de données : MongoDB pour stocker et organiser les candidatures</li>
          </ul>
        </div>
        <div className="fonctionnementAlter">
          <h2>Développement de l'application et fonctionnalités</h2>
          <h3>1 - Création et gestion des fiches de candidature</h3>
          <ul>
            <li>Formulaire dynamique pour ajouter une candidature avec nom de l’entreprise, date de contact, statut, etc.</li>
            <li>Affichage des candidatures sous forme de cartes pour une meilleure lisibilité</li>
            <li>Filtrage et tri par statut (en attente, accepté, refusé.)</li>
          </ul>
        </div>
        <div className="fonctionnement2Alter">
          <h3>2 - Système de relance automatique</h3>
          <ul>
            <li>Programmation d’envoi d’e-mails automatiques aux recruteurs avec Nodemailer</li>
            <li>Définition de rappels pour effectuer des relances manuelles ou automatiques</li>
            <li>Gestion des délais de relance selon la date de la dernière candidature envoyée</li>
          </ul>
          <h3>3 - Backend avec Node.js et base de données MongoDB</h3>
          <ul>
            <li>API REST avec Express.js pour gérer les opérations CRUD (ajout, modification, suppression de candidatures)</li>
            <li>Stockage des données sur MongoDB, facilitant l’accès et la mise à jour des informations</li>
          </ul>
        </div>
      </div>
      <div className="LienAlter">
        <a href="https://github.com/KJovene/py-projet2-rpg/tree/main">Accédez au GitHub</a>
      </div>
      <div className="conclusionAlter">
        <h2>Conclusion</h2>
        <p>Ce projet nous a permis de mettre en pratique le développement full-stack avec Node.js, React et MongoDB, tout en répondant à un besoin concret : optimiser notre recherche d’alternance. Grâce à cette application, nous avons pu gagner du temps, suivre nos candidatures plus efficacement et automatiser les relances. 
        Un outil pratique qui transforme la recherche d’alternance en une expérience plus fluide et organisée !</p>
      </div>
    </div>
  )
}

export default Alternance
