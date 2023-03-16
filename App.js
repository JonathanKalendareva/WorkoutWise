import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>fitnesstracker</Text>
      <Image
        style={styles.homeImage}
        source={require('./assets/goat.jpg')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#552583',
    alignItems: 'center',
  },

  title: {
    marginTop: 30,
    color: '#FDB927',
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold',
  },

  homeImage: {
    width: 350,
    height: 300,
    marginTop: 100,
  }
});
