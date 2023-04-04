import PropTypes from 'prop-types';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';

import NumberContainer from 'components/game/NumberContainer';
import PrimaryButton from 'components/ui/PrimaryButton';
import Title from 'components/ui/Title';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return rndNum;
};

function GameScreen({ guessNumber, onGameOver }) {
  const minBoundary = useRef(1);
  const maxBoundary = useRef(100);
  const initialGuess = generateRandomBetween(1, 100, guessNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = useCallback(
    (direction) => {
      if (
        (direction === 'lower' && currentGuess < guessNumber) ||
        (direction === 'greater' && currentGuess > guessNumber)
      ) {
        Alert.alert("Don't lie !", 'You know that this is wrong...', [{ text: 'Sorry !', style: 'cancel' }]);
        return;
      }

      switch (direction) {
        case 'lower':
          maxBoundary.current = currentGuess;
          break;
        default:
          minBoundary.current = currentGuess + 1;
          break;
      }

      const newGuess = generateRandomBetween(minBoundary.current, maxBoundary.current, currentGuess);
      setCurrentGuess(newGuess);
    },
    [currentGuess, guessNumber]
  );

  const nextGreaterGuessHandler = useCallback(() => nextGuessHandler.bind(this, 'greater')(), [nextGuessHandler]);
  const nextLowerGuessHandler = useCallback(() => nextGuessHandler.bind(this, 'lower')(), [nextGuessHandler]);

  useEffect(() => {
    if (currentGuess === guessNumber) {
      onGameOver();
    }
  }, [currentGuess, guessNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent&apos;s Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower ?</Text>
        <View>
          <PrimaryButton onPress={nextGreaterGuessHandler}>+</PrimaryButton>
          <PrimaryButton onPress={nextLowerGuessHandler}>-</PrimaryButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

GameScreen.propTypes = {
  guessNumber: PropTypes.number.isRequired,
  onGameOver: PropTypes.func,
};

GameScreen.defaultProps = {
  onGameOver: () => {}
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
