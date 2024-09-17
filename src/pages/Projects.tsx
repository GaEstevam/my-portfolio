import React from 'react';

interface ProjectsProps {
  language: string;
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  return (
    <div>
      <h1>{language === 'pt' ? 'Projetos' : 'Projects'}</h1>
      <p>{language === 'pt' ? 'Veja alguns dos meus projetos aqui.' : 'Check out some of my projects here.'}</p>
    </div>
  );
};

export default Projects;
