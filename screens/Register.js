import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const RegisterContainer = () => { 
  return (
    <SafeAreaView>
      <Text>Register</Text>
      <View style={styles.container}>
        <TextInput  style = {styles.input} placeholder = "Name"/>
        <TextInput  style = {styles.input} placeholder = "Email"/>
        <TextInput  style = {styles.input} placeholder = "Password"/>
        <TouchableOpacity style={styles.button}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
  )
}

export default RegisterContainer

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