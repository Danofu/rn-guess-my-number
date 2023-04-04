import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

Title.propTypes = {
  children: PropTypes.node,
};

Title.defaultProps = {
  children: undefined,
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DDB52F',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#DDB52F',
    padding: 12,
  },
});
