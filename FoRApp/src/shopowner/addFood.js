import React, {useEffect, useState} from 'react';
import { useTheme, Stack } from '@react-native-material/core';
import { Avatar, View, Modal, Button, Text, Alert, TextInput, TouchableOpacity,
    KeyboardAvoidingView, Platform, TouchableNativeFeedback, Keyboard} from 'react-native';
import styles from './style';
import Icon from "react-native-vector-icons/Ionicons"
import FIcon from "react-native-vector-icons/Feather"
import axios from 'axios';

export default function AddFood({ navigation, modalVisible, setModalVisible, route}) {
    const {colors} = useTheme()
    const {restaurant} = route.params;
    const [inputData, setInputData] = useState({
        name: "",
        price: "",
        description: "",
        restaurant: restaurant,
      });

    const handleAddFood = async () => {
        // Perform login logic
        const url = "http://localhost:3000/api/foods/create"

        await axios.post(url, inputData).then((response) => {
            const result = response.data;
            console.log(result)
            if (response.status == 200){
                alert("Create food successfully!");
                setModalVisible(false);
                navigation.navigate("HomepageShopOwner", {...route.params})
            } else if (response.status == 400){
                alert(response.data);
            }
        })
        .catch((err) =>{
            alert(err);
        })
    }

    useEffect(() => {
        if (!modalVisible) {
          setModalVisible(false);
        }
      }, [modalVisible, setModalVisible]);
    return (
        <TouchableNativeFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <View>
                <Modal animationType='slide'
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Are you sure?");
                            setModalVisible(!modalVisible)
                        }}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.centeredView}> 
                        <View style={styles.modalView} >
                            <Stack spacing={8}>
                                <Text style={styles.modalHeader}>Add Food</Text>
                                <TouchableOpacity backgroundColor="white">
                                <FIcon
                                name="upload"
                                size={29}
                                style={styles.uploadPhoto}
                                />
                                </TouchableOpacity>
                                <Text style={styles.modalText}>Food's Name</Text>
                                <TextInput
                                style={styles.textInput}
                                placeholderTextColor='#61481C' onChangeText={text => setInputData({...inputData, name: text})}></TextInput>
                                <Text style={styles.modalText}>Price</Text>
                                <TextInput
                                style={styles.textInput}
                                placeholderTextColor='#61481C' onChangeText={text => setInputData({...inputData, price: text})}></TextInput>
                                <Text style={styles.modalText}>Description</Text>
                                <TextInput
                                style={styles.descriptionInput}
                                placeholderTextColor='#61481C'
                                onChangeText={text => setInputData({...inputData, description: text})}
                                inputMode='text'
                                multiline={true} 
                                />
                                
                            </Stack>
                            <Stack direction='row' spacing={15} style={styles.buttonForm}>
                                <Button title="Add"  style={{marginRight:10}}
                                    onPress={() => handleAddFood()}/>
                                <Button title="Cancel" color="#C51605" style={{marginLeft:10}}
                                    onPress={() => setModalVisible(!modalVisible)}/>
                            </Stack>
                        </View>
                    </KeyboardAvoidingView>
                </Modal>
        </View>
       </TouchableNativeFeedback>
    );
}