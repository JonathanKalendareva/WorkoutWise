import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity,Dimensions } from 'react-native';

export default function App() {
  return (
    // title and home image
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>fitnesstracker™</Text>
      <Image
        style={styles.homeImage}
        source={require('./assets/goat.jpg')} />

      <TouchableOpacity onPress={console.log(Dimensions.get('window').width)}>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>sign up</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={console.log(Dimensions.get('window').height)}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>login</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
  },

  signUpContainer: {
    marginTop: 200,
    backgroundColor: "#FDB927",
    padding: 15,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10
  },

  signUpText: {
    fontSize: 25,
    color: "#552583",
    fontWeight: "bold"
  },

  loginContainer: {
    marginTop: 10,
    backgroundColor: "#552583",
    padding: 10,
    alignItems: "center",
  },

  loginText: {
    fontSize: 25,
    color: "#FDB927",
    fontWeight: "bold"
  }
}
);
