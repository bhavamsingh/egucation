//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from '../screens/Login/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/Signup/Signup';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return (
        <>
        <Stack.Screen
            name="Login"
            component={Login}
        />
        <Stack.Screen
            name="SignUp"
            component={Signup}
        />
         
    </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default AuthStack;
