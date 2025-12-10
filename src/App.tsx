import React from 'react';
import { GameProvider } from './context/GameContext';
import { Board } from './components/Board';
// import { Controls } from './components/Controls'; // Removed
import { Header } from './components/Header';
import './App.css';

import { GameOverModal } from './components/GameOverModal';

const AppContent: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="game-area">
        <Board />
        <GameOverModal />
      </div>
      {/* <Controls /> Removed */}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;
