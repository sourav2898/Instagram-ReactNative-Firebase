import { StyleSheet,ActivityIndicator, Text, View, Image, Button, TextInput, TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup';
import {Formik} from 'formik';
import {auth} from '../../firebase';

const uploadSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email. Please enter a valid email*').required('Email is required*'),
    password: Yup.string().required('A password is required*')
}) 

const Form = ({navigation}) => {

     const [loading, isLoading] = useState(false);
const login = async(email,password) => {
    isLoading(true);
    try {
        console.log(email,password);
        await auth.signInWithEmailAndPassword(email,password);
        console.log("firebase login successful", email, password);
        isLoading(false);
    } catch (error) {
        isLoading(false);
        Alert.alert(error.message);
    }
}
    
const forgotPassword = () => {
    Alert.alert(
        "Sorry this functionality is not available right now.",
        " You can try creating a new user by clicking on signup.",
        [
        {text: 'OK'},
        {text: 'SignUp', onPress: () => navigation.push('SignUpScreen')}
        ]
    )
}
  return (
    <Formik 
            initialValues={{password:'', email:''}}
            onSubmit={(values) => {
                login(values.email, values.password);
            }}
            validationSchema = {uploadSchema}
            validateOnMount={true}
    >
        {
                ({
                    handleBlur,handleChange,handleSubmit,values,errors,isValid,touched
                }) => (
                <>
                    <TextInput 
                        style={errors.email && touched.email ? styles.errorTextInput : styles.textInput} 
                        placeholder='Enter Your Email Id' 
                        placeholderTextColor='gray' 
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                    />

                    {
                        errors.email && touched.email &&
                        <Text style={styles.error}> 
                            {errors.email}
                        </Text>
                    }
                    <TextInput 
                        secureTextEntry={true}
                        style={errors.password && touched.password ? styles.errorTextInput : styles.textInput} 
                        placeholder='Enter your password' 
                        placeholderTextColor='gray' 
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                    />
                    {
                        errors.password && touched.password &&
                        <Text style={styles.error}> 
                            {errors.password}
                        </Text>
                    }
                    
                    {
                        loading
                        ?
                        <ActivityIndicator size="large" color='#ADD8E6'/>
                        :
                        <>
                            <View style={styles.button}>
                                <Button onPress={handleSubmit}  title="Login" />
                            </View>
                            
                            
                            <TouchableOpacity>
                                <Text>
                                    Don't have an account?
                                <Text style={{color:'#ADD8E6'}} onPress={() => navigation.push('SignUpScreen')}> Sign Up </Text>
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={forgotPassword}>
                                <Text style={{color:'#ADD8E6'}}> Forgot Password? </Text>
                            </TouchableOpacity>
                        </>
                    }
                </>
                )
            }
    </Formik>
  )
}

export default Form

const styles = StyleSheet.create({
    bodyConatiner:{
        marginVertical: 20
    },
    textInput:{
        color: 'gray',
        padding: 10,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        fontSize: 15,
        width:'90%',
    },
    errorTextInput:{
        color: 'gray',
        padding: 10,
        borderColor: 'crimson',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        fontSize: 15,
        width:'90%',
    },
    error:{
        color: 'crimson',
        fontSize: 12,
        marginBottom: 5,
        width: "90%"
    },
    button:{
        width: '90%',
        marginTop: 10,
        marginBottom: 5,
    }
})