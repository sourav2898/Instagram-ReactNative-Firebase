import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-picker';
import Body from './components/Body';

const AddPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Body navigation={navigation}/>
    </View>
  )
}

const Header = ({navigation}) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.headerIcon} source={require('../../assets/icons8-left-24.png')}/> 
        </TouchableOpacity>
        <Text style={styles.headerText}> New Post </Text> 
    </View>
);

export default AddPost

const styles = StyleSheet.create({
    container:{
        padding: 10,
        flexDirection: 'column',
        height: '100%', 
        backgroundColor:'#111'
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