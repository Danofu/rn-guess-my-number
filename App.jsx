import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet } from 'react-native';

import StartGameScreen from 'screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#4E0329', '#DDB52F']} style={styles.rootScreen}>
      <ImageBackground
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
        source={require('./assets/images/background.png')}
        style={styles.rootScreen}
      >
        <StartGameScreen />
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
