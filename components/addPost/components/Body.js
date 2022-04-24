import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from 'react-native'
import React , {useEffect, useState} from 'react'
import * as Yup from 'yup';
import {Formik} from 'formik';
import { auth,db } from '../../../firebase';

const uploadSchema = Yup.object().shape({
    imageUrl: Yup.string().url('Input text should be an url of an image'),
    caption: Yup.string().required('A caption is required.')
}) 

const Body = ({navigation}) => {

    const [thumbnail, setThumbnail] = useState('');
    const [currentUser, setCurrentUser] = useState({});

    const getUser = () => {
        const user = auth.currentUser;
        const unsubscribe = db.collection('users').where('owner_id','==',user.uid).limit(1).onSnapshot(snapshot => {
                                snapshot.docs.map(doc => setCurrentUser({
                                    username: doc.data().username,
                                    useremail: doc.data().email
                                }))
                            })

        return unsubscribe;
    }

    useEffect(() => {
        getUser();
    },[])

    const postToFirebase = (imageUrl, caption) => {
        const unsubscribe = db.collection('users')
                                .doc(auth.currentUser.email)
                                .collection('posts')
                                .add({
                                    imageUrl: imageUrl,
                                    caption: caption,
                                    user: currentUser.username,
                                    email: currentUser.useremail,
                                    owner_id: auth.currentUser.uid,
                                    likes: 0,
                                    likes_by_users: [],
                                    comments: []
                                })
                                .then(() => navigation.goBack())
                                .catch(err => {
                                    console.log("error posting", err);
                                    Alert.alert("Error: Not able to post", err);
                                })

        return unsubscribe
    }

  return (
        <Formik 
            initialValues={{caption:'', imageUrl:''}}
            onSubmit={(values) => {
                postToFirebase(values.imageUrl, values.caption)
            }}
            validationSchema = {uploadSchema}
            validateOnMount={true}
        >
            {
                ({
                    handleBlur,handleChange,handleSubmit,values,errors,isValid, touched
                }) => (
                <>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder='Write a caption' 
                        placeholderTextColor='gray' 
                        multiline={true} 
                        maxLength={2000}
                        numberOfLines={4}
                        editable
                        onChange={e => setThumbnail(e.nativeEvent.text)}
                        value={values.caption}
                        onChangeText={handleChange('caption')}
                        onBlur={handleBlur('caption')}
                    />
                    {
                        errors.caption && touched.caption &&
                        <Text style={styles.error}> 
                            {errors.caption}
                        </Text>
                    }
                   
                    <TextInput 
                        style={styles.textInput} 
                        placeholder='Image Url' 
                        placeholderTextColor='gray' 
                        value={values.imageUrl}
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                    />

                    {
                        errors.imageUrl && 
                        <Text style={styles.error}> 
                            {errors.imageUrl}
                        </Text>
                    }

                    <Image style={styles.image} source={thumbnail!=='' && !errors.ImageUri ? {uri: thumbnail} : require('../../../assets/icons8-thumbnail-64.png')}/>
                    <Button onPress={handleSubmit}  title="Share" />
                </>
                )
            }
        </Formik>
  )
}
export default Body

const styles = StyleSheet.create({
    bodyConatiner:{
        marginVertical: 20
    },
    textInput:{
        color: 'gray',
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        fontSize: 15
    },
    error:{
        color: 'red'
    },
    image:{
        width: 150,
        height: 150,
        marginVertical: 10
    }
})