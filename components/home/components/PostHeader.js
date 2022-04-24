import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PostHeader = ({data}) => {
  return (
    <View style={styles.postHeader}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image style={styles.dp} source={{uri:"https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"}}/>
        <Text style={styles.text}> {data?.user || 'dummy user'} </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image style={{width:25,height:25}} source={require('../../../assets/icons8-more-24.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PostHeader

const styles = StyleSheet.create({
  postHeader:{
    backgroundColor:"#111",
    padding:5,
    borderTopWidth:2,
    borderColor:'#222',
    marginTop:5,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  text:{
    color:"#fff",fontWeight:'bold'
  },
  dp:{
      width:40,
      height:40,
      borderRadius:50,
      borderColor: 'orange',
      borderWidth: 2,
      marginRight: 5,
      backgroundColor:'#fff'
  }
})