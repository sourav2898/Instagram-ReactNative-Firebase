import { StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddPost from './components/addPost/AddPost';

const Stack = createStackNavigator();
const screenoptions = {
    headerShown: false
}

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={screenoptions}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="AddPostScreen" component={AddPost}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigation

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111'
    }
})