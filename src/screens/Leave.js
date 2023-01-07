// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// // create a component
// const Leave = () => {
//     return (
//         <View style={styles.container}>
//             <Text>Leave</Text>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

// //make this component available to the app
// export default Leave;


import React, { useState } from 'react';
// import type {Node} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput,Dimensions, TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
// import { useNavigation } from "@react-navigation/native"
import {Dropdown}  from 'react-native-element-dropdown';
import FilePicker, { types } from 'react-native-document-picker';


// import DropDownPicker from 'react-native-dropdown-picker';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
// import { Leave } from '..';
const data= [{ label: 'Leave List', value: '1' },
  { label: 'Casual Leave - CL', value: '2' },
  { label: 'Medical Leave - ML', value: '3' },
  { label: 'Post Dated Leave - PDL', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },];


const Leave = ({navigation})=>{

  const[dateto, setDateto]= useState(new Date());

   
  const[purpose,setPurpose]= useState("")
  const[address,setAddress]= useState("")
  const[contact,setContact]= useState("")
  const[suggetion,setSuggetion]= useState("")
  const[choose,setChoose]= useState("")
  const[drop,setDrop]= useState("")
  const[LeaveName,setLeaveName]= useState(null)
  
  const [value, setValue] = useState('');


// alert(LeaveName)




  
    const [fileData,setFileData] = useState([])
    const[agree,setAgree]= useState(false);

    const [date, setDate] = useState(new Date());

    const [datePicker, setDatePicker] = useState(false);
    const[base64dataDob,setbase64dataDob]= useState()
    // const [timePicker, setTimePicker] = useState(false);
   
    // const [time, setTime] = useState(new Date(Date.now()));

    const [newdate, setnewDate] = useState(moment(date).format('MM-DD-YYYY'));
   // const[navdate,setNavDate]= useState(moment(dateto).format('MM-DD-YYYY'))
   
// alert(newdate)


    function showDatePicker() {
      setDatePicker(true);
    };
   
   
    function onDateSelected(event, value) {
     // var NewDate= moment(date, 'DD-MM-YYYY').format();

    //  NewDate=NewDate.split('T')[0];
      setDate(value);
      
      ///setDateto(value);
      setDatePicker(false);
      //alert(newdate)
    };

    //alert(date1)
   //alert(NewDate)

    const getDate=()=>{
      let newDate=moment(Date(date)).format('MM-DD-YYYY');


      console.log(newDate)
      
      return date !== "" ? newDate : "";
    };
   

    const getDateto=()=>{
      let newDate=moment(Date(dateto)).format('MM-DD-YYYY');
      console.log(newDate)
      return date !== "" ? newDate : "";
    };
   



   
 const handleFilePicker= async()=>{
  try {
    const response = await FilePicker.pick({
      presentationStyle: "fullScreen",allowMultiSelection: true,
      type:[types.allFiles],
      // readContent: true,
    });
    const fetchResponse= await fetch(response[0].uri);
    const blob = await  fetchResponse.blob();
    console.log(blob);
    var reader= new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function(){
      var base64dataDob= reader.result.substr(reader.result.indexOf(',') + 1);
      setbase64dataDob(base64dataDob);
      console.log(base64dataDob)
    }
    setFileData(response)
    // console.log("response")
    setbase64dataDob(response[0].name)
    console.log((response[0].name))
  } catch(err){
    console.log(err);
  }

  let fPath = Platform.select({
    ios: fs.dirs.DocumentDir,
    android: fs.dirs.DownloadDir,
 });
 

 }


//  const[manth,setManth]=useState("")

 //alert(date)



 const handleSubmitButton = async () => {
  
  // alert('gfffffffffff')


  //Show Loader
  //setLoading(true);
  let deviceJSON = {};

  try {

    deviceJSON.datefrom = newdate,
      deviceJSON.dateto = navdate,
      deviceJSON.reason = purpose,
      deviceJSON.suggestion = address,
      deviceJSON.attachment = base64dataDob,
      deviceJSON.logindtlcode = suggetion,
      deviceJSON.leavetype = LeaveName,
     
    console.log(deviceJSON);

  } catch {
    //console.log('Trouble getting device info ', e);
  }

  const requestOptions = {
    method: 'POST',

    headers: { 'Content-Type': 'application/json', 'charset': 'utf-8' },

    body: JSON.stringify(deviceJSON)
  };

  console.log(requestOptions);

  fetch(`https://testapi.sonisamajsatna.com/api/EmployeeLeave/EmployeeLeaveCreation`, requestOptions)

    .then((response) => response.json())
    .then((responseJson) => {
      //Hide Loader
     // setLoading(false);
      console.log(responseJson);
      // If server response message same as Data Matched
      //if (responseJson == 1) {
       // setIsRegistraionSuccess(true);
        console.log('Registration Successful.');
    //  } else {
        console.log('Registration Unsuccessful');
      //}
    })
    .catch((error) => {
      //Hide Loader
      //setLoading(false);
      console.error(error);
    });
};


 const handelsubmit=()=>{

     console.log('Hello')
    

     navigation.navigate('Profile',{

     

         userDate: "12/2/2022",
        //  userDate:manth,
         userPurpose:purpose,
         userAddress:address,
         userContact:contact,
         userSuggetion:suggetion,
         userChoose: choose,
         userDropdown: "Leave List"
         
     })
    
 }
       return(
<ScrollView>

<View>

<View style={styles.container}>



   {datePicker && (
     <DateTimePicker
       
       value={date}
       mode={'date'}
       display={Platform.OS === 'ios' ? 'spinner' : 'default'}
       is24Hour={true}
       onChange={onDateSelected}


     />
   )}

  

 </View>

    <View style={{display:"flex",flexDirection:"row",marginLeft:20,marginTop:10,position:"relative",top:20}}>
<CheckBox  
    value={agree }
    onValueChange={() => setAgree(!agree)}
    color={agree? "#4630EB" : undefined}
    />
  <Text style={{justifyContent:"center",alignItems:"center",marginTop:5,fontWeight:"bold"}}>In case Leaving Headquater</Text> 
</View>
{/* </View> */}
<View
        onChangeText={(drop)=> setDrop(drop)}>
<Dropdown         

style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Leave List"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
          setLeaveName(item.label);

          // alert(value)
          // alert(value)
        }}
 
    />

