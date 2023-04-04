import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

import Colors from 'constants/colors';

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

InstructionText.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

InstructionText.defaultProps = {
  children: undefined,
  style: {},
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
