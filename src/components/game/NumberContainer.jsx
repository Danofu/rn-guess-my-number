import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import Colors from 'constants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

NumberContainer.propTypes = {
  children: PropTypes.node,
};

NumberContainer.defaultProps = {
  children: undefined,
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    margin: 24,
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    fontSize: 36,
  },
});
