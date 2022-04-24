import { StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { SignInNavigation, SignOutNavigation } from './Navigation';
import { auth } from '../firebase';

const AuthNavigation = () => {

  const [currentUser, setCurrentUser] = useState(null);

  const userHandler = (user) => {
    user ? setCurrentUser(user) : setCurrentUser(null)
  }

  useEffect(() => {
    console.log(currentUser);
    return auth.onAuthStateChanged(user => userHandler(user))
  }, [auth])
  

  return (<>
    {currentUser ? <SignInNavigation currentUser={currentUser}/> : <SignOutNavigation />}
  </>)
}

export default AuthNavigation

const styles = StyleSheet.create({})