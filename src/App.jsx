import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './assets/Accueil/Accueil';
import RPGTextuel from './Pages Projets/RPGTextuel/RPGTextuel';
import Header from './assets/Header/Header';
import ProjetIA from './Pages Projets/ProjetIA/ProjetIA';
import ProjetUnity from './Pages Projets/ProjetUnity/ProjetUnity';
import ProjetSQL from './Pages Projets/ProjetSQL/ProjetSQL';
import DesignSystem from './Pages Projets/DesignSystem/DesignSystem';
import VintageWeb from './Pages Projets/VintageWeb/VintageWeb';
import Footer from './assets/Footer/Footer';
import CV from './Pages Projets/CV/CV';
import ScrollToTop from './assets/fonctions/fonctions';
import Alternance from './Pages Projets/Alternance/Alternance';
import WeTransfer from './Pages Projets/WeTransfer/WeTransfer';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="*" element={<Accueil />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/RPGTextuel" element={<RPGTextuel />} />
        <Route path="/ProjetIA" element={<ProjetIA />} />
        <Route path="/ProjetUnity" element={<ProjetUnity />} />
        <Route path="/ProjetSQL" element={<ProjetSQL />} />
        <Route path="/DesignSystem" element={<DesignSystem />} />
        <Route path="/VintageWeb" element={<VintageWeb />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Alternance" element={<Alternance />} />
        <Route path="/WeTransfer" element={<WeTransfer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;