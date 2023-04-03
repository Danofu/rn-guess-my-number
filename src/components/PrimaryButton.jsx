import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

function PrimaryButton({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node,
};

PrimaryButton.defaultProps = {
  children: undefined,
};

export default PrimaryButton;
