import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native'
import React , {useState} from 'react'
import * as Yup from 'yup';
import {Formik} from 'formik';

const uploadSchema = Yup.object().shape({
    imageUrl: Yup.string().url('Input text should be an url of an image'),
    caption: Yup.string().required('A caption is required.')
}) 


const Body = () => {

    const [thumbnail, setThumbnail] = useState('');

  return (
        <Formik 
            initialValues={{caption:'', imageUrl:''}}
            onSubmit={(values,errors) => {
                console.log(values);
                console.log(errors)
            }}
            validationSchema = {uploadSchema}
            validateOnMount={true}
        >
            {
                ({
                    handleBlur,handleChange,handleSubmit,values,errors,isValid
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
                        errors.caption && 
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