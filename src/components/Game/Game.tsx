// src/components/Game.tsx
import React, { useState, useEffect, useRef } from 'react';
import './Game.css';

interface GameProps {
  language: string;
}

const Game: React.FC<GameProps> = ({ language }) => {
  const [snake, setSnake] = useState([[5, 5]]);
  const [food, setFood] = useState([10, 10]);
  const [direction, setDirection] = useState([0, -1]); // Começa se movendo para cima
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false); // Estado para controlar o início do jogo
  const [foodCount, setFoodCount] = useState(10); // Contagem de alimentos
  const [victory, setVictory] = useState(false); // Estado para vitória
  const boardSize = 20;

  const boardRef = useRef<HTMLDivElement>(null);

  const startGame = () => {
    setStarted(true);
    setSnake([[5, 5]]);
    setFood([10, 10]);
    setDirection([0, -1]);
    setGameOver(false);
    setVictory(false);
    setFoodCount(10); // Resetar a contagem de alimentos
  };

  const skipToVictory = () => {
    setVictory(true);
    setStarted(false); // Parar o jogo
  };

  // Movendo a cobra
  const moveSnake = () => {
    if (victory || gameOver) return; // Para o movimento se o jogador vencer ou perder
    const newSnake = [...snake];
    const head = newSnake[0];
    const newHead = [head[0] + direction[0], head[1] + direction[1]];

    // Verificar colisão com borda ou com o próprio corpo
    if (
      newHead[0] < 0 || newHead[1] < 0 ||
      newHead[0] >= boardSize || newHead[1] >= boardSize ||
      newSnake.some(segment => segment[0] === newHead[0] && segment[1] === newHead[1])
    ) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(newHead); // Adicionar nova cabeça

    // Verificar se a cobra comeu a comida
    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood([Math.floor(Math.random() * boardSize), Math.floor(Math.random() * boardSize)]);
      setFoodCount(foodCount - 1); // Diminuir contagem de alimentos

      // Verificar se todos os alimentos foram consumidos
      if (foodCount - 1 === 0) {
        setVictory(true); // Definir estado de vitória
        setStarted(false); // Parar o jogo
      }
    } else {
      newSnake.pop(); // Remover a cauda
    }

    setSnake(newSnake);
  };

  // Capturando teclas de direção
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
        setDirection([0, -1]);
        break;
      case 'ArrowDown':
        setDirection([0, 1]);
        break;
      case 'ArrowLeft':
        setDirection([-1, 0]);
        break;
      case 'ArrowRight':
        setDirection([1, 0]);
        break;
    }
  };

  // Atualizando o estado a cada intervalo (movendo a cobra)
  useEffect(() => {
    if (!gameOver && started) {
      const interval = setInterval(moveSnake, 200); // Atualizar a cada 200ms
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        clearInterval(interval);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [snake, direction, gameOver, started]);

  return (
    <div className="game-container">
      <div className="game-layout">
        <div className="game-board" ref={boardRef}>
          {gameOver && (
            <div className="game-over">
              <p>{language === 'pt' ? 'Fim de Jogo' : 'Game Over'}</p>
              <button className="restart-btn" onClick={startGame}>
                {language === 'pt' ? 'Reiniciar Jogo' : 'Restart Game'}
              </button>
            </div>
          )}
          {snake.map((segment, index) => (
            <div
              key={index}
              className="snake-segment"
              style={{ top: `${segment[1] * 20}px`, left: `${segment[0] * 20}px` }}
            ></div>
          ))}
          <div
            className="food"
            style={{ top: `${food[1] * 20}px`, left: `${food[0] * 20}px` }}
          ></div>

          {!started && !victory && !gameOver && (
            <button className="start-game-btn" onClick={startGame}>
              {language === 'pt' ? 'Iniciar Jogo' : 'Start Game'}
            </button>
          )}

          {victory && (
            <div className="victory-screen">
              {language === 'pt' ? 'Você venceu!' : 'Victory!'}
              <button className="restart-btn" onClick={startGame}>
                {language === 'pt' ? 'Reiniciar Jogo' : 'Restart Game'}
              </button>
            </div>
          )}
        </div>
        <div className="game-sidebar">
          <div className="controls">
            <p>// {language === 'pt' ? 'use o teclado' : 'use keyboard'}</p>
            <p>// {language === 'pt' ? 'setas para jogar' : 'arrows to play'}</p>
            <div className="arrows">
              <div className="arrow-up">▲</div>
              <div className='arrows-down'>
              <div className="arrow-left">◀</div>
              <div className="arrow-down">▼</div>
              <div className="arrow-right">▶</div>
              </div>
            </div>
          </div>
          <div className="food-indicator">
            <p>// {language === 'pt' ? 'alimentos restantes' : 'food left'}</p>
            <div className="food-dots">
              {Array.from({ length: foodCount }).map((_, index) => (
                <div key={index} className="food-dot"></div>
              ))}
            </div>
          </div>
          <button className="skip-btn" onClick={skipToVictory}>
            {language === 'pt' ? 'Pular' : 'Skip'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
