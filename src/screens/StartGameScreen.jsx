import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

import PrimaryButton from 'components/PrimaryButton';

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (text) => setEnteredNumber(text);

  const confirmInputHandler = () => {}

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
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: '#3B021F',
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
    borderBottomColor: '#DDB52F',
    borderBottomWidth: 2,
    color: '#DDB52F',
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
