import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaFolder, FaFile, FaChevronRight, FaChevronDown } from "react-icons/fa";
import './AboutMe.css'; // Importando o CSS

interface AboutMeProps {
  language: 'pt' | 'en'; // Definindo o tipo exato do language como 'pt' ou 'en'
}

// Tipagem do ContentMap
type ContentMap = {
  [key: string]: { pt: string; en: string }
};

const contentMap: ContentMap = {
  bio: {
    pt: `/**
    * Sobre mim
    * Tenho 5 anos de experiência em desenvolvimento web,
    * lorem ipsum dolor sit amet, consectetur adipiscing elit,
    * sed do eiusmod tempor incididunt ut labore et dolore
    * magna aliqua. Ut enim ad minim veniam, quis nostrud
    * exercitation ullamco laboris nisi ut aliquip ex ea
    * commodo consequat. Duis aute irure dolor in reprehenderit
    * in voluptate velit esse cillum dolore eu fugiat nulla
    * pariatur. Excepteur sint occaecat cupidatat non proident,
    * sunt in culpa qui officia deserunt mollit anim id est laborum.
    */`,
    en: `/**
    * About me
    * I have 5 years of experience in web development,
    * lorem ipsum dolor sit amet, consectetur adipiscing elit,
    * sed do eiusmod tempor incididunt ut labore et dolore
    * magna aliqua. Ut enim ad minim veniam, quis nostrud
    * exercitation ullamco laboris nisi ut aliquip ex ea
    * commodo consequat. Duis aute irure dolor in reprehenderit
    * in voluptate velit esse cillum dolore eu fugiat nulla
    * pariatur. Excepteur sint occaecat cupidatat non proident,
    * sunt in culpa qui officia deserunt mollit anim id est laborum.
    */`,
  },
  interests: {
    pt: `/**
    * Interesses
    * Sou apaixonado por tecnologia, aprender novas
    * linguagens de programação e resolver problemas complexos.
    * Também gosto de viajar, explorar novas culturas e
    * passar tempo com a família e amigos.
    */`,
    en: `/**
    * Interests
    * I am passionate about technology, learning new
    * programming languages, and solving complex problems.
    * I also enjoy traveling, exploring new cultures,
    * and spending time with family and friends.
    */`,
  },
  "high-school": {
    pt: `/**
    * Educação - Ensino Médio
    * Estudei no Colégio XYZ, onde me destaquei
    * em matemática e ciências da computação.
    * Também fui membro do clube de robótica da escola,
    * o que despertou meu interesse por tecnologia e engenharia.
    */`,
    en: `/**
    * High School Education
    * I attended XYZ High School, where I excelled
    * in mathematics and computer science.
    * I was also a member of the school's robotics club,
    * which fueled my interest in technology and engineering.
    */`,
  },
  university: {
    pt: `/**
    * Educação - Universidade
    * Estudei Ciência da Computação na Universidade ABC,
    * com especialização em desenvolvimento web e inteligência artificial.
    * Durante a universidade, completei vários projetos relacionados
    * a ciência de dados e aprendizado de máquina.
    */`,
    en: `/**
    * University Education
    * I pursued a degree in Computer Science at ABC University,
    * specializing in web development and artificial intelligence.
    * During my time at university, I completed several projects
    * related to data science and machine learning.
    */`,
  },
};

const AboutMe: React.FC<AboutMeProps> = ({ language }) => {
  // Define o item bio como selecionado por padrão
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<keyof typeof contentMap>('bio');

  const toggleEducation = () => {
    setIsEducationOpen(!isEducationOpen);
  };

  // Função para alterar o conteúdo do `code-container`
  const handleSelectItem = (item: keyof typeof contentMap) => {
    setSelectedItem(item);
  };

  // Verifica se o item selecionado é uma chave válida de contentMap
  const isValidSelectedItem = (item: keyof typeof contentMap | null): item is keyof typeof contentMap => {
    return item !== null && item in contentMap;
  };

  return (
    <div className="content-aboutMe">
      <div className="sidebar-aboutme">
        <div className="personal-info">
          <h2>{language === 'pt' ? 'Informações Pessoais' : 'Personal Info'}</h2>
          <ul className='personal-info-list'>
            <li 
              onClick={() => handleSelectItem('bio')}
              className={selectedItem === 'bio' ? 'selected' : ''}
            >
              <FaChevronRight style={{ marginRight: '8px' }} />
              <FaFolder style={{ color: '#F07178' }} />
              <span>{language === 'pt' ? 'Bio' : 'Bio'}</span>
            </li>
            <li 
              onClick={() => handleSelectItem('interests')}
              className={selectedItem === 'interests' ? 'selected' : ''}
            >
              <FaChevronRight style={{ marginRight: '8px' }} />
              <FaFolder style={{ color: '#C3E88D' }} />
              <span>{language === 'pt' ? 'Interesses' : 'Interests'}</span>
            </li>
            <li className='education'>
              <div onClick={toggleEducation} style={{ cursor: 'pointer' }} className='education-folder'>
                {isEducationOpen ? <FaChevronDown style={{ marginRight: '8px' }} /> : <FaChevronRight style={{ marginRight: '8px' }} />}
                <FaFolder style={{ color: '#82AAFF' }} />
                <span>{language === 'pt' ? 'Educação' : 'Education'}</span>
              </div>
              {isEducationOpen && (
                <ul className='education-list'>
                  <li 
                    className={`education-list-item ${selectedItem === 'high-school' ? 'selected' : ''}`} 
                    onClick={() => handleSelectItem('high-school')}
                  >
                    <FaFile />
                    <span>{language === 'pt' ? 'Ensino Médio' : 'High-School'}</span>
                  </li>
                  <li 
                    className={`education-list-item ${selectedItem === 'university' ? 'selected' : ''}`} 
                    onClick={() => handleSelectItem('university')}
                  >
                    <FaFile />
                    <span>{language === 'pt' ? 'Universidade' : 'University'}</span>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="contacts">
          <h2>{language === 'pt' ? 'Contatos' : 'Contacts'}</h2>
          <p>
            <FaEnvelope /> user@gmail.com
          </p>
          <p>
            <FaPhone /> +3598246359
          </p>
        </div>
      </div>
      <div className="code-container">
        {isValidSelectedItem(selectedItem) ? (
          <div className="code-content">
            <LineNumbers code={contentMap[selectedItem][language]} />
            <pre className="code-display">
              {contentMap[selectedItem][language]}
            </pre>
          </div>
        ) : (
          <p>{language === 'pt' ? 'Selecione um item para visualizar o conteúdo.' : 'Select an item to view the content.'}</p>
        )}
      </div>

      <div className="main-content">
        <div className="code-snippet">
          <h2>{language === 'pt' ? 'Exibição de Trechos de Código:' : 'Code Snippet Showcase:'}</h2>
          <div className="snippet">
            <p>@username</p>
            <pre>{`
            function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
            }`}</pre>
          </div>
          <div className="snippet">
            <p>@username</p>
            <pre>{`
            export function parseModelTuple(
              response: Response,
              value: { [key: string]: JSONValue } | $ReadOnlyArray<JSONValue>,
            ): any {
              const tuple: [mixed, mixed, mixed, mixed] = (value: any);
            }`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente que gera os números de linha
const LineNumbers: React.FC<{ code: string }> = ({ code }) => {
  const lines = code.split('\n').length;
  return (
    <div className="line-numbers">
      {Array.from({ length: lines }, (_, index) => (
        <div key={index} className="line-number">
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
