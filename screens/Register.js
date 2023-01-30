import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native'
import FocusedStatusBar from '../components/Home/FocusedStatusBar'
import Ionicons from '@expo/vector-icons/Ionicons'

// const { width , height} = Dimensions.get("screen")
// const [fontsLoaded] = useFonts({
//   'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
// });
const Register=()=>{
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  function handle_submit(event){
      event.preventDefault();
      console.log(name, email, password);
  }
return (
  <SafeAreaView style={styles.container}>

      <TextInput 
          style={styles.input} 
          placeholder="Name"
          onChangeText={txt => setname({ name:txt })}
          />

      <TextInput 
          style={styles.input} 
          placeholder="Email"
          onChangeText={txt => setemail({ email:txt })}
          />

      <TextInput 
          style={styles.input} 
          // defaultValue={text}
          onChangeText={txt=>setpassword({password:txt})} 
          placeholder="Enter password"/>


      <TouchableOpacity 
          style={styles.button}
          onPress={handle_submit}>
          <Text>Login</Text>  
      </TouchableOpacity>
  </SafeAreaView>
)
};

export default Register

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection: "row",
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
    },
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
        backgroundColor: '#DDDDDD',
        padding: 10,
        fontWeight: 'bold',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

  });