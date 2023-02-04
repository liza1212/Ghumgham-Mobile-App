import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MessageGroup from './screens/MessageGroup';
import Moment from './screens/Moment';
import Addplan from './screens/Addplan';
import Profile from './screens/Profile';





const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
 return (
   <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="mHome" component={Home} />           
      <HomeStack.Screen name="MessageGroup" component={MessageGroup} />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Register" component={Register} />
   </HomeStack.Navigator>
  );
}




const Tab = createBottomTabNavigator()

export default function App() {
  
  const [loaded] = useFonts({
    InterBold:require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold:require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium:require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular:require("./assets/fonts/Inter-Regular.ttf"),
    InterLight:require("./assets/fonts/Inter-Light.ttf")
  });
  if(!loaded) return null;

  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRoute={HomeStackScreen} 
      screenOptions={({route})=>({
        tabBarIcon: ({focused,color,size})=>{
          var iconName;
          var rn= route.name;
          if(rn==="Home"){
            iconName= focused?'home':'home-outline'
          }else if(rn==="Moment"){
            iconName= focused?'list':'list-outline'
          }else if(rn==="Profile"){
            iconName= focused?'person-circle':'person-circle-outline'
          }else if(rn==="Add plan"){
            iconName= focused?'add-circle':'add-circle-outline'
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor : "#a4c3a2",
        tabBarInactiveTintColor : "grey",
        headerShown:false
      })} 
      >

        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="Moment" component={Moment}/>
        <Tab.Screen name="Add plan" component={Addplan}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}
