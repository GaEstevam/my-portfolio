import React, { useState } from 'react';
import './Projects.css'; // Importa o CSS
import { FaReact, FaVuejs, FaAngular, FaHtml5, FaCss3Alt, FaLaptopCode } from 'react-icons/fa';
import { projectData, Project } from '../../data/projectsData'; // Importa os dados dos projetos

interface ProjectsProps {
  language: 'pt' | 'en';
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const handleTechToggle = (tech: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const techIcons: { [key: string]: React.ReactNode } = {
    React: <FaReact />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    Vue: <FaVuejs />,
    Angular: <FaAngular />,
    Gatsby: <FaLaptopCode />,
    Flutter: <FaLaptopCode />,
  };

  // Filtragem dos projetos com base nas tecnologias selecionadas
  const filteredProjects = projectData.filter((project) =>
    selectedTechnologies.length === 0 || // Se não houver tecnologias selecionadas, mostra todos
    project.tech.some((tech) => selectedTechnologies.includes(tech))
  );

  return (
    <div className="projects-container">
      <div className="sidebar">
        {Object.keys(techIcons).map((tech) => (
          <div key={tech} className="sidebar-item">
            <input
              type="checkbox"
              checked={selectedTechnologies.includes(tech)}
              onChange={() => handleTechToggle(tech)}
            />
            {techIcons[tech]}
            <span>{tech}</span>
          </div>
        ))}
      </div>
      <div className="projects-content">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span>{project.subtitle}</span>
              <div className="icon-container">
                {project.tech.map((tech) => techIcons[tech])} {/* Exibe os ícones de todas as tecnologias do projeto */}
              </div>
            </div>
            <p>{project.description}</p>
            {/* Botão agora redireciona para o link do GitHub */}
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="view-project">view-project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
