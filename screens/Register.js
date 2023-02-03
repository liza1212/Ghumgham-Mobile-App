import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native'
import FocusedStatusBar from '../components/Home/FocusedStatusBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigation = useNavigation()

  function handle_submit(event){
    event.preventDefault();
    console.log(name, email, password);
  }
  return (
    <SafeAreaView>
      <FocusedStatusBar/>
      <View style={{padding:10,flexDirection:"row", justifyContent:"flex-start",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>{navigation.navigate("mHome")}}>
                <Ionicons name="arrow-back" color="#a4c3a2" size={30} style={{width:50}} />
            </TouchableOpacity>
        </View>
      <Text>Register</Text>
    <View style={styles.container}>
    <TextInput  
        style = {styles.input} 
        onChange={text=>setname({name:text})}
        placeholder = "Name"/>

      <TextInput  
        style = {styles.input} 
        onChangeText={text=>setemail({email:text})}
        placeholder = "Email"/>

      <TextInput  
        style = {styles.input} 
        onChangeText={text=>setpassword({password:text})}
        placeholder = "Password"/>

      <TouchableOpacity 
        style={styles.button}
        onPress={handle_submit}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    margintop:100,
    backgroundColor:"#DDDDDD",
    borderRadius:20,
    padding:20
  },  
  input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      backgroundColor:"#a4c3a2"
    },
    button:{
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        fontWeight: 'bold',
        borderRadius:10
    },

  });