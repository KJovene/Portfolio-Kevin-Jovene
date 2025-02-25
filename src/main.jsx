import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Accueil from './assets/Accueil/Accueil.jsx'
import Header from './assets/Header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Accueil />
  </StrictMode>,
)
