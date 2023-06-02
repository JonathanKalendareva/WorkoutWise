import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingPage } from './Screens/LandingPage';
import { SignUpPage } from './Screens/SignUpPage';
import { LoginPage } from './Screens/LoginPage';
import { ConfirmationPage } from './Screens/ConfirmationPage';
import { ForgetPassword } from './Screens/ForgetPassword';
import { NewPasswordScreen } from './Screens/NewPasswordScreen';
import { HomePage } from './Screens/HomePage';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports.js'
import { useEffect } from 'react';

Amplify.configure(awsconfig);

const Stack = createNativeStackNavigator();
const Navigation = () => {

  try{
    const authUser = await AuthenticatorAssertionResponse.currentAuthenticatedUser({bypassCache: true});
  }catch(e)
  {
    setUser(null);
  }

  setUser(authUser);

  useEffect(() => {
  checkUser();
  } , [])
  
  if(user == undefined)
  {}


export default function App() {
  return (
    <NavigationContainer>
      {/* main navigator with screen options */}
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
        {/* different screens */}
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
        <Stack.Screen
          name="ConfirmationPage"
          component={ConfirmationPage}
          options={{
            title: 'Confirmation Page',
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            title: 'Forget Password',
          }}
        />
        <Stack.Screen
          name="NewPasswordScreen"
          component={NewPasswordScreen}
          options={{
            title: 'New Password',
          }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: 'HomePage',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};