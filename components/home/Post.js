import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostHeader from './components/PostHeader'
import PostImage from './components/PostImage'
import PostFooter from './components/PostFooter'

const Post = () => {
  return (
    <View>
        <PostHeader />
        <PostImage />
        <PostFooter />
    </View>
  )
}

export default Post

const styles = StyleSheet.create({})