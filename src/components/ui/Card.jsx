import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Colors from 'constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: undefined,
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});