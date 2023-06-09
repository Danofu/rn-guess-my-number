import PropTypes from 'prop-types';
import { Alert, FlatList, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useRef, useState } from 'react';

import Card from 'components/ui/Card';
import GuessLogItem from 'components/game/GuessLogItem';
import InstructionText from 'components/ui/InstructionText';
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
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width } = useWindowDimensions();

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
      setGuessRounds((prevGuessRounds) => [newGuess, ...prevGuessRounds]);
    },
    [currentGuess, guessNumber]
  );

  const nextGreaterGuessHandler = useCallback(() => nextGuessHandler.bind(this, 'greater')(), [nextGuessHandler]);
  const nextLowerGuessHandler = useCallback(() => nextGuessHandler.bind(this, 'lower')(), [nextGuessHandler]);

  useEffect(() => {
    if (currentGuess === guessNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, guessNumber, onGameOver, guessRounds.length]);

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower ?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextLowerGuessHandler}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGreaterGuessHandler}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <View style={styles.buttonsContainerWide}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextLowerGuessHandler}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGreaterGuessHandler}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent&apos;s Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem guess={itemData.item} roundNumber={guessRounds.length - itemData.index} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

GameScreen.propTypes = {
  guessNumber: PropTypes.number.isRequired,
  onGameOver: PropTypes.func,
};

GameScreen.defaultProps = {
  onGameOver: () => {},
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
