import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  language: 'pt' | 'en'; // Garantir que o tipo de language seja apenas 'pt' ou 'en'
  changeLanguage: (newLanguage: 'pt' | 'en') => void; // Ajustar a função changeLanguage para aceitar apenas 'pt' ou 'en'
}

const Header: React.FC<HeaderProps> = ({ language, changeLanguage }) => {
  // Função auxiliar para lidar com a mudança de idioma
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as 'pt' | 'en'; // Converter o valor do select para 'pt' ou 'en'
    changeLanguage(newLanguage);
  };

  return (
    <header>
      <nav>
        <p>gabriel-estevam</p>
        <ul>
          <Link to="/home" className='link'>
            <li>
              {language === 'pt' ? '_olá' : '_hello'}
            </li>
          </Link>
          <Link to="/about" className='link'>
            <li>
              {language === 'pt' ? '_sobre-mim' : '_about-me'}
            </li>
          </Link>
          <Link to="/projects" className='link'>
            <li>
              {language === 'pt' ? '_projetos' : '_projects'}
            </li>
          </Link>
          <Link to="/contact" className='link'>
            <li>
              {language === 'pt' ? '_contato' : '_contact-me'}
            </li>
          </Link>
        </ul>
      </nav>
      <div className="language-selector">
        <label htmlFor="language">{language === 'pt' ? 'Idioma: ' : 'Language: '}</label>
        <select
          id="language"
          value={language}
          onChange={handleLanguageChange} // Usar a função auxiliar
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
