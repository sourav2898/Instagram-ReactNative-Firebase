import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {Users} from '../../data/userStories';

const Stories = () => {
  return (
    <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                Users?.map((value,index) => {
                    return (
                        <View style={styles.stories} key={index}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.image}
                                    source={{uri: `${value?.url}`}}
                                />
                            </TouchableOpacity>
                            <Text style={styles.text}> {value?.firstName.length > 10 ? value?.firstName.slice(0,10)+"..." : value?.firstName} </Text>
                        </View >
                    )
                })
            }
        </ScrollView>
    </View>
    )
    }

    export default Stories

    const styles = StyleSheet.create({
    text:{
        color: "white"
    },
    stories:{
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 10
    },
    image:{
        width:80,
        height:80,
        borderRadius:50,
        borderColor: 'orange',
        borderWidth: 2,
    }
})