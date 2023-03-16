import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeViewText, Image } from 'react-native';

export default function App() {
  return (
    <SafeViewText style={styles.container}>
      <Text>fitnesstracker</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/goat.jpg')} />
    </SafeViewText>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#552583',
    alignItems: 'center',
    justifyContent: 'center',


  },
});
