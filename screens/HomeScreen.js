import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import BottomTabs from '../components/home/BottomTabs'

const HomeScreen = () => {
  return (
      <View style={styles.home}>
          <Header />
          <Stories />
          <ScrollView>
            <Post />
          </ScrollView>
          <BottomTabs />
      </View>
  )
}

const styles = StyleSheet.create({
  home:{
    height:'100%',
  }
})

export default HomeScreen

