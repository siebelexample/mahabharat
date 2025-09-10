# Mahabharat Game - Software Requirements

This document outlines the software requirements needed to run and develop the Mahabharat mobile game built with React Native and Unreal Engine integration.

## Table of Contents
- [Development Environment](#development-environment)
- [Mobile Development](#mobile-development)
- [Unreal Engine Requirements](#unreal-engine-requirements)
- [System Requirements](#system-requirements)
- [Installation Guide](#installation-guide)
- [Build and Run](#build-and-run)
- [Troubleshooting](#troubleshooting)

## Development Environment

### Node.js and Package Manager
- **Node.js**: Version 20.x or later
- **npm**: Version 10.x or later (comes with Node.js)
- **yarn**: Version 1.22.x or later (optional, alternative to npm)

### React Native Development
- **React Native CLI**: Latest version
  ```bash
  npm install -g @react-native-community/cli
  ```
- **Metro Bundler**: Included with React Native CLI
- **TypeScript**: Version 5.x (for type safety)

### Code Editor and Tools
- **Visual Studio Code** (recommended) with extensions:
  - React Native Tools
  - TypeScript and JavaScript Language Features
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - ESLint
- **Alternative**: WebStorm, Atom, or any preferred code editor

### Version Control
- **Git**: Latest version for source code management

## Mobile Development

### Android Development
- **Android Studio**: Latest stable version (Hedgehog or later)
- **Android SDK**: API Level 34 (Android 14) minimum
- **Android SDK Build-Tools**: Version 34.0.0 or later
- **Android NDK**: Version 25.x or later (for native modules)
- **Java Development Kit (JDK)**: Version 17 (LTS)

#### Android SDK Components
- Android SDK Platform 34
- Android SDK Platform-Tools
- Android SDK Build-Tools
- Google Play services
- Android Support Repository
- Google Repository

### iOS Development (macOS only)
- **Xcode**: Version 15.x or later
- **iOS SDK**: iOS 17.0 or later
- **CocoaPods**: Latest version
  ```bash
  sudo gem install cocoapods
  ```
- **macOS**: Version 13.0 (Ventura) or later

## Unreal Engine Requirements

### Unreal Engine 5.3+
- **Unreal Engine**: Version 5.3 or later
- **Epic Games Launcher**: For downloading and managing Unreal Engine
- **Visual Studio** (Windows) or **Xcode** (macOS): For Unreal Engine C++ development

### Unreal Engine Mobile Development
- **Android Development**: 
  - Android SDK (same as React Native requirements)
  - Android NDK
  - Gradle 8.0+
- **iOS Development**:
  - Xcode with iOS SDK
  - Apple Developer Account (for device testing and App Store)

### Unreal Engine Plugins
- **Mobile Rendering**: Built-in mobile rendering pipeline
- **Touch Input**: Touch and gesture handling
- **Audio Engine**: For game audio and sound effects
- **Niagara Particle System**: For visual effects
- **React Native Bridge Plugin**: Custom plugin for React Native integration

## System Requirements

### Minimum Hardware Requirements
- **CPU**: Intel i5-8400 / AMD Ryzen 5 2600 or equivalent
- **RAM**: 16 GB (32 GB recommended for Unreal Engine development)
- **Storage**: 100 GB available space (SSD recommended)
- **Graphics**: DirectX 11/12 compatible GPU with 4GB VRAM
- **Network**: Broadband internet connection

### Recommended Hardware
- **CPU**: Intel i7-10700K / AMD Ryzen 7 3700X or better
- **RAM**: 32 GB or more
- **Storage**: 500 GB SSD
- **Graphics**: NVIDIA RTX 3060 / AMD RX 6700 XT or better with 8GB+ VRAM

### Mobile Device Requirements
- **Android**: API Level 24 (Android 7.0) or higher, 4GB RAM minimum
- **iOS**: iOS 13.0 or later, iPhone 8 or newer

## Installation Guide

### 1. Install Node.js and npm
```bash
# Download from https://nodejs.org/
# Verify installation
node --version
npm --version
```

### 2. Install React Native CLI
```bash
npm install -g @react-native-community/cli
```

### 3. Setup Android Development
1. Download and install Android Studio
2. Configure Android SDK and NDK
3. Set environment variables:
   ```bash
   export ANDROID_HOME=$HOME/Android/Sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

### 4. Setup iOS Development (macOS only)
1. Install Xcode from Mac App Store
2. Install Xcode Command Line Tools:
   ```bash
   xcode-select --install
   ```
3. Install CocoaPods:
   ```bash
   sudo gem install cocoapods
   ```

### 5. Install Unreal Engine
1. Download Epic Games Launcher
2. Install Unreal Engine 5.3+
3. Configure for mobile development

### 6. Clone and Setup Project
```bash
# Clone the repository
git clone https://github.com/siebelexample/mahabharat.git
cd mahabharat

# Install dependencies
npm install

# For iOS (macOS only)
cd ios && pod install && cd ..
```

## Build and Run

### Development Mode
```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios
```

### Build for Production
```bash
# Android
cd android
./gradlew assembleRelease

# iOS (macOS only)
# Open ios/MahabharatGame.xcworkspace in Xcode
# Product -> Archive
```

### Unreal Engine Integration
1. Open Unreal Engine project
2. Build the mobile platform
3. Package for Android/iOS
4. Integrate with React Native bridge

## Troubleshooting

### Common Issues

#### Metro Bundler Issues
```bash
# Clear Metro cache
npx react-native start --reset-cache
```

#### Android Build Issues
```bash
# Clean and rebuild
cd android
./gradlew clean
cd ..
npm run android
```

#### iOS Build Issues
```bash
# Clean iOS build
cd ios
xcodebuild clean
cd ..
npm run ios
```

#### Unreal Engine Issues
- Ensure proper mobile platform installation
- Check NDK/SDK compatibility
- Verify memory requirements are met

### Performance Optimization
- Use Release builds for testing
- Optimize Unreal Engine mobile settings
- Profile on actual devices
- Monitor memory usage

### Development Tips
1. Use physical devices for testing when possible
2. Monitor performance metrics regularly
3. Test on various device configurations
4. Keep React Native and Unreal Engine versions updated
5. Use source control for both React Native and Unreal Engine assets

## Support and Resources

### Documentation
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Unreal Engine Mobile Development](https://docs.unrealengine.com/5.3/en-US/mobile-game-development-in-unreal-engine/)
- [Android Developer Documentation](https://developer.android.com/)
- [iOS Developer Documentation](https://developer.apple.com/documentation/)

### Community
- React Native Community Discord
- Unreal Engine Forums
- Stack Overflow
- GitHub Issues

For specific issues related to this project, please refer to the project's GitHub repository issues section.