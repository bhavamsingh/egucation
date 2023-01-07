
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, Dimensions, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import FilePicker, { types } from 'react-native-document-picker';
import moment from 'moment';
const Leaving = ({ navigation }) => {

    const [dateto, setDateto] = useState(new Date());
    const [choose, setChoose] = useState("")
    const [fileData, setFileData] = useState([])

    const [date, setDate] = useState(new Date());

    const [datePicker, setDatePicker] = useState(false);
    const [datePicker1, setDatePicker1] =  useState(false)
    const [base64dataDob, setbase64dataDob] = useState()

    const [newdate, setnewDate] = useState(moment(date).format('MM-DD-YYYY'));
    function showDatePicker() {
        setDatePicker(true);
    };
    function showDatePicker1() {
        setDatePicker1(true);
    };
    function onDateSelected(event, value) {
        // var NewDate= moment(date, 'DD-MM-YYYY').format();

        //  NewDate=NewDate.split('T')[0];
        setDate(value);

        // setDateto(value);
        setDatePicker(false);
        //alert(newdate)
    };
    function onDateSelected1(event, value) {
        // var NewDate= moment(date, 'DD-MM-YYYY').format();

        //  NewDate=NewDate.split('T')[0];

        // setDate(value);

        setDateto(value);
        setDatePicker1(false);
        //alert(newdate)
    };
    const getDate = () => {
        let newDate = moment(Date(date)).format('MM-DD-YYYY');


        console.log(newDate)

        return date !== "" ? newDate : "";
    };

    const getDateto = () => {
        let newDate = moment(Date(dateto)).format('MM-DD-YYYY');
        console.log(newDate)
        return date !== "" ? newDate : "";
    };


    const handleFilePicker = async () => {
        try {
            const response = await FilePicker.pick({
                presentationStyle: "fullScreen", allowMultiSelection: true,
                type: [types.allFiles],
                // readContent: true,
            });
            const fetchResponse = await fetch(response[0].uri);
            const blob = await fetchResponse.blob();
            console.log(blob);
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                var base64dataDob = reader.result.substr(reader.result.indexOf(',') + 1);
                setbase64dataDob(base64dataDob);
                console.log(base64dataDob)
            }
            setFileData(response)
            // console.log("response")
            setbase64dataDob(response[0].name)
            console.log((response[0].name))
        } catch (err) {
            console.log(err);
        }

        let fPath = Platform.select({
            ios: fs.dirs.DocumentDir,
            android: fs.dirs.DownloadDir,
        });
    }

    return (
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

                <View style={{ position: "relative", bottom: 25 }}>
                    <View style={styles.view1}>
                        <View style={{ marginTop: 5, marginRight: 8 }}>
                            <Text style={styles.text1}>Date from:</Text>
                            <View style={styles.viewdatefrom}>

                                <View >
                                    <TouchableOpacity
                                        onPress={showDatePicker} title='Set Date'
                                        style={styles.TouchableOpacity4}
                                    >
                                        <Text style={styles.textdatefrom}
                                            onChangeText={(date) => setDate(date)} >

                                            {moment(date).format("MM-DD-YYYY ")}</Text>

                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <Text style={{ marginLeft: 2, fontWeight: "bold" }}>Date To:</Text>
                            <View style={styles.viewdatefrom}>

                                <View>
                                    <TouchableOpacity onPress={showDatePicker1} title='Set Date' style={styles.TouchableOpacity3} >
                                        <Text style={styles.textdatefrom}
                                            onChangeText={(dateto) => setDateto(dateto)}>{moment(dateto).format("MM-DD-YYYY ")}</Text>
                                        {/* <Text>{date.toDateString()}</Text> */}
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    </View>
                    <View style={{ marginTop: 10, }}>
                        <Text style={styles.textreason}>Reason for Leave:</Text>
                        <View style={styles.view7}>
                            <TextInput style={styles.inputreason} placeholder="Enter Your Purpose" />
                        </View>
                    </View>
                    <View style={styles.view4}>
                        <View style={styles.view8}>
                            <Text style={styles.textreason}>Leave Address:</Text>
                            <View style={{ marginBottom: 10 }}>
                                <TextInput style={styles.inputaddress}
                                />
                            </View>
                            <Text style={{ marginLeft: 2, fontWeight: "bold" }}>Contact No:</Text>
                            <TextInput style={styles.inputaddress}

                            />
                        </View>

                    </View>

                    <View style={{ marginTop: 2 }}>
                        <Text style={{ marginLeft: 25, fontWeight: "bold" }}>Alternative Suggetion:</Text>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <TextInput style={styles.inputreason} placeholder="Enter Your Alternative Suggetion" onChangeText={(suggetion) => setSuggetion(suggetion)} />
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <View >
                            <Text style={styles.textattachment}>Attachment(if any):</Text>

                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            {fileData.length > 0 ? fileData.map((ls, index) => {
                                return (
                                    <View style={{ position: "relative", top: 10, left: 40 }} key={index}>

                                        <Text style={{ position: "relative", top: 15 }}>{ls.name}</Text>
                                    </View>
                                )
                            }) : null}

                            <TouchableOpacity onPress={() => handleFilePicker()} style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                                <View style={{ marginTop: -20 }}>
                                    <Text style={styles.inputreason} value={choose} onChangeText={(text) => setChoose(text)}>Choose file: </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.view5}>
                        <View style={styles.view6}>
                            <TouchableOpacity style={styles.TouchableOpacity1}>
                                <Text style={{ color: "white", textAlign: "center" }}>Reset</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view9}>
                            <TouchableOpacity style={styles.TouchableOpacity2}
                            >


                                <Text style={{ color: "white", textAlign: "center" }} onPress={() => handleSubmitButton()}>Save Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {datePicker1 && (
                    <DateTimePicker
                        value={dateto}
                        mode={'date'}
                        //display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        onChange={onDateSelected1}
                        style={styles.datePicker}
                    />
                )}

            </View>
        </ScrollView>

    )
}

