import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { useState } from 'react';

import Colors from 'constants/colors';
import GameScreen from 'screens/GameScreen';
import StartGameScreen from 'screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(0);

  const startGameHandler = (number) => setUserNumber(number);

  let screen = <StartGameScreen onGameStart={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
        source={require('./assets/images/background.png')}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
