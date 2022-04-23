import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Yup from 'yup';
import {Formik} from 'formik';

const uploadSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email. Please enter a valid email.').required('Email is required.'),
    password: Yup.string().required('A password is required.')
}) 
const Form = ({navigation}) => {
  return (
    <Formik 
            initialValues={{password:'', email:''}}
            onSubmit={(values,errors) => {
                console.log(values);
                console.log(errors);
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
                    
                    <Button style={{width:"100%"}} onPress={handleSubmit}  title="Login" />
                    
                    
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
        width:'100%',
    },
    error:{
        color: 'crimson'
    },
})