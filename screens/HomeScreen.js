import { View, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import BottomTabs from '../components/home/BottomTabs'
import {db} from '../firebase'

const HomeScreen = ({navigation, currentUser}) => {

  const [posts, setPosts] = useState([])

  useEffect( async() => {
    await db.collectionGroup('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
     console.log("posts",posts)
  },[])

  return (
      <View style={styles.home}>
          <Header navigation={navigation}/>
          <Stories />
          <ScrollView>
            {
              posts?.map((value,index) => {
              return <Post key={index} data={value}/>
            })
            }
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

