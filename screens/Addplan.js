import { StyleSheet, Text, SafeAreaView, TouchableOpacity,View } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native'
import FocusedStatusBar from '../components/Home/FocusedStatusBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native'


const Addplan = () => {
    const [title, settitle] = useState('');
    const [destination, setdestination] = useState('');
    const [days, setdays] = useState('');
    const [SliderValue, setSliderValue] = useState('');
    const navigation = useNavigation()
  
    function handle_submit(event){
      event.preventDefault();
      console.log(title, destination, days);
    }
    return (
      <SafeAreaView >
        <FocusedStatusBar/>
        <View style={{padding:10,flexDirection:"row", justifyContent:"flex-start",alignItems:"center"}}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Ionicons name="arrow-back" color="#a4c3a2" size={30} style={{width:50}} />
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <Text>Add New Plan</Text>
        
  
        <TextInput  
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
          placeholder = "Days"/> 

        {/*Slider with max, min, step and initial value*/}
        {/* <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={SliderValue}
          onValueChange={SliderValue => setSliderValue(SliderValue)} /> */}
  
        <TouchableOpacity 
          style={styles.button}
          onPress={handle_submit}>
          <Text>Post</Text>
        </TouchableOpacity>
        </View >
        
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