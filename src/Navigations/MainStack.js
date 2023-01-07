//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Leaving from '../screen1/Leaving';
import Leave from '../screens/Leave';

const Stack = createNativeStackNavigator();

// create a component
const MainStack = () => {

 

   
    return (

        <>


 <Stack.Screen
            name="Leave"
            headerShown={true}
            component={Leave}
            options={({ navigation }) => ({
                headerTintColor: '#ffffff',
         
                   headerTitle: () => (
                       
                     <View  style={{flexDirection:'row',alignItems:"center",justifyContent:"center"}}>
                 <Text style={{ fontWeight: 'bold',fontSize:20,color:"#fff",marginLeft:70}}>Leave Application</Text> 
                     </View>),
                   headerStyle: {
                     
                     backgroundColor:"royalblue"
                   
                   },
                   headerTintColor: '#fff', //Set Header text color
                     headerTitleStyle: {
                       fontWeight: 'bold',//Set Header text style
                     },
                   headerRight: () => (
                     
                     <TouchableOpacity
                     
         
                        onPress=  {() => navigation.navigate('Home')}>   
         
                         <Image style={{ width: 20, height: 20,marginLeft:50,color:"white" }} 
                   source={require("../assets/image/img12.png")} />          
                     </TouchableOpacity>
                   ),

     
            })}
        />
        <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
                
                headerTintColor: 'white',
                headerTitle: () => (
                    
                  <View  style={{flexDirection:'row',alignItems:"center",justifyContent:"center"}}>
              <Text style={{ fontWeight: 'bold',fontSize:20,color:"#fff",marginLeft:40}}>Leave Application</Text> 
                  </View>), headerStyle: {
                  backgroundColor:"royalblue"
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
export default MainStack;
