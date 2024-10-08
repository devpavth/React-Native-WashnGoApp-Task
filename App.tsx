import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoPage from './screens/logoPage/LogoPage';
import Welcome from './screens/welcome/Welcome';
import SignIn from './screens/signIn/SignIn';
import SignUp from './screens/signUp/SignUp';
import Logout from './screens/logout/Logout';

const Stack = createStackNavigator();

function App() {
  return (
    
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LogoPage">
          <Stack.Screen 
            name="LogoPage" 
            component={LogoPage} 
            options={{ headerShown: false }}  
          />
          <Stack.Screen 
            name="Welcome" 
            component={Welcome} 
            options={{ headerShown: false }}  
          />
          <Stack.Screen 
            name="SignIn" 
            component={SignIn} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUp} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Logout" 
            component={Logout} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
