import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

import Colors from 'constants/colors';

function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

InstructionText.propTypes = {
  children: PropTypes.node
};

InstructionText.defaultProps = {
  children: undefined
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24
  },
})
