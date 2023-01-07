import React,{useState} from 'react';
import { View, Text, StyleSheet,TextInput,Button,TouchableOpacity,Dimensions} from 'react-native';
const Addmor = ({navigation}) => {
//     const[val,setVal]= useState([])
//     const handleAdd = ()=>{
//         const abc= [...val,[]]
//         setVal(abc)
        
//     }

//     const handlechange = ()=>{
//         const inputdata=[...val]
//     }
//     return (
//         <View  >
//             <TouchableOpacity  style={{marginTop:10,backgroundColor:"chocolate",padding:10,width:60}} onPress={()=> handleAdd()}>
//                 <Text >Add</Text>
//             </TouchableOpacity>
            
//             {val.map((data,i)=>{
//                 return(
                    
//                      <View > 
//                     <TextInput  style={styles.input1} onChange={(e)=> handlechange(e,i)}/>
//                     </View>
                   
                    
//                 )
//             })}
//         </View>
//     );
// };

// const {width}= Dimensions.get('screen')
// const styles = StyleSheet.create({

//     input1:{
    
//     width: 150,
//     height:45,
//     borderWidth: 2,
//     borderColor:"lightgrey",

//      marginTop: 10,

//     marginLeft: 1,
//     padding: 10,
    
//     },
   

// })

// function AddField({ navigation }) {
    const [fields, setFields] = useState([{ value: null }]);
  
    function handleChange(i, event) {
      console.log(i)
      const values = [...fields];
      values[i].value = event.target.value;
      setFields(values);
      
    }
  
    function handleAdd() {
      
      const values = [...fields];
      values.push({ value: null });
      setFields(values);
    }
  
    function handleRemove(i) {
      const values = [...fields];
      values.splice(i, 1);
      setFields(values);
    }
    
    return (
      <View >
        <View style={{width:60,marginLeft:255,position:"relative",top:40,}}>
        <Button title='add' color="chocolate" onPress={() => handleAdd()} />
        </View>
  
        {fields.map((field, idx) => {
            
          return (
            <View key={`${field}-${idx}`} >
              <TextInput style={styles.inputreason}
                type="text"
                placeholder="Enter text"
                value={field.value}
                onChangeText={(text) => handleChange(idx, text)}
              />
              <View style={{width:80,marginLeft:320,position:"relative",bottom:40}}>
              <Button title="remove" onPress={() => handleRemove(idx)} />
              </View>
            </View>
          );
        })}
      </View>
    );
  }

const styles= StyleSheet.create({
    inputreason: {
        width: 250,
        height:45,
        borderWidth: 2,
        borderColor: "lightgrey",
        // marginTop: 10,
        marginLeft: 5,
        // position:"relative",
        // bottom:10
        // padding: 10,
        // flexDirection:"column"

    },
})

export default Addmor;