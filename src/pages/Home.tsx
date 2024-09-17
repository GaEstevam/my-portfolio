import React from 'react';
import '../App.css';
import Main from '../components/Main/Main';
import Game from '../components/Game/Game';

interface HomeProps {
  language: string;
}

const Home: React.FC<HomeProps> = ({ language }) => {
  return (
    <div className="content">
      <Main language={language} />
      <Game language={language} />
    </div>
  );
};

export default Home;
