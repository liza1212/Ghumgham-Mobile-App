import { StyleSheet, Text, SafeAreaView, TouchableOpacity,View } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native'
import FocusedStatusBar from '../components/Home/FocusedStatusBar'
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';



const Addplan = () => {
    const [title, settitle] = useState('');
    const [destination, setdestination] = useState('');
    const [days, setdays] = useState('');
    const [SliderValue, setSliderValue] = useState(0);
  
    function handle_submit(event){
      event.preventDefault();
      console.log(title, destination, days);
    }

    const renderStars = () => {
      let stars = [];
      for (let i = 0; i < 5; i++) {
        if (i < Math.floor(SliderValue)) {
          stars.push(<Icon key={i} name="star" size={24} color="#FFD700" />);
        } else if (i === Math.floor(SliderValue) && SliderValue % 1 !== 0) {
          stars.push(<Icon key={i} name="star-half" size={24} color="#FFD700" />);
        } else {
          stars.push(<Icon key={i} name="star-border" size={24} color="#FFD700" />);
        }
      }
      return stars;
    };

    return (
      <SafeAreaView style={{justifyContent:"center",alignItems:"center"}}>
        <FocusedStatusBar/>
        
        <Text>Add New Plan</Text>
        
        <View style={styles.container}>


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
        <View style={{flexDirection:"row",marginBottom:10}}>
          <Text>Rating: </Text>
          <View style={{ flexDirection: 'row' }}>{renderStars()}</View>
          <Slider
            style={{width:"25%"}}
            maximumValue={5}
            minimumValue={0}
            minimumTrackTintColor="#a4c3a2"
            maximumTrackTintColor="#000000"
            thumbTintColor="#a4c3a2"
            step={0.5}
            value={SliderValue}
            onValueChange={SliderValue => setSliderValue(SliderValue)} />
        </View>
        
  
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
        backgroundColor:"#DDDDDD",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        padding:10
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
          backgroundColor:"white",
          padding: 10,
          fontWeight: 'bold',
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
      },
  
})