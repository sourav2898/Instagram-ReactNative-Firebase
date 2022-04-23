import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-picker';
import Body from './components/Body';

const AddPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  )
}

const Header = () => (
    <View style={styles.headerContainer}>
        <TouchableOpacity>
            <Image style={styles.headerIcon} source={require('../../assets/icons8-left-24.png')}/> 
        </TouchableOpacity>
        <Text style={styles.headerText}> New Post </Text> 
    </View>
);

export default AddPost

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: 'column',
        height: '100%'
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    headerIcon:{
        width: 30,
        height:30
    },
    headerText:{
        color:'#fff',
        flex:1,
        textAlign:'center',
        fontSize: 20
    }
})