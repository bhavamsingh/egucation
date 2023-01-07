//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import AuthStack from './AuthStack';
// import MainStack from './MainStack';
import MainStack1 from './MainStack1';
import MainStack2 from './MainStack2';

const Stack = createNativeStackNavigator();


// create a component
const Routs = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
           
         {/* {MainStack(Stack)}  */}
         {/* {MainStack1(Stack)} */}
         {/* {MainStack2(Stack)} */}

{/* //{false ? AuthStack(Stack) : MainStack(Stack)} */}


        </Stack.Navigator>
      </NavigationContainer>
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
export default Routs;
