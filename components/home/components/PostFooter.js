import { StyleSheet,ActivityIndicator, Text, TextInput, View,TouchableOpacity, Image, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import {db,auth} from '../../../firebase'
import { async } from '@firebase/util';

const PostFooter = ({data, updateComment, updateLike}) => {

  const[liked, setLiked] = useState(false);
  const[saved, setSaved] = useState(false);
  const [comment, setComment] = useState('');
  const [user, setUser] = useState('');
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    const likes = data?.likes_by_users;
    setLiked(likes.includes(auth.currentUser.email))

    getuser();  
    getSavedPost();
  },[data])

  const getuser = async() => {
    await db.collection('users').onSnapshot(snapshot => {
      const arr = snapshot.docs.map(doc => doc.data());

      setUser(arr.filter((val) => val.email === auth.currentUser.email)[0].username);
    });
  }

  const getSavedPost = async() => {
      await db.collection('users').doc(auth.currentUser.email).collection("savedPosts").onSnapshot(snapshot => {
        const posts = snapshot.docs.map(doc => doc.data());
        
        if(posts.find(val => val.docId === data.docId)) setSaved(true);
        else setSaved(false);
    });
  }

  const addComment = async () => {
    isLoading(true);
    await updateComment(data,{user: user, comment: comment})
    .then(() => {
      setComment('');
      isLoading(false);
    })
    .catch((err) => {
      console.log(err);
      Alert.alert("Sorry unable to post comment, please try later.");
      isLoading(false);
    });
    
  }

  const savePost = async() => {
    if(saved){
       const unsubscribe = await db.collection('users')
                              .doc(auth.currentUser.email)
                              .collection('savedPosts')
                              .doc(data.docId)
                              .delete()
                              .then(() => {
                                setSaved(false);
                                Alert.alert("Post unsaved successfully")
                              })
                              .catch(err => {
                                  console.log("error un-saving post", err);
                                  Alert.alert("Error: Not able to un save post. Please try later");
                              })

      return unsubscribe
    }
    else{
      const unsubscribe = await db.collection('users')
                              .doc(auth.currentUser.email)
                              .collection('savedPosts')
                              .doc(data.docId)
                              .set({
                                  ...data,
                                  postId: data.docId
                              })
                              .then(() => Alert.alert("Post saved successfully"))
                              .catch(err => {
                                  console.log("error saving post", err);
                                  Alert.alert("Error: Not able to save post. Please try later");
                              })

      return unsubscribe
    } 
  }


  return (
    <View style={styles.footer}>
      <PostActions data={data} liked={liked} savePost={savePost} saved={saved} updateLike={updateLike}/>
      <Text style={styles.text}>{data?.likes_by_users.length || 0} {data?.likes_by_users.length > 1 ? 'likes' : 'like'} </Text> 
      <Text style={styles.text}>{data?.user || 'dummy user'} <Text style={styles.span}>{data?.caption || 'No caption.'}</Text> </Text>
      <Text style={styles.secText}>{ data?.comments.length > 0 && 'View All'} {data?.comments.length} Comments </Text>
      <Comments data={data} />
      <View style={styles.commentSction}>
        {
          loading
          ?
          <ActivityIndicator size="small" color="#0000ff" />
          :
          <>
            <TextInput 
              style={styles.textInput}
              placeholder='Add a comment' 
              placeholderTextColor='#777' 
              multiline={true} 
              maxLength={2000}
              editable
              value={comment}
              onChangeText={(value) => setComment(value)}
            />
            <Button   
              onPress={addComment}
              title="Post"
              color="crimson"
              disabled={comment.trim() === ''}
            />
          </>
      }
      </View>
    </View>
  )
}

const PostActions = ({data, liked,savePost,saved, updateLike}) => {
  return (
    <View style={styles.actions}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => updateLike(data)}>
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
        <TouchableOpacity onPress={savePost}>
          {
            saved?
            <Image style={styles.actionIcon} source={require('../../../assets/saved.png')}/>
            :
            <Image style={styles.actionIcon} source={require('../../../assets/notsaved.png')}/>
          }
        </TouchableOpacity>
      </View>
    </View>
  )
}

export const Comments = ({data}) => {
  return(
    <>
    {
      data?.comments?.map(
          (value, index) => {
            return (<View key={index} style={{flexDirection:'row', alignItems:'center'}}>
              <Text style={{...styles.text, marginLeft: 5}}>{value?.user || 'Dummy User'} <Text style={styles.span}>{value?.comment}</Text> </Text>
            </View>)
          }
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
    paddingTop:0,
  },
  secText:{
    color:'#333',
    fontWeight: '500',
    padding: 5,
    paddingTop:0
  },
  span:{
    fontWeight:'500',
    fontSize:12,
    color:'lightgray'
  },
  commentSction:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal: 5
  },
  textInput:{
    color:'#fff',
    padding: 5,
    paddingTop:0,
    flex:1
  }
})