import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { TextInput } from 'react-native'
// import FocusedStatusBar from '../components/Home/FocusedStatusBar'


const Addplan = () => {
    const [title, settitle] = useState('');
    const [destination, setdestination] = useState('');
    const [days, setdays] = useState('');
  
    function handle_submit(event){
      event.preventDefault();
      console.log(title, destination, days);
    }
    return (
      <SafeAreaView style={styles.container}>
        {/* <FocusedStatusBar/> */}
        <Text>Add New Plan</Text>
  
        {/* <TextInput  
          style = {styles.input} 
          onChange={text=>settitle({title:text})}
          placeholder = "Title"/>
  
        <TextInput  
          style = {styles.input} 
          onChangeText={text=>setdestination({destination:text})}
          placeholder = "Destination"/>
  
        <TextInput  
          style = {styles.input} 
          onChangeText={text=>setdays({days:text})}
          placeholder = "Days"/>  */}
  
        {/* <TouchableOpacity 
          style={styles.button}
          onPress={handle_submit}>
          <Text>Post</Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    )
  }

export default Addplan

const styles = StyleSheet.create({
    container: {
        // flex: 0.5,
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