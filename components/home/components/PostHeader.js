import { StyleSheet, Text, View,Image, TouchableOpacity,ActivityIndicator, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import {auth} from '../../../firebase';

const PostHeader = ({data, deletePost}) => {
  const [editable,setEditable] = useState(false);
  const [show,setShow] = useState(false);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    setEditable(auth.currentUser.email === data.email);
  },[data])

  const delPost = async() => {
    isLoading(true);
    await deletePost(data).then(() => {
      isLoading(false);
      setShow(false);
      Alert.alert("Post deleted successfully.")
    })
    .catch((err) => {
      isLoading(false);
      console.log(err);
      Alert.alert("Sorry unable to delte post. Please try after some time.")
    })
  }

  return (
    <View style={styles.postHeader}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image style={styles.dp} source={require('../../../assets/default_dp.png')}/>
        <Text style={styles.text}> {data?.user || 'dummy user'} </Text>
      </View>
      <View style={{position:'relative'}}>
        {
          editable &&
          <>
            <TouchableOpacity onPress={() => setShow(!show)}>
              <Image style={{width:25,height:25}} source={require('../../../assets/icons8-more-24.png')}/>
            </TouchableOpacity>
            {
              show && 
              <View style={styles.userActions}>
                {
                  loading?
                  <ActivityIndicator size="small" color="#0000ff" />
                  :
                  <Button onPress={delPost} title='delete' color='crimson'/>  
                }
              </View>
            }
          </>
        }
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
  },
  userActions:{
    backgroundColor:"white",
    padding: 5,
  }
})