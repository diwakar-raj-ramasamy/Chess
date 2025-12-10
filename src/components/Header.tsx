import React from 'react';
import { useGame } from '../context/GameContext';
import { RotateCcw, Flag, Play, RefreshCw, Repeat, User, Cpu } from 'lucide-react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    const {
        turn,
        resetGame,
        undoMove,
        mode,
        surrenderGame,
        hasSavedGame,
        resumeGame,
        orientation,
        setOrientation,
        autoFlip,
        setAutoFlip,
        setMode
    } = useGame();

    return (
        <div className={styles.header}>
            <div className={styles.leftSection}>
                <h1 className={styles.title}>CHESS MASTER</h1>
                <div className={styles.turnIndicator}>
                    <span className={turn === 'w' ? styles.activeTurn : ''}>White</span>
                    <span className={styles.vs}>vs</span>
                    <span className={turn === 'b' ? styles.activeTurn : ''}>Black</span>
                </div>
            </div>

            <div className={styles.actions}>
                <div className={styles.modeSelect}>
                    <button
                        className={`${styles.btn} ${mode === 'PvP' ? styles.activeMode : ''}`}
                        onClick={() => setMode('PvP')}
                        title="Player vs Player"
                    >
                        <User size={18} />
                        <span className={styles.btnText}>PvP</span>
                    </button>
                    <button
                        className={`${styles.btn} ${mode === 'PvC' ? styles.activeMode : ''}`}
                        onClick={() => setMode('PvC')}
                        title="Player vs Computer"
                    >
                        <Cpu size={18} />
                        <span className={styles.btnText}>PvC</span>
                    </button>
                </div>
                <div className={styles.divider} />

                <button
                    className={styles.btn}
                    onClick={() => setOrientation(orientation === 'w' ? 'b' : 'w')}
                    title="Flip Board"
                >
                    <RefreshCw size={18} />
                    <span className={styles.btnText}>Flip</span>
                </button>

                <button
                    className={styles.btn}
                    style={autoFlip ? { backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6' } : {}}
                    onClick={() => setAutoFlip(!autoFlip)}
                    title={`Auto Flip ${autoFlip ? '(On)' : '(Off)'}`}
                >
                    <Repeat size={18} />
                    <span className={styles.btnText}>Auto Flip</span>
                </button>

                <button className={styles.btn} onClick={resetGame} title="New Game">
                    <RotateCcw size={18} />
                    <span className={styles.btnText}>New Game</span>
                </button>

                <button
                    className={styles.btn}
                    onClick={undoMove}
                    disabled={mode === 'PvC' && turn === 'b'} // Disable undo during computer turn if that logic applies
                    title="Undo"
                >
                    {/* Using RotateCcw for undo as well, maybe ArrowLeft is better? existing was just Text. Let's stick to icon context. */}
                    {/* Correction: The previous code didn't have an icon for Undo, just text. I'll use a distinct icon. */}
                    <RotateCcw size={18} style={{ transform: 'scaleX(-1)' }} />
                    <span className={styles.btnText}>Undo</span>
                </button>

                <button className={`${styles.btn} ${styles.dangerBtn}`} onClick={surrenderGame} title="Surrender">
                    <Flag size={18} />
                    <span className={styles.btnText}>Surrender</span>
                </button>

                {hasSavedGame && (
                    <button className={`${styles.btn} ${styles.primaryBtn}`} onClick={resumeGame} title="Resume Saved">
                        <Play size={18} />
                        <span className={styles.btnText}>Resume</span>
                    </button>
                )}
            </div>
        </div>
    );
};
