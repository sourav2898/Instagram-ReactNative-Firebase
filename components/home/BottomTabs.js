import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { bottomNavs } from './helper/bottomTabIcons'

const BottomTabs = () => {

    const [selectedTab, setTab] = useState('Home');

    const selectTab = (tabName) => {
        // console.log(tabName);
        setTab(tabName);
    }

  return (
    <View style={styles.wrapper}>
        <View style={styles.container}>
            {bottomNavs.map((value,index) => {
                return (
                    <TouchableOpacity key={index} onPress={() => selectTab(value.name)}>
                        <Image style={styles.icon} source={value?.name === selectedTab ? value?.activeIcon : value?.inactiveIcon}/>
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
    activeIcon:{
        width:30,
        height:30,
    },
    icon:{
        width:30,
        height:30,
    }
})