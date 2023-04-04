import PropTypes from 'prop-types';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function PrimaryButton({ children }) {
  // eslint-disable-next-line no-console
  const pressHandler = () => console.log(`[ PrimaryButton ]: onPress fires`);

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
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

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#72063C',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
