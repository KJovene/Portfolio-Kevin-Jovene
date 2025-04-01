import React, { useEffect } from 'react';
import Menu from '../../assets/Menu/Menu';
import './RPGTextuel.css';
import { motion } from 'framer-motion';

const RPGTextuel = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fonctionnaliteRPG, .orgaRPG, .conceptionRPG, .methodoRPG, .conclusionRPG, .imageRPG, .image2RPG');
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
      className="TitreRPG">
        <div className="containerTitre">
          <h1>RPG textuel en Python</h1>
        </div>
      </motion.div>
      <div className="BodyRPGTextuel">
        <div className='imageRPG'>
          <img src="/public/Img/ImageRpg/Z5fjI77lH3qAQx7Wntfv--4--qqemt.jpg" alt="Image RPG Textuel" />
        </div>
        <div className="conceptionRPG">
          <h2>Conception et développement</h2>
          <p>Notre RPG textuel a été codé à partir de zéro, sans l’utilisation de frameworks externes pour le moteur du jeu. Nous avons adopté une approche orientée objet (POO) afin de garantir un code structuré, réutilisable et facilement extensible.</p>
          <h3>Technologies et bonnes pratiques utilisées</h3>
          <ul>
            <li>Langage : Python</li>
            <li>Paradigme : Programmation orientée objet (POO)</li>
            <li>Système de gestion de version : GitHub avec la méthodologie GitFlow</li>
            <li>Organisation du projet : Notion avec la méthode Kanban</li>
          </ul>
        </div>
        <div className="methodoRPG">
          <h2>Méthodologie de travail</h2>
          <h3>Collaboration avec GitHub et GitFlow</h3>
          <p>Afin d’assurer un travail collaboratif efficace et éviter les conflits de code, nous avons utilisé GitHub en suivant le workflow GitFlow. Cela nous a permis de bien structurer notre développement :</p>
          <ul>
            <li>Une branche principale (main) stable contenant uniquement les versions finalisées du jeu</li>
            <li>Une branche de développement (develop) pour intégrer les nouvelles fonctionnalités</li>
            <li>Des branches spécifiques pour chaque nouvelle fonctionnalité ou correction de bug (feature/nom-fonctionnalité)</li>
          </ul>
        </div>
        <div className="orgaRPG">
          <h2>Organisation avec Notion et la méthode Kanban</h2>
          <p>La gestion du projet a été réalisée avec Notion, en appliquant la méthode Kanban. Cela nous a permis de diviser le projet en plusieurs tâches claires et de suivre leur avancement en temps réel.
          Les tâches étaient organisées sous différentes catégories :</p>
          <ul>
            <li>À faire : Définition des fonctionnalités à développer</li>
            <li>En cours : Développement et tests des fonctionnalités</li>
            <li>Terminé : Intégration et validation du code</li>
          </ul>
        </div>
        <div className="fonctionnaliteRPG">
          <h2>Fonctionnalités du RPG</h2>
          <span>Notre jeu intègre plusieurs fonctionnalités clés qui rendent l’expérience immersive et engageante :</span>
          <ul>
            <li>Combats au tour par tour</li>
            <li>Inventaire et objets</li>
            <li>Narration interactive (avec choix)</li>
          </ul>
        </div>
        <div className="image2RPG">
          <img src="/public/Img/ImageRpg/Z5fjI77lH3qAQx7Wntfv--2--6cz89.jpg" alt="Image RPG" />
        </div>
      </div>
      <div className="LienRPG">
        <a href="https://github.com/KJovene/py-projet2-rpg/tree/main">Accédez au GitHub</a>
      </div>
      <div className="conclusionRPG">
        <h2>Conclusion</h2>
        <p>Grâce à ce projet, nous avons pu expérimenter la création d’un jeu vidéo en Python tout en appliquant des méthodes de travail utilisées en entreprise. Entre la programmation orientée objet, la gestion de version avec GitHub/GitFlow et l’organisation avec Notion, ce projet a été une véritable expérience formatrice et enrichissante.</p>
      </div>
    </div>
  );
}

export default RPGTextuel;