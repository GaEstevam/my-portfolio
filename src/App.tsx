import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  // Define o tipo de language como 'pt' ou 'en'
  const [language, setLanguage] = useState<'pt' | 'en'>('pt'); // Padrão: português

  // Função para mudar o idioma, garantindo que apenas 'pt' ou 'en' sejam aceitos
  const changeLanguage = (newLanguage: 'pt' | 'en') => {
    setLanguage(newLanguage);
  };

  return (
    <Router>
      <Header language={language} changeLanguage={changeLanguage} />
      <div className="App">
        <div className='content'>
          <Routes>
            <Route path="/home" element={<Home language={language} />} />
            <Route path="/about" element={<AboutMe language={language} />} />
            <Route path="/projects" element={<Projects language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </div>
        <Footer language={language} />
      </div>
    </Router>
  );
};

export default App;
