//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
// import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Leave from '../screens/Leave';
// import Leaving from '../screen1/Leaving';
import Achievement from '../screen1/Achievement';

const Stack = createNativeStackNavigator();

// create a component
const MainStack2 = () => {

 

   
    return (

        <>


 <Stack.Screen
            name="Leave"
            headerShown={true}
            component={Achievement}
            options={({ navigation }) => ({
                headerTintColor: '#ffffff',
         
                   headerTitle: () => (
                       
                     <View  style={{flexDirection:'row',alignItems:"center",justifyContent:"center"}}>
                 <Text style={{ fontWeight: 'bold',fontSize:20,color:"#fff",marginLeft:70}}>Self Achievement Update</Text> 
                     </View>),
                   headerStyle: {
                     
                     backgroundColor:"royalblue"
                   
                   },
                   headerTintColor: '#fff', //Set Header text color
                     headerTitleStyle: {
                       fontWeight: 'bold',//Set Header text style
                     },

     
            })}
        />
        
  
    
    
        {/* <Stack.Screen
            name="LeaveManager"
            component={LeaveManager}
        /> */}
    </>
    );
};

// define your styles


//make this component available to the app
export default MainStack2;
