import { StyleSheet,StatusBar} from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import React from 'react'

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();
  return isFocused ?<StatusBar backgroundColor="#a4c3a2" animated={true}{...props}/>:null;
}

export default FocusedStatusBar


