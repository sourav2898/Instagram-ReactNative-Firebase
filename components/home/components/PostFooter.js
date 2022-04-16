import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'

const PostFooter = () => {
  return (
    <View style={styles.footer}>
      <PostActions />
      <Text style={styles.text}>1234 likes </Text> 
      <Text style={styles.text}>Sundar <Text style={styles.span}>This is Sundar Pichai, CEO of Google from India. Best of luck, Keep working hard.</Text> </Text>
      <Text style={styles.secText}>View All Comments </Text>
      <Comments />
    </View>
  )
}

const PostActions = () => {
  return (
    <View style={styles.actions}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
          <Image style={styles.actionIcon} source={require('../../../assets/icons8-heart-24.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.actionIcon} source={require('../../../assets/icons8-speech-24.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.actionIcon} source={require('../../../assets/icons8-email-send-24.png')}/>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image style={styles.actionIcon} source={require('../../../assets/icons8-square-wave-24.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Comments = () => {
  return(
    <View>
      <Text style={styles.text}>Sundar <Text style={styles.span}>This is Sundar Pichai, CEO of Google from India. Best of luck, Keep working hard.</Text> </Text>
    </View>
  )
}

export default PostFooter

const styles = StyleSheet.create({
  footer:{
    backgroundColor:'#111'
  },
  actions:{
    padding: 5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  actionIcon:{
    marginRight:3
  },
  text:{
    color:'#fff',
    fontWeight: 'bold',
    padding: 5,
    paddingTop:0
  },
  secText:{
    color:'#333',
    fontWeight: '500',
    padding: 5,
    paddingTop:0
  },
  span:{
    fontWeight:'500',
    fontSize:12
  }
})