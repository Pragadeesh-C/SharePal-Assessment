import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigator from './src/navigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})