import React,{useState} from 'react'
import {View,Text,FlatList,StyleSheet,TouchableOpacity,PermissionsAndroid,Platform,Image,Modal} from 'react-native'
// import RNFetchBlob from 'rn-fetch-blob';
import {Dropdown}  from 'react-native-element-dropdown';
const data= [
  { label: '2021', value: '1' },
  { label: '2022', value: '2' },];

const data1= [
  { label: 'Casual Leave - CL', value: '1' },
  { label: 'Medical Leave - ML', value: '2' },];
const data2= [
  { label: 'Painding', value: '1' },
  { label: 'Approval', value: '2' },];



const Home = ({navigation,route})=>{

    const[LeaveName,setLeaveName]= useState(null);
    const[LeaveName1,setLeaveName1]= useState(null);
    const[LeaveName2,setLeaveName2]= useState(null)
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const[show,setShow] = useState(false)
    
    // console.log(route.params)
    // return(



      

             {/* <Text>profile</Text> */}
        //  <View style={{backgroundColor:"green",width:400,height:500,justifyContent:"center",alignItems:"center"}}>
        // <Text>Date:{route.params.userDate}</Text>
        //  <Text>Purpose:{route.params.userPurpose}</Text>
        //  <Text>Address:{route.params.userAddress}</Text>
        //  <Text>Contact:{route.params.userContact}</Text>
        //  <Text>Suggetion:{route.params.userSuggetion}</Text>
        //  <Text>drop:{route.params.userDropdown}</Text>
        //  <Text>Choose:{route.params.userChoose}</Text>
        //  </View> 
 
         const names = [
            {
                index: "1",
                name:"Bhavam",
                date:"09-Dec-2022",
                leavetype:"pdl",
                Purpose:"task",
                Address:"satna",
                ContactNo:"9109052550",
                AlternativeSuggetion:"manegment",
                Attachment:"file"
            },
            
            {
                index: "2",
                name:"shivam",
                date:"09-Dec-2022",
                leavetype:"pdl",
                Purpose:"task",
                Address:"satna",
                ContactNo:"9109052550",
                AlternativeSuggetion:"manegment",
                Attachment:"file"


            },
            {
                index: "3",
                name:"abhisheck",
                date:"09-Dec-2022",
                leavetype:"pdl",
                Purpose:"task",
                Address:"satna",
                ContactNo:"9109052550",
                AlternativeSuggetion:"manegment",
                Attachment:"file"
                
            },
            {
                index: "4",
                name:"Viveck",
                date:"09-Dec-2022",
                leavetype:"pdl",
                Purpose:"task",
                Address:"satna",
                ContactNo:"9109052550",
                AlternativeSuggetion:"manegment",
                Attachment:"file"
                
            },
            // {
            //     index: "4",
            //     name:"viveck "
            // },
            // {
            //     index: "5",
            //     name:"sonu ",
        
            // },
            // {
            //     index: "6",
            //     name:"sonu ",
            // },
        ];

        // const checkPermision = async ()=>{
        //     if(Platform.OS==='ios'){
        //         downloadImage()
        //     }else{
        //         try{
        //             const granted =await PermissionsAndroid.request(
        //                 PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        //                 {
        //                     title:'Storage Permission Required',
        //                     message: 'App needs access to your storage to download Photos'
        //                 }
        //             )
        //             if (granted === PermissionsAndroid.RESULTS.GRANTED){
        //                 console.log('Storage Permission Granted.')
        //                 downloadImage()
        //             }else{
        //                 alert('Storage Permission Not Granted')
        //             }
        //         }catch(error){
        //             console.warn(error)
        //         }
        //     }
        // }
        // const downloadImage =()=>{
        //     let date = new Date()
        // }
        // const IMAGE_PATH ='https://cdn.pixabay.com/photo/2022/12/05/08/54/clouds-7636282_960_720.jpg'
            return(
                <View style={Styles.container}>
                <FlatList  style={Styles.listStyle} 
                
                keyExtractor={(key)=>{
                    return key.index;
                }}
                data= {names} renderItem={(element)=>{
                    //console.log(element.item.name)
                  return (


                  
          <View style={Styles.listItem}>
         <View style={{flexDirection:"row"}}>
         <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:14,color:"black", marginLeft:20}}>Date</Text>
            <View style={{marginLeft:90,marginTop:3}}>
                     <Text style={Styles.date}>:{element.item.date}</Text>
                     </View>
                     </View>
                    </View>
                       <View style={{flexDirection:"column"}}>
                       <View style={{flexDirection:"row",alignItems:"center"}}>
                       <Text style={{fontSize:14,color:"black",marginLeft:20,marginTop:3}}>Name</Text>
                       <View style={{marginLeft:97,marginTop:3}}>
                    <Text style={Styles.text1}>:{element.item.name}</Text>
                    </View>
                    </View>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:14,color:"black",marginLeft:20}}>LeaveList</Text>
                    <View style={{marginLeft:75,marginTop:3}}>
                    <Text style={Styles.text1}>:{element.item.leavetype}</Text>
                    </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:14,color:"black",marginLeft:20}}>Purpose</Text>
                        <View style={{marginLeft:83}}>
                    <Text style={Styles.text1}>:{element.item.Purpose}</Text>
                    </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                        <Text style={{fontSize:14,color:"black",marginLeft:10}}>Address</Text>
                        <View style={{marginLeft:82}}>
                    <Text style={Styles.text1}>:{element.item.Address}</Text>
                    </View>
                    </View>  
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:14,color:"black",marginLeft:20}}>ContactNo</Text>
                        <View style={{marginLeft:67}}>   
                    <Text style={Styles.text1}>:{element.item.ContactNo}</Text> 
                    </View>
                    </View>  
                    <View style={{display:"flex", flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:14,color:"black",marginLeft:20}}>AlternativeSuggetion</Text>
                        <View style={{marginLeft:3}}>  
                    <Text style={{color:"black",margin:5, fontSize:12,}}>:{element.item.AlternativeSuggetion}</Text>
                    </View>
                    </View>
                    <View style={{display:"flex", flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:14,color:"black",marginLeft:20}}>Attachment(if any)</Text>
                        <View style={{marginLeft:20}}>
                    <Text style={Styles.text1}>:{element.item. Attachment}</Text> 
                    </View>
                    </View> 
                    {/* <View style={{flex: 1}}> */}
                    {/* <Image style={{ width: 50, height: 50,marginLeft:50,color:"white" }} 
          source={require("../../assets/images/img1.jpg")} /> */}
          {/* <Image source={{uri: IMAGE_PATH}} style={Styles.image}/>
                        <TouchableOpacity style={Styles.button}>
                            <Text style={Styles.test}>
                                Download Image
                            </Text>
                        </TouchableOpacity>
                        </View>    */}
                 </View>
                   
                    </View>
                  
                  )
                  
                
                
                }}
                
                
                />

