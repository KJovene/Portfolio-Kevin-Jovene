import React, {useEffect} from 'react';
import './VintageWeb.css';
import Menu from '../../assets/Menu/Menu';
import { motion } from 'framer-motion';

const VintageWeb = () => {
  useEffect(() => {
      const handleScroll = () => {
        const elements = document.querySelectorAll('.objectifVintage, .technologiesVintage, .fonctionnementVintage, .conclusionVintage, .imageVintage, .image2Vintage, .fonctionnement2Vintage');
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
      className="TitreVintage">
        <div className="containerTitre">
          <h1>Site Web vintage en React</h1>
        </div>
      </motion.div>
      <div className="BodyVintage">
        <div className='imageVintage'>
          <img src="../../../Img/ImageVintage/jeuxvideo.com-en-2000.jpg" alt="Image Vintage" />
        </div>
        <div className="objectifVintage">
          <h2>Objectifs du projet</h2>
          <p>L’objectif était de recréer l’expérience visuelle et fonctionnelle des sites web des années 2000, tout en intégrant des outils modernes pour structurer et dynamiser l’application :</p>
          <ul>
            <li>Design rétro : Inspiré des sites des années 2000 (boutons glossy, GIFs, polices pixelisées, animations flashy)</li>
            <li>Intégration d’API : Récupération et affichage dynamique de données externes</li>
            <li>Utilisation de Redux : Gestion centralisée de l’état pour une meilleure performance et maintenabilité</li>
            <li>Navigation avec React Router : Mise en place d’un système de pages et de liens dynamiques</li>
            <li>Convertisseur Markdown : Développement d’un outil permettant de transformer du texte en HTML formaté</li>
          </ul>
        </div>
        <div className="technologiesVintage">
          <h2>Technologies utilisées</h2>
          <ul>
            <li>Framework Frontend : React.js</li>
            <li>Langages : JavaScript, HTML, CSS</li>
            <li>Gestion d’état : Redux</li>
            <li>Système de routage : React Router</li>
            <li>APIs externes : Récupération et affichage de données dynamiques</li>
            <li>Markdown Converter : Transformation du texte en contenu HTML interactif</li>
          </ul>
        </div>
        <div className="fonctionnementVintage">
          <h2>Développement du site et fonctionnalités</h2>
          <h3>1 - Design et structure vintage des années 2000</h3>
          <ul>
            <li>Utilisation de polices et styles rétro (Comic Sans, clignotements, fonds texturés)</li>
            <li>Mise en page en tableaux et couleurs vives pour un effet "old-school"</li>
          </ul>
          <h3>2 - Intégration d’API et affichage dynamique des données</h3>
          <ul>
            <li>Connexion à une API pour récupérer et afficher des informations en temps réel</li>
            <li>Affichage conditionnel des données en fonction des réponses de l’API</li>
            <li>Mise en cache et optimisation des requêtes pour améliorer les performances</li>
          </ul>
          <h3>3 - Gestion d’état avec Redux</h3>
          <ul>
            <li>Centralisation des données globales du site (utilisateurs, contenu dynamique, préférences)</li>
            <li>Utilisation de reducers et actions pour modifier l’état de manière efficace</li>
            <li>Stockage persistant pour conserver l’état entre différentes sessions</li>
          </ul>
        </div>
        <div className="fonctionnement2Vintage">
          <h3>4 - Navigation entre pages avec React Router</h3>
          <ul>
            <li>Mise en place d’un système de navigation fluide</li>
            <li>Création de routes dynamiques pour afficher différentes sections du site</li>
            <li>Gestion des erreurs et redirections pour une meilleure expérience utilisateur</li>
          </ul>
          <h3>5 - Développement du convertisseur de Markdown</h3>
          <ul>
            <li>Création d’un éditeur interactif permettant d’écrire en Markdown et de voir un aperçu en HTML</li>
            <li>Prise en charge des principales syntaxes Markdown (titres, gras, listes, liens, images)</li>
            <li>Utilisation de bibliothèques comme Marked.js pour convertir le contenu en temps réel</li>
          </ul>
        </div>
        <div className="image2Vintage">
          <img src="../../../Img/ImageVintage/youtube-ui-update-april08.jpg" alt="Image vintage" />
        </div>
      </div>
      <div className="LienVintage">
        <a href="https://github.com/KJovene/HETIC-Annee-2k-website/tree/main">Accédez au GitHub</a>
      </div>
      <div className="conclusionVintage">
        <h2>Conclusion</h2>
        <p>Ce projet nous a permis de plonger dans le développement web avec React tout en nous amusant avec un design vintage des années 2000. En intégrant Redux, React Router et des API, nous avons renforcé nos compétences en gestion d’état, en structuration d’application moderne et en interaction avec des services externes. Un mélange de nostalgie et de technologies modernes pour un site web unique ! </p>
      </div>
    </div>
  );
}

export default VintageWeb;