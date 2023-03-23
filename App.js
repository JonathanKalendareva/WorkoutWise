import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from 'react-native';
import LandingPage from './Screens/LandingPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {LandingPage} options = {{title: "Welcome"}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};
