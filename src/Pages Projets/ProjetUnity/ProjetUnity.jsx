import React, { useEffect} from 'react';
import Menu from '../../assets/Menu/Menu';
import './ProjetUnity.css';
import { motion } from 'framer-motion';

const ProjetUnity = () => {
  useEffect(() => {
      const handleScroll = () => {
        const elements = document.querySelectorAll('.objectifUnity, .technologiesUnity, .fonctionnaliteUnity, .conclusionUnity, .imageUnity, .image2Unity');
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
      className="TitreUnity">
        <div className="containerTitre">
          <h1>Développement d'un shooter sur Unity</h1>
        </div>
      </motion.div>
      <div className="BodyUnity">
        <div className="objectifUnity">
          <h2>Objectifs du projet</h2>
          <p>L’objectif était de concevoir un jeu de tir dynamique, en développant nous-mêmes les fonctionnalités essentielles du gameplay, notamment :</p>
          <ul>
            <li>Système de tir et de ciblage : Gestion des projectiles et de la précision des tirs</li>
            <li>IA des ennemis : Mouvements, stratégies d’attaque et poursuite du joueur</li>
            <li>Contrôles et déplacements : Gestion fluide du personnage</li>
            <li>Optimisation et intégration Unity : Gestion des collisions, animations et effets visuels</li>
          </ul>
        </div>
        <div className="technologiesUnity">
          <h2>Technologies et outils utilisés</h2>
          <ul>
            <li>Moteur de jeu : Unity</li>
            <li>Langage de programmation : C#</li>
            <li>Systèmes utilisés : Physique Unity, NavMesh, Animation Controller</li>
          </ul>
        </div>
        <div className="fonctionnaliteUnity">
          <h3>1 - Déplacement et contrôles du personnage</h3>
          <ul>
            <li>Mouvements fluides avec un système de rigidbody et forces physiques</li>
            <li>Gestion de la visée et du tir, avec des projectiles générés en temps réel</li>
          </ul>
          <h3>2- IA et comportement des ennemis</h3>
          <ul>
            <li>Modèle de déplacement : Utilisation de NavMesh pour permettre aux ennemis de se déplacer intelligemment dans l’environnement</li>
            <li>Targeting avancé : Détection du joueur et poursuite avec différents comportements</li>
            <li>Gestion des animations : Ennemis réagissant aux actions du joueur</li>
          </ul>
          <h3>3 - Gameplay et mécaniques de combat</h3>
          <ul>
            <li>Système de santé et dégâts : Barre de vie et effets visuels en fonction des dégâts subis</li>
            <li>Spawn et gestion d’ennemis : Apparition dynamique et vague d’ennemis pour augmenter la difficulté progressivement</li>
          </ul>
        </div>
        <div className="imageUnity">
          <img src="../../../Img/ImageUnity/Unity.jpg" alt="Image RPG" />
        </div>
      </div>
      <div className="LienUnity">
        <a href="https://github.com/KJovene/py-projet2-rpg/tree/main">Accédez au GitHub</a>
      </div>
      <div className="conclusionUnity">
        <h2>Conclusion</h2>
        <p>Ce projet nous a permis de plonger dans le développement de jeux vidéo avec Unity, en codant nous-mêmes les principales fonctionnalités en C#. De la gestion du mouvement des ennemis au ciblage, en passant par la création d’un gameplay dynamique, nous avons découvert les rouages du Game Development et les nombreux défis liés à la conception d’un jeu interactif. Nous espérons que cette expérience vous donnera envie d’en découvrir plus sur le développement de jeux vidéo !</p>
      </div>
    </div>
  );
}

export default ProjetUnity;