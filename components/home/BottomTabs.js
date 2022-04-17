import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { bottomNavs } from './helper/bottomTabIcons'

const BottomTabs = () => {

    const [selectedTab, setTab] = useState('Home')

  return (
    <View style={styles.wrapper}>
        <View style={styles.container}>
            {bottomNavs.map((value,index) => {
                return (
                    <TouchableOpacity key={index}>
                        <Image  style={styles.icon} source={value?.activeIcon}/>
                    </TouchableOpacity>
                )
            })}
        </View>
    </View>
  )
}

export default BottomTabs

const styles = StyleSheet.create({
    wrapper:{
        position:'relative',
        width:'100%',
        height: 50,
        bottom: 0,
        backgroundColor:'#111',
    },
    container:{
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    icon:{
        width:30,
        height:30,
    }
})