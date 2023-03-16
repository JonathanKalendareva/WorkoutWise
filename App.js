import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>fitnesstracker</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/goat.jpg')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#552583',
    alignItems: 'center',
    justifyContent: 'center',

  },

  //hello my name is jacka
});
