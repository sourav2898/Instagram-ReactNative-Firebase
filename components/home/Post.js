import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import PostHeader from './components/PostHeader'
import PostImage from './components/PostImage'
import PostFooter from './components/PostFooter'

const Post = ({data}) => {

  useEffect(() => {
    console.log("posts data",data);
  },[])

  return (
    <View style={styles.post}>
        <PostHeader data={data}/>
        <PostImage data={data}/>
        <PostFooter data={data}/>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  post:{
    // marginBottom: 30
  }
})