const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
    input1: {
        width: 150,
        height: 45,
        borderWidth: 2,
        borderColor: "lightgrey",
        marginLeft: 1,
        padding: 10,

    },
    input2: {
        width: 150,
        height: 45,
        borderWidth: 2,
        borderColor: "lightgrey",
        marginLeft: 5,
        padding: 10,

    },
    // input3: {
    //     width: 315,
    //     height: 45,
    //     borderWidth: 2,
    //     borderColor: "lightgrey",
    //     marginTop: 3,
    //     marginLeft: 5,
    //     padding: 10,

    // },
    inputreason: {
        width: 315,
        height: 45,
        borderWidth: 2,
        borderColor: "lightgrey",
        marginTop: 3,
        marginLeft: 5,
        padding: 10,

    },

    inputaddress: {
        width: 315,
        height: 45,
        borderWidth: 2,
        marginLeft: 2,
        padding: 10,
        borderColor: "lightgrey"
    },

    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
    },

    // input6: {
    //     width: 315,
    //     height: 45,
    //     borderWidth: 2,
    //     marginLeft: 2,
    //     padding: 10,
    //     borderColor: "lightgrey"
    // },
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },

    dropdown: {
        margin: 16,
        height: 50,

        marginLeft: 25,
        width: 315,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    placeholderStyle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    selectedTextStyle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

    view1: {
        display: "flex",
        flexDirection: "row",
        marginTop: 40,
        justifyContent: "center"
    },

    viewdatefrom: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    // view3: {
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center"
    // },

    view4: {
        marginLeft: 5, display: "flex",
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    view5: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    view6: {
        marginLeft: 30,
        justifyContent: "center",
        alignItems: "center"
    },

    view7: {
        justifyContent: "center",
        alignItems: "center"
    },

    view8: {
        display: "flex",
        flexDirection: "column"
    },

    view9: {
        marginLeft: 5,
        justifyContent: "center",
        alignItems: "center"
    },

    TouchableOpacity1: {
        backgroundColor: "chocolate",
        margin: 6,
        width: 150,
        padding: 10,
        borderRadius: 8
    },

    TouchableOpacity2: {
        backgroundColor: "royalblue",
        margin: 6,
        width: 150,
        padding: 10,
        borderRadius: 8,
        marginRight: 30
    },

    TouchableOpacity3: {
        marginTop: 3,
        justifyContent: "center",
        alignItems: "center"
    },

    TouchableOpacity4: {
        marginTop: 3,
        justifyContent: "center",
        alignItems: "center"
    },

    text1: {
        fontWeight: "bold",
        marginLeft: 1
    },

    textdatefrom: {
        borderWidth: 2,
        borderColor: "lightgrey",
        width: 150,
        textAlign: "center",
        textAlignVertical: "center",
        height: 45,
    },

    // text3: {
    //     borderWidth: 2,
    //     borderColor: "lightgrey",
    //     width: 150,
    //     textAlign: "center",
    //     textAlignVertical: "center",
    //     height: 45,
    // },

    textreason: {
        marginLeft: 25,
        fontWeight: "bold"
    },

    // textaddress: {
    //     marginLeft: 2,
    //     fontWeight: "bold"
    // },

    textattachment: {
        marginLeft: 25,
        fontWeight: "bold",
        marginBottom: 2
    },

})


export default Leaving;


