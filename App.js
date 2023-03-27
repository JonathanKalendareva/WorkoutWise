import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingPage } from './Screens/LandingPage';
import { SignUpPage } from './Screens/SignUpPage';
import { LoginPage } from './Screens/LoginPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
  );
};
