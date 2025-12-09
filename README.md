# React Chess Game

A modern, interactive Chess application built with React, TypeScript, and Vite. This project features a fully functional chess engine, smooth animations, and sound effects for an immersive experience.

## Features

-   **Game Modes**:
    -   **Player vs Player (PvP)**: Play against a friend on the same device.
    -   **Player vs Computer (PvC)**: Challenge the computer (Basic AI).
-   **Game Logic**:
    -   Complete chess rules implementation using `chess.js`.
    -   Check, Checkmate, and Stalemate detection.
    -   Move validation and legal move highlighting.
    -   Pawn promotion.
-   **User Interface**:
    -   Responsive design.
    -   Smooth animations using `framer-motion`.
    -   Interactive board with drag-and-drop or click-to-move (depending on implementation).
    -   Game Over mechanism with sound effects (Victory/Defeat/Draw).
-   **Persistence**:
    -   Auto-save game state to LocalStorage so you can resume later.

## Tech Stack

-   **Frontend**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: CSS Modules & Vanilla CSS
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Logic**: [Chess.js](https://github.com/jhlywa/chess.js)
-   **Icons**: [Lucide React](https://lucide.dev/)

## Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/chess-game.git
    cd chess-game
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## Usage

-   **Start Game**: The game starts automatically.
-   **Controls**: Use the control panel to Reset the game, Undo moves, or Flip the board.
-   **Settings**: Switch between PvP and PvC modes.

## License

This project is open source and available under the [MIT License](LICENSE).
