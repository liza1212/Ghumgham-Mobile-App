import { StyleSheet, Text, SafeAreaView, TouchableOpacity,TextInput } from 'react-native'
import {React, useState} from 'react'

const LoginContainer=()=>{
        const [email, setemail] = useState('');
        const [password, setpassword] = useState('');

        function handle_submit(event){
            event.preventDefault();
            console.log(email, password);
        }
    return (
        <SafeAreaView style={style1.container}>
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
        </SafeAreaView>
    )
};

const style1 = StyleSheet.create({
    container:{
        margintop:100,
    },
    text_input:{
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        alignItems:"center",
        justifyContent:"center",
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
        backgroundColor:"#a4c3a2",
    },
    headingForInput:{
        margin:20,
        alignItems:"center",
        justifyContent:"center",
    }
})

const Login = () => {
  return (
    <LoginContainer/>
  )
}



export default Login