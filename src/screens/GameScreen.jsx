import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import NumberContainer from 'components/game/NumberContainer';
import Title from 'components/ui/Title';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return rndNum;
};

function GameScreen({ guessNumber }) {
  const initialGuess = generateRandomBetween(1, 100, guessNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent&apos;s Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower ?</Text>
        {/* + -*/}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

GameScreen.propTypes = {
  guessNumber: PropTypes.number.isRequired,
}

GameScreen.defautlProps = {
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
