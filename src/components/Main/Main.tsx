import React from 'react';
import './Main.css'

interface MainProps {
  language: string;
}

const Main: React.FC<MainProps> = ({ language }) => {
  return (
    <main>
      <h1>{language === 'pt' ? 'Olá, eu sou' : 'Hi, I am'}</h1>
      <h2>Gabriel Estevam</h2>
      <h3 className='function'>{language === 'pt' ? '> Desenvolvedor Front-end' : '> Front-end Developer'}</h3>
      <p className='comment'>{language === 'pt' ? '// complete o jogo para continuar' : '// complete the game to continue'}</p>
      <p className='comment'>{language === 'pt' ? '// você também pode ver no meu Github' : '// you can also see it on my Github'}</p>
      <p><text className='function'>const</text> <text className='link'>githubLink</text> = <a href="https://github.com/GaEstevam" target="_blank" className='text'>"https://github.com/GaEstevam"</a></p>
    </main>
  );
};

export default Main;
