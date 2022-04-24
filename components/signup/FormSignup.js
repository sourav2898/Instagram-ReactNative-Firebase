import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import * as Yup from 'yup';
import {Formik} from 'formik';
import {auth, db} from '../../firebase'

const uploadSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email. Please enter a valid email.').required('Email is required.'),
    password: Yup.string().required('A password is required.'),
    username: Yup.string().required('Username is required.')
}) 

const signUp = async(email,username,password) => {
    try {
        console.log("inside signup")
        const authUser = await auth.createUserWithEmailAndPassword(email,password);
        console.log(email,password);
        await db.collection('users').doc(authUser.user.email).set({
            owner_id: authUser.user.uid,
            username: username,
            email: email,
            profile_pic: ''
        })

        
        console.log("Firebase User Created Successfully");
    } catch (error) {
        console.log("error Signup",error);
        Alert.alert("Error while signing up",error.message);
    }
}

const FormSignUp = ({navigation}) => {
  return (
    <Formik 
            initialValues={{password:'', email:'', username:''}}
            onSubmit={(values) => {
                signUp(values.email,values.username,values.password)
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