</View>

    <View style={{position:"relative",bottom:25}}>
     <View style={{display:"flex",flexDirection:"row",marginTop:20,justifyContent:"center"}}>


  <View style={{marginTop:5,marginRight:8}}>
     <Text style={{fontWeight:"bold",marginLeft:1}}>Date from:</Text>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
  
      <View >
        <TouchableOpacity 
        onPress={showDatePicker} title='Set Date' 
        style={{marginTop:3,justifyContent:"center",alignItems:"center"}} 
       >
          <Text style={{borderWidth:2, borderColor:"lightgrey",width: 150, textAlign:"center",textAlignVertical:"center",
        height:45,}} 
        onChangeText={(date)=> setDate(date)} >

{moment(date).format("MM-DD-YYYY ")}</Text>

        </TouchableOpacity>
        </View>

     </View>
     </View>
     
     <View style={{marginTop:5}}>
     <Text style={{marginLeft:2,fontWeight:"bold"}}>To:</Text>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
    
        <View>
        <TouchableOpacity onPress={showDatePicker} title='Set Date' style={{marginTop:3,justifyContent:"center",alignItems:"center"}} >
          <Text style={{borderWidth:2, borderColor:"lightgrey",width: 150, textAlign:"center",textAlignVertical:"center",
        height:45,}}   
        onChangeText={(dateto)=> setDateto(dateto)}>{moment(dateto).format("MM-DD-YYYY ")}</Text>
        {/* <Text>{date.toDateString()}</Text> */}
        </TouchableOpacity>
        </View>
      
     </View>

     </View>
     </View>
     <View style={{marginTop:10,}}>
        <Text style={{marginLeft:25,fontWeight:"bold"}}>Purpose:</Text>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput style={styles.input3} placeholder="Enter Your Purpose" 
         
        onChangeText={(purpose)=> setPurpose(purpose)}/>
        </View>
     </View>
     <View style={{marginLeft:5,display:"flex",flexDirection:"row",marginTop:10,justifyContent:"center",alignItems:"center"}}>
    {
        agree ? (
            
            <View style={{display:"flex",flexDirection:"column"}}>
                  <Text style={{marginLeft:2,fontWeight:"bold"}}>Address:</Text>
                <View style={{marginBottom:10}}>
            <TextInput style={{width:315,height:45, borderWidth:2,marginLeft:2,padding:10, borderColor:"lightgrey"}} 
     placeholder="Enter Your Address" onChangeText={(address)=> setAddress(address)}
     />
     </View>
     <Text style={{marginLeft:2,fontWeight:"bold"}}>Contact No:</Text>
            <TextInput style={{width:315,height:45, borderWidth:2,marginLeft:2,padding:10, borderColor:"lightgrey"}} 
     placeholder="Enter Your Contact No." onChangeText={(contact)=> setContact(contact)}
     
     />
     </View>
    
        ):null    
    }
    </View>
     {/* <View style={{marginTop:0}}>
        <Text style={{marginLeft:25,fontWeight:"bold"}}>Address:</Text>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput style={styles.input4} placeholder="Enter Your Name"/>
        </View>
     </View>
     <View style={{marginTop:10}}>
        <Text style={{marginLeft:25,fontWeight:"bold"}}>Contact No:</Text>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput style={styles.input4} placeholder="Enter Your Name"/>
        </View>
     </View> */}
     <View style={{marginTop:2}}>
        <Text style={{marginLeft:25,fontWeight:"bold"}}>Alternative Suggetion:</Text>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput style={styles.input4} placeholder="Enter Your Alternative Suggetion" onChangeText={(suggetion)=> setSuggetion(suggetion)}/>
        </View>
     </View>
     <View style={{marginTop:10}}>
     <View >
        <Text style={{marginLeft:25,fontWeight:"bold",marginBottom:2}}>Attachment(if any):</Text>
        {/* <View style={{justifyContent:"center",alignItems:"center"}}>
        <TextInput style={styles.input4} placeholder="Choose file"/>
        </View> */}
        {/* <TouchableOpacity onPress={() => handleFilePicker()} style={{paddingHorizontal:20,paddingVertical:15}}>
        
        <Text style={styles.input4}>Choose file</Text>
      </TouchableOpacity> */}
     </View>
     <View style={{justifyContent:"center",alignItems:"center"}}>
      {/* {fileData.length > 0 ? (
        <View>
          <Text>Name:{fileData.name}</Text>
        </View>
      ): null} */}
      {fileData.length > 0 ? fileData.map((ls,index)=> {
        return(
          <View style={{position:"relative",top:10,left:40}} key={index}>
            {/* <Image source={{uri: ls.uri}} style={{height:100,width:100}}/> */}
         <Text style={{position:"relative",top:15}}>{ls.name}</Text> 
          </View>
        )
      }): null}
      
      <TouchableOpacity onPress={() => handleFilePicker()} style={{paddingHorizontal:20,paddingVertical:15}}>
        <View style={{marginTop: -20}}>
        <Text style={styles.input4} value={choose} onChangeText={(text)=> setChoose(text)}>Choose file: </Text>
        </View>
      </TouchableOpacity>
     </View>
     </View>

     
     {/* <TouchableOpacity style={{backgroundColor:"lightblue",margin:12,padding:10,width:150,marginLeft:30}}>
        <Text style={{textAlign:"center"}}>Submit</Text>
       
      </TouchableOpacity> */}
      <View style={{display:"flex",flexDirection:"row",marginTop:10,justifyContent:"center",alignItems:"center"}}>
      <View style={{marginLeft:30,justifyContent:"center",alignItems:"center"}}>
