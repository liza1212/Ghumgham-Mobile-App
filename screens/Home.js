import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import NavBar from './Home/NavBar'
import Content from './Home/Content'
import Footer from './Home/Footer'
import FocusedStatusBar from './Home/FocusedStatusBar'

const Home = () => {
  return (
    <SafeAreaView>
      <FocusedStatusBar/>
      <NavBar/>
        <Content/>
      <Footer/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})