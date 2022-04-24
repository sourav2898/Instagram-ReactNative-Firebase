import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import * as Yup from 'yup';
import {Formik} from 'formik';
import {auth} from '../../firebase';

const uploadSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email. Please enter a valid email.').required('Email is required.'),
    password: Yup.string().required('A password is required.')
}) 

const login = async(email,password) => {
    try {
        console.log(email,password);
        await auth.signInWithEmailAndPassword(email,password);
        console.log("firebase login successful", email, password);
    } catch (error) {
        Alert.alert(error.message);
    }
}

const Form = ({navigation}) => {
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
                        style={styles.textInput} 
                        placeholder='Enter Your EmailId' 
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
                        style={styles.textInput} 
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
                    
                    <Button onPress={handleSubmit}  title="Login" />
                    
                    
                    <TouchableOpacity>
                        <Text>
                            Don't have an account?
                        <Text style={{color:'#ADD8E6'}} onPress={() => navigation.push('SignUpScreen')}> Sign Up </Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color:'#ADD8E6'}}> Forgot Password? </Text>
                    </TouchableOpacity>
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
        marginVertical: 5,
        fontSize: 15,
        width:'90%',
    },
    error:{
        color: 'crimson'
    },
})