<TouchableOpacity style={{backgroundColor:"chocolate",margin:6,width:150,padding:10,borderRadius:8}}>
    <Text style={{color:"white",textAlign:"center"}}>Reset</Text>
</TouchableOpacity>
</View>
      <View style={{marginLeft:5,justifyContent:"center",alignItems:"center"}}>
<TouchableOpacity style={{backgroundColor:"royalblue",margin:6,width:150,padding:10,borderRadius:8,marginRight:30}} 
>


    <Text style={{color:"white",textAlign:"center"}} onPress={()=> handleSubmitButton()}>Submit</Text>
</TouchableOpacity>
</View>
</View>
</View>
     

       
       
        
{/* {!datePicker && (

<View style={{ margin: 10,padding:10 }}>
 <Text style={styles.text}>{date.toDateString()}
<Button  title="pick Date" color="green"
 onPress={showDatePicker} 

/>
</Text>
</View>
)} */}

{datePicker && (
<DateTimePicker
value={date}
mode={'date'}
//display={Platform.OS === 'ios' ? 'spinner' : 'default'}
is24Hour={true}
onChange={onDateSelected}
style={styles.datePicker}
/>
)}
{/* <View style={{marginLeft:30,display:"flex",flexDirection:"row"}}>
<View style={{marginLeft:30,display:"flex",flexDirection:"row"}}>
    {
        agree ? (
            
            <View style={{display:"flex",flexDirection:"column"}}>
                <View style={{marginBottom:15}}>
            <TextInput style={styles.input1} 
     placeholder={date.toDateString()}
     
     />
     </View>
            <TextInput style={styles.input1} 
     placeholder={date.toDateString()}
     
     />
     </View>
        ):null    
    }
    </View>
    <View style={{marginLeft:10,display:"flex",flexDirection:"row"}}>
<CheckBox  
    value={agree }
    onValueChange={() => setAgree(!agree)}
    color={agree? "#4630EB" : undefined}
    />
  <Text style={{justifyContent:"center",alignItems:"center",marginTop:5,fontWeight:"bold"}}>I have read and agreed</Text> 
</View>
</View> */}

