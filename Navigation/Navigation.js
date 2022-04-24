import { StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddPost from '../components/addPost/AddPost';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();
const screenoptions = {
    headerShown: false
}

export const SignInNavigation = ({currentUser}) => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={screenoptions}
        >
            <Stack.Screen name="HomeScreen">
                {props => <HomeScreen {...props} currentUser={currentUser} />}
            </Stack.Screen>
            <Stack.Screen name="AddPostScreen" component={AddPost}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export const SignOutNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='LogInScreen'
            screenOptions={screenoptions}
        >
            <Stack.Screen name="LogInScreen" component={LogIn}/>
            <Stack.Screen name="SignUpScreen" component={SignUp}/>
        </Stack.Navigator>
    </NavigationContainer>
)


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111'
    }
})