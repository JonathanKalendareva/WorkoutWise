import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer } from 'react-native';

export function LandingPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* title and homescreen image */}
      <Text style={styles.title}>fitnesstracker™</Text>
      <Image
        style={styles.homeImage}
        source={require('../assets/images/temp3.png')} />

      {/* buttons to navigate to sign up and log in pages */}
      <TouchableOpacity onPress={() => navigation.navigate("SignUpPage")}>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>sign up</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
        < View style={styles.loginContainer} >
          <Text style={styles.loginText}>login</Text>
        </View>
      </TouchableOpacity >
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#552583',
    alignItems: 'center',
  },

  title: {
    marginTop: Dimensions.get('window').height / 31,
    color: '#FDB927',
    textAlign: 'center',
    fontSize: 40 / PixelRatio.getFontScale(),
    fontWeight: 'bold',
  },

  homeImage: {
    marginTop: Dimensions.get('window').height / 45,
  },

  signUpContainer: {
    backgroundColor: "#FDB927",
    padding: 15,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: Dimensions.get('window').height / 20
  },

  signUpText: {
    fontSize: 25 / PixelRatio.getFontScale(),
    color: "#552583",
    fontWeight: "bold"
  },

  loginContainer: {
    marginTop: 10,
    backgroundColor: "#552583",
    padding: 10,
    bottom: 0
  },

  loginText: {
    fontSize: 25 / PixelRatio.getFontScale(),
    color: "#FDB927",
    fontWeight: "bold"
  }
}
);