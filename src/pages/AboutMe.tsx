import React from 'react';

interface AboutMeProps {
  language: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ language }) => {
  return (
    <div>
      <h1>{language === 'pt' ? 'Sobre Mim' : 'About Me'}</h1>
      <p>{language === 'pt' ? 'Aqui você pode saber mais sobre mim.' : 'Here you can learn more about me.'}</p>
    </div>
  );
};

export default AboutMe;