{/* <View style={{marginLeft:30}}>
<TouchableOpacity style={{backgroundColor:"blue",margin:12,width:100,padding:10,borderRadius:8}}>
    <Text style={{color:"white"}}>Login</Text>
</TouchableOpacity>
</View> */}
    </View>
    </ScrollView>
    
       )
}



    //  */}
    //    )
    //    }
    const {width}= Dimensions.get('screen')
    const styles = StyleSheet.create({
      // container:{
      //   flex: 1
      // },
      // selectedTextStyle:{
      //   fontSize: 16,
      //   color:"black"

      // },
        input1:{
        //   width: width -20,
        width: 150,
        height:45,
        borderWidth: 2,
        borderColor:"lightgrey",
    
        // marginTop: 10,
        // color:"lightgrey",
        marginLeft: 1,
        padding: 10,
        
        },
        input2:{
        //   width: width -20,
        width: 150,
        height:45,
        borderWidth: 2,
        borderColor:"lightgrey",
        marginLeft: 5,
        padding: 10,
        
        },
        input3:{
        //   width: width -20,
        width:315,
        height:45,
        borderWidth: 2,
        borderColor:"lightgrey",
        marginTop: 3,
        marginLeft:5,
        padding: 10,
        
        },
        input4:{
            //   width: width -20,
            width:315,
            height:45,
            borderWidth: 2,
            borderColor:"lightgrey",
            marginTop: 3,
            marginLeft:5,
            padding: 10,
            
            },
            datePicker: {
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: 320,
                height: 260,
                display: 'flex',
              },
            container:{
                backgroundColor:"#fff",
                alignItems:"center",
                justifyContent:"center"
            },
        // // button:{
        // //   width: 200,
        // //   backgroundColor:"lightblue",
        // //   color:"white",
        // //   padding: 10,
        // //   marginTop:10,
        // //   borderRadius: 30
        // }

        dropdown: {
          margin: 16,
          height: 50,
          
          marginLeft:25,
          width:315,
          borderBottomColor: 'gray',
          borderBottomWidth: 0.5,
        },
        placeholderStyle: {
          fontSize: 16,
          fontWeight:"bold"
        },
        selectedTextStyle: {
          fontSize: 16,
          fontWeight:"bold"
        },
        inputSearchStyle: {
          height: 40,
          fontSize: 16,
        },
    
    })
    
    
export default Leave;