<TouchableOpacity  onPress={()=> setShow(true)} style={Styles.TouchableOpacityStyle} >

<Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 

       style={Styles.FloatingButtonStyle} />

</TouchableOpacity>
              <Modal
              transparent={true}
              visible={show} >
                  <View style={{backgroundColor:"#000000aa",flex:1}}>
                      <View style={{backgroundColor:"#fff",marginTop:200,margin:20,borderRadius:3,height:265,width:'90%'}}>
                        <View style={{backgroundColor:"dodgerblue",padding:10,alignItems:"center",position:"relative",bottom:15,width:325}}>
                            <Text style={{fontSize:20,color:'#fff'}}>Search Filter</Text>
                        </View>
                        <View style={{position:"relative",bottom:40}}>
<View style={{flexDirection:"row"}}>
<View style={{marginTop:30,marginLeft:5}}>
      <Text style={{fontWeight:"bold",fontSize:18}}>Leave Year:  </Text>
      </View>
<View style={{alignItems:"center",justifyContent:"center",marginTop:18,marginLeft:58}}>
                      <Dropdown        

style={Styles.dropdown}
        placeholderStyle={Styles.placeholderStyle}
        selectedTextStyle={Styles.selectedTextStyle}
        inputSearchStyle={Styles.inputSearchStyle}
        iconStyle={Styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        // placeholder="Year"
        // searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
          setLeaveName(item.label);

          // alert(value)
          // alert(value)
        }}
 
    />
    </View>
    </View>

    </View>
    <View style={{position:"relative",bottom:30}}>

        <View style={{flexDirection:"row"}}>
        <View style={{marginTop:13,marginLeft:5}}>
      <Text style={{fontWeight:"bold",fontSize:17}}>Leave Type:  </Text>
      </View>

<View style={{alignItems:"center",justifyContent:"center",marginLeft:62}}>
                      <Dropdown         

