import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FormSignUp from '../components/signup/FormSignup'

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Image style={{width: 100, height: 100, 
        marginVertical: 80,}} source={require('../assets/Instagram_logo_2016.svg.webp')}/>
        <FormSignUp navigation={navigation}/>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height: '100%',
        width:'100%'
    },
    loginContainer:{
        justifyContent: 'center',
        alignItems:'center',
        width:'100%'
    }
})