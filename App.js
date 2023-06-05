import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingPage } from './Screens/LandingPage';
import { SignUpPage } from './Screens/SignUpPage';
import { LoginPage } from './Screens/LoginPage';
import { ConfirmationPage } from './Screens/ConfirmationPage';
import { ForgetPassword } from './Screens/ForgetPassword';
import { NewPasswordScreen } from './Screens/NewPasswordScreen';
import { HomePage } from './Screens/HomePage';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports.js'
import { useEffect, useState } from 'react';
import { ActivityIndicator, View} from 'react-native';

Amplify.configure(awsconfig);

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch(error){
      setUser(null)
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <NavigationContainer>
      {/* main navigator with screen options */}
      <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#491F6F'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold', }, }} >
        {user ? (
          <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'HomePage', }} />
        ) : (
          <>
        {/* different screens */}
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} options={{ title: 'Sign Up', }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ title: 'Log In', }} />
        <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} options={{ title: 'Confirmation Page', }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ title: 'Forget Password', }} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} options={{ title: 'New Password', }} />
          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
};