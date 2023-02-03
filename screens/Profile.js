import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../components/Home/FocusedStatusBar'

const Profile = () => {
  return (
    <SafeAreaView>
        <FocusedStatusBar/>
        <Text>Profile</Text>
    </SafeAreaView>
  )
}

export default Profile