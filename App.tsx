/**
 * Mahabharat Game - React Native with Unreal Engine Integration
 * Main application entry point
 *
 * @format
 */

import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Alert } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { MenuScreen } from './src/screens/MenuScreen';
import { GameScreen } from './src/screens/GameScreen';

type AppScreen = 'menu' | 'game' | 'settings' | 'about';

function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('menu');

  const handleStartGame = () => {
    setCurrentScreen('game');
  };

  const handleBackToMenu = () => {
    setCurrentScreen('menu');
  };

  const handleSettings = () => {
    Alert.alert(
      'Settings',
      'Settings screen would contain:\n\n' +
      '• Graphics Quality\n' +
      '• Audio Settings\n' +
      '• Control Settings\n' +
      '• Language Selection\n' +
      '• Performance Options',
      [{ text: 'OK' }]
    );
  };

  const handleAbout = () => {
    Alert.alert(
      'About Mahabharat Game',
      'A mobile game based on the epic Mahabharat.\n\n' +
      'Built with:\n' +
      '• React Native for UI\n' +
      '• Unreal Engine 5.3 for game rendering\n' +
      '• TypeScript for type safety\n\n' +
      'Experience the greatest epic ever told in an immersive mobile gaming experience.',
      [{ text: 'OK' }]
    );
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'menu':
        return (
          <MenuScreen
            onStartGame={handleStartGame}
            onSettings={handleSettings}
            onAbout={handleAbout}
          />
        );
      case 'game':
        return <GameScreen onBackToMenu={handleBackToMenu} />;
      default:
        return (
          <MenuScreen
            onStartGame={handleStartGame}
            onSettings={handleSettings}
            onAbout={handleAbout}
          />
        );
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        {renderCurrentScreen()}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
