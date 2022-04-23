import { StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddPost from './components/addPost/AddPost';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();
const screenoptions = {
    headerShown: false
}

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='SignUpScreen'
            screenOptions={screenoptions}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="AddPostScreen" component={AddPost}/>
            <Stack.Screen name="LogInScreen" component={LogIn}/>
            <Stack.Screen name="SignUpScreen" component={SignUp}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigation

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111'
    }
})