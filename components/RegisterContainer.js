import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const RegisterContainer = () => { 
  return (
    <SafeAreaView>
      <Text>Register</Text>
      <View style={{color:"#DDDDDD",padding:10}}>
        <TextInput  style = {styles.input} placeholder = "Name"/>
        <TextInput  style = {styles.input} placeholder = "Email"/>
        <TextInput  style = {styles.input} placeholder = "Password"/>
        <TouchableOpacity style={styles.button}>
          <text>Sign In</text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
  )
}

export default RegisterContainer

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    button:{
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        fontWeight: 'bold',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

  });