style={Styles.dropdown}
        placeholderStyle={Styles.placeholderStyle}
        selectedTextStyle={Styles.selectedTextStyle}
        inputSearchStyle={Styles.inputSearchStyle}
        iconStyle={Styles.iconStyle}
        data={data1}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        // placeholder="Leave List"
        // searchPlaceholder="Search..."
        value={value1}
        onChange={item => {
          setValue1(item.value1);
          setLeaveName1(item.label);

          // alert(value)
          // alert(value)
        }}
 
    />
    </View>
    </View>
    </View>

    <View style={{position:"relative",bottom:20}}>
        <View style={{flexDirection:"row"}}>
        <View style={{marginTop:13,marginLeft:5}}>
      <Text style={{fontWeight:"bold",fontSize:17}}>Leave Status:  </Text>
      </View>
      <View style={{alignItems:"center",justifyContent:"center",marginLeft:49}}>
 <Dropdown         

style={Styles.dropdown}
        placeholderStyle={Styles.placeholderStyle}
        selectedTextStyle={Styles.selectedTextStyle}
        inputSearchStyle={Styles.inputSearchStyle}
        iconStyle={Styles.iconStyle}
        data={data2}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        // placeholder="Status"
        // searchPlaceholder="Search..."
        value={value2}
        onChange={item => {
          setValue2(item.value2);
          setLeaveName2(item.label);

          // alert(value)
          // alert(value)
        }}
 
    />
    </View>
    </View>
    </View>
              {/* <Text style={{fontSize:50}}>Modal Text</Text> */}
              {/* <Button title='show modal' onPress={()=> setShow(false)}/> */}
              <View style={{flexDirection:"row",marginLeft:159,position:"relative"}}>
              <View style={{ marginLeft:20}}>
              <TouchableOpacity  onPress={()=> setShow(false)} style={{height:40}}>
                <Text style={{color:"dodgerblue",fontSize:15,fontWeight:"bold"}}>CLEAR</Text>
              </TouchableOpacity>
              </View>
              <View style={{marginLeft:30}}>
                <Text style={{color:"dodgerblue",fontSize:15,fontWeight:"bold"}}>SEARCH</Text>
              </View>
              </View>
              </View>
              </View>
              </Modal>
                 </View> 



                
            );
    
}

const Styles= StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'White',
        
        backgroundColor: "#DCDCDC",      
        // height: Dimensions.get('window').height 
    
      },
      listItem: {
        margin: 5,
        // padding: 10,
        backgroundColor: "#F8F8FF",
        width: "100%",
        height:"30%",
        flex: 1,
        alignSelf: "center",
        
        borderRadius: 5,
        // horizontal:false,
        //width: Dimensions.get('window').width,   
        // height: Dimensions.get('window').height/2 
    
    
      },
    textStyle:{
           fontSize:20,
           padding:10,
           // backgroundColor:"steelblue",
           color:"black",
           // backgroundColor:"blue",
           // textAlign:"center",
           // margin:10,
           // color:"white",
           width:150,
   
       },
       text1:{
           fontSize:12,
        //    padding:10,
           //backgroundColor:"lightgray",
           color:"black",
           margin:5,
        // marginLeft:70
        //    width:150,
        //    fontWeight:"700"
        //    fontWeight:"bold"
        //    paddingLeft:20
       
       },
       listStyle:{
           textAlign:"center",
           margin:1,
          padding:5
       },
      
         date: {
           fontSize: 12,
           marginLeft:20,
        
           color:"black"
         },
         button:{
            padding:10,
            backgroundColor:"orange"
         },
         test:{
            color:"#fff",
            fontSize:20,
            textAlign:"center"
         },
         image:{
            width:100,
            height:250,
            resizeMode:"contain",
            margin:5
         },
         TouchableOpacityStyle:{

            position: 'absolute',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            right: 30,
            bottom: 30,
          },
        
          FloatingButtonStyle: {
        
            resizeMode: 'contain',
            width: 50,
            height: 50,
          },
          dropdown: {
            // margin: 16,
            height: 50,
            
            // marginLeft:55,
            width:150,
            borderBottomColor: 'gray',
            borderBottomWidth: 2,
            // position:"relative",
            // bottom:30
            // backgroundColor:"blue"
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
        // image:{
        //     width:"30%",
        //     height:"40%",
        //     resizeMode:"contain",
        //     margin:5
        // }

   })
   
export default  Home;

