import React, { useEffect} from 'react';
import './DesignSystem.css';
import Menu from '../../assets/Menu/Menu';

const DesignSystem = () => {
  useEffect(() => {
      const handleScroll = () => {
        const elements = document.querySelectorAll('.objectifSystem, .methodoSystem, .fonctionnementSystem, .conclusionSystem');
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
      <Menu />
      <div className="TitreSystem">
        <div className="containerTitre">
          <h1>Design System de l'applicaiton Reddit</h1>
        </div>
      </div>
      <div className="BodySystem">
          <div className='imageSystem'>
            <img src="../../../Img/ImageRpg/Z5fjI77lH3qAQx7Wntfv--4--qqemt.jpg" alt="Image RPG Textuel" />
          </div>
        <div className="objectifDesign">
          <h2>Objectifs du projet</h2>
          <p>L’objectif principal était de concevoir un Design System complet et cohérent permettant de :</p>
          <ul>
            <li>Créer des composants réutilisables pour assurer une interface uniforme</li>
            <li>Moduler et assembler les éléments facilement pour adapter l’UI aux différents écrans</li>
            <li>Utiliser Figma comme outil principal pour concevoir et gérer notre Design System</li>
          </ul>
        </div>
        <div className="methodoSystem">
          <h2>Méthodologie et outils utilisés</h2>
          <ul>
            <li>Logiciel de conception : Figma</li>
            <li>Approche modulaire : Atomic Design (création de composants du plus simple au plus complexe)</li>
            <li>Normes et guidelines UI : Respect de la charte graphique de Reddit</li>
            <li>Système de variantes et auto-layout pour assurer flexibilité et adaptabilité</li>
          </ul>
        </div>
        <div className="fonctionnementSystem">
          <h2>Conception et structuration du Design System</h2>
          <h3>1 - Création des composants UI réutilisables</h3>
          <ul>
            <li>Typographie : Définition des styles de texte selon les niveaux de hiérarchie</li>
            <li>Couleurs : Palette de couleurs respectant l’identité visuelle de Reddit</li>
            <li>Icônes et illustrations : Standardisation des éléments graphiques pour une cohérence visuelle</li>
            <li>Boutons et inputs : Définition des états interactifs (normal, survol, pressé, désactivé)</li>
          </ul>
          <h3>2 - Organisation des composants avec Figma</h3>
          <ul>
            <li>Utilisation des variantes : Création de plusieurs versions d’un même élément pour couvrir tous les usages</li>
            <li>Auto-layout et contraintes : Assurer une adaptation fluide des composants sur différents formats d’écran</li>
            <li>Création de templates d’écrans : Assemblage des composants pour modéliser des interfaces complètes</li>
          </ul>
          <h3>3 - Documentation et système de guidelines</h3>
          <ul>
            <li>Mise en place d’un fichier Figma structuré pour faciliter la navigation entre les éléments</li>
            <li>Documentation des bonnes pratiques d’utilisation (ex. quand utiliser tel bouton ou tel style de texte)</li>
            <li>Prototypage et tests : Simulation des interactions pour valider la cohérence du design</li>
          </ul>
        </div>
        <div className="image2System">
          <img src="../../../Img/ImageRpg/Z5fjI77lH3qAQx7Wntfv--2--6cz89.jpg" alt="Image System" />
        </div>
      </div>
      <div className="conclusionSystem">
        <h2>Conclusion</h2>
        <p>Ce projet nous a permis d’approfondir les principes du Design System et de maîtriser Figma en créant un ensemble de composants UI modulables pour l’application mobile Reddit. Grâce à cette approche, nous avons pu concevoir un système flexible, structuré et facile à maintenir, essentiel pour garantir une expérience utilisateur homogène et optimisée.Une immersion complète dans le design UI et la conception de produits digitaux ! </p>
      </div>
    </div>
  );
}

export default DesignSystem;