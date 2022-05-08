import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {auth} from '../../../firebase'

const PostFooter = ({data}) => {

  const[liked, setLiked] = useState(false);

  useEffect(() => {
    const likes = data?.likes_by_users;
    setLiked(likes.includes(auth.currentUser.email))
  },[data])


  return (
    <View style={styles.footer}>
      <PostActions liked={liked}/>
      <Text style={styles.text}>{data?.likes_by_users.length || 0} {data?.likes_by_users.length > 1 ? 'likes' : 'like'} </Text> 
      <Text style={styles.text}>{data?.user || 'dummy user'} <Text style={styles.span}>{data?.caption || 'No caption.'}</Text> </Text>
      <Text style={styles.secText}>{ data?.comments.length > 0 && 'View All'} {data?.comments.length} Comments </Text>
      <Comments data={data}/>
    </View>
  )
}

const PostActions = ({liked}) => {
  return (
    <View style={styles.actions}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
          {
            liked ? 
            <Image style={styles.actionIcon} source={require('../../../assets/post_liked.png')}/>
            :
            <Image style={styles.actionIcon} source={require('../../../assets/icons8-heart-24.png')}/>
          }
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
          <Image style={styles.actionIcon} source={require('../../../assets/notsaved.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Comments = ({data}) => {
  return(
    <>
    {
      data?.comments?.map(
          value => (
            <View>
              <Text style={styles.text}>{value?.user || 'Dummy User'} <Text style={styles.span}>{value?.comment}</Text> </Text>
            </View>
          )
      )
    }
    </>
  )
}

export default PostFooter

const styles = StyleSheet.create({
  footer:{
    backgroundColor:'#111',
  },
  actions:{
    padding: 5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  actionIcon:{
    marginRight:7
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