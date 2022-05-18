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
    if(likd_user.includes(auth.currentUser.email.toLowerCase())){
        likd_user = likd_user.filter((email) => {
            email!=auth.currentUser.email.toLowerCase()
        })
    }else{
      likd_user.push(auth.currentUser.email.toLowerCase());
    }
    
    await db.collection('users').doc(data?.email?.toLowerCase()).collection('posts').doc(data.docId)
    .update({
      likes_by_users: likd_user
    }).then(() => {
      console.log("Document successfully updated");
    }).catch((err) => {
      console.log("Error while updating document", err);
    })
  }

  const updateComment = async(data,comment) => {

    let comments = [...data?.comments, comment]
    console.log(comments)
    console.log(data.docId);

    await db.collection('users').doc(data?.email?.toLowerCase()).collection('posts').doc(data.docId)
    .update({
      comments: comments
    }).then(() => {
      console.log("Document successfully updated");
    }).catch((err) => {
      console.log("Error while updating document", err);
    })
  }

  const deletePost = async(data) => {
    await db.collection('users').doc(data.email.toLowerCase()).collection('posts').doc(data.docId)
    .delete().then(() => {
      console.log("Document successfully updated");
    }).catch((err) => {
      console.log("Error while updating document", err);
    })
  }

  return (
    <View style={styles.post}>
        <PostHeader data={data} deletePost={deletePost}/>
        <PostImage updateLike={updateLike} data={data}/>
        <PostFooter data={data} updateLike={updateLike} updateComment={updateComment}/>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  post:{
    marginBottom: 15
  }
})