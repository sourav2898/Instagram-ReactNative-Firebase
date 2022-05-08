import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const PostImage = ({data, updateLike}) => {
  let lastPress = '';
  const onDoublePress = () => {
        const time = new Date().getTime();
        const delta = time - lastPress;

        const DOUBLE_PRESS_DELAY = 400;
        if (delta < DOUBLE_PRESS_DELAY) {
            updateLike(data)
        }
        lastPress = time;
    };
  return (
    <View onStartShouldSetResponder =
        {(evt) => onDoublePress()}>
      <Image style={styles.image} source={data?.imageUrl.trim()!=='' ? {uri:data?.imageUrl} : require('../../../assets/no_image.jpg')}/>
    </View>
  )
}

export default PostImage

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 300,
    resizeMode:'stretch'
  }
})