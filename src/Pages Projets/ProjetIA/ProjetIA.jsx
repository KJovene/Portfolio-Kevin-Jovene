import React, { useEffect} from 'react';
import Menu from '../../assets/Menu/Menu';
import './ProjetIA.css';
import { motion } from 'framer-motion';

const ProjetIA = () => {
  useEffect(() => {
      const handleScroll = () => {
        const elements = document.querySelectorAll('.objectifIA, .methodoIA, .fonctionnementIA, .conclusionIA, .imageIA, .image2IA');
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
      className="TitreIA">
        <div className="containerTitre">
          <h1>Exploration de l'IA générative</h1>
        </div>
      </motion.div>
      <div className="BodyIA">
        <div className='imageIA'>
          <img src="../../../Img/ImageIA/Sergei-Manzhos-reseaux-neurones-artificiels-au-service-modelisation-de-matiere.jpg" alt="Image IA" />
        </div>
        <div className="objectifIA">
          <h2>Conception et développement</h2>
          <p>L’IA générative révolutionne de nombreux domaines, de la création de contenu à l’automatisation avancée. Notre mission était de :</p>
          <ul>
            <li>Comprendre comment ces IA fonctionnent et quelles technologies les alimentent</li>
            <li>Identifier leurs forces et faiblesses en fonction des cas d’usage</li>
            <li>Comparer différentes solutions grâce à une analyse SWOT pour déterminer les meilleures IA du marché</li>
          </ul>
        </div>
        <div className="methodoIA">
          <h2>Méthodologie et outils utilisés</h2>
          <h3>Analyse SWOT pour un benchmark structuré</h3>
          <p>Nous avons utilisé la matrice SWOT (Strengths, Weaknesses, Opportunities, Threats) pour comparer plusieurs IA génératives en fonction de critères tels que :</p>
          <ul>
            <li>Forces : Performance, précision, diversité des réponses</li>
            <li>Faiblesses : Coût, biais, limites technologiques</li>
            <li>Opportunités : Applications potentielles, évolutivité</li>
            <li>Menaces : Questions éthiques, dépendance aux données</li>
          </ul>
          <p>Grâce à cette analyse, nous avons pu identifier les meilleures IA génératives à utiliser en fonction des besoins spécifiques (ex. création de texte, génération d’images, développement de code, etc.).</p>
        </div>
        <div className="fonctionnementIA">
          <h2>Exploration du fonctionnement des IA génératives</h2>
          <p>Pour mieux comprendre ces technologies, nous avons étudié :</p>
          <ul>
            <li>Les architectures des modèles : Réseaux neuronaux, Transformers (GPT, DALL·E, Stable Diffusion…)</li>
            <li>Leur processus d’apprentissage : Entraînement sur des milliards de données, ajustements avec l’apprentissage supervisé et non supervisé</li>
            <li>Leurs limites et enjeux : Problèmes de biais, hallucinations, dépendance aux données d’entraînement</li>
          </ul>
        </div>
        <div className="image2IA">
          <img src="../../../Img/ImageIA/Intelligence_artificielle-1536x864.jpg" alt="Image RPG" />
        </div>
      </div>
      <div className="conclusionIA">
        <h2>Conclusion</h2>
        <p>En nous basant sur notre benchmark SWOT, nous avons pu classer les IA génératives selon leur efficacité dans différents domaines (traitement du langage naturel, génération d’images, automatisation du code, etc.).</p>
        <p>Notre étude nous a permis d’avoir un regard critique sur les avantages et limites de ces outils. Si l’IA générative ouvre des opportunités incroyables, elle soulève aussi des défis majeurs, notamment en termes d’éthique et de fiabilité.</p>
        <p>Ce projet nous a offert une vision approfondie de l’IA générative, de son fonctionnement à son impact sur différents secteurs. Grâce à notre analyse SWOT, nous avons pu identifier les meilleures solutions adaptées à divers besoins, tout en prenant en compte leurs limites et enjeux. 
        L’IA générative n’a pas fini de nous surprendre, et notre étude nous a permis d’en saisir toute la complexité et le potentiel ! </p>
      </div>
    </div>
  );
}

export default ProjetIA;