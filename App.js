import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingPage } from './Screens/LandingPage';
import { SignUpPage } from './Screens/SignUpPage';
import { LoginPage } from './Screens/LoginPage';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native'
import awsconfig from '/aws-exports'

Amplify.configure(awsconfig);

{/* const Stack = createNativeStackNavigator(); */ }

const App = () => {
  return (


    {/* 
    <NavigationContainer>
      {/* main navigator with screen options 
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#491F6F'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* different screens 
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{
            title: 'Sign Up',
          }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            title: 'Log In',
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
 */}

  );
};


export default withAuthenticator(App);