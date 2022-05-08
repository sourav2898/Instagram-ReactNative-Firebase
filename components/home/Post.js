import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import PostHeader from './components/PostHeader'
import PostImage from './components/PostImage'
import PostFooter from './components/PostFooter'
import {db,auth} from '../../firebase'

const Post = ({data}) => {

  useEffect(() => {
    console.log("posts data",data);
  },[])

  const updateLike = async(data) => {
    
    let likd_user = data.likes_by_users;
    if(likd_user.includes(auth.currentUser.email)){
        likd_user = likd_user.filter((email) => {
            email!=auth.currentUser.email
        })
    }else{
      likd_user.push(auth.currentUser.email);
    }
    
    await db.collection('users').doc(data.email).collection('posts').doc(data.docId)
    .update({
      likes_by_users: likd_user
    }).then(() => {
      console.log("Document successfully updated");
    }).catch((err) => {
      console.log("Error while updating document", err);
    })
  }

  return (
    <View style={styles.post}>
        <PostHeader data={data}/>
        <PostImage updateLike={updateLike} data={data}/>
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