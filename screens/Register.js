import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import FocusedStatusBar from '../components/Home/FocusedStatusBar'

const Register = () => {
  return (
    <SafeAreaView>
      <FocusedStatusBar/>
      <Text>Register</Text>
      <TextInput  style = {styles.input} placeholder = "Name"/>
      <TextInput  style = {styles.input} placeholder = "Email"/>
      <TextInput  style = {styles.input} placeholder = "Password"/>
      <TouchableOpacity style={styles.button}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
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
        backgroundColor: '#DDDDDD',
        padding: 10,
        fontWeight: 'bold',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

  });