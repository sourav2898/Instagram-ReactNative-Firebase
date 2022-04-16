import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'

const HomeScreen = () => {
  return (
      <View>
          <Header />
          <Stories />
          <ScrollView>
            <Post />
          </ScrollView>
      </View>
  )
}

export default HomeScreen