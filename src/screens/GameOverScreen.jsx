import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';

import Colors from 'constants/colors';
import PrimaryButton from 'components/ui/PrimaryButton';
import Title from 'components/ui/Title';

function GameOverScreen({ roundsNumber, guessNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER !</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('images/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{' '}
        <Text style={styles.highlight}>{guessNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

GameOverScreen.propTypes = {
  roundsNumber: PropTypes.number,
  guessNumber: PropTypes.number,
  onStartNewGame: PropTypes.func
}

GameOverScreen.defaultProps = {
  roundsNumber: NaN,
  guessNumber: NaN,
  onStartNewGame: () => {}
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
