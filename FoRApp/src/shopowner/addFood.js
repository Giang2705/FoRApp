import React, {useEffect} from 'react';
import { useTheme, Stack } from '@react-native-material/core';
import { Avatar, View, Modal, Button, Text, Alert, TextInput, TouchableOpacity,
    KeyboardAvoidingView, Platform} from 'react-native';
import styles from './style';
import Icon from "react-native-vector-icons/Ionicons"
import FIcon from "react-native-vector-icons/Feather"

export default function AddFood({ modalVisible, setModalVisible }) {
    const {colors} = useTheme()

    useEffect(() => {
        if (!modalVisible) {
          setModalVisible(false);
        }
      }, [modalVisible, setModalVisible]);
    return (
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
                            placeholderTextColor='#61481C'></TextInput>
                            <Text style={styles.modalText}>Price</Text>
                            <TextInput
                            style={styles.textInput}
                            placeholderTextColor='#61481C'></TextInput>
                            <Text style={styles.modalText}>Description</Text>
                            <TextInput
                            style={styles.descriptionInput}
                            placeholderTextColor='#61481C'
                            inputMode='text'
                            multiline={true} 
                            />
                            
                        </Stack>
                        <Stack direction='row' spacing={15} style={styles.buttonForm}>
                            <Button title="Add"  style={{marginRight:10}}
                                onPress={() => setModalVisible(!modalVisible)}/>
                            <Button title="Cancel" color="#C51605" style={{marginLeft:10}}
                                onPress={() => setModalVisible(!modalVisible)}/>
                        </Stack>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
       </View>
    );
}
