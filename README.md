
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
=======
# Mahabharat: The Epic Journey

A puzzle/stage board game where players move their character across a grid to discover the epic tales of the Mahabharat.

## Game Features

- **Interactive Board**: 6x6 grid with visual indicators for story locations
- **Character Movement**: Move using arrow keys or by clicking on adjacent tiles
- **Rich Stories**: 36 unique Mahabharat stories mapped to different board positions
- **Visual Design**: Beautiful themed styling with ancient Indian aesthetics
- **Story Discovery**: Each tile contains a different part of the epic journey
- **Reset Functionality**: Reset the game to start from the beginning

## How to Play

1. **Starting Position**: You begin at position (1,1) with "The Beginning - Hastinapura"
2. **Movement**: 
   - Use arrow keys (↑↓←→) to move your character
   - Or click on adjacent tiles to move
3. **Discover Stories**: Each position reveals a different story from the Mahabharat
4. **Special Tiles**: 
   - 📖 Purple tiles contain regular stories
   - ⭐ Golden tiles mark special locations (corners and center)
5. **Reset**: Click "Reset Game" to return to the starting position

## Game Elements

- **Character**: 🚶 Red tile showing current player position
- **Story Tiles**: Purple tiles with book icons containing epic tales
- **Special Tiles**: Golden tiles marking significant locations
- **Story Panel**: Displays the current story and position information

## Stories Covered

The game covers the complete journey of the Mahabharat epic including:

- The origins in Hastinapura
- Bhishma's vow and the education of princes
- Draupadi's swayamvara and the game of dice
- The forest exile and meeting with sages
- Arjuna's penance and divine weapons
- The great war of Kurukshetra
- The Bhagavad Gita and key battles
- The aftermath and final journey
- Divine teachings and eternal messages

## Technical Details

- **Technology**: HTML5, CSS3, JavaScript (Vanilla)
- **Responsive**: Works on desktop and mobile devices
- **Browser Support**: All modern browsers
- **No Dependencies**: Pure web technologies, no external libraries

## Running the Game

Simply open `index.html` in a web browser, or serve it using any web server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server

# Then visit http://localhost:8000
```

## Story Examples

- **Position (1,1)**: "The Beginning - Hastinapura" - The epic begins
- **Position (2,2)**: "Meeting with Sage Vyasa" - Wisdom and guidance
- **Position (3,3)**: "The Horse Sacrifice" - Restoration of dharma
- **Position (6,6)**: "The Eternal Message" - The timeless teachings

Experience the complete journey through one of humanity's greatest epics!

