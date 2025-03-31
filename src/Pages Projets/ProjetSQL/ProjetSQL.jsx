import React, { useEffect} from 'react';
import './ProjetSQL.css';
import Menu from '../../assets/Menu/Menu';

const ProjetSQL = () => {
  useEffect(() => {
      const handleScroll = () => {
        const elements = document.querySelectorAll('.objectifSQL, .methodoSQL, .fonctionnementSQL, .conclusionSQL');
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
      <div className="TitreSQL">
        <div className="containerTitre">
          <h1>Projet Base de donnée en SQL</h1>
        </div>
      </div>
      <div className="BodySQL">
        <div className='imageSQL'>
          <img src="../../../Img/ImageRpg/Z5fjI77lH3qAQx7Wntfv--4--qqemt.jpg" alt="Image SQL" />
        </div>
        <div className="objectifSQL">
          <h2>Conception et développement</h2>
          <p>L’objectif principal était de créer une base de données complète et fonctionnelle, en appliquant les bonnes pratiques du modélisme relationnel. Nous avons travaillé sur :</p>
          <ul>
            <li>La structuration des données : Création de plusieurs tables interconnectées</li>
            <li>Les relations entre les tables : Utilisation de clés primaires et étrangères</li>
            <li>La visualisation et l’exploitation des données : Requêtes SQL optimisées pour extraire les bonnes informations</li>
          </ul>
        </div>
        <div className="methodoSQL">
          <h2>Méthodologie et outils utilisés</h2>
          <ul>
            <li>Système de gestion de base de données (SGBD) : MySQL</li>
            <li>Langage SQL : Création de tables, insertion de données, requêtes avancées</li>
            <li>Modélisation des données : Schéma relationnel et diagramme entité-relation</li>
            <li>Outils de visualisation : SQL WorkBench</li>
          </ul>
        </div>
        <div className="fonctionnementSQL">
          <h2>Conception et structuration de la base de données</h2>
          <h3>1 - Modélisation et création des tables</h3>
          <ul>
            <li>Définition des entités et attributs pour structurer les données</li>
            <li>Utilisation de clés primaires (PRIMARY KEY) pour identifier de manière unique chaque enregistrement</li>
            <li>Création de clés étrangères (FOREIGN KEY) pour relier les tables entre elles</li>
          </ul>
          <h3>2 - Requêtes SQL et exploitation des données</h3>
          <ul>
            <li>Sélection et filtrage des données (SELECT, WHERE, ORDER BY)</li>
            <li>Requêtes avec JOIN pour lier plusieurs tables</li>
            <li>Fonctions d’agrégation (COUNT, AVG, SUM) pour analyser les données</li>
          </ul>
        </div>
        <div className="image2SQL">
          <img src="../../../Img/ImageRpg/Z5fjI77lH3qAQx7Wntfv--2--6cz89.jpg" alt="Image RPG" />
        </div>
      </div>
      <div className="LienSQL">
        <a href="https://github.com/KJovene/py-projet2-rpg/tree/main">Accédez au GitHub</a>
      </div>
      <div className="conclusionSQL">
        <h2>Conclusion</h2>
        <p>Ce projet nous a permis de comprendre l’importance des bases de données relationnelles et d’acquérir une expertise sur SQL et la gestion des données. De la modélisation à la visualisation, nous avons conçu un système structuré, efficace et optimisé pour manipuler et interroger des ensembles de données complexes. Une base solide pour gérer l’information et l’exploiter efficacement !</p>
      </div>
    </div>
  );
}

export default ProjetSQL;