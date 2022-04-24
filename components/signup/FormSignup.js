import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Yup from 'yup';
import {Formik} from 'formik';

const uploadSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email. Please enter a valid email.').required('Email is required.'),
    password: Yup.string().required('A password is required.'),
    username: Yup.string().required('Username is required.')
}) 
const FormSignUp = ({navigation}) => {
  return (
    <Formik 
            initialValues={{password:'', email:'', username:''}}
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
                        placeholder='EmailId' 
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
                        placeholder='Usernmae' 
                        placeholderTextColor='gray' 
                        value={values.username}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                    />
                    {
                        errors.username && touched.username &&
                        <Text style={styles.error}> 
                            {errors.username}
                        </Text>
                    }

                    <TextInput 
                        secureTextEntry={true}
                        style={styles.textInput} 
                        placeholder='Password' 
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
                    
                    <Button style={{width: 500, margin: 10}} onPress={handleSubmit}  title="Sign Up" />
                    
                    
                    <TouchableOpacity>
                        <Text>
                            Already have an account?
                        <Text style={{color:'#ADD8E6'}} onPress={() => navigation.push('LogInScreen')}> Login </Text>
                        </Text>
                    </TouchableOpacity>
                </>
                )
            }
    </Formik>
  )
}

export default FormSignUp

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