import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, changeLanguage }) => {
  return (
    <header>
      <nav>
        <ul>
          <p>gabriel-estevam</p>
          <li>
            <Link to="/">{language === 'pt' ? '_olá' : '_hello'}</Link>
          </li>
          <li>
            <Link to="/about">{language === 'pt' ? '_sobre-mim' : '_about-me'}</Link>
          </li>
          <li>
            <Link to="/projects">{language === 'pt' ? '_projetos' : '_projects'}</Link>
          </li>
          <li>
            <Link to="/contact">{language === 'pt' ? '_contato' : '_contact-me'}</Link>
          </li>
        </ul>
      </nav>
      <div className="language-selector">
        <label htmlFor="language">{language === 'pt' ? 'Idioma: ' : 'Language: '}</label>
        <select
          id="language"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
