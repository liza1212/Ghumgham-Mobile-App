import { View, Text, TextInput,Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Logo from "../../assets/Logo.png"
import Favicon from "../../assets/favicon.png"
import {useState} from 'react'
import { useNavigation } from '@react-navigation/core'

const NavBar = () => {
  const [isLogged, setisLogged] = useState(false)
  const navigation = useNavigation()
  return (
    <View style={{marginTop:10,paddingHorizontal:15}}>
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingBottom:10,
  
      }}>
        <Image source={Logo} resizeMode="contain" style={{width:90,height :40}}/>
        <View>
          {isLogged?
            // <Image source={Favicon} resizeMode="contain" style={{width:45,height:45,borderRadius:25}}/>
            <TouchableOpacity
              onPress={()=>navigation.navigate("MessageGroup")}
            ><Ionicons name="mail" color="#a4c3a2" size={30} /></TouchableOpacity>
          :
            <TouchableOpacity
              onPress={()=>navigation.navigate("Login")}
            ><Ionicons name="person-add" color="#a4c3a2" size={30} /></TouchableOpacity>
          }
          
        </View>
      </View>
      <View style={{width:"100%",borderRadius:20,backgroundColor:"#a4c3a2",flexDirection:"row",alignItems:"center",paddingHorizontal:20,paddingVertical:10}}>
            <Ionicons name="search"
              style={{width:20,height:20,marginRight:20}}
            />
            <TextInput
              placeholder='Search'
              style={{flex:1}}
              onChangeText={()=>{}}
            />
          </View>
    </View>
  )
}

export default NavBar