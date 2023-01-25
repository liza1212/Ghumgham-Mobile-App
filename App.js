import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< Updated upstream
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
=======
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
>>>>>>> Stashed changes
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
