import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation} from '@react-navigation/native'
import FocusedStatusBar from '../components/Home/FocusedStatusBar'

const MessageGroup = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
        <FocusedStatusBar/>
        <View style={{padding:10,flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Ionicons name="arrow-back" color="#a4c3a2" size={30} style={{width:50}} />
            </TouchableOpacity>
            <Text>MessageGroup</Text>
        </View>
        
      
    </SafeAreaView>
  )
}

export default MessageGroup