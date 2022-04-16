import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const PostImage = () => {
  return (
    <View>
      <Image style={styles.image} source={{uri:'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg'}}/>
    </View>
  )
}

export default PostImage

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 300,
    resizeMode:'stretch',
    backgroundColor:"#fff"
  }
})