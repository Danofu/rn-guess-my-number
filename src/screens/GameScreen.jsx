import { StyleSheet, Text, View } from 'react-native';

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Game Screen</Text>
      {/* GUESS */}
      <View>
        <Text>Higher or lower ?</Text>
        {/* + -*/}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12
  }
});
