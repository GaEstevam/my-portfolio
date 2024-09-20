import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  language: 'pt' | 'en'; 
  changeLanguage: (newLanguage: 'pt' | 'en') => void; 
}

const Header: React.FC<HeaderProps> = ({ language, changeLanguage }) => {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as 'pt' | 'en'; 
    changeLanguage(newLanguage);
  };

  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header>
      <nav className='header-nav'>
        <p>gabriel-estevam</p>
        <ul className='header-list'>
          <Link to="/my-portfolio" className={`link ${isActive('/my-portfolio') ? 'active' : ''}`}>
            <li className='item-header-list'>
              {language === 'pt' ? '_olá' : '_hello'}
            </li>
          </Link>
          <Link to="/about" className={`link ${isActive('/about') ? 'active' : ''}`}>
            <li className='item-header-list'>
              {language === 'pt' ? '_sobre-mim' : '_about-me'}
            </li>
          </Link>
          <Link to="/projects" className={`link ${isActive('/projects') ? 'active' : ''}`}>
            <li className='item-header-list'>
              {language === 'pt' ? '_projetos' : '_projects'}
            </li>
          </Link>
          {/* 
          <Link to="/contact" className={`link ${isActive('/contact') ? 'active' : ''}`}>
            <li className='item-header-list'>
              {language === 'pt' ? '_contato' : '_contact-me'}
            </li>
          </Link>
          */}
        </ul>
      </nav>
      <div className="language-selector">
        <select
          id="language"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
