import * as SplashScreen from 'expo-splash-screen';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { useFonts } from 'expo-font';

import Colors from 'constants/colors';
import GameOverScreen from 'screens/GameOverScreen';
import GameScreen from 'screens/GameScreen';
import StartGameScreen from 'screens/StartGameScreen';

SplashScreen.preventAutoHideAsync().then();

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('fonts/OpenSans-Bold.ttf'),
  });

  const startGameHandler = (number) => {
    setUserNumber(number);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const layoutChangHandler = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const startNewGameHandler = () => {
    setUserNumber(0);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onGameStart={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen guessNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen onStartNewGame={startNewGameHandler} guessNumber={userNumber} roundsNumber={guessRounds} />
    );
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        onLayout={layoutChangHandler}
        style={styles.rootScreen}
      >
        <ImageBackground
          imageStyle={styles.backgroundImage}
          resizeMode="cover"
          source={require('images/background.png')}
          style={styles.rootScreen}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
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
