import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className='footer'>
      <p>
        {language === 'pt' ? 'Me encontre em:' : 'Find me on:'}
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://facebook.com/username" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
