import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Addplan from './screens/Addplan';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Addplan'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Addplan" component={Addplan}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
