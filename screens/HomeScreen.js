import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import BottomTabs from '../components/home/BottomTabs'

const HomeScreen = ({navigation}) => {
  return (
      <View style={styles.home}>
          <Header navigation={navigation}/>
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
    backgroundColor:'#111',
  }
})

export default HomeScreen

