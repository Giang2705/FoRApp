import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableNativeFeedback, Keyboard, Modal, Alert,} from "react-native";
import axios from 'axios';

export default function AddRestaurant({navigation, route, modalVisible, setModalVisible }) {
    
    const [inputData, setInputData] = useState({
        name: "", 
        description: "",
        shopOwnerEmail: "", 
        shopOwnerName: "", 
        shopOwnerPassword: "", 
        shopOwnerPhoneNumber: ""
    });

    const adding = async () => {
        // Perform login logic
        const url = "http://localhost:3000/api/restaurants/create"

        await axios.post(url, inputData).then((response) => {
            const result = response.data;
            if (response.status == 200){
                alert("Create restaurant successfully!");
                setModalVisible(false)
                navigation.navigate('RestaurantList', {...route.params});
            } else if (response.status == 400){
                alert(response.data);
            }
        })
        .catch((err) =>{
        alert(err);
        })
    };

    const canceling = () => {
        setModalVisible(false);    
    };

    useEffect(() => {
        if (!modalVisible) {
          setModalVisible(false);
        }
      }, [modalVisible, setModalVisible]);

    return (
        <TouchableNativeFeedback onPress={Keyboard.dismiss}>
            <View>
                <Modal animationType='slide'
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Are you sure?");
                            setModalVisible(!modalVisible)
                        }}>
                    <View style={styles.container}>
                        <View style={styles.boxForm}>
                            <View style={styles.frameInput}>
                                <Text style={styles.textView}>Restaurant Name</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Name"
                                    onChangeText={text => setInputData({...inputData, name: text})}
                                    />
                            </View>
                            <View style={styles.frameInput}>
                                <Text style={styles.textView}>Description</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Description"
                                    onChangeText={text => setInputData({...inputData, description: text})}
                                    />
                            </View>
                            <View style={styles.frameInput}>
                                <Text style={styles.textView}>Restaurant owner name</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Restaurant owner name"
                                    onChangeText={text => setInputData({...inputData, shopOwnerName: text})}
                                    />
                            </View>
                            <View style={styles.frameInput}>
                                <Text style={styles.textView}>Email</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="restaurant@rmit.edu.vn"
                                    onChangeText={text => setInputData({...inputData, shopOwnerEmail: text})}
                                    />
                            </View>
                            <View style={styles.frameInput}>
                                <Text style={styles.textView}>Phone Number</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Phone Number"
                                    onChangeText={text => setInputData({...inputData, shopOwnerPhoneNumber: text})}
                                    />
                            </View>
                            <View style={styles.frameInput}>
                                <Text style={styles.textView}>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    onChangeText={text => setInputData({...inputData, shopOwnerPassword: text})}
                                    />
                            </View>
                        </View>
                        <View style={styles.containerBtns}>
                                <TouchableOpacity style={styles.cancelBtn} onPress={canceling}>
                                    <Text style={styles.cancalText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.addBtn} onPress={adding}>
                                    <Text style={styles.addText}>Add</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
       </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        padding: 24,
    },
    boxForm:{
        alignItems: "center",
        margin: 10,
        padding: 40,
        width: 'auto',
        height: 'auto',
        backgroundColor:"#FFFFFF",
        borderRadius: 20,
    },
    frameInput: {
        flexDirection: 'row',
        padding: 20,
    },
    input: {
        flex: 1, 
        borderColor: 'gray',
        fontSize:20,
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 20,
    },
    textView: {
        width: 180,
        padding: 10,
        fontSize: 20,
    },
    containerBtns: {
        flexDirection: 'row',
        padding:20,
    },
    cancelBtn: {
        padding: 10,
        paddingHorizontal: 10,
    },
    cancalText: {
        backgroundColor: "#C51605",
        color: "#ffffff",
        fontSize: 24,
        padding: 8,
        borderRadius: 10,
    },
    addBtn: {
        padding: 10,
        paddingHorizontal: 10,
    },
    addText: {
        backgroundColor: "gray",
        color: "#ffffff",
        fontSize: 24,
        padding: 8,
        paddingHorizontal:25,
        borderRadius: 10,
    },

})