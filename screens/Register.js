import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import FocusedStatusBar from '../components/Home/FocusedStatusBar'

const Register = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  function handle_submit(event){
    event.preventDefault();
    console.log(name, email, password);
  }
  return (
    <SafeAreaView>
      <FocusedStatusBar/>
      <Text>Register</Text>

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
    </SafeAreaView>
  )
}

export default RegisterContainer

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 300,
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