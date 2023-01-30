import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MessageGroup from './screens/MessageGroup';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
 return (
   <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="Home" component={Home} />           
      <HomeStack.Screen name="MessageGroup" component={MessageGroup} />
   </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRoute={HomeStackScreen} 
      screenOptions={({route})=>({
        tabBarIcon: ({focused,color,size})=>{
          var iconName;
          var rn= route.name;
          if(rn==="HomeStack"){
            iconName= focused?'home':'home-outline'
          }else if(rn==="Login"){
            iconName= focused?'list':'list-outline'
          }else if(rn==="Register"){
            iconName= focused?'settings':'settings-outline'
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor : "#a4c3a2",
        tabBarInactiveTintColor : "grey",
        headerShown:false
      })} 
      >

        <Tab.Screen name="HomeStack" component={HomeStackScreen}/>
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="Register" component={Register}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}
