import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingPage } from './Screens/LandingPage';
import { SignUpPage } from './Screens/SignUpPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          options={{headerShown: false}}
          component={LandingPage}
        />
        <Stack.Screen
          name="SignUpPage"
          options={{headerShown: false}}
          component={SignUpPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
