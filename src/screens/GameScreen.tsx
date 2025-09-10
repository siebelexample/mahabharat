/**
 * GameScreen.tsx - Main game screen that hosts the Unreal Engine view
 */

import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Alert,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameEngine, UnrealEngineConfig, GameState } from '../game/GameEngine';

const { width, height } = Dimensions.get('window');

interface GameScreenProps {
  onBackToMenu: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ onBackToMenu }) => {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isEngineReady, setIsEngineReady] = useState(false);
  const gameEngineRef = useRef<GameEngine | null>(null);

  useEffect(() => {
    initializeGame();
    return () => {
      if (gameEngineRef.current) {
        gameEngineRef.current.stopGame();
      }
    };
  }, []);

  const initializeGame = async () => {
    try {
      const config: UnrealEngineConfig = {
        engineVersion: '5.3',
        projectPath: '/UnrealProjects/MahabharatGame',
        gameMode: 'development',
        renderSettings: {
          quality: 'high',
          fps: 60,
          resolution: {
            width: width,
            height: height,
          },
        },
      };

      const gameEngine = new GameEngine(config);
      gameEngineRef.current = gameEngine;

      const initialized = await gameEngine.initializeUnrealEngine();
      if (initialized) {
        setIsEngineReady(true);
        setGameState(gameEngine.getGameState());
        console.log('Game engine initialized successfully');
      } else {
        Alert.alert('Error', 'Failed to initialize Unreal Engine');
      }
    } catch (error) {
      console.error('Game initialization error:', error);
      Alert.alert('Error', 'Failed to initialize game');
    }
  };

  const handleStartGame = () => {
    if (gameEngineRef.current && isEngineReady) {
      gameEngineRef.current.startGame();
      setGameState(gameEngineRef.current.getGameState());
    }
  };

  const handlePauseGame = () => {
    if (gameEngineRef.current) {
      if (gameState?.gameMode === 'playing') {
        gameEngineRef.current.pauseGame();
      } else if (gameState?.gameMode === 'paused') {
        gameEngineRef.current.resumeGame();
      }
      setGameState(gameEngineRef.current.getGameState());
    }
  };

  const handleTouchInput = (event: any) => {
    if (gameEngineRef.current && gameState?.gameMode === 'playing') {
      const { locationX, locationY } = event.nativeEvent;
      gameEngineRef.current.handleInput('touch', {
        x: locationX,
        y: locationY,
        timestamp: Date.now(),
      });
    }
  };

  const renderGameUI = () => {
    if (!gameState) return null;

    return (
      <View style={styles.gameUI}>
        <View style={styles.topBar}>
          <Text style={styles.scoreText}>Score: {gameState.score}</Text>
          <Text style={styles.levelText}>Level: {gameState.currentLevel}</Text>
          <Text style={styles.healthText}>Health: {gameState.playerHealth}%</Text>
        </View>

        <View style={styles.bottomControls}>
          {gameState.gameMode === 'menu' && (
            <TouchableOpacity style={styles.startButton} onPress={handleStartGame}>
              <Text style={styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
          )}

          {gameState.gameMode === 'playing' && (
            <TouchableOpacity style={styles.pauseButton} onPress={handlePauseGame}>
              <Text style={styles.buttonText}>Pause</Text>
            </TouchableOpacity>
          )}

          {gameState.gameMode === 'paused' && (
            <TouchableOpacity style={styles.resumeButton} onPress={handlePauseGame}>
              <Text style={styles.buttonText}>Resume</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.menuButton} onPress={onBackToMenu}>
            <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      
      {/* Unreal Engine Render View - This would be replaced with actual Unreal Engine view */}
      <View style={styles.unrealEngineView} onTouchStart={handleTouchInput}>
        {!isEngineReady ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Initializing Unreal Engine...</Text>
          </View>
        ) : (
          <View style={styles.gameRenderArea}>
            <Text style={styles.placeholderText}>
              Unreal Engine Render View
              {'\n'}
              (Mahabharat Game World)
              {'\n\n'}
              Touch to interact with the game
            </Text>
          </View>
        )}
      </View>

      {/* Game UI Overlay */}
      {renderGameUI()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  unrealEngineView: {
    flex: 1,
    backgroundColor: '#001122',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  gameRenderArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#112233',
  },
  placeholderText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
  },
  gameUI: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'box-none',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  scoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  levelText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  healthText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomControls: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  startButton: {
    backgroundColor: '#00AA00',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  pauseButton: {
    backgroundColor: '#FFAA00',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  resumeButton: {
    backgroundColor: '#00AA00',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  menuButton: {
    backgroundColor: '#AA0000',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});