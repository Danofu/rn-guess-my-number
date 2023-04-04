import PropTypes from 'prop-types';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

import Colors from 'constants/colors';
import PrimaryButton from 'components/ui/PrimaryButton';

function StartGameScreen({ onGameStart }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (text) => setEnteredNumber(text);

  const resetInputHandler = () => setEnteredNumber('');

  const confirmInputHandler = () => {
    const number = Number(enteredNumber);
    if (Number.isNaN(number) || number <= 0 || number > 99) {
      Alert.alert('Invalid number !', 'Number has to be a number between 1 and 99.', [
        { onPress: resetInputHandler, style: 'destructive', text: 'Okay' },
      ]);
      return;
    }

    onGameStart(number);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="number-pad"
        maxLength={2}
        onChangeText={numberInputHandler}
        style={styles.numberInput}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

StartGameScreen.propTypes = {
  onGameStart: PropTypes.func,
};

StartGameScreen.defaultProps = {
  onGameStart: () => {}
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
