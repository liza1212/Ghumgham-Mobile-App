import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home'
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator()


const Footer = () => {
  return (
   <NavigationContainer>
        {/* <Tab.Navigator initialRouteName={Home} screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                let rn = route.name
            }})
        }>

        </Tab.Navigator> */}
   </NavigationContainer>
  )
}

