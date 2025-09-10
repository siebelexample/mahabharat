/**
 * MenuScreen.tsx - Main menu screen for the Mahabharat Game
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MenuScreenProps {
  onStartGame: () => void;
  onSettings: () => void;
  onAbout: () => void;
}

export const MenuScreen: React.FC<MenuScreenProps> = ({
  onStartGame,
  onSettings,
  onAbout,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Background - In a real app, this would be a beautiful Mahabharat-themed image */}
      <View style={styles.backgroundContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.gameTitle}>MAHABHARAT</Text>
          <Text style={styles.gameSubtitle}>The Epic Mobile Game</Text>
          <Text style={styles.poweredBy}>Powered by Unreal Engine</Text>
        </View>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={onStartGame}>
          <Text style={styles.menuButtonText}>START GAME</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={onSettings}>
          <Text style={styles.menuButtonText}>SETTINGS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={onAbout}>
          <Text style={styles.menuButtonText}>ABOUT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuButton, styles.exitButton]}>
          <Text style={styles.menuButtonText}>EXIT</Text>
        </TouchableOpacity>
      </View>

      {/* Version Info */}
      <View style={styles.versionInfo}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
        <Text style={styles.versionText}>React Native + Unreal Engine 5.3</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001122',
    // Add gradient or image background here
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  gameTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 3,
  },
  gameSubtitle: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
  },
  poweredBy: {
    fontSize: 14,
    color: '#AAA',
    textAlign: 'center',
    marginTop: 20,
  },
  menuContainer: {
    position: 'absolute',
    bottom: 150,
    left: 50,
    right: 50,
    alignItems: 'center',
  },
  menuButton: {
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    borderWidth: 2,
    borderColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 10,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  exitButton: {
    backgroundColor: 'rgba(170, 0, 0, 0.3)',
    borderColor: '#AA0000',
  },
  menuButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  versionInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  versionText: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
  },
});