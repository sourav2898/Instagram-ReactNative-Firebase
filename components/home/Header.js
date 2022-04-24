import { StyleSheet, Text, View, Image, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {auth} from '../../firebase';

const handleSignOut = async() => {
    try {
        await auth.signOut();
    } catch (error) {
        console.log(error)
        Alert.alert(error.message);
    }
}

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleSignOut}>
            <Text style={{color:'#fff',fontSize:25}}> Instagram </Text> 
        </TouchableOpacity>
        <View style={styles.headerAction}>
            <TouchableOpacity onPress={() => navigation.push('AddPostScreen')}>
                <Image style={styles.icon} source={require('../../assets/icons8-plus-math-24.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon} source={require('../../assets/icons8-heart-24.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}> 11 </Text>
                </View>
                <Image style={styles.icon} source={require('../../assets/icons8-facebook-messenger-24.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10,
    },
    text:{
        color:"#fff"
    },
    logo:{
        width: 150,
        height:50,
        resizeMode: 'contain'
    },
    headerAction:{
        display:"flex",
        flexDirection:'row'
    },
    icon:{
        width:30,
        height:30,
        resizeMode: 'contain',
        marginRight: 5
    },
    badge:{
        backgroundColor:'crimson',
        width:20,
        borderRadius: 8,
        position: 'absolute',
        right: 2,
        top:-8,
        zIndex:100,
        alignItems:"center",
        justifyContent:"center"
    },
    badgeText:{
        color:'#fff'
    }
})