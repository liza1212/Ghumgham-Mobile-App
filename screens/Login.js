import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity,TextInput } from 'react-native'
import React, {useState} from 'react'
import FocusedStatusBar from '../components/Home/FocusedStatusBar';
import { useNavigation } from '@react-navigation/native';

const LoginContainer=()=>{
        const [email, setemail] = useState('');
        const [password, setpassword] = useState('');
        const navigation = useNavigation()

        function handle_submit(event){
            event.preventDefault();
            console.log(email, password);
        }
    return (
        <View style={style1.container}>

            <TextInput 
                style={style1.text_input} 
                placeholder="Please enter your email"
                onChangeText={txt => setemail({ email:txt })}
                />

            <TextInput 
                style={style1.text_input} 
                // defaultValue={text}
                onChangeText={txt=>setpassword({password:txt})} 
                placeholder="Enter password"/>

            <TouchableOpacity 
                style={style1.forgot_button}>
                <Text>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={style1.login_button}
                onPress={handle_submit}>
                <Text>Login</Text>  
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={style1.forgot_button}
                onPress={()=>navigation.navigate("Register")}> 
                <Text>Don't have a account</Text> 
            </TouchableOpacity>
        </View>
    )
};

const style1 = StyleSheet.create({
    container:{
        margintop:100,
        backgroundColor:"#DDDDDD",
        borderRadius:20,
        padding:20
    },
    text_input:{
        height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      backgroundColor:"#a4c3a2"
    },
    forgot_button: {
        position:"relative",
        justifyContent:"center",
        alignItems:"center",
        height: 30,
        margin: 30,
        borderRadius:15
    },
    login_button: {
        position:"relative",
        width:"100%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
    },
    headingForInput:{
        margin:20,
        alignItems:"center",
        justifyContent:"center",
    }
})

const Login = () => {
  return (
    <SafeAreaView>
        <FocusedStatusBar/>
    <Text>Login Page</Text>
    <LoginContainer/>
    </SafeAreaView>
  )
}

export default Login
