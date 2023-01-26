import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import FocusedStatusBar from '../components/Home/FocusedStatusBar'
import { useFonts } from 'expo-font'
import Ionicons from '@expo/vector-icons/Ionicons'

const Addplan = () => {
  return (
    <SafeAreaView style= {styles.container}>
      <Text>Add New Plan</Text>
      {/* <MainDetail> */}
      <TextInput  style = {styles.input} placeholder = "Title"/>
      <TextInput  style = {styles.input} placeholder = "From"/>
      <TextInput  style = {styles.input} placeholder = "To"/>
      {/* </MainDetail> */}
    </SafeAreaView>
  )
}

export default Addplan

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
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
  
})