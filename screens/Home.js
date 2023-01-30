import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import FocusedStatusBar from "../components/Home/FocusedStatusBar"
import NavBar from "../components/Home/NavBar"
import Content from "../components/Home/Content"

const Home = () => {
  return (
    <SafeAreaView>
      <FocusedStatusBar/>
      <NavBar/>
        <Content/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})