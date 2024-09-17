import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [language, setLanguage] = useState('pt'); // Padrão: português

  // Função para mudar o idioma
  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <Router>
      <div className="App">
        <Header language={language} changeLanguage={changeLanguage} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<AboutMe language={language} />} />
            <Route path="/projects" element={<Projects language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
