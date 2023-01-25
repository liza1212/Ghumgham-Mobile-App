import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity,TextInput } from 'react-native'
import {React, useState} from 'react'
import FocusedStatusBar from '../components/Home/FocusedStatusBar';

const LoginContainer=()=>{
        const [email, setemail] = useState('');
        const [password, setpassword] = useState('');

        function handle_submit(event){
            event.preventDefault();
            console.log(email, password);
        }
    return (
        <View style={style1.container}>
            <Text style={style1.headingForInput}>Please enter your email</Text>

            <TextInput 
                style={style1.text_input} 
                placeholder="user@gmail.com"
                onChange={text => setemail({ text })}
                value={email}/>

            <Text 
                style={style1.headingForInput}>
                Please enter your password
            </Text>

            <TextInput 
                style={style1.text_input} 
                value={password}
                onChange={text=>setpassword({text})} 
                placeholder="Password"/>

            <TouchableOpacity 
                style={style1.forgot_button}>
                <Text>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={style1.login_button}
                onPress={handle_submit}>
                <Text>Login</Text>  
            </TouchableOpacity>
        </View>
    )
};

const style1 = StyleSheet.create({
    container:{
        margintop:100,
        backgroundColor:"#a4c3a2",
        borderRadius:20,
        padding:20
    },
    text_input:{
        height:100,
        padding: 10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        backgroundColor:"white"
    },
    forgot_button: {
        height: 30,
        margin: 30,
    },
    login_button: {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
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
