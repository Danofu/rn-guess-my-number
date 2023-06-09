import PropTypes from 'prop-types';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { useState } from 'react';

import Card from 'components/ui/Card';
import Colors from 'constants/colors';
import InstructionText from 'components/ui/InstructionText';
import PrimaryButton from 'components/ui/PrimaryButton';
import Title from 'components/ui/Title';

function StartGameScreen({ onGameStart }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const { height } = useWindowDimensions();

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

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen} alwaysBounceVertical={false}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

StartGameScreen.propTypes = {
  onGameStart: PropTypes.func,
};

StartGameScreen.defaultProps = {
  onGameStart: () => {},
